import React, { useState } from 'react';
import Button from './Button';
import ResultScreen from './ResultScreen';
import CalcScreen from './CalcScreen';
import '../css/calculator.css';
import { create, all } from 'mathjs';

const math = create(all);

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [calc, setCalc] = useState('');
    const [decimal, setDecimal] = useState(false);

    const handleButton = (e) => {
        if (e.target.dataset.char === '=') {
            handleEquals();
        } else if (e.target.dataset.char === 'C') {
            handleClear();
        } else if (e.target.dataset.char === '<-') {
            handleBackSpace(e);
        } else if (e.target.dataset.char === '.') {
            handleDecimal(e);
        } else if (e.target.dataset.type === 'num') {
            concatNums(e);
        } else if (e.target.dataset.type === 'operator') {
            stringNumsAndOperator(e);
        }
    };

    const concatNums = (e) => {
        if (result === 0) {
            setResult(e.target.dataset.char);
        } else {
            setResult(result + e.target.dataset.char);
        }
    };

    const stringNumsAndOperator = (e) => {
        if (calc === '') {
            setCalc(`${result} ${e.target.dataset.char}`);
            setResult(0);
            setDecimal(false);
        } else {
            setCalc(`${calc} ${result} ${e.target.dataset.char}`);
            setResult(0);
            setDecimal(false);
        }
    };

    const handleBackSpace = () => {
        //flip decimal btn back on if decimal is backspaced
        if (result[result.length - 1] === '.') {
            setDecimal(false);
        }
        if (result.length === 1) {
            setResult(0);
        } else {
            setResult(result.slice(0, result.length - 1));
        }
    };

    const handleDecimal = (e) => {
        setResult(result + e.target.dataset.char);
        setDecimal(true);
    };

    const handleClear = () => {
        setResult(0);
        setDecimal(false);
        setCalc('');
    };

    const handleEquals = () => {
        setResult(math.evaluate(`${calc} ${result}`));
        setCalc('');
        setDecimal(false);
    };

    return (
        <div className="calculator">
            <ResultScreen result={result} />
            <CalcScreen calc={calc} />
            <div className="btn-container">
                <Button handleButton={handleButton} char={9} disabled={false} />
                <Button handleButton={handleButton} char={8} disabled={false} />
                <Button handleButton={handleButton} char={7} disabled={false} />
                <Button handleButton={handleButton} char={6} disabled={false} />
                <Button handleButton={handleButton} char={5} disabled={false} />
                <Button handleButton={handleButton} char={4} disabled={false} />
                <Button handleButton={handleButton} char={3} disabled={false} />
                <Button handleButton={handleButton} char={2} disabled={false} />
                <Button handleButton={handleButton} char={1} disabled={false} />
                <Button
                    handleButton={handleButton}
                    char={0}
                    disabled={result === 0 ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'/'}
                    disabled={result === 0 && calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'*'}
                    disabled={result === 0 && calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'-'}
                    disabled={result === 0 && calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'+'}
                    disabled={result === 0 && calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'='}
                    disabled={calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'.'}
                    disabled={decimal}
                />
                <Button
                    handleButton={handleButton}
                    char={'C'}
                    disabled={result === 0 && calc === '' ? true : false}
                />
                <Button
                    handleButton={handleButton}
                    char={'<-'}
                    disabled={result === 0 ? true : false}
                />
            </div>
        </div>
    );
};

export default Calculator;
