import React from 'react'
import Day from './Day'

interface days {
  julian: number,
  month: string,
  dom: number,
  dow: string
}

const daysOfTheWeek: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const Days = (props: { data: days[], weekOffset: number, month: string }) => {
  const { data, weekOffset, month } = props;
  return (
    <div className=''>
      <div className='grid grid-cols-7'>
        {daysOfTheWeek.map((day, index) => {
          return (
            <div key={index} className='border border-black capitalize'>{day}</div>
          )
        }
        )}
        {Array.from(Array(weekOffset)).map((day, index) => {
          return (
            <div key={index} className='border border-transparent bg-gray-600'></div>
          )
        })}
        {data.map((day, index) => {
          if (day.month === month) {
            return (
              <Day dayOfMonth={day.dom} />
            )
          }
        })}
      </div>
    </div>

  )
}

export default Days