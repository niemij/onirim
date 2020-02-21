const shuffleLibrary = library => {
  var m = library.length,
    t,
    i

  while (m) {
    i = Math.floor(Math.random() * m--)

    t = library[m]
    library[m] = library[i]
    library[i] = t
  }

  return library
}

module.exports = { shuffleLibrary }
