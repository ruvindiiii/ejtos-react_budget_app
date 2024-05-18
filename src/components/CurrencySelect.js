import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currencies = [
    {
        symbol: '$',
        name: 'Dollar'
    },
    {
        symbol: '£',
        name: 'Pound'
    },
    {
        symbol: '€',
        name: 'Euro'
    },
    {
        symbol: '₹',
        name: 'Ruppee'
    }
]

const CurrencySelect = () => {

    const { currency, dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    return <div>
        <select onChange={handleChange} value={currency} className='currency-select'>
            {currencies.map((elem) => {
                return <option value={elem.symbol}>{elem.symbol} {elem.name}</option>
            })}
        </select>
    </div>
}

export default CurrencySelect;