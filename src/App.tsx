import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './site/header';
import { Body } from './site/body';
import { Footer } from './site/footer';
import { NewComponent } from './NewComponent';
import { Tasks } from './Tasks';

function App() {
  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
  ]
  
  const data1 = {
    title: "What to do",
    tasks: [
      { taskId: 1, title: "HTML&CSS2", isDone: true },
      { taskId: 2, title: "JS2", isDone: true }
    ],
    students: [
      'Jago Wormald1',
      'Saul Milne2',
      'Aariz Hester3',
      'Dion Reeve4',
      'Anisa Ortega5',
      'Blade Cisneros6',
      'Malaikah Phelps7',
      'Zeeshan Gallagher8',
      'Isobella Vo9',
      'Rizwan Mathis10',
      'Menaal Leach11',
      'Kian Walton12',
      'Orion Lamb13',
      'Faizah Huynh14',
      'Crystal Vaughan15',
      'Vivien Hickman16',
      'Stuart Lu17',
      'Karol Davison18',
      'Dario Burns19',
      'Chloe Rich20',
      'Martyna Felix',
      'Nida Glass',
      'Maeve Miles',
      'Hasnain Puckett',
      'Ayman Cano',
      'Safwan Perry',
      'Fox Kelly',
      'Louise Barlow',
      'Malaki Mcgill',
      'Leanna Cline',
      'Willard Hodge',
      'Amelia Dorsey',
      'Kiah Porter',
      'Jeanne Daly',
      'Mohsin Armstrong',
      'Laurie Rangel',
      'Princess Tierney',
      'Kasim Kendall',
      'Darryl Cope',
      'Elysha Ray',
      'Liyana Harris',
      'Kashif Blackburn',
      'Atif Zimmerman',
      'Sila Hartley',
      'Ralphie Hebert',
    ]
  }
  const data2 = {
    title: "What to learn",
    tasks: [
      { taskId: 1, title: "HTML&CSS", isDone: true },
      { taskId: 2, title: "JS", isDone: false }
    ],
    students: [
      'Rick Kane',
      'Finnlay Bentley',
      'Samia North',
      'Isaac Morton',
      'Lily-Ann Clifford',
      'Thalia Park',
      'Sapphire Cruz',
      'Cieran Vazquez',
      'Anya Estes',
      'Dominika Field',
      'Rosanna Chung',
      'Safiyah Davey',
      'Ryley Beasley',
      'Kalvin Trejo',
      'Evie-Mae Farrell',
      'Juliet Valencia',
      'Astrid Austin',
      'Lyle Montgomery',
      'Nisha Mora',
      'Kylie Callaghan',
      'Star Wilks',
      'Marissa Colley',
      'Asa Fuller',
      'Leigh Kemp',
      'Avleen Dawson',
      'Sammy Bonilla',
      'Acacia Becker',
      'Coral Shepherd',
      'Melina Molina',
      'Kiran Bailey',
      'Clara Escobar',
      'Alexandru Horn',
      'Brandon-Lee Mercado',
      'Elouise Weston',
      'King Long',
      'Kerri Searle',
      'Kanye Hamer',
      'Elwood Benitez',
      'Mikail Whitaker',
      'Bobby Hardy',
      'Talha Ferry',
      'Priscilla Landry',
      'Olivia-Grace Cain',
      'Kiaan Wallace',
      'Wesley Padilla90',
      'Ella-Grace Wooten91',
      'Kaif Molloy92',
      'Kamal Broadhurst93',
      'Bianca Ferrell94',
      'Micheal Talbot95',
    ]
  }
const foo1=() => {
  console.log("foo1")
}
const foo2=(n: number) => {
  console.log(n)
}
const subscriber = (n:string) =>{
  console.log(n)
 }
  return (
    <div className="App">
      <Header title={'The title of my header'} />
      <button onClick={foo1}>Foo1 button</button>
      <button onClick={(even)=> foo2(100200)}>Foo2 button</button>
      <button onClick={(event)=> subscriber("Vasya")}>Foo2 button</button>
      {/* <div className='App-body'>
      <Tasks title = {data1.title} tasks = {data1.tasks} students = {data1.students}/>
      <Tasks title = {data2.title} tasks = {data2.tasks} students = {data2.students}/>
      </div> */}
      <Footer titleForFooter={'Footer title'} />
      
    </div>
  );
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