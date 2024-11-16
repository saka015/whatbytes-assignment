import React from 'react'

const Header = () => {
  return (
      <div className="flex justify-between px-8 border-b py-4">
          <h1 className="text-2xl font-bold">WhatBytes</h1>
          <button className="border rounded-md px-4 py-2">User</button>
    </div>
  )
}

export default Header