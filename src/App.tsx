import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/header';
import { Button } from './components/Button';
import { FilterComponent } from './components/FilterComponent';

type FilterType="all"| "RUBLS" | "Dollars"

function App() {

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])
  let currentMoney = money

  const [v, setV] = useState<FilterType>('all')

  const onClickFilterHandler=(buttonName: FilterType)=>{
    setV(buttonName);
  }

currentMoney= (v=="all") ? money : money.filter(el=>el.banknots == v)

  return (
    <div className="App">
      <Header title={"Filter method"} />
      <FilterComponent defaultarr={money}/>
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

  // const Foo1 = (subscriber: string, age: number) => {
  //   console.log(subscriber, age);
  // }
  // const Foo2 = (subscriber: string) => {
  //   console.log(subscriber);
  // }
  // const Foo3 = () => {
  //   console.log("I'm stupid button");
  // }
  // return (
  //   <div className="App">
  //     <button> Youtube Channel 1</button>
  //     <button> Youtube Channel 2</button>
  //     <Button name={"Youtube Channel 1"} callback={() => Foo1("I'm Vasya", 21)} />
  //     <Button name={"Youtube Channel 2"} callback={() => Foo2("I'm Ivan")} />
  //     <Button name={"Youtube Channel 1"} callback={Foo3} />
  //   </div>
  // )