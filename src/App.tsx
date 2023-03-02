import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/header';
import { Button } from './components/Button';


function App() {
  const Foo1 = (subscriber: string, age: number) => {
    console.log(subscriber, age);
  }
  const Foo2 = (subscriber: string) => {
    console.log(subscriber);
  }
  const Foo3 = () => {
    console.log("I'm stupid button");
  }
  return (
    <div className="App">
      <button> Youtube Channel 1</button>
      <button> Youtube Channel 2</button>
      <Button name={"Youtube Channel 1"} callback={() => Foo1("I'm Vasya", 21)} />
      <Button name={"Youtube Channel 2"} callback={() => Foo2("I'm Ivan")} />
      <Button name={"Youtube Channel 1"} callback={Foo3} />
    </div>
  )
}

export default App;


  // const subscriber = (n:string) =>{
  //   (n=="Ivan") ? console.log("Ivan") : console.log("Vasya")
  // }
  // const subscriber2 = () =>{
  //   console.log ("Ivan")
  // }

  // <button onClick={subscriber("Ivan")}>button text</button>
  // <button onClick={subscriber("Vasya")}>button text</button>