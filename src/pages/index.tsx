import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Calendar from '@/components/Calendar'
import { useState } from 'react'

const daysOfTheWeek: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const monthNames: string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const daysInMonths: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const weekOffset: number[] = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
const daysOfTheYear: { julian: number, dom: number, dow: string, month: string }[] = []

//go through each julian day
let monthTotals: number = daysInMonths[0];
let monthIndex: number = 0
for (let i = 1; i <= 365; i++) {
  //find what month i is in by adding up the days in each month until i is less than the total
  while (i > monthTotals) {
    //if i is greater than the total days in the month, add the days in the month to the total and move to the next month
    monthIndex++;
    monthTotals += daysInMonths[monthIndex]
  }

  daysOfTheYear.push({
    julian: i,
    month: monthNames[monthIndex],
    dom: i - monthTotals + daysInMonths[monthIndex],
    dow: daysOfTheWeek[i % 7]

  })
  console.log(daysOfTheYear[i - 1]);
  // console.log(i, monthTotals, monthIndex, daysInMonths[monthIndex])
  // console.log(monthTotals);
  // console.log(monthIndex);
  // console.log(daysInMonths[monthIndex]);
}


export default function Home() {
  const [month, setMonth] = useState(2);

  const changeMonth = (index: number) => {
    console.log(index)
    setMonth(index)
    if (index > 11) {
      setMonth(index % 12);
    }
    if (index < 0) {
      setMonth(11)
    }
  }
  return (
    <>
      <Head>
        <title>Budget Calendar</title>
        <meta name="description" content="calculate end of month bills or net monthly income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-center pt-6 bg-gradient-to-b from-sky-400 to-blue-400 h-screen box-border'>
        <h1 className='text-6xl text-gray-50'>Create your monthly cash flow chart</h1>

        <section className='w-10/12 mx-auto'>
          {/* days in each month in 2023 */}
          <Calendar months={monthNames} data={daysOfTheYear} weekOffset={weekOffset} month={month} changeMonth={changeMonth} />
        </section>

      </main >
    </>
  )
}
