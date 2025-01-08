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
