import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Container from '@mui/material/Container';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

import 'normalize.css';
import './index.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F5C518",
    },
    secondary: {
      main: "#000",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" className='main-container'>
        <Header />
        <main style={{ backgroundColor: 'whitesmoke' }}>
          <Routes>
            <Route index element={<Movies />} />
            <Route path=":imdbId" element={<Movie />} />
            <Route
              path="*"
              element={
                <p>There's nothing here!</p>
              }
            />
          </Routes>
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;