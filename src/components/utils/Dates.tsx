import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
 const date = parseISO(dateString)
 return <time dateTime={dateString} className="text-xs">{format(date, 'yyyy.MM.dd')}</time>
}