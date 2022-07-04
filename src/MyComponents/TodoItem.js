import React from 'react'

export const TodoItem = ({todo}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <h4>{todo.desc}</h4>
    </div>
  )
}
