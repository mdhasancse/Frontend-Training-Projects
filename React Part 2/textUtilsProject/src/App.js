
import './App.css';
import { TextForm } from './Components/TextForm';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')//dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAler = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAler("Dark mode has been enabled", "success")
    } else {
      setMode('light')  // for navbar
      document.body.style.backgroundColor = 'white';// for full body
      showAler("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title=" TextUtils " mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAler={showAler} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
