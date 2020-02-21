const { libraryWithNightmaresAndDoors } = require('./testResources/mockData')
const drawFullHand = require('./drawFullHand')

describe('a suit of test for drawFullHand function', () => {
  it('should return a hand of five cards', () => {
    const result = drawFullHand(libraryWithNightmaresAndDoors)
    expect(result.length).toBe(5)
  });
  it('should not contain nightmares or doors', () => {
    
  });
  it('should put doors and nightmares back in library', () => {
    
  });
  it('should call checkIfLastCard if you take the last card in library', () => {
    
  });
});