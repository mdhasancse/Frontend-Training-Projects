import './App.css';
import Card from './Card';
import contacts from './contacts';

function App() {
  return (
    <div className="App">
      <h1 className="heading"> My Contacts</h1>
        <Card 
        id={contacts[0].id}
        name={contacts[0].name}
        img = {contacts[0].imgUrl}
        tel = {contacts[0].phone}
        email={contacts[0].email}
        />
        <Card 
        id={contacts[1].id}
        name={contacts[1].name}
        img = {contacts[0].imgUrl}
        tel = {contacts[1].phone}
        email={contacts[1].email}
        />
    </div>
  );
}

export default App;
