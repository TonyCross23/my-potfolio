import React from 'react'

function Footer() {
  return (
    <div className='py-5 bg-gray-400 dark:bg-gray-600 text-center text-gray-300 rounded-t-lg'>
      <a href='#hero' className='block text-xl md:text-2xl font-semibold hover:text-green-500'>Tony Cross</a>
      <a href='mailto:tonycross440@gmail.com'
      className=' text-sm md:text-md hover:text-green-500'>tonycross440@gmail.com</a>
      <p className="text-xs mt-2 text-gray-500">
				© TonyCross {new Date().getFullYear()}. All rights reserved
			</p>
    </div>
  )
}

export default Footer
