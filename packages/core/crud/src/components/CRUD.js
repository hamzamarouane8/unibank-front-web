import React, { PureComponent } from 'react';
import get from 'lodash.get';
import isFunction from 'lodash.isfunction';
import Loader from '@sgabskit/loader';
import Dialog from '@sgabskit/dialog';
import {Fab} from '@sgabskit/button';
import {alertDialog} from '@sgabskit/alerts';
import { Heading } from '@sgabskit/text';
import { IcPlus } from '@sgabskit/icons';

export default class CRUD extends PureComponent {

  state = {
    once: false,
    loading: false,
    data: null,
    editDialog: false,
    editRecord: null,
  };

  componentDidMount() {
    this.load();
    const { channel } = this.props;
    if (channel) {
      this._subscription = channel.subscribe('openEditDialog', () => {
        this.setState({ editDialog: true, editRecord: null });
      });
    }
  }

  componentWillUnmount() {
    const { onDestroy } = this.props;
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    if (onDestroy) onDestroy();
  }

  load = () => {
    this.setState({ loading: true });
    return this.props.controller.fetch().then((data) => {
      this.setState({ data, once: true });
    }).finally(() => {
      this.setState({ loading: false });
    });
  };

  save = (values) => {
    return this.props.controller.save(values).then(this.load)
      .finally(this.closeEditDialog());
  };

  remove = (id) => {
    // Optimistic delete
    const message = get(this.props.message, 'remove_confirm') || 'Cette opération est irréversible. Souhaitez-vous continuer?';
    alertDialog.confirm('Suppression', message, { danger: true }).then(() => {
      this.setState({ data: this.state.data.filter((el) => el.id !== id) });
      this.props.controller.remove(id).finally(this.load);
    });
  };

  openEditDialog = (model) => {

    // Transform model to form model
    this.setState({
      editDialog: true,
      editRecord: model,
    });

  };

  closeEditDialog = () => this.setState({ editDialog: false, editRecord: null });

  render() {

    const { loading, data, once, editRecord, editDialog } = this.state;
    const { header, content, form, title, description, messages, dialogWidth } = this.props;

    return (
      <>
        {header || <Heading xlarge text={title} caption={description} />}

        <Loader loading={loading && !once}>
          {(!loading || once) && content({ data, removeItem: this.remove, openEditDialog: this.openEditDialog })}
        </Loader>

        <Dialog
          title={editRecord ? get(messages, 'dialog_edit_title') || 'Modification' : get(messages, 'dialog_create_title') || 'Nouvel enregistrement'}
          isOpen={editDialog} onClose={this.closeEditDialog}
          width={dialogWidth || 380}>

          {(editDialog && isFunction(form)) && form({
            closeModal: this.closeEditDialog,
            values: editRecord,
            onSubmit: this.save,
          })}

        </Dialog>

        <Fab onClick={ () => this.openEditDialog()}>
          <IcPlus/>
        </Fab>
      </>
    );
  }
}
