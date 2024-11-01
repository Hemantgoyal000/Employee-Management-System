import React from 'react'

const TaskListNumer = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
      <div className='bg-red-400 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='bg-green-400 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='bg-yellow-400 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='bg-blue-400 py-6 px-9 rounded-xl w-[45%]'>
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumer