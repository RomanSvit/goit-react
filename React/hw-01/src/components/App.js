import React from 'react';
import ProFile from './proFile/ProFile';
import user from '../../src/user.json';

const App = () => {
  return (
    <>
    <ProFile user={user}/>

    </>
  );
}

export default App;


