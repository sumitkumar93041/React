import React from 'react'

function Card({username,btnText="visit me"}) {
    console.log(username);
    
  return (
    <div className="relative h-[400px] w-[300px] overflow-hidden rounded-md">
    <img
      src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=800"
      alt="Air Max Pro"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

    <div className="absolute bottom-0 left-0 p-4 text-left">
      <h1 className="font-semibold text-white">{username}</h1>

      <p className="mt-2 text-sm text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>

      <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white hover:text-blue-300">
        {btnText } →
      </button>
    </div>
  </div>
  )
}

export default Card
