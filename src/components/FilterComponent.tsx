import React, { useState } from 'react';
type FCType = {
    defaultarr: Array<moneyType>
}

type moneyType = {
    banknots: string
    value: number
    number: string

}

type FilterType="all"| "RUBLS" | "Dollars"

export const FilterComponent = (props: FCType) => {
    let currentMoney = props.defaultarr

    const [v, setV] = useState<FilterType>('all')
  
    const onClickFilterHandler=(buttonName: FilterType)=>{
      setV(buttonName);
    }
  
  currentMoney = (v==="all") ? props.defaultarr :props.defaultarr.filter(el=>el.banknots === v)
    return (
        <>
            <ul>
                {props.defaultarr.map((el, i) => <li key={i}>{el.banknots + " "}{el.value}{el.number}</li>)}
            </ul>
            <button onClick={() => onClickFilterHandler("all")}>all</button>
            <button onClick={() => onClickFilterHandler("RUBLS")}>RUBLS</button>
            <button onClick={() => onClickFilterHandler("Dollars")}>Dollars</button>

            <ul>
                {currentMoney.map((el, i) => <li key={i}>{el.banknots + " "}{el.value}{el.number}</li>)}
            </ul> 
        </>
    )
}