import React from 'react'

export default function Resume() {
  const imageUrl = '/resume.png'; // replace with your image path

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-2xl border-4 border-[#9d00ff] max-w-lg w-full">
        <img 
          src={imageUrl} 
          alt="Resume" 
          className="mx-auto mb-6 rounded-lg shadow-xl"
          style={{ width: '60%', height: 'auto' }} // Adjust size to fit nicely
        />
        <a
  href={imageUrl}
  download="Resume.jpg"
  className="inline-block bg-[#9d00ff] text-white px-12 py-4 rounded-full shadow-lg hover:bg-[#8b00e1] hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#9d00ff] focus:ring-opacity-50"
>
  Download Resume
</a>

      </div>
    </div>
  )
}
