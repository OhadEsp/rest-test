import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState('');

  return (
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //  */}
      <TextField fullWidth onChange={e => setUrl(e.target.value)}></TextField>
      <Button variant="contained" color="primary" onClick={async () => {
        const data = await getData(url);
        setData(data);
        // console.log(JSON.stringify(data));
      }}>Get Data</Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export default App;
