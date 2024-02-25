import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.div}>
            <span className={css.span}>Good: {good}</span>
            <span className={css.span}>Neutral: {neutral}</span>
            <span className={css.span}>Bad: {bad}</span>
            <span className={css.span}>Total: {total}</span>
            <span className={css.span}>
                Positive feedback: {positivePercentage}%
            </span>
        </div>
    );
};

export default Statistics;
