document.addEventListener("DOMContentLoaded", () => {
    const codeSnippets = {
        zig: {
            variables: 'snippets/zig/variables.txt',
            control_flow: 'snippets/zig/control_flow.txt',
            functions: 'snippets/zig/functions.txt',
        },
        javascript: {
            variables: 'snippets/javascript/variables.txt',
            control_flow: 'snippets/javascript/control_flow.txt',
            functions: 'snippets/javascript/functions.txt',
        },
        python: {
            variables: 'snippets/python/variables.txt',
            control_flow: 'snippets/python/control_flow.txt',
            functions: 'snippets/python/functions.txt',
        },
    };

    let currentLanguage = 'zig';
    let currentTopic = 'variables';
    let codeSnippet = '';
    let monacoEditor;

    const snippetDiv = document.getElementById("snippet");
    const resultsDiv = document.getElementById("results");
    const body = document.body;
    const languageSelect = document.getElementById("language-select");
    const topicSelect = document.getElementById("topic-select");
    const monacoContainer = document.getElementById("monaco-editor-container");

    function loadSnippet() {
        const filePath = codeSnippets[currentLanguage]?.[currentTopic];
        if (filePath) {
            fetch(filePath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    codeSnippet = text;
                    snippetDiv.textContent = codeSnippet;
                    if (monaco && monacoEditor) {
                        monacoEditor.setValue(codeSnippet);
                        monacoEditor.getModel().setLanguage(currentLanguage); // Monaco infers from content, but you can be explicit
                    }
                    resetTest();
                })
                .catch(error => {
                    console.error("Could not load snippet:", error);
                    snippetDiv.textContent = "Error loading snippet.";
                    codeSnippet = '';
                    if (monaco && monacoEditor) {
                        monacoEditor.setValue('');
                    }
                });
        } else {
            console.error("Snippet not found for:", currentLanguage, currentTopic);
            snippetDiv.textContent = "Snippet not found.";
            codeSnippet = '';
            if (monaco && monacoEditor) {
                monacoEditor.setValue('');
            }
        }
    }

    function populateTopics() {
        topicSelect.innerHTML = ''; // Clear previous options
        const topics = Object.keys(codeSnippets[currentLanguage] || {});
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic.charAt(0).toUpperCase() + topic.slice(1).replace(/_/g, ' '); // Format topic name
            topicSelect.appendChild(option);
        });
        if (topics.includes(currentTopic)) {
            topicSelect.value = currentTopic;
        } else if (topics.length > 0) {
            currentTopic = topics[0]; // Set default topic if previous is not available
            topicSelect.value = currentTopic;
        } else {
            currentTopic = '';
            snippetDiv.textContent = '';
            if (monacoEditor) {
                monacoEditor.setValue('');
            }
        }
        loadSnippet();
    }

    function resetTest() {
        startTime = null;
        errors = 0;
        resultsDiv.innerHTML = "";
        isRunning = false;
        if (monacoEditor) {
            monacoEditor.setValue(codeSnippet);
        }
    }

    function stopTest() {
        isRunning = false;
        resultsDiv.innerHTML += "<p>Test Stopped.</p>";
    }

    function toggleDarkMode() {
        body.classList.add("dark-mode");
        isDarkMode = true;
        if (monacoEditor) {
            monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs-light');
        }
    }

    function goToNormalMode() {
        body.classList.remove("dark-mode");
        isDarkMode = false;
        if (monacoEditor) {
            monaco.editor.setTheme(isDarkMode ? 'vs-dark' : 'vs-light');
        }
    }

    function renderUserInput() {
        snippetDiv.textContent = codeSnippet;
    }

    let startTime;
    let errors = 0;
    let isDarkMode = false;
    let isRunning = false;

    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(monacoContainer, {
            value: codeSnippet,
            language: currentLanguage,
            theme: isDarkMode ? 'vs-dark' : 'vs-light',
            readOnly: false,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            minimap: { enabled: false }
        });

        populateTopics(); // Initial population of topics
        loadSnippet(); // Initial load of the default snippet

        monacoEditor.onDidChangeModelContent(() => {
            if (!isRunning && codeSnippet) {
                isRunning = true;
                startTime = new Date();
            }

            const userInput = monacoEditor.getValue();
            errors = countErrors(userInput, codeSnippet);
            const timeElapsed = (new Date() - startTime) / 1000;
            const wpm = calculateWPM(userInput, codeSnippet);
            const accuracy = calculateAccuracy(userInput, codeSnippet);

            resultsDiv.innerHTML = `
                <p>Errors: ${errors}</p>
                <p>Time: ${timeElapsed.toFixed(2)}s</p>
                <p>WPM: ${wpm}</p>
                <p>Accuracy: ${accuracy}%</p>
            `;

            if (userInput === codeSnippet && codeSnippet) {
                stopTest();
            }
        });
    });

    if (languageSelect) {
        languageSelect.addEventListener("change", (event) => {
            currentLanguage = event.target.value;
            populateTopics(); // Update topics when language changes
            if (monacoEditor) {
                monacoEditor.getModel().setLanguage(currentLanguage);
            }
        });
    }

    if (topicSelect) {
        topicSelect.addEventListener("change", (event) => {
            currentTopic = event.target.value;
            loadSnippet(); // Load new snippet when topic changes
        });
    }

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

    renderUserInput();

    const darkModeButton = document.getElementById('dark-mode-button');
    const normalModeButton = document.getElementById('normal-mode-button');

    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    if (normalModeButton) {
        normalModeButton.addEventListener('click', goToNormalMode);
    }
});