
const Month = (props: { month: string, changeMonth: Function, monthIndex: number }) => {
  const { month, changeMonth, monthIndex } = props
  const textleft = '<='
  return (
    <div className='flex justify-between mt-20 bg-violet-700 h-16 items-center p-4'>
      <button onClick={() => changeMonth(monthIndex - 1)} className='bg-gray-500 h-8 rounded p-1' >{textleft}</button>
      <h2 className='text-2xl capitalize'>{month}</h2>
      <button onClick={() => changeMonth(monthIndex + 1)} className='bg-gray-500 h-8 rounded p-1'> => </button>
    </div>
  )
}

export default Month