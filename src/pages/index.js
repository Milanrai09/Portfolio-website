import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
      <div className="bg-gray-200 p-4">
        <h1 className="text-2xl font-bold text-blue-800">Welcome to Tailwind CSS Example</h1>
        <p className="text-gray-700 mt-2">This is a simple example of using Tailwind CSS in React.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Click Me</button>
      </div>

      <div>
        <p>INCREMENT</p>
          
        <p>DECREMENT</p>
      </div>
    
  </>

  )
}
