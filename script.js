document.addEventListener("DOMContentLoaded", () => {
    const codeSnippets = {
        assembly: {
            start: 'snippets/assembly/hello.txt',
            data: 'snippets/assembly/data-section.txt',
            text: 'snippets/assembly/text-section.txt',
            comments: 'snippets/assembly/comments.txt',
            variables: 'snippets/assembly/variables.txt',
            integers: 'snippets/assembly/integers.txt',
            floating_point: 'snippets/assembly/floating-point.txt',
            strings: 'snippets/assembly/strings.txt',
            arrays: 'snippets/assembly/arrays.txt',
            constants: 'snippets/assembly/constants.txt',
            arithmetic: 'snippets/assembly/arithmetic.txt',
            basic_math: 'snippets/assembly/basic-math.txt',
            division: 'snippets/assembly/division.txt',
            increment_decrement: 'snippets/assembly/increment-decrement.txt',
            bitwise: 'snippets/assembly/bitwise.txt',
            shifts: 'snippets/assembly/shifts.txt',
            registers: 'snippets/assembly/registers.txt',
            index_registers: 'snippets/assembly/index-registers.txt',
            extended_registers: 'snippets/assembly/extended-registers.txt',
            register_sizes: 'snippets/assembly/register-sizes.txt',
            immediate_addressing: 'snippets/assembly/immediate-addressing.txt',
            register_addressing: 'snippets/assembly/register-addressing.txt',
            memory_addressing: 'snippets/assembly/memory-addressing.txt',
            indexed_addressing: 'snippets/assembly/indexed-addressing.txt',
            general_purposes: 'snippets/assembly/general-purposes.txt',
            multiple_output: 'snippets/assembly/multiple-output.txt',
            conditionals: 'snippets/assembly/conditionals.txt',
            jumps: 'snippets/assembly/jumps.txt',
            comparisons: 'snippets/assembly/comparisons.txt',
            switch_case: 'snippets/assembly/switch-case.txt',
            loops: 'snippets/assembly/loops.txt',
            flags: 'snippets/assembly/flags.txt',
            functions: 'snippets/assembly/functions.txt',
            stack_operations: 'snippets/assembly/stack-operation.txt',
            parameters: 'snippets/assembly/parameters.txt',
            local_variables: 'snippets/assembly/local-variables.txt',
            linux_syscall: 'snippets/assembly/linux-syscall.txt',
            file_operations: 'snippets/assembly/file-operations.txt',
            memory_management: 'snippets/assembly/memory-management.txt',
            process_control: 'snippets/assembly/process-control.txt',
            macros: 'snippets/assembly/macros.txt',
            sections: 'snippets/assembly/sections.txt',
            linking: 'snippets/assembly/linking.txt',
            optimization: 'snippets/assembly/optimization.txt',
            string_operations: 'snippets/assembly/string-operations.txt',
            data_structures: 'snippets/assembly/data-structures.txt',
            algorithms: 'snippets/assembly/algorithms.txt',
            interfacing: 'snippets/assembly/interfacing.txt',
        },
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
        git: {
            start: 'snippets/git/hello.txt'
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
        mokoto: {
            start: 'snippets/mokoto/hello.txt'
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
        ruby: {
            start: 'snippets/ruby/hello.txt'
        },
        rust: {
            start: 'snippets/rust/hello.txt'
        },
        scala: {
            start: 'snippets/scala/hello.txt'
        },
        solidity: {
            start: 'snippets/solidity/hello.txt'
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

    let currentLanguage = 'assembly';
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
    
    // Stats tracking
    let stats = loadStats();
    
    function loadStats() {
        try {
            const savedStats = localStorage.getItem('syntaxed-stats');
            return savedStats ? JSON.parse(savedStats) : {
                languages: {},
                totalTests: 0,
                bestWPM: 0,
                bestAccuracy: 0
            };
        } catch (error) {
            console.error("Error loading stats:", error);
            return {
                languages: {},
                totalTests: 0,
                bestWPM: 0,
                bestAccuracy: 0
            };
        }
    }
    
    function saveStats() {
        try {
            localStorage.setItem('syntaxed-stats', JSON.stringify(stats));
        } catch (error) {
            console.error("Error saving stats:", error);
        }
    }
    
    function updateStats(language, topic, wpm, accuracy, errors) {
        // Update language-specific stats
        if (!stats.languages[language]) {
            stats.languages[language] = {
                tests: 0,
                bestWPM: 0,
                bestAccuracy: 0,
                topics: {}
            };
        }
        
        const langStats = stats.languages[language];
        langStats.tests++;
        langStats.bestWPM = Math.max(langStats.bestWPM, wpm);
        langStats.bestAccuracy = Math.max(langStats.bestAccuracy, accuracy);
        
        // Update topic-specific stats
        if (!langStats.topics[topic]) {
            langStats.topics[topic] = {
                tests: 0,
                bestWPM: 0,
                bestAccuracy: 0,
                lastCompleted: null
            };
        }
        
        const topicStats = langStats.topics[topic];
        topicStats.tests++;
        topicStats.bestWPM = Math.max(topicStats.bestWPM, wpm);
        topicStats.bestAccuracy = Math.max(topicStats.bestAccuracy, accuracy);
        topicStats.lastCompleted = new Date().toISOString();
        
        // Update global stats
        stats.totalTests++;
        stats.bestWPM = Math.max(stats.bestWPM, wpm);
        stats.bestAccuracy = Math.max(stats.bestAccuracy, accuracy);
        
        // Save to localStorage
        saveStats();
    }
    
    function displayPersonalBest() {
        const langStats = stats.languages[currentLanguage];
        const topicStats = langStats?.topics[currentTopic];
        
        if (!topicStats || topicStats.tests === 0) {
            return '';
        }
        
        return `
            <div class="personal-best">
                <h3>Personal Best</h3>
                <div class="best-stats">
                    <div class="best-stat">
                        <span class="best-label">Best WPM:</span>
                        <span class="best-value">${topicStats.bestWPM}</span>
                    </div>
                    <div class="best-stat">
                        <span class="best-label">Best Accuracy:</span>
                        <span class="best-value">${topicStats.bestAccuracy}%</span>
                    </div>
                    <div class="best-stat">
                        <span class="best-label">Completed:</span>
                        <span class="best-value">${topicStats.tests} times</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Optimized timing and state management
    // Move normalizeForComparison outside the class to make it globally available
    function normalizeForComparison(str) {
        return str
            .replace(/\r\n/g, '\n')        // Normalize line endings (CRLF to LF)
            .replace(/\t/g, '    ')        // Normalize tabs to 4 spaces
            .replace(/\s+$/gm, '')         // Remove trailing whitespace per line
            .trim();                       // Remove leading/trailing whitespace
    }

    class TypingTest {
        constructor() {
            this.startTime = null;
            this.errors = 0;
            this.isRunning = false;
            this.timeUpdateId = null;
            this.lastUpdateTime = 0;
            this.updateInterval = 100; // Update every 100ms instead of every frame
            this.finalWPM = 0;
            this.finalAccuracy = 0;
            this.completionProgress = 0;
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
            if (typeof monaco !== 'undefined' && monaco && monacoEditor) {
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
            
            // Use normalized strings for both error counting and completion check
            const normalizedInput = normalizeForComparison(userInput);
            const normalizedTarget = normalizeForComparison(codeSnippet);
            
            // Count errors using normalized strings for more accurate feedback
            this.errors = this.countErrors(userInput, codeSnippet);
            const wpm = this.calculateWPM(userInput, timeElapsed);
            const accuracy = this.calculateAccuracy(userInput, codeSnippet);
            
            // Calculate completion progress
            this.completionProgress = normalizedTarget.length > 0 
                ? Math.min(normalizedInput.length / normalizedTarget.length * 100, 100) 
                : 0;

            this.renderResults(timeElapsed, wpm, accuracy);
            
            // Check completion with normalized strings
            if (normalizedInput === normalizedTarget && normalizedTarget) {
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
                    <div class="metric">
                        <span class="metric-label">Progress:</span>
                        <span class="metric-value">${Math.round(this.completionProgress)}%</span>
                    </div>
                </div>
            `;
        }

        complete() {
    this.stop();
    
    // Calculate final stats
    const timeElapsed = (performance.now() - this.startTime) / 1000;
    const userInput = monacoEditor?.getValue() || '';
    this.finalWPM = this.calculateWPM(userInput, timeElapsed);
    this.finalAccuracy = this.calculateAccuracy(userInput, codeSnippet);
    
    // Update stats FIRST
    updateStats(
        currentLanguage,
        currentTopic,
        this.finalWPM,
        this.finalAccuracy,
        this.errors
    );
    
    // Then REPLACE (not append) the entire results
    resultsDiv.innerHTML = `
        <div class="metrics">
            <div class="metric">
                <span class="metric-label">Final Time:</span>
                <span class="metric-value">${timeElapsed.toFixed(1)}s</span>
            </div>
            <div class="metric">
                <span class="metric-label">Final WPM:</span>
                <span class="metric-value">${this.finalWPM}</span>
            </div>
            <div class="metric">
                <span class="metric-label">Final Accuracy:</span>
                <span class="metric-value">${this.finalAccuracy}%</span>
            </div>
            <div class="metric">
                <span class="metric-label">Errors:</span>
                <span class="metric-value error-count">${this.errors}</span>
            </div>
        </div>
        <div class="completion-message">
            <p>🎉 Test Completed!</p>
            ${displayPersonalBest()}
        </div>
    `;
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

        // Enhanced error counting function
        countErrors(input, target) {
            // Normalize both strings to handle whitespace and line ending differences
            const normalizedInput = normalizeForComparison(input);
            const normalizedTarget = normalizeForComparison(target);
            
            let errorCount = 0;
            const maxLength = Math.max(normalizedInput.length, normalizedTarget.length);
            
            for (let i = 0; i < maxLength; i++) {
                if (normalizedInput[i] !== (normalizedTarget[i] || '')) {
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
    populateLanguageSelect();
    populateTopics();
    
    // Helper function to check if Monaco is ready
    function isMonacoReady() {
        return typeof monaco !== 'undefined' && monaco && monacoEditor;
    }

    async function loadSnippet() {
        const filePath = codeSnippets[currentLanguage]?.[currentTopic];
        
        if (!filePath) {
            console.error("Snippet not found for:", currentLanguage, currentTopic);
            snippetDiv.textContent = `No snippet available for ${currentLanguage}/${currentTopic}`;
            codeSnippet = '';
            // if (isMonacoReady()) {
            //    monacoEditor.setValue('');
            //}
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
            
            if (typeof monaco !== 'undefined' && monaco && monacoEditor) {
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
            } else if (e.key.toLowerCase() === "s") {
                showStatsModal();
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
    

    if (document.getElementById('stats-button')) {
    document.getElementById('stats-button').addEventListener('click', showStatsModal);
    }
    
    function showStatsModal() {
        // Create modal container
        const modal = document.createElement('div');
        modal.className = 'stats-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'stats-title');
        modal.setAttribute('aria-modal', 'true');
        
        // Get global stats
        const globalStats = `
            <div class="stats-section">
                <h3>Global Stats</h3>
                <p>Total Tests Completed: ${stats.totalTests}</p>
                <p>Best WPM: ${stats.bestWPM}</p>
                <p>Best Accuracy: ${stats.bestAccuracy}%</p>
            </div>
        `;
        
        // Get language stats
        let languageStatsHTML = '';
        Object.keys(stats.languages).forEach(lang => {
            const langStats = stats.languages[lang];
            languageStatsHTML += `
                <details class="language-stats">
                    <summary>${lang.charAt(0).toUpperCase() + lang.slice(1)} (${langStats.tests} tests)</summary>
                    <div class="language-details">
                        <p>Best WPM: ${langStats.bestWPM}</p>
                        <p>Best Accuracy: ${langStats.bestAccuracy}%</p>
                        <h4>Topics:</h4>
                        <ul>
            `;
            
            Object.keys(langStats.topics).forEach(topic => {
                const topicStats = langStats.topics[topic];
                const lastCompleted = topicStats.lastCompleted 
                    ? new Date(topicStats.lastCompleted).toLocaleDateString() 
                    : 'Never';
                
                languageStatsHTML += `
                    <li>
                        <strong>${topic.charAt(0).toUpperCase() + topic.slice(1).replace(/_/g, ' ')}</strong>
                        <p>Best WPM: ${topicStats.bestWPM}</p>
                        <p>Best Accuracy: ${topicStats.bestAccuracy}%</p>
                        <p>Completed: ${topicStats.tests} times</p>
                        <p>Last completed: ${lastCompleted}</p>
                    </li>
                `;
            });
            
            languageStatsHTML += `
                        </ul>
                    </div>
                </details>
            `;
        });
        
        // Create modal content
        modal.innerHTML = `
            <div class="stats-modal-content">
                <button class="close-modal" aria-label="Close stats">×</button>
                <h2 id="stats-title">Your Typing Statistics</h2>
                ${globalStats}
                <div class="stats-section">
                    <h3>Language Stats</h3>
                    ${languageStatsHTML || '<p>No language stats available yet.</p>'}
                </div>
                <button class="reset-stats">Reset All Stats</button>
            </div>
        `;
        
        // Add modal to the document
        document.body.appendChild(modal);
        
        // Focus the close button for keyboard accessibility
        modal.querySelector('.close-modal').focus();
        
        // Add event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.querySelector('.reset-stats').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all your typing statistics? This cannot be undone.')) {
                stats = {
                    languages: {},
                    totalTests: 0,
                    bestWPM: 0,
                    bestAccuracy: 0
                };
                saveStats();
                document.body.removeChild(modal);
            }
        });
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function closeModal(e) {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', closeModal);
            }
        });
    }
});
