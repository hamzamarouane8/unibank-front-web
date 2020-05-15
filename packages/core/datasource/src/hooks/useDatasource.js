import React, { useState, useEffect } from 'react';


let timeout = null;

export default function useDatasource({ fetch, remove, save }) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [once, setOnce] = useState(false);
  const [filter, setFilter] = useState(null);

  const load = (args) => {
    setLoading(true);
    return fetch(args).then((data) => {
      setData(data);
      setLoading(false);
      setError(null);
      if (!once) {
        setOnce(true);
      }
    }).catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  };

  const _save = (values) => {
    if (save) {
      return save(values).then(load);
    }
    throw new Error('Readonly datasource');
  };

  const _remove = (values) => {
    if (remove) {
      return remove(values).then(load);
    }
    throw new Error('Readonly datasource');
  };

  useEffect(() => {
    if (!once) {
      load();
    } else {
      load({ filter });
    }
  }, [filter]);

  return {
    load, data, loading, error, once,
    filter, setFilter,
    remove: _remove, save: _save,
  };
}
