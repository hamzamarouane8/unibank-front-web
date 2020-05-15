import React, { PureComponent } from 'react';
import get from 'lodash.get';
import isFunction from 'lodash.isfunction';
import Loader from '@sgabskit/loader';
import Dialog from '@sgabskit/dialog';
import { Fab } from '@sgabskit/button';
import { alertDialog } from '@sgabskit/alerts';
import { Heading } from '@sgabskit/text';
import { IcPlus } from '@sgabskit/icons';

export default class CrudDatasource extends PureComponent {

  state = {
    editDialog: false,
    editRecord: null,
  };

  save = (values) => {
    return this.props.ds.save(values).finally(this.closeEditDialog());
  };

  remove = (id) => {
    // Optimistic delete
    const message = get(this.props.message, 'remove_confirm') || 'Cette opération est irréversible. Souhaitez-vous continuer?';
    alertDialog.confirm('Suppression', message, { danger: true }).then(() => {
      this.props.ds.remove(id);
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

    const { editRecord, editDialog } = this.state;
    const { ds, header, content, form, title, description, messages, dialogWidth } = this.props;

    return (
      <>
        {header || <Heading xlarge text={title} caption={description}/>}

        <Loader loading={ds.loading}>
          {(!ds.loading || ds.once) && content({
            data: ds.data,
            removeItem: this.remove,
            openEditDialog: this.openEditDialog,
          })}
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

        <Fab onClick={() => this.openEditDialog()}>
          <IcPlus/>
        </Fab>
      </>
    );
  }
}
