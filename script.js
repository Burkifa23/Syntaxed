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
    
    // Optimized timing and state management
    class TypingTest {
        constructor() {
            this.startTime = null;
            this.errors = 0;
            this.isRunning = false;
            this.timeUpdateId = null;
            this.lastUpdateTime = 0;
            this.updateInterval = 100; // Update every 100ms instead of every frame
        }

        start() {
            if (this.isRunning) return;
            
            this.isRunning = true;
            this.startTime = performance.now();
            this.scheduleUpdate();
        }

        stop() {
            this.isRunning = false;
            if (this.timeUpdateId) {
                cancelAnimationFrame(this.timeUpdateId);
                this.timeUpdateId = null;
            }
        }

        reset() {
            this.stop();
            this.startTime = null;
            this.errors = 0;
            this.clearResults();
            if (isMonacoReady()) {
                monacoEditor.setValue('');
            }
        }

        scheduleUpdate() {
            if (!this.isRunning) return;

            this.timeUpdateId = requestAnimationFrame((currentTime) => {
                if (currentTime - this.lastUpdateTime >= this.updateInterval) {
                    this.updateMetrics();
                    this.lastUpdateTime = currentTime;
                }
                this.scheduleUpdate();
            });
        }

        updateMetrics() {
            if (!this.isRunning || !this.startTime) return;

            const timeElapsed = (performance.now() - this.startTime) / 1000;
            const userInput = monacoEditor?.getValue() || '';
            
            this.errors = this.countErrors(userInput, codeSnippet);
            const wpm = this.calculateWPM(userInput, timeElapsed);
            const accuracy = this.calculateAccuracy(userInput, codeSnippet);

            this.renderResults(timeElapsed, wpm, accuracy);
            
            // Check completion
            if (userInput === codeSnippet && codeSnippet) {
                this.complete();
            }
        }

        renderResults(time, wpm, accuracy) {
            resultsDiv.innerHTML = `
                <div class="metrics">
                    <div class="metric">
                        <span class="metric-label">Time:</span>
                        <span class="metric-value">${time.toFixed(1)}s</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">WPM:</span>
                        <span class="metric-value">${wpm}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Accuracy:</span>
                        <span class="metric-value">${accuracy}%</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Errors:</span>
                        <span class="metric-value error-count">${this.errors}</span>
                    </div>
                </div>
            `;
        }

        complete() {
            this.stop();
            resultsDiv.innerHTML += '<div class="completion-message">🎉 Test Completed!</div>';
        }

        // Debounced content change handler
        handleContentChange = this.debounce(() => {
            if (!this.isRunning && codeSnippet && monacoEditor?.getValue()) {
                this.start();
            }
        }, 150);

        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        countErrors(input, target) {
            let errorCount = 0;
            const maxLength = Math.max(input.length, target.length);
            
            for (let i = 0; i < maxLength; i++) {
                if (input[i] !== (target[i] || '')) {
                    errorCount++;
                }
            }
            return errorCount;
        }

        calculateWPM(input, timeInSeconds) {
            if (timeInSeconds < 1) return 0;
            const words = input.trim().split(/\s+/).length;
            const minutes = timeInSeconds / 60;
            return Math.round(words / minutes);
        }

        calculateAccuracy(input, target) {
            if (target.length === 0) return 100;
            
            const correctChars = input
                .split("")
                .filter((char, i) => char === (target[i] || '')).length;
            
            return Math.round((correctChars / target.length) * 100);
        }

        clearResults() {
            resultsDiv.innerHTML = '';
        }
    }

    // Create instance
    const typingTest = new TypingTest();

    // Helper function to check if Monaco is ready
    function isMonacoReady() {
        return monaco && monacoEditor;
    }

    async function loadSnippet() {
        const filePath = codeSnippets[currentLanguage]?.[currentTopic];
        
        if (!filePath) {
            console.error("Snippet not found for:", currentLanguage, currentTopic);
            snippetDiv.textContent = `No snippet available for ${currentLanguage}/${currentTopic}`;
            codeSnippet = '';
            if (isMonacoReady()) {
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
            if (isMonacoReady()) {
                monacoEditor.setValue(''); // Start with empty editor
                
                // Check if the model exists before setting language
                const model = monacoEditor.getModel();
                if (model) {
                    monaco.editor.setModelLanguage(model, currentLanguage);
                }
            }
            
            typingTest.reset();
            
        } catch (error) {
            console.error("Could not load snippet:", error, "Path:", filePath);
            
            // User-friendly error message
            const errorMsg = error.message.includes('HTTP') 
                ? `Unable to load snippet file. Please check if ${filePath} exists.`
                : `Error loading snippet: ${error.message}`;
                
            snippetDiv.textContent = errorMsg;
            codeSnippet = '';
            
            if (isMonacoReady()) {
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

    function toggleDarkMode() {
        body.classList.add("dark-mode");
        isDarkMode = true;
        if (isMonacoReady()) {
            monaco.editor.setTheme('vs-dark');
        }
    }

    function goToNormalMode() {
        body.classList.remove("dark-mode");
        isDarkMode = false;
        if (isMonacoReady()) {
            monaco.editor.setTheme('vs-light');
        }
    }

    let isDarkMode = false;

    require(['vs/editor/editor.main'], function () {
        monacoEditor = monaco.editor.create(monacoContainer, {
            value: '', // Start with empty editor
            language: currentLanguage,
            theme: isDarkMode ? 'vs-dark' : 'vs-light',
            readOnly: false,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            minimap: { enabled: false },
            padding: {
                top: 15,
                bottom: 15
            }
        });

        populateLanguageSelect();
        populateTopics();
        loadSnippet();

        // Use the debounced handler for content changes
        monacoEditor.onDidChangeModelContent(() => {
            typingTest.handleContentChange();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.altKey) {
            if (e.key.toLowerCase() === "q") {
                typingTest.stop();
                resultsDiv.innerHTML += "<p>Test Stopped.</p>";
            } else if (e.key.toLowerCase() === "r") {
                typingTest.reset();
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
            if (isMonacoReady()) {
                const model = monacoEditor.getModel();
                if (model) {
                    monaco.editor.setModelLanguage(model, currentLanguage);
                }
            }
        });
    }

    if (topicSelect) {
        topicSelect.addEventListener("change", (event) => {
            currentTopic = event.target.value;
            loadSnippet();
        });
    }

    if (resetButton) {
        resetButton.addEventListener('click', () => typingTest.reset());
    }

    if (stopButton) {
        stopButton.addEventListener('click', () => {
            typingTest.stop();
            resultsDiv.innerHTML += "<p>Test Stopped.</p>";
        });
    }

    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    if (lightModeButton) {
        lightModeButton.addEventListener('click', goToNormalMode);
    }
});
