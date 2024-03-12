import './App.css';


function App() {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return <h1 style={{color:"red"}} >Good morning</h1>;
  } else if (currentHour >= 12 && currentHour < 18) {
    return <h1  style={{color:"green"}}  >Good afternoon</h1>;
  } else {
    return <h1  style={{color:"blue"}}  >Good evening</h1>;
  }


  return (
    <div className="App">
    </div>
  );
}

export default App;
