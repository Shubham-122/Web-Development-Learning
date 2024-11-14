import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-cyan-400 text-white p-4 rounded-xl mb-4'>Taiwind test</h1>
      <Card username="Shubham" price="$80.00" />
      <Card username="Sahai" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App
