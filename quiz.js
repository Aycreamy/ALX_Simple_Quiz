// ✅ Step 1: Create the function
function checkAnswer() {
    // ✅ Step 2: Define the correct answer
    const correctAnswer = "4";

    // ✅ Step 3: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // ✅ Check if the user selected an answer
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return; // stop the function here
    }

    const userAnswer = selectedOption.value;

    // ✅ Step 4: Compare user's answer with correct answer
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // optional styling
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // optional styling
    }
}

// ✅ Step 5: Add event listener to the button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
