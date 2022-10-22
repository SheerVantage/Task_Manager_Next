import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  let [tasks, setTasks] = useState(['first', 'second', 'third', 'fourth'])
  let [index, setIndex] = useState(0)

  function addTask(){
    setIndex(index + 1)
    setTasks([...tasks, 'new task ' + index])
  }

  return (
    <div className={styles.container}>
      <h1 className = "styles.code">The list of tasks <button onClick = {addTask}>Add</button></h1>
      <ul>
        {tasks.map( task => {
          return <li key = {task}>{task}</li>
        } )}
      </ul>
    </div>
  )
}
