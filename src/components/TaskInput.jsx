// src/components/TaskInput.jsx
import React, { useState } from 'react'

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    addTask(newTask)
    setNewTask('')
  }

  return (
    <>
      <div className="flex gap-1 justify-between">
        <input
          type="text"
          className="bg-primary-light p-4 rounded-lg w-[90%]"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="p-4 bg-neutral-50 rounded-lg"
          onClick={handleAddTask}
        >
          Criar
        </button>
      </div>
    </>
  )
}

export default TaskInput
