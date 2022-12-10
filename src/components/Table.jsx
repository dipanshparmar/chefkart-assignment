import SortFilter from './SortFilter'
import TableRow from './TableRow'
import { getCapitalized } from '../utils/functions'
import { useSelector } from 'react-redux'

export default function Table() {
  const dataArray = useSelector(data => data)
  
  const keys = dataArray[0]

  const data = dataArray.slice(1)

  return (
    <table>
      <thead>
        <tr>
          {keys.map(key => {
            return <th key={key} className='head'>
              <div className='head__row'>
                <span>{getCapitalized(key).replace('_', ' ')}</span>

                {
                  key.toLowerCase() === 'first_name' &&
                  <SortFilter />
                }

                <span
                  className='head__row__bar'
                  style={{paddingLeft: key.toLowerCase() === 'first_name' ? '1rem' : null}}
                >|</span>
              </div>
            </th>
          })}
        </tr>
      </thead>
      <tbody>
        {data.map(row => {
          return (
            <TableRow row={row} keys={keys} key={row[0]} />
          )
        })}
      </tbody>
    </table>
  )
}