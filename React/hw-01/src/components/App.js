import React from 'react';
import ProFile from './proFile/ProFile';
import user from '../../src/user.json';
import Statistic from './statistic/Statistic'
import statistical from '../../src/statistical.json';
import colors from '../../src/colors.json';

const App = () => {
  return (
    <>
    <ProFile user={user}/>
    <Statistic stats={statistical} title={"Roman"} colors={colors} />
    </>
  );
}

export default App;


