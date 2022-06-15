import Header from './features/header/Header';
import Main from './features/main/Main'
import Footer from './features/footer/Footer';
import Container from '@mui/material/Container';

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default App;