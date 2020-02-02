import React from "react";
import ProFile from "./proFile/ProFile";
import user from "../../src/user.json";
import Statistic from "./statistic/Statistic";
import statistical from "../../src/statistical.json";
import FriendList from "./friendList/FriendList";
import friends from "../../src/friends.json";

const App = () => {
  return (
    <>
      <ProFile user={user} />
      <Statistic stats={statistical} title={""} />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
