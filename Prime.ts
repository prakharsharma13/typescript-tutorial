function generatePrimes(limit: number): number[] {
  if (limit < 2) {
    throw new Error('Limit must be at least 2');
  }

  const isPrime: boolean[] = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let num = 2; num * num <= limit; num++) {
    if (isPrime[num]) {
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        isPrime[multiple] = false;
      }
    }
  }

  return isPrime.reduce((primes, prime, index) => {
    if (prime) {
      primes.push(index);
    }
    return primes;
  }, []);
}

// Example usage
try {
  const primeLimit = 50;
  const primeNumbers = generatePrimes(primeLimit);
  console.log(`Prime numbers up to ${primeLimit}:`, primeNumbers.join(', '));
} catch (error) {
  console.error('Error:', error.message);
}
