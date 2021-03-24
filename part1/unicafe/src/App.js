import React, { useState } from "react"

//const Good = ({counterG}) => <div>good {counterG}</div>
//const Neutral = ({counterN}) => <div>neutral {counterN}</div>
//const Bad = ({counterB}) => <div>bad {counterB}</div>

//const Display = props => <div>{props.good}</div>

const Statistics = ({ good, bad, neutral }) => {
  // component
  if (good === 0 && neutral === 0 && bad === 0) {
    return <>No feedback given</>
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good + neutral + bad} />
          <Statistic
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <Statistic
            text="positive"
            value={(good * 100) / (good + neutral + bad)}
            sign="%"
          />
        </tbody>
      </table>
    </div>
  )
}
const Statistic = ({ text, value, sign }) => {
  return (
    <tr>
      <td> {text} </td>
      <td>
        {" "}
        {value} {sign}{" "}
      </td>
    </tr>
  )
}

const Buttons = ({ increaseGood, increaseNeutral, increaseBad }) => {
  return (
    <>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
    </>
  )
}

const Button = (props) => {
  //console.log('props value is ', props)
  //const {text, handleClick} = props
  return <button onClick={props.handleClick}>{props.text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      {/*<Display good={good} />*/}
      <h1> give feedback </h1>

      <Buttons
        increaseGood={increaseGood}
        increaseNeutral={increaseNeutral}
        increaseBad={increaseBad}
      />
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
