import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function creatCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      email={contacts.email}
      scr={contacts.imgURL}
      phn={contacts.phone}
    />
  );
}
function App() {
  return (
    <div>
      {contacts.map(creatCard)};
      {/* <Card
        name={contacts[0].name}
        scr={contacts[0].imgURL}
        phn={contacts[0].phone}
        email={contacts[0].email}
      /> */}
      {/* <Card
        name={contacts[1].name}
        scr={contacts[1].imgURL}
        phn={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        scr={contacts[2].imgURL}
        phn={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
