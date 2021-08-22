/**
 * A simple logger.
 */
export const useTest = (value: string = 'Hello World!'): string => {
  console.log(value)

  return value
}

useTest()
