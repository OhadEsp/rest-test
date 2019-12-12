import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from './Table.jsx';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();
  let displayed = data !== undefined ? <Table data={data} /> : <div></div>;

  return (
    <div className="App">
      <TextField fullWidth onChange={e => setUrl(e.target.value)}></TextField>
      <Button variant="contained" color="primary" onClick={async () => {
        const data = await getData(url);
        setData(data);
        console.log(JSON.stringify(data));
      }}>Get Data</Button>
      <div>{displayed}</div>
    </div>
  );
}

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export default App;
