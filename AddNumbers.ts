// Function to add two numbers
function addNumbers(
    num1: number,
    num2: number,
    num3?: number, // Optional third number
    num4 = 0 // Default value for the fourth number
  ): number {
    // Check if any input is not a number
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || (num3 !== undefined && typeof num3 !== 'number') || typeof num4 !== 'number') {
      throw new Error('All inputs must be numbers');
    }
  
    let sum = num1 + num2;
  
    // Add the third number if provided
    if (num3 !== undefined) {
      sum += num3;
    }
  
    // Add the fourth number
    sum += num4;
  
    return sum;
  }
  
  // Example usage
  try {
    const result1 = addNumbers(10, 5);
    console.log('Result 1:', result1); // Result 1: 15
  
    const result2 = addNumbers(10, 5, 7);
    console.log('Result 2:', result2); // Result 2: 22
  
    const result3 = addNumbers(10, 5, 7, 3);
    console.log('Result 3:', result3); // Result 3: 25
  
    const result4 = addNumbers(10, 5); // Invalid input
    console.log('Result 4:', result4);
  } catch (error) {
    console.error('Error:', error.message); // Error: All inputs must be numbers
  }
  