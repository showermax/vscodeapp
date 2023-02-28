import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/header';
import { Body } from './site/body';
import { Footer } from './site/footer';

function App() {
  return (
    <>
      <Header title={'The title of my header'}/>
      <Body />
      <Footer />
    </>
  );
}

export default App;
