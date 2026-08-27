class N8nReporter {
  async onTestEnd(test, result) {
    if (result.status !== 'failed') {
      return;
    }

    const errorMessage =
      result.error?.message ||
      result.errors?.[0]?.message ||
      'Unknown Playwright error';

    const payload = {
      testName: test.title,
      status: 'failed',
      browser: test.project?.name || 'unknown',
      error: errorMessage,
      severity: 'High',
      environment: process.env.CI ? 'GitHub Actions' : 'QA',
      createdAt: new Date().toISOString(),
    };

    console.log(
      `[n8n reporter] ${test.title} => failed`
    );

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error(
        '[n8n reporter] N8N_WEBHOOK_URL is not configured'
      );
      return;
    }

    console.log(
      '[n8n reporter] Sending bug to n8n...'
    );

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseText = await response.text();

      console.log(
        `[n8n reporter] n8n response: ${response.status}`
      );

      if (!response.ok) {
        console.error(
          `[n8n reporter] n8n returned HTTP ${response.status}`
        );

        console.error(
          `[n8n reporter] Response: ${responseText}`
        );
      } else {
        console.log(
          '[n8n reporter] Bug successfully sent to n8n'
        );
      }
    } catch (error) {
      console.error(
        '[n8n reporter] Failed to send bug report:',
        error.message
      );
    }
  }
}

export default N8nReporter;