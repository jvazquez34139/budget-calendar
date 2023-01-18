import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const daysOfTheWeek: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const monthNames: string[] = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const daysInMonths: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const daysOfTheYear: { julian: number, dom: number, dow: string, month: string }[] = []

for (let i = 0; i < 365; i++) {
  let monthTotals: number = daysInMonths[0];
  let monthIndex: number = 0
  while (i < monthTotals) {
    monthTotals += daysInMonths[monthIndex]
    monthIndex++
  }

  daysOfTheYear.push({
    month: monthNames[monthIndex],
    julian: i + 1,
    dom: i - monthTotals + 1,
    dow: daysOfTheWeek[i % 7]
  })
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Budget Calendar</title>
        <meta name="description" content="calculate end of month bills or net monthly income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='text-center pt-6'>
        <h1 className='text-6xl'>Create your monthly cash flow chart</h1>

        <section className=''>
          {/* days in each month in 2023 */}
          <h2>January</h2>
          <ul className='grid justify-center grid-cols-7'>
            {Array.from(Array(daysInMonths[0]).keys()).map((day) => (
              <li key={day} className='w-8 h-8 border border-gray-300'>{day + 1}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
