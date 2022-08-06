import React from "react";
import { Route, Switch } from "react-router-dom";
import Contacts from "./pages/Contacts";
import ContactForm from "./pages/ContactForm";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/new-contact" component={ContactForm} />
          <Route path="/contacts/:id/edit" component={ContactForm} />
        </Switch>
      </main>
    </>
  );
};

export default App;
