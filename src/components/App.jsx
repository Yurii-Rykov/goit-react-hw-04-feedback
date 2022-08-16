import React from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics"
import Sections from "./Sections/Sections"
import Notification from "./Notification/Notification"

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  increment = (button) => {
    this.setState(prevState => ({
      [button]: prevState[button] + 1
    }))
  }

  render () {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiv = this.state.good / total * 100;

   return (
   <div className="container">
        
      <Sections title={'Please leave feedback'}>
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.increment}/>
       </Sections>


       <Sections title={'Statistics'}>
        {total !== 0  
        ?
        <Statistics onStateGood={this.state.good} onStateNeutral={this.state.neutral} 
        onStateBad={this.state.bad} onTotal={total} onPositiv={positiv}/>
        :
         <Notification/>}
       </Sections> 

    </div>
    )
}};

export default App;