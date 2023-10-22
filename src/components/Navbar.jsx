import React from 'react'

function Navbar() {
  return (
    <div className='max-w-3xl mx-auto py-5 px-3 flex justify-between items-center'>
        <h1 className='text-3xl font-medium'>Home</h1>
        <p>
            <span>Shop</span>
            <span className='badge badge-secondary'>0</span>
        </p>
    </div>
  )
}

export default Navbar