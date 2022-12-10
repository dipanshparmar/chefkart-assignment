import getArray from '../../data/data'

const originalData = getArray()

let temp = originalData.slice(1)

// function to get the data in name ascending
function getArrayInNameAscending() {
  temp = originalData.slice(1)

  temp.sort((a, b) => {
    if (a[1] === b[1]) {
      return 0;
    }

    if (a[1] < b[1]) {
      return -1;
    } else {
      return 1;
    }
  })

  temp.splice(0, 0, originalData[0])

  return temp
}

// function to get the data in name descending
function getArrayInNameDescending() {
  temp = originalData.slice(1)

  temp.sort((a, b) => {
    if (a[1] === b[1]) {
      return 0;
    }

    if (a[1] > b[1]) {
      return -1;
    } else {
      return 1;
    }
  })

  temp.splice(0, 0, originalData[0])

  return temp
}

// setting the default state to the original data
function data(state = originalData, action) {
  switch (action.type) {
    case 'UNSORT':
      return originalData
    case 'ASC':
      return getArrayInNameAscending()
    case 'DESC':
      return getArrayInNameDescending()
    default:
      return state
  }
}

export default data
