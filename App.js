import React from "react";

import PlayersList from "./components/PlayersList";
import Container from "./components/Container";

const App = () => (
  <Container>
    <h1>First NBA games</h1>
    <PlayersList />
  </Container>
);

export default App;
