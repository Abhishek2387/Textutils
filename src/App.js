import './App.css';
import TextForm from './TextForm';
import Navbar from './components/Navbar';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return (
    <>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForm heading ="Enter the text to analyze below"/>
   {/*<About/>*/}
    </div>
    </>
  );
}

export default App;
