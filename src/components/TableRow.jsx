import { useState } from 'react';
import { getCapitalized } from '../utils/functions';

export default function TableRow({ row, keys }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <tr
      key={row[0]}
      style={{backgroundColor: isActive ? '#FFCCBC' : null}}
      onClick={() => setIsActive(!isActive)}
    >
      {row.map((col, idx) => {
        // if data is true or false then set the color of the td accordingly but only if the key is 'status'
        let color = null;

        if (keys[idx] == 'status') {
          if (col == true) {
            color = 'green'
          } else if (col == false) {
            color = 'red'
          }
        }

        return (
          <td key={keys[idx]} style={{color: color}}>
            {getCapitalized(col.toString())}
          </td>
        )
      })}
    </tr>
  )
}
