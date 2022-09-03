import React from 'react';
import AppRouter from './AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <React.StrictMode>
        <Header />
            <AppRouter />
        <Footer />
    </React.StrictMode>

  );
}

export default App;
