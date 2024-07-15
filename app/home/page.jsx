import React from 'react'
import Navbar from '@/components/Navbar'
import HOME from '@/components/Home'
import Sec1 from '@/components/Sec1'
import Sec2 from '@/components/Sec2'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HOME/>
      <Sec1/>
      <Sec2/>
    </div>
  )
}

export default page
