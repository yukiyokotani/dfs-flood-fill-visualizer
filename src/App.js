import React, { useState } from 'react';
import Table from './component/Table';
import Status from './component/Status';

const App = () => {
  const [status, setStatus] = useState("BEFORE");
  const [home, setShop] = useState({ x: 1, y: 1 });
  const [shop, setHome] = useState({ x: 8, y: 7 });

  return (
    < div className="App" >
      <p className="title">DFS Flood-Fill</p>
      <Status status={status} />
      <Table setStatus={setStatus} shop={shop} home={home} />
    </div >
  )
}

export default App;