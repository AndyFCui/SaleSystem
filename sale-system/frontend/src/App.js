import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return (
   <Router>
   <Header />
   <main className="breadcrumb">    
      <Container> 
      <h1 style={{ textAlign: 'center', fontSize: '48px' }}>Welcome to Sale System!</h1>
      </Container>
    </main>

   <Footer />
   </Router>
  );
}

export default App;
