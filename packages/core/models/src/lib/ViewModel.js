import pick from 'lodash.pick';
import map from 'lodash.map';

export default class {

  constructor(schema) {
    this.schema = schema;
  }

  form = (fields) => {
    let form = this.schema;
    if (fields) {
      form = pick(this.schema, fields);
    }
    return form;
  };

  columns = (fields) => {

    let selection = this.schema;
    if (fields) {
      selection = pick(this.schema, fields);
    }
    return map(selection, ({ colSize, label, type }, name) => (
      { name, header: label, type, width: colSize }
    ));
  };

}
