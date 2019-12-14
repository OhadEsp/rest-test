import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from './Table.jsx';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();
  let displayed = data !== undefined ? <Table data={data} /> : <div></div>;

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="center" p={1}>
        <Typography variant="h4">
          Welcome to my Rest-API-Test App
        </Typography>
      </Box>
      
      <Box display="flex" alignItems="center" justifyContent="center" p={1}>
        <TextField id="filled-basic" variant="filled" onChange={e => setUrl(e.target.value)} fullWidth></TextField>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" p={1}>
        <Button variant="contained" color="primary" onClick={async () => {
          const data = await getData(url);
          setData(data);
          console.log(JSON.stringify(data));
        }}>Get Data</Button>
      </Box>
      
      <Box display="flex" alignItems="center" justifyContent="center" p={1}>
        {displayed}
      </Box>
    </Box>
  );
}

async function getData(url) {
  const response = await fetch(url);
  return response.json();
}

export default App;
