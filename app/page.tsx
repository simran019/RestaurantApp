import Image from 'next/image'
import Header from './Header/page'
import Section from './Section/page'
import MealsSummary from './MealsSummary/page'
import AvailableMeals from './AvailableMeals/page'

export default function Home() {
  return (
    <div className='border-2 border-red-800 bg-slate-800 w-full h-full flex flex-col items-center relative z-0'>
      <Header/>
      <Section/>
      <MealsSummary/>
      <AvailableMeals/>
    </div>
  )
}
