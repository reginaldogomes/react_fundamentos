// src/App.jsx
import React, { useState } from 'react'
import { Header } from './components/Header'

import TaskInput from '@/components/TaskInput'
import TaskList from '@/components/TaskList'

import './index.css'

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (taskName) => {
    if (!taskName.trim()) return
    const task = {
      id: Math.random().toString(36).substr(2, 9),
      name: taskName,
      completed: false,
    }
    setTasks([...tasks, task])
  }

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const completedTasksCount = tasks.filter((task) => task.completed).length
  const totalTasksCount = tasks.length

  return (
    <>
      <Header />
      <main className="flex justify-center min-h-screen relative">
        <div className="w-[736px] absolute top-[-26px]">
          <TaskInput addTask={addTask} />
          <TaskList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
          <div>
            Progress:{' '}
            {totalTasksCount > 0
              ? `${((completedTasksCount / totalTasksCount) * 100).toFixed(2)}%`
              : '0%'}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
