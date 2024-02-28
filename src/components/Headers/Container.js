import React from 'react'
import AppBar from './AppBar'
import MiddleBar from './MiddleBar'
import LowerBar from './LowerBar'

const Container = () => {
  return (
    <div className='border-solid border-b  border-[#252525] bg-[#fefbf6] top-0 size-full z-[100] sticky min-[820px]:h-auto'>
        <AppBar/>
        <MiddleBar/>
        <LowerBar/>
    </div>
  )
}

export default Container