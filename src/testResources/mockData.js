const door = {
  name: 'Door',
  color: 'Red',
  type: 'Door'
}
const nightmare =  {
  name: 'Nightmare',
  color: null,
  type: 'Dream'
}

const sun = {
  name: 'Sun',
  color: 'Green',
  type: 'Location'
}

const moon = {
  name: 'Moon',
  color: 'Green',
  type: 'Location'
}

const key = {
  name: 'Key',
  color: 'Green',
  type: 'Key'
}

let libraryWithNightmareAndDoor = [
  key,
  nightmare,
  sun,
  moon,
  key,
  door,
  sun,
  moon,
]

const libraryWithFourCards = [
  sun,
  sun,
  sun,
  sun,
]

module.exports = {
  libraryWithFourCards,
  libraryWithNightmareAndDoor,
}