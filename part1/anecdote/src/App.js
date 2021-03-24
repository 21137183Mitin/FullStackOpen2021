import React, { useState } from 'react'

const Button = ({text, handleClick}) => {
  //console.log('props value is ', props)
  //const {text, handleClick} = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const  Buttons = ({nextAnecdote, addVote}) => {
  return (
    <>
      <Button 
        handleClick={addVote}
        text='vote'
      />
      <Button 
        handleClick={nextAnecdote}
        text='next anecdote'
      />
    </>
  )
}
//var ary = new Uint8Array(10); 
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const max = anecdotes.length 
  const arrInit = new Array(max).fill(0)
  
  const getRandomInt = max => Math.floor(Math.random()*max) 
  
  const [selected, setSelected] = useState(0) //state
  const [bestAnecdote, setBest] = useState(0) 
  const [voteChart, setVote] = useState(arrInit) //state of array
  console.log('voteChart',voteChart)
  console.log('useState(arrInit)',useState(arrInit))
  const nextAnecdote = () => setSelected(getRandomInt(max))
  
  const addVote = () => {
    const copy = [ ...voteChart]
    copy[selected] += 1  
    setVote(copy)
    console.log('copy',copy)
    console.log('voteChart2',voteChart)
    if (voteChart[selected] >= voteChart[bestAnecdote]) {
      setBest(selected)
    }
    
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {voteChart[selected]} votes</p>  
      <Buttons nextAnecdote={nextAnecdote} addVote={addVote} />
      <h1>Anecdote with most votes</h1>
      {anecdotes[bestAnecdote]}
      <p>has {voteChart[bestAnecdote]} votes</p> 
      
    </div>
  )
}

export default App