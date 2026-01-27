import React from 'react'

const TypeCard = ({ image, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border-2 border-[#ececec] hover:border-[#4d52e2] transition-all duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-80 h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-center text-gray-800 font-semibold">{title}</h3>
      </div>
    </div>
  )
}

export default TypeCard