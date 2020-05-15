import React from 'react';
import { Select } from 'semantic-ui-react';
import isFunction from 'lodash.isfunction';
import isArray from 'lodash.isarray';
import isString from 'lodash.isstring';
import get from 'lodash.get';
import template from 'lodash.template';
import styled from 'styled-components';

// import 'semantic-ui-css/components/dropdown.css';

export default ({
                  name, placeholder, loading, options,
                  value, onChange, onBlur, fluid, metas, required,
                }) => {


  const [_options, _setOptions] = React.useState([]);
  const [_loading, _setLoading] = React.useState(false);

  React.useEffect(() => {
    if (isFunction(options)) {
      _setLoading(true);
      options().then((data) => {
        let d = data;
        if (d && metas && (metas.labelField || metas.valueField)) {
          d = data.map((record) => {
            let text = '';
            if (metas.labelField && metas.labelField.indexOf('${') > -1) {
              let tpl = template(metas.labelField);
              text = tpl({ ...record });
            } else if (isFunction(metas.labelField)) {
              text = metas.labelField(record);
            } else {
              text = get(record, metas.labelField || 'text');
            }
            return {
              value: get(record, metas.valueField || 'id'),
              text,
            };
          });
        }
        _setOptions(d);
      }).finally(() => {
        _setLoading(false);
      });
    } else if (isArray(options)){
      _setOptions(options.map((item) => {

        if (isString(item)) return { value:item, text:item }

        return {
          value: item.value || item.id || item.key,
          text: item.label || item.text,
        };

      }));
    }else {
      return []
    }
  }, []);

  return (
    <SelectStyled placeholder={placeholder}
                  options={_options}
                  loading={loading || _loading}
                  name={name}
                  clearable={required !== true}
                  fluid={fluid !== false}
                  onChange={(evt, data) => {
                    onChange({ ...evt, target: { name, value: data.value } });
                  }}
                  value={value || ''}
    />
  );
}

const SelectStyled = styled(Select)`
  .default.text {
    padding-top: 3px;
  }
  .dropdown.icon {
    margin-top: 3px; 
  }  
`;
