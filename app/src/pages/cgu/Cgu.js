import React, {useEffect, useState} from 'react';
import ModalCgu from '../../features/cgu/ModalCgu'
import ErrorState from '../../features/error/ErrorState';
import {TENANT} from '../../components/commons/Constants'

//-----------------------------------------------------------


export default ({router, session, cguServices}) => {
  const [error, setError] = useState(false);
  const [content, setContent] = useState('')
  const [version, setVersion] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (session.user.data.terms_approved) {
      router.redirect('/dashboard');
    } else {
      //router.redirect('/dashboard');

      cguServices.loadCguDetails(TENANT).then((data) => {
        const version = data.version;
        const _html = Buffer.from(data.content, 'base64').toString('utf8');
        setLoading(true);
        setContent(_html);
        setVersion(version);
      })
    }

  }, []);
  return (
    <ErrorState status={error}>
      <>
        {loading &&
        <ModalCgu
          //user={session.user.username}
          content={content}
          version={version}
          cguServices={cguServices}
          show={true}
          close={false}/>
        }
      </>
    </ErrorState>
  )
}
