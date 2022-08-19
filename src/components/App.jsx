import React from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Sections from './Sections/Sections';
import Notification from './Notification/Notification';
import { useState } from 'react';

const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const increment = button => {
    setOptions(prevState => ({
      ...prevState,
      [button]: prevState[button] + 1,
    }));
  };

  const total = options.good + options.neutral + options.bad;
  const positiv = (options.good / total) * 100;

  return (
    <div className="container">
      <Sections title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={increment}
        />
      </Sections>

      <Sections title={'Statistics'}>
        {total !== 0 ? (
          <Statistics
            onStateGood={options.good}
            onStateNeutral={options.neutral}
            onStateBad={options.bad}
            onTotal={total}
            onPositiv={positiv}
          />
        ) : (
          <Notification />
        )}
      </Sections>
    </div>
  );
};

export default App;
