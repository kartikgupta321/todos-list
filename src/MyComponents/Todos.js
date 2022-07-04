import {TodoItem} from '../MyComponents/TodoItem'
import React from 'react'


export const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todos list</h3>
      <TodoItem todos = {props.todo[0]}/>
    </div>
  )
}
