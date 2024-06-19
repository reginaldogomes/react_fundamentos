// src/components/TaskList.jsx
import React from 'react'

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul className="flex flex-col">
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            className="p-8"
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.name}
          </span>
          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
