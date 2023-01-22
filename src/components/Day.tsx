import React from 'react'

const Day = (props: { dayOfMonth: number }) => {
  const { dayOfMonth } = props
  return (
    <div className='bg-white border border-transparent p-1 box-border'>
      <div className=''>{dayOfMonth}</div>
      <div> content </div>
    </div>
  )
}

export default Day