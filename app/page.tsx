import Image from 'next/image'
import Header from './Header/page'
import Section from './Section/page'

export default function Home() {
  return (
    <div className='border-2 border-red-800 w-full h-screen'>
      <Header/>
      <Section/>
    </div>
  )
}
