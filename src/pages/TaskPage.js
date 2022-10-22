import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import TaskComponent from '../components/TaskComponent/TaskComponent'

const TaskPage = () => {
  return (
     <>
        <Navbar/>
        <TaskComponent/>
        <Footer/>
     </>
  )
}

export default TaskPage