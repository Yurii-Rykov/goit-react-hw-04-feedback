import React from "react";
import s from './Statistics.module.css'
import PropTypes from 'prop-types'

const Statistics = ({ onStateGood, onStateNeutral, onStateBad, onTotal, onPositiv }) => {

    return(     
        <ul className={s.statistic_wrapper}>
          <li className={s.statistic_item}>Good: {onStateGood}</li>
          <li className={s.statistic_item}>Neutral: {onStateNeutral}</li>
          <li className={s.statistic_item}>Bad: {onStateBad}</li>
          <li className={s.statistic_item}>Total: {onTotal}</li>
          <li className={s.statistic_item}>PositiveFeedBack: {onPositiv.toFixed()}%</li>
        </ul>          
)    
}

Statistics.propTypes = {
  onStateGood: PropTypes.number.isRequired,
  onStateNeutral: PropTypes.number.isRequired,
  onStateBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositiv: PropTypes.number.isRequired,
}
export default Statistics;