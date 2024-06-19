// src/components/TaskInput.jsx
import React, { useState } from 'react'

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    addTask(newTask)
    setNewTask('')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default TaskInput
