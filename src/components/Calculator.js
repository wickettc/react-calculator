import React, { useEffect, useState } from 'react';
import Button from './Button';
import ResultScreen from './ResultScreen';
import CalcScreen from './CalcScreen';
import '../css/calculator.css';

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [calc, setCalc] = useState(0);

    const handleButton = (e) => {
        if (e.target.dataset.type === 'num') {
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
        if (calc === 0) {
            setCalc(`${parseInt(result)} ${e.target.dataset.char}`);
            setResult(0);
        } else {
            setCalc(`${calc} ${result} ${e.target.dataset.char}`);
            setResult(0);
        }
    };

    return (
        <div className="calculator">
            <ResultScreen result={result} />
            <CalcScreen calc={calc} />
            <div className="btn-container">
                <Button handleButton={handleButton} char={9} />
                <Button handleButton={handleButton} char={8} />
                <Button handleButton={handleButton} char={7} />
                <Button handleButton={handleButton} char={6} />
                <Button handleButton={handleButton} char={5} />
                <Button handleButton={handleButton} char={4} />
                <Button handleButton={handleButton} char={3} />
                <Button handleButton={handleButton} char={2} />
                <Button handleButton={handleButton} char={1} />
                <Button handleButton={handleButton} char={0} />
                <Button handleButton={handleButton} char={'/'} />
                <Button handleButton={handleButton} char={'*'} />
                <Button handleButton={handleButton} char={'-'} />
                <Button handleButton={handleButton} char={'+'} />
                <Button handleButton={handleButton} char={'='} />
                <Button handleButton={handleButton} char={'.'} />
                <Button handleButton={handleButton} char={'C'} />
                <Button handleButton={handleButton} char={'<-'} />
            </div>
        </div>
    );
};

export default Calculator;
