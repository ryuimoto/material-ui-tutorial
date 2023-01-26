import './App.css';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant='h1' mt={2}>こんにちは</Typography>
    </div>
  );
}

export default App;
