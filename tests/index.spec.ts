import { useTest } from '../src'

describe('useTest', () => {
  it('returns default value', () => {
    const test = useTest()

    expect(test).toBe('Hello World!')
  })

  it('is variable', () => {
    const test = useTest('Bye Bye!')

    expect(test).toBe('Bye Bye!')
  })
})
