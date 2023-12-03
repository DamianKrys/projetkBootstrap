import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Components/Weather';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;