import Days from "./Days";
import Month from "./Month";
interface days {
  julian: number,
  month: string,
  dom: number,
  dow: string
}
const Calendar = (props: { data: days[], month: number, months: string[], changeMonth: Function, weekOffset: number[] }) => {
  const { data, month, months, changeMonth, weekOffset } = props;

  return (
    <div className=''>
      <Month month={months[month]} monthIndex={month} changeMonth={changeMonth} />
      <Days data={data} month={months[month]} weekOffset={weekOffset[month]} />
    </div>
  )
}

export default Calendar