/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function maxBy(array, cb) {
  // Your code goes here...
  if (array.length === 0) return undefined;

  let maxElement = array[0];
  let maxValue = cb(maxElement);

  for (let i = 1; i < array.length; i++) {
    const value = cb(array[i]);
    if (value > maxValue) {
      maxValue = value;
      maxElement = array[i];
    }
  }

  return maxElement;
}

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let discoveryCounts = {};

  for (let i = 0; i < data.asteroids.length; i++) {
    const year = data.asteroids[i].discoveryYear;
    discoveryCounts[year] = (discoveryCounts[year] || 0) + 1;
  }

  const yearsArray = Object.keys(discoveryCounts).map(year => ({
    year: Number(year),
    count: discoveryCounts[year],
  }));

  let maxYear = maxBy(yearsArray, item => item.count);

  return maxYear ? maxYear.year : undefined;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
