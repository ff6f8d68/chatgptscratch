const chatButton = document.getElementById('chatButton');
const chatInput = document.getElementById('chatInput');
const chatOutput = document.getElementById('chatOutput');

chatButton.addEventListener('click', () => {
    const text = chatInput.value;
    fetch('/chatgpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        chatOutput.innerHTML = data.choices[0].text;
    })
    .catch(error => console.error(error));
});
