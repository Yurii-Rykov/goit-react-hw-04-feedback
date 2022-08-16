import React from "react";
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

  function  renderBtns() {
        return options.map( btn =>  
            <button key={btn} type="button" className={s.feedback_btn} onClick={() =>{onLeaveFeedback(btn)}}>{btn}</button>
        )
    }
        return (
            <div className={s.feedback_wrapper}> 
            {renderBtns()}
            </div>
        )
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;