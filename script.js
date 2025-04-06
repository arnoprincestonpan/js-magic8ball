/*
eightballapi instructions
base url: https://eightballapi.com/api
result: gets a random answer to a question
*/

const askButton = document.getElementById('ask-button');

askButton.addEventListener('click', async () => {
    const question = document.getElementById('question').value;
    if (question) {
        try {
            const answer = await askEightBall(question);
            document.getElementById('answer').innerText = answer;
        } catch (error) {
            console.error('Error fetching answer:', error);
            document.getElementById('answer').innerText = 'Error fetching answer. Please try again.';
        }
    } else {
        alert('Please enter a question.');
    }
});

const askEightBall = async (question) => {
    const url = `https://eightballapi.com/api?question=${encodeURIComponent(question)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.answer;
}

