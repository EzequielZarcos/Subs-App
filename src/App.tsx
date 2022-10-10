import React, { useState } from "react";
import "./App.css";
import ListSubs from "./components/Subs";
import Form from "./components/Form";

interface AppState {
  subs: Sub[];
}

const initialState = [
  {
    nick: "sergio_serrano",
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
    subMonths: 1,
    description: "asdasdasd",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>(initialState);

  const handleNewSub = (newSub: Sub): void => {
    setSubs([...subs, newSub]);
  };

  return (
    <div>
      <ListSubs subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
