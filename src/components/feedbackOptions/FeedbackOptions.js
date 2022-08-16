import React from "react";
import s from './FeedbackOptions.module.css'
import PropTypes from 'prop-types'

class FeedbackOptions extends React.Component{
    constructor({ options, onLeaveFeedback }){
        super()
        this.btns = options.map( btn =>  
            <button key={btn} type="button" className={s.feedback_btn} onClick={() =>{onLeaveFeedback(btn)}}>{btn}</button>
        )
    }
    render() {
        return (
            <div className={s.feedback_wrapper}> 
            { this.btns}
            </div>
        )
    }
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;