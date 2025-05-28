document.addEventListener("DOMContentLoaded", () => {
    const codeSnippets = {
        bash: {
            start: 'snippets/bash/hello.txt'
        },
        c: {
            start: 'snippets/c/hello.txt'
        },
        clojure: {
            start: 'snippets/clojure/hello.txt'
        },
        cobol: {
            start: 'snippets/cobol/hello.txt'
        },
        cpp: {
            start: 'snippets/cpp/hello.txt'
        },
        csharp: {
            start: 'snippets/csharp/hello.txt'
        },
        dart: {
            start: 'snippets/dart/hello.txt'
        },
        elixir: {
            start: 'snippets/elixir/hello.txt'
        },
        erlang: {
            start: 'snippets/erlang/hello.txt'
        },
        fortran: {
            start: 'snippets/fortran/hello.txt'
        },
        go: {
            start: 'snippets/go/hello.txt'
        },
        haskell: {
            start: 'snippets/haskell/hello.txt'
        },
        kotlin: {
            start: 'snippets/kotlin/hello.txt'
        },
        java: {
            start: 'snippets/java/hello.txt'
        },
        javascript: {
            start: 'snippets/javascript/hello.txt',
            variables: 'snippets/javascript/variables.txt',
            control_flow: 'snippets/javascript/control_flow.txt',
            functions: 'snippets/javascript/functions.txt'
        },
        julia: {
            start: 'snippets/julia/hello.txt'
        },
        lua: {
            start: 'snippets/lua/hello.txt'
        },
        php: {
            start: 'snippets/php/hello.txt'
        },
        python: {
            start: 'snippets/python/hello.txt',
            variables: 'snippets/python/variables.txt',
            control_flow: 'snippets/python/control_flow.txt',
            functions: 'snippets/python/functions.txt'
        },
        r: {
            start: 'snippets/r/hello.txt'
        },
        rust: {
            start: 'snippets/rust/hello.txt'
        },
        scala: {
            start: 'snippets/scala/hello.txt'
        },
        swift: {
            start: 'snippets/swift/hello.txt'
        },
        typescript: {
            start: 'snippets/typescript/hello.txt'
        },
        zig: {
            start: 'snippets/zig/hello.txt',
            variables: 'snippets/zig/variables.txt',
            control_flow: 'snippets/zig/control_flow.txt',
            functions: 'snippets/zig/functions.txt'
        }
    };

    let currentLanguage = 'zig';
    let currentTopic = 'start';
    let codeSnippet = '';
    let monacoEditor;

    const snippetDiv = document.getElementById("snippet");
    const resultsDiv = document.getElementById("results");
    const body = document.body;
    const languageSelect = document.getElementById("language-select");
    const topicSelect = document.getElementById("topic-select");
    const monacoContainer = document.getElementById("monaco-editor-container");
    const resetButton = document.getElementById('reset-button');
    const stopButton = document.getElementById('stop-button');
    const darkModeButton = document.getElementById('dark-mode-button');
    const lightModeButton = document.getElementById('light-mode-button');

    async function loadSnippet() {
    const filePath = codeSnippets[currentLanguage]?.[currentTopic];
    
    if (!filePath) {
        console.error("Snippet not found for:", currentLanguage, currentTopic);
        snippetDiv.textContent = `No snippet available for ${currentLanguage}/${currentTopic}`;
        codeSnippet = '';
        if (monaco && monacoEditor) {
            monacoEditor.setValue('');
        }
        return;
    }

    try {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`Failed to load snippet (HTTP ${response.status})`);
        }
        
        const text = await response.text();
        
        if (!text.trim()) {
            throw new Error('Snippet file is empty');
        }
        
        // Successfully loaded snippet
        codeSnippet = text;
        snippetDiv.textContent = codeSnippet;
        
        // Safely update Monaco Editor
        if (monaco && monacoEditor) {
            monacoEditor.setValue(''); // Start with empty editor
            
            // Check if the model exists before setting language
            const model = monacoEditor.getModel();
            if (model) {
                model.setLanguage(currentLanguage);
            }
        }
        
        resetTest();
        
    } catch (error) {
        console.error("Could not load snippet:", error, "Path:", filePath);
        
        // User-friendly error message
        const errorMsg = error.message.includes('HTTP') 
            ? `Unable to load snippet file. Please check if ${filePath} exists.`
            : `Error loading snippet: ${error.message}`;
            
        snippetDiv.textContent = errorMsg;
        codeSnippet = '';
        
        if (monaco && monacoEditor) {
            monacoEditor.setValue('');
        }
    }
}

    function populateTopics() {
        topicSelect.innerHTML = '';
        const topics = Object.keys(codeSnippets[currentLanguage] || {});
        topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic.charAt(0).toUpperCase() + topic.slice(1).replace(/_/g, ' ');
            topicSelect.appendChild(option);
        });
        if (topics.includes(currentTopic)) {
            topicSelect.value = currentTopic;
        } else if (topics.length > 0) {
            currentTopic = topics[0];
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
        cancelAnimationFrame(timeUpdateId);
        if (monacoEditor) {
            monacoEditor.setValue(''); // Reset to empty editor
        }
    }

    function stopTest() {
        isRunning = false;
        cancelAnimationFrame(timeUpdateId);
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
    let timeUpdateId;

    function updateTime() {
        if (isRunning) {
            const timeElapsed = (new Date() - startTime) / 1000;
            const userInput = monacoEditor.getValue();
            errors = countErrors(userInput, codeSnippet);
            const wpm = calculateWPM(userInput, timeElapsed);
            const accuracy = calculateAccuracy(userInput, codeSnippet);

            resultsDiv.innerHTML = `
                <p>Errors: ${errors}</p>
                <p>Time: ${timeElapsed.toFixed(2)}s</p>
                <p>WPM: ${wpm}</p>
                <p>Accuracy: ${accuracy}%</p>
            `;
            
            timeUpdateId = requestAnimationFrame(updateTime);
        }
    }

    function populateLanguageSelect() {
        languageSelect.innerHTML = '';
        const languages = Object.keys(codeSnippets);
        languages.sort().forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
            languageSelect.appendChild(option);
        });
        languageSelect.value = currentLanguage;
    }

    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(monacoContainer, {
            value: '', // Start with empty editor
            language: currentLanguage,
            theme: isDarkMode ? 'vs-dark' : 'vs-light',
            readOnly: false,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            minimap: { enabled: false }
        });

        populateLanguageSelect();
        populateTopics();
        loadSnippet();

        monacoEditor.onDidChangeModelContent(() => {
            if (!isRunning && codeSnippet) {
                isRunning = true;
                startTime = new Date();
                updateTime();
            }

            const userInput = monacoEditor.getValue();
            if (userInput === codeSnippet && codeSnippet) {
                isRunning = false;
                cancelAnimationFrame(timeUpdateId);
                resultsDiv.innerHTML += "<p>Test Completed!</p>";
            }
        });
    });

    document.addEventListener("keydown", (e) => { // Listen on the document
        if (e.altKey) {
            if (e.key.toLowerCase() === "q") {
                stopTest();
            } else if (e.key.toLowerCase() === "r") {
                resetTest();
            } else if (e.key.toLowerCase() === "b") {
                toggleDarkMode();
            } else if (e.key.toLowerCase() === "w") {
                goToNormalMode();
            }
        }
    });

    if (languageSelect) {
        languageSelect.addEventListener("change", (event) => {
            currentLanguage = event.target.value;
            populateTopics();
            if (monacoEditor) {
                monacoEditor.getModel().setLanguage(currentLanguage);
            }
        });
    }

    if (topicSelect) {
        topicSelect.addEventListener("change", (event) => {
            currentTopic = event.target.value;
            loadSnippet();
        });
    }

    function countErrors(input, snippet) {
        let errorCount = 0;
        for (let i = 0; i < Math.max(input.length, snippet.length); i++) {
            if (input[i] !== (snippet[i] || '')) {
                errorCount++;
            }
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
            .filter((char, i) => char === (snippet[i] || '')).length;
        return snippet.length > 0 ? Math.round((correctChars / snippet.length) * 100) : 0;
    }

    renderUserInput();

    if (resetButton) {
        resetButton.addEventListener('click', resetTest);
    }

    if (stopButton) {
        stopButton.addEventListener('click', stopTest);
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    if (lightModeButton) {
        lightModeButton.addEventListener('click', goToNormalMode);
    }
});
