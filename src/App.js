import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import database from "./firebase/firebase";
import AppRouter from "./router/AppRouter";

function App() {

  useEffect(() => {
    database.ref("/pantries").once("value").then((snapshot) => {
      console.log(snapshot.val())
    })
  }, []);

  return (
    <Container maxWidth="md">
      <AppRouter />
    </Container>
  );
}

export default App;
