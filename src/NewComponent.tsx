import React from 'react';

type NewComponentType = {
    students: Array<string>
    cars:Array<spType>
}
 type spType = {
    manufacturer: string
    model: string
 }
export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <table>
                {props.cars.map((el,i)=> <tr key={i}><td>{el.manufacturer}</td><td>{el.model}</td></tr>)}
            </table>
            <ul>
                {props.students.map((el,i)=> <li key = {i}>{el}</li>)}
            </ul>
        </div>
    )
}