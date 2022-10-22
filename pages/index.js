import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link';

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
      <ul className='bg-green-200'>
        {tasks.map( task => {
          return <li key = {task}>{task} <Link href = {'/detail?name='+task} className = "bg-red-500 border-2">🡥</Link></li>
        } )}
      </ul>
    </div>
  )
}
