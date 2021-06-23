const mDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // Month Array
document.getElementById('button').addEventListener('click', launcher) // Click listener

function launcher () { // launches other functions
// initilize variables
  const today = new Date()
  const iDay = document.getElementById('day').value
  const iMonth = (document.getElementById('month').value) - 1
  const iYear = document.getElementById('year').value
  const iYear2 = parseInt(iYear) + 1
  const sYear = today.getFullYear()
  const sDay = today.getDate()
  const sMonth = today.getMonth()
  let sDOY = 0
  let iDOY = 0
  let iDif = 0
  let days = 0
  let totalDays = 0

  iDOY = dayOfYear(iMonth, iDay, iYear) // calc day of year for input
  // alert('input DOY ' + iDOY)
  sDOY = dayOfYear(sMonth, sDay, sYear) // calc day of year for system
  // alert('System DOY ' + sDOY)
  iDif = doyDif(iDOY, iYear) // calc how many days left in year for input
  // alert('Input DIFF ' + iDif)
  days = addYears(iYear2, sYear) // calc days in folowing years
  // alert('Days from years ' + days)
  totalDays = sumResults(sDOY, iDif, days, iYear, sYear, iDOY) // calc total days
  // alert('after SUM ' + totalDays)
  writeHTML(totalDays) // prints to HTML
}

function isLeap (z) {
  if (((z % 4) === 0 && (z % 100) !== 0) || ((z % 400) === 0)) {
    return true
  } else {
    return false
  }
}

function doyDif (x, z) {
  let count = 0
  if (isLeap(z)) {
    count = 366 - parseInt(x)
    return count
  } else {
    count = 365 - parseInt(x)
    return count
  }
}

function dayOfYear (x, y, z) {
  let count = 0
  if (x > 1) {
    if (isLeap(z)) {
      for (let i = 0; i < x; i++) {
        count = count + mDays[i]
      }
      count = (count + 1) + parseInt(y)
      return count
    } else {
      for (let i = 0; i < x; i++) {
        count = (count + mDays[i])
      }
      count = count + parseInt(y)
      return count
    }
  } else {
    for (let i = 0; i < x; i++) {
      count = count + mDays[i]
    }
    count = count + parseInt(y)
    return count
  }
}

function addYears (z, y) {
  let count = 0
  for (z; z < y; z++) {
    if (isLeap(z)) {
      count = count + 366
    } else if (z === y) {
      return 0
    } else {
      count = count + 365
    }
  }
  return count
}

function sumResults (x, y, z, a, b, c) { // sDOY, iDif, days, iYear, sYear, iDOY
  let count = 0
  if (a = b) { // the linter does not like the 2 "=" but the code breaks when changed
    count = parseInt(x) - parseInt(c)
    return count
  } else {
    count = parseInt(x) + parseInt(y) + parseInt(z)
    return count
  }
}

function writeHTML (z) {
  document.getElementById('d').innerHTML = (z)
}
