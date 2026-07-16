// run-mock-tests.js
const fs = require('fs');

// MOCK CONFIGURATION 
// Change these numbers to test your pipeline:
const PASSED_TESTS = 8;   // Expected successful runs
const FAILED_TESTS = 2;   // Unexpected failures
// ==========================================

const total = PASSED_TESTS + FAILED_TESTS;
const computedRate = ((PASSED_TESTS / total) * 100).toFixed(2);

console.log(`\n==========================================`);
console.log(`🏃 Running mock QA suite...`);
console.log(`Executed ${total} mock tests: ${PASSED_TESTS} passed, ${FAILED_TESTS} failed.`);
console.log(`Simulated Pass Rate: ${computedRate}%`);
console.log(`==========================================\n`);

// Create a mock Playwright stats report format
const mockReport = {
  stats: {
    expected: PASSED_TESTS,   // Playwright counts passed tests as "expected"
    unexpected: FAILED_TESTS, // Playwright counts failed tests as "unexpected"
    flaky: 0
  }
};

// Write the mock report to the file the CI/CD pipeline expects to read
fs.writeFileSync('test-results.json', JSON.stringify(mockReport, null, 2));
console.log(`✅ Saved mock results to 'test-results.json'`);