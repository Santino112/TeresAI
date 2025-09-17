import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Inicio from './Pages/inicio.jsx';
import Login from './Pages/login.jsx';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='Login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
