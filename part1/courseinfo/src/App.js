import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = ({part, exercise}) => <p> {part} {exercise} </p>


const Content = ({course}) => {
  return (
    <div>
      <Part part = {course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Part part = {course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Part part = {course.parts[2].name} exercise={course.parts[2].exercises}/>
    </div>  
  )
}
const Total = ({course}) => <p>Number of exercises { course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises } </p>


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <Header course={course.name}/>
    <Content course={course} />
    <Total course={course} />
    </>
  )
}

export default App