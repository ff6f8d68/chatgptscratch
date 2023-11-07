const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const OPENAI_API_KEY = 'YOUR_API_KEY';

app.post('/ask-chatgpt', async (req, res) => {
  const { question } = req.body;
  
  try {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
      prompt: question,
      max_tokens: 50,
    }, {
      headers: {
        'Authorization': `Bearer ${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}`,
      },
    });

    res.json({ answer: response.data.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get a response from ChatGPT' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
