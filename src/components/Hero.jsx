import React from 'react'

function Hero() {
  return (
    <div>
        <div className='bg-zinc-500 h-225 w-full mt-5 text-white abosolute'>
            <div className='flex justify-center gap-2 list-none sm:w-full'>
                <li className='mr-3 p-1 hover:underline hover:font-bold'><a href='/veg'>Vegetables</a></li>
                <li className='mr-3 p-1 hover:underline hover:font-bold'>Fruits</li>
                <li className='mr-3 p-1 hover:underline hover:font-bold'>Grains&Cereals</li>
                <li className='mr-3 p-1 hover:underline hover:font-bold'>Dairy</li>
            </div>
        </div>
    </div>
  )
}

export default Hero