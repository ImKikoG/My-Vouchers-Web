import React, { useState } from 'react'
import AdminDeliverers from './admin/AdminDeliverers'
import AdminRestaurants from './admin/AdminRestaurants'
import AdminStudents from './admin/AdminStudents'

function App() {
  return (
    <>
    <AdminDeliverers/>
    <AdminStudents/>
    <AdminRestaurants/>
    </>
  )
}

export default App
