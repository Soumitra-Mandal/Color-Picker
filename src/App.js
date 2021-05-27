import './App.css';
import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function App() {

  const [red,setRed] = useState(0);
  const [green,setGreen] = useState(0);
  const [blue,setBlue] = useState(0);

const handleRed = (e)=>{
  setRed(e.target.value);
  }
  
  
const handleGreen = (e)=>{
  setGreen(e.target.value);


  }

const handleBlue = (e)=>{
  setBlue(e.target.value);


  }
  
  return (
    <div className="App">
    <h1>Color Palette</h1>
    <div id = 'palette'>
<label htmlFor = 'red'>Red</label>
<input type = 'number' name='red' id = 'red' min="0" max="255" value = {red} onChange = {handleRed}/>
<label htmlFor = 'red'>Green</label>
<input type = 'number' name = "green" id = 'green' min="0" max="255" value = {green} onChange = {handleGreen}/>
<label htmlFor = 'red'>Blue</label>
<input type = 'number' name = 'blue' id = 'blue' min="0" max="255" value = {blue} onChange = {handleBlue}/>
    </div>
    <div id = 'box' style={{backgroundColor : `rgb(${red}, ${green}, ${blue})`}}>    </div>
    <CopyToClipboard text={`backgroundColor : rgb(${red},${blue},${green});`}
          onCopy={() => alert('Copied to clipboard!')}>
          <div id='copy'><img src='https://lh3.googleusercontent.com/proxy/QO9lvVwfjZsBD55aOUJ2jryp6cDCFgdjHZSqS1DUkKHffbfG9QdOYUkPK-mYIc_8ZOV-uuZEwHNZmNrePiXyf_VHnhNtMJZpc3pNwSZ-f3oSCINXnSvhtg1UzM49T4LVHSavnKtefOGtgV2-CWS2iGctBviV_c32_RtmBqHCv-WrBuBtcWBECvPdRGaT' alt='copy'/></div>
        </CopyToClipboard>

        <div id="codearea">
        <p><span style={{color:"#ffc30b"}}>#id_name</span> {`{\n`}
        <i>backgroundColor </i> : <span style={{color:'#22aa44'}}>rgb</span>({red},{green},{blue});
        {`\n}`} </p>
        </div>
    </div>
  );
}

export default App;
