import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='flex text-white w-full bg-slate-600 items-center justify-between p-5 px-8'>
        <h3>NewApp</h3>
        
       <div className='flex gap-3'>
       <Link href="/home">HOme</Link>
        <Link href="/about">About</Link>
        <Link href="/more">MOre</Link>
       </div>
       
    </div>
  )
}

export default Navbar