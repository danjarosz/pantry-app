import React from "react";
import { Container } from "@material-ui/core";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Container maxWidth="md">
      <AppRouter />
    </Container>
  );
}

export default App;
