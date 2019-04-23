import React from 'react';
import Output from './Output';
import NumberButton from '../ButtonComponents/NumberButton';
import ActionButton from '../ButtonComponents/ActionButton';
import BigButton from '../ButtonComponents/BigButton';
import './Display.scss';

let numberarray = [0,1,2,3,4,5,6,7,8,9];
let operatorarray = ['÷', 'x','-','+','='];

function CalculatorDisplay() {
    return (
        <div className="calculator-container">

            <Output />
            <div className="allbuttons">
                <div className="whitebuttons">
                    <BigButton number={'clear'} />
                    <NumberButton number={numberarray[7]} />
                    <NumberButton number={numberarray[8]} />
                    <NumberButton number={numberarray[9]} />
                    <NumberButton number={numberarray[4]} />
                    <NumberButton number={numberarray[5]} />
                    <NumberButton number={numberarray[6]} />
                    <NumberButton number={numberarray[1]} />
                    <NumberButton number={numberarray[2]} />
                    <NumberButton number={numberarray[3]} />
                    <BigButton number={numberarray[0]} />
                </div>
                <div className="operators">
                    <ActionButton operator={operatorarray[0]} />
                    <ActionButton operator={operatorarray[1]} />
                    <ActionButton operator={operatorarray[2]} />
                    <ActionButton operator={operatorarray[3]} />
                    <ActionButton operator={operatorarray[4]} />
                </div>
            </div>


        </div>
    );
}


export default CalculatorDisplay;