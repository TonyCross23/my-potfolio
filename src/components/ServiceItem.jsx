import React from 'react'

function ServiceItem({title,icon,description}) {
  return (
    <div className='bg-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-slate-600 hover:-translate-y-2 transform transition p-5 rounded-md'>
      <div className='text-gray-950 dark:text-green-400 w-6 h-6 mb-3'>
      {icon}
      </div>
      <h1 className='font-semibold text-lg text-gray-800 dark:text-green-400 mb-1'>
        {title}
        </h1>
      <p className='text-md text-gray-600 dark:text-gray-300'>
        {description}
      </p>
    </div>
  )
}

export default ServiceItem
