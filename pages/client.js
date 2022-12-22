import React from 'react'
import Menu from '../components/Menu'

function client() {
  return (
    <div className='flex p-5'>
      <Menu activeLink = 'client'/>
      <div>
        Here is the details of our client/s
      </div>
    </div>
  )
}

export default client