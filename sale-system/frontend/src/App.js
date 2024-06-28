import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';

function App() {
  return (
   <>
   <Header />
   <main className="breadcrumb">    
      <Container> 
        <h1>Welcome to Sale System!</h1>
      </Container>
    </main>

   <Footer />
   </>
  );
}

export default App;
