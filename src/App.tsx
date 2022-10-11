import React, { useState } from "react";
import "./App.css";
import ListSubs from "./components/Subs";
import Form from "./components/Form";

interface AppState {
  subs: Sub[];
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub]);
  };

  return (
    <div>
      <Form onNewSub={handleNewSub} />
      <ListSubs subs={subs} />
    </div>
  );
}

export default App;
