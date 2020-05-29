import React from "react";

import PlayersList from "./components/PlayersList";
import Container from "./components/Container";
import Loading from "./components/Loading";

const App = () => (
  <Container>
    <React.Suspense fallback={<Loading />}>
      <h1>First NBA games</h1>
      <PlayersList />
    </React.Suspense>
  </Container>
);

export default App;
