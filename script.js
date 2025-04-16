document.addEventListener("DOMContentLoaded", () => {
    const codeSnippet = `function fibonacci(n) {
        let a = 0, b = 1, temp;
        while (n-- > 0) {
            temp = a;
            a = b;
            b = temp + b;
        }
        return a;
    }`;
    const snippetDiv = document.getElementById("snippet");
    const inputArea = document.getElementById("input");
    const resultsDiv = document.getElementById("results");
    const body = document.body; // Get the body element for color mode

    snippetDiv.textContent = codeSnippet;

    let startTime;
    let errors = 0;
    let isDarkMode = false; // Track the current color mode
    let isRunning = false; // Flag to track if the test is running

    function resetTest() {
        startTime = null;
        errors = 0;
        inputArea.value = "";
        resultsDiv.innerHTML = "";
        isRunning = false;
    }

    function stopTest() {
        isRunning = false;
        resultsDiv.innerHTML += "<p>Test Stopped.</p>";
    }

    function toggleDarkMode() {
        body.classList.add("dark-mode");
        body.classList.remove("normal-mode");
        isDarkMode = true;
    }

    function goToNormalMode() {
        body.classList.add("normal-mode");
        body.classList.remove("dark-mode");
        isDarkMode = false;
    }

    inputArea.addEventListener("input", (e) => {
        if (!isRunning) {
            isRunning = true;
            startTime = new Date();
        }

        const userInput = e.target.value;
        errors = countErrors(userInput, codeSnippet);
        const timeElapsed = (new Date() - startTime) / 1000; // in seconds
        const wpm = calculateWPM(userInput, timeElapsed);
        const accuracy = calculateAccuracy(userInput, codeSnippet);

        resultsDiv.innerHTML = `
            <p>Errors: ${errors}</p>
            <p>Time: ${timeElapsed.toFixed(2)}s</p>
            <p>WPM: ${wpm}</p>
            <p>Accuracy: ${accuracy}%</p>
        `;

        if (userInput === codeSnippet) {
            stopTest();
        }
    });

    inputArea.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            e.preventDefault();
            const start = inputArea.selectionStart;
            const end = inputArea.selectionEnd;
            inputArea.value = inputArea.value.substring(0, start) + "\t" + inputArea.value.substring(end);
            inputArea.selectionStart = inputArea.selectionEnd = start + 1;
        }

        // Keyboard shortcuts using Alt/Option key
        if (e.altKey) {
            if (e.key.toLowerCase() === "q") {
                stopTest();
            } else if (e.key.toLowerCase() === "r") {
                resetTest();
            } else if (e.key.toLowerCase() === "d") {
                toggleDarkMode();
            } else if (e.key.toLowerCase() === "w") {
                goToNormalMode();
            }
        }
    });

    // Disable pasting in the textarea
    inputArea.addEventListener("paste", (e) => {
        e.preventDefault();
    });

    function countErrors(input, snippet) {
        let errorCount = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== snippet[i]) errorCount++;
        }
        return errorCount;
    }

    function calculateWPM(input, time) {
        const words = input.split(/\s+/).length;
        const minutes = time / 60;
        return Math.round(words / minutes);
    }

    function calculateAccuracy(input, snippet) {
        const correctChars = input
            .split("")
            .filter((char, i) => char === snippet[i]).length;
        return Math.round((correctChars / snippet.length) * 100);
    }
});