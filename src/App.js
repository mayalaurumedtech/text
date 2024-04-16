// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode= () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="Text Converter" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter The text to analyze" mode={mode} />
    </>
  );
}

export default App;
