import { useState } from 'react'
import { useDispatch } from 'react-redux'
import asc from '../redux/actions/asc'
import unsort from '../redux/actions/unsort'
import desc from '../redux/actions/desc'

export default function SortFilter() {
  const [isOpen, setIsOpen] = useState(false)
  
  // options array
  const options = ['Unsort', 'Sort by ASC', 'Sort by DESC']
  
  // active filter state
  const [activeFilter, setActiveFilter] = useState(options[0])

  const dispatch = useDispatch()

  function handleClick(option) {
    setActiveFilter(option)
    setIsOpen(false) // closing the dialoge

    // setting the state
    if (option === 'Unsort') {
      dispatch(unsort())
    } else if (option === 'Sort by ASC') {
      dispatch(asc())
    } else if (option === 'Sort by DESC') {
      dispatch(desc())
    }
  }

  return (
    <>
      <span
        className="material-icons head__row__more-icon"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        more_vert
      </span>

      <div
        className='head__row__popup'
        style={{visibility: isOpen ? 'visible': 'hidden'}}  
      >
        {options.map(option => {
          return <span
            key={option}
            onClick={() => handleClick(option)}
            style={{
              color: option === activeFilter ? 'grey': 'black',
              pointerEvents: option === activeFilter ? 'none': 'all'
            }}
          >
            {option}
          </span>
        })}
      </div>
    </>
  )
}
