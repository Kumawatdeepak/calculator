import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { equalTo, clear, lastCut } from "../actions/index";
import './calculator.css';


const Calculator = () => {
    const mystate = useSelector(state => state.calculatorReducers);
    const dispatch = useDispatch();
    const [InputData, setInputData] = useState(mystate);

    const handleClick = (e) => {
        e.preventDefault();
        const data = e.target.getAttribute('data-id');
        const newData = InputData + data;
        setInputData(InputData + data)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-3 bg-blue">
                        <h1 className="text-danger text-center">Calculator</h1>
                        <table>
                            <tr id="result">
                                <td colSpan="4" className="result_show" >
                                    {mystate ? mystate : InputData}
                                </td>
                            </tr>
                            <tr>
                                <td className="oprater" onClick={() => dispatch(clear(InputData), setInputData(''))}>CLR</td>
                                <td onClick={handleClick} data-id="0" >0</td>
                                {/* <td className="oprater" onClick={() => dispatch(lastCut(InputData))}>CUT</td> */}
                                <td className="oprater" onClick={handleClick} data-id="*">*</td>
                                <td className="oprater" onClick={handleClick} data-id="/">/</td>
                            </tr>
                            <tr>
                                <td onClick={handleClick} data-id="7" >7</td>
                                <td onClick={handleClick} data-id="8">8</td>
                                <td onClick={handleClick} data-id="9">9</td>
                                <td className="oprater" onClick={handleClick} data-id="-">-</td>
                            </tr>
                            <tr>
                                <td onClick={handleClick} data-id="4">4</td><td onClick={handleClick} data-id="5">5</td><td onClick={handleClick} data-id="6">6</td><td className="oprater" onClick={handleClick} data-id="+">+</td>
                            </tr>
                            <tr>
                                <td onClick={handleClick} data-id="1">1</td><td onClick={handleClick} data-id="2">2</td><td onClick={handleClick} data-id="3">3</td><td className="oprater" onClick={() => dispatch(equalTo(InputData))}> = </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;
