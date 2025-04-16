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

    snippetDiv.textContent = codeSnippet;

    let startTime;
    let errors = 0;

    inputArea.addEventListener("input", (e) => {
        // Existing input event listener code remains the same
        const userInput = e.target.value;

        if (!startTime) {
            startTime = new Date();
        }

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
    });

    // New event listener for Tab key press
    inputArea.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            e.preventDefault(); // Prevent default tab behavior (focus change)

            const start = inputArea.selectionStart;
            const end = inputArea.selectionEnd;

            // Insert a tab character at the current cursor position
            inputArea.value = inputArea.value.substring(0, start) + "\t" + inputArea.value.substring(end);

            // Move the cursor position after the inserted tab
            inputArea.selectionStart = inputArea.selectionEnd = start + 1;
        }
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
