import React from 'react';
import styles from './Main.module.css';

export const Main = (props) => {
  return <div>
    <div>Throw <input onChange={(event) => props.setNumberOfDices(event.target.value)} className={styles.input}
                      placeholder={`number of dices`}/> dices
    </div>
    <div>for <input onChange={(event) => props.setRequiredValue(event.target.value)} className={styles.input}
                    placeholder={`1`}/>+
    </div>
    <div>
      <button onClick={() => props.throwDices(props.numberOfDices)}>Throw</button>
    </div>
    <div>
      <div>Your result: { props.results ? props.results.filter((number) => number >= props.requiredValue).length : ''}</div>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 1).length: ''} of ones</span>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 2).length: ''} of twos</span>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 3).length: ''} of threes</span>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 4).length: ''} of fours</span>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 5).length: ''} of fives</span>
      <span className={styles.minorResult}>you got: {props.results ? props.results.filter((number) => number === 6).length: ''} of sixes</span>
    </div>
  </div>
};