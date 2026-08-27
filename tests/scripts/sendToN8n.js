const webhookUrl =
  'http://localhost:5678/webhook/playwright-result';

const testResult = {
  testName: 'Manual Test',
  status: 'failed',
  browser: 'chromium',
  error: 'Manual test error'
};

const response = await fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(testResult)
});

console.log(await response.text());