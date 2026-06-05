// Repository database of Shai Kfir (@shaik)
const repositories = [
    {
        name: "emoji52py",
        description: "Emoji Art generator, implemented by Codex/GPT 5.2.",
        language: "Python",
        url: "https://github.com/shaik/emoji52py",
        updatedAt: "2026-01-12"
    },
    {
        name: "targem",
        description: "A Chrome extension that instantly translates and summarizes web page content into Hebrew in one click.",
        language: "JavaScript",
        url: "https://github.com/shaik/targem",
        updatedAt: "2026-01-07"
    },
    {
        name: "Larn",
        description: "A customized mod of the classic roguelike game Larn.",
        language: "JavaScript",
        url: "https://github.com/shaik/Larn",
        updatedAt: "2025-12-04"
    },
    {
        name: "marvin",
        description: "Personal memory assistant (voice/text) with semantic retrieval — powered by Marvin MCP agent.",
        language: "Python",
        url: "https://github.com/shaik/marvin",
        updatedAt: "2025-08-20"
    },
    {
        name: "tashbetz",
        description: "Hebrew crossword solver and crossword construction assistant.",
        language: "HTML",
        url: "https://github.com/shaik/tashbetz",
        updatedAt: "2025-05-19"
    },
    {
        name: "ISD",
        description: "Interior Stylie Design visualizer and planning tool.",
        language: "Python",
        url: "https://github.com/shaik/ISD",
        updatedAt: "2025-03-29"
    },
    {
        name: "emoji-art",
        description: "Image to emoji-art ASCII converter command line script.",
        language: "Python",
        url: "https://github.com/shaik/emoji-art",
        updatedAt: "2025-02-22"
    },
    {
        name: "hebrew-anagram-solver",
        description: "Command line utility to solve Hebrew anagrams using dictionary lookups.",
        language: "Python",
        url: "https://github.com/shaik/hebrew-anagram-solver",
        updatedAt: "2025-02-18"
    },
    {
        name: "gibberizer",
        description: "A Python utility to transform text inputs into various forms of mock gibberish.",
        language: "Python",
        url: "https://github.com/shaik/gibberizer",
        updatedAt: "2025-02-16"
    },
    {
        name: "makarasham",
        description: "A historical weather web application to query conditions on past calendar dates.",
        language: "JavaScript",
        url: "https://github.com/shaik/makarasham",
        updatedAt: "2025-02-08"
    },
    {
        name: "AnagramGPT",
        description: "A Hebrew anagram solver script written in Perl.",
        language: "Perl",
        url: "https://github.com/shaik/AnagramGPT",
        updatedAt: "2025-02-05"
    },
    {
        name: "loratuv",
        description: "A script utilizing language models to detect positive and negative sentiment elements.",
        language: "Python",
        url: "https://github.com/shaik/loratuv",
        updatedAt: "2025-01-26"
    },
    {
        name: "emojiArt_v1",
        description: "Early version of the ASCII art generator rendering terminal output using emojis.",
        language: "Python",
        url: "https://github.com/shaik/emojiArt_v1",
        updatedAt: "2025-01-24"
    },
    {
        name: "emojiArtCS",
        description: "JavaScript-based emoji art generator client side renderer.",
        language: "JavaScript",
        url: "https://github.com/shaik/emojiArtCS",
        updatedAt: "2024-01-10"
    },
    {
        name: "mezeg",
        description: "Weather forecaster for exact calendar dates using historical databases.",
        language: "Python",
        url: "https://github.com/shaik/mezeg",
        updatedAt: "2024-01-05"
    },
    {
        name: "emoji",
        description: "A utility to convert, map, and process string representations to emoji collections.",
        language: "Python",
        url: "https://github.com/shaik/emoji",
        updatedAt: "2023-12-23"
    },
    {
        name: "anagram",
        description: "Hebrew anagram dictionary loader and search indexing CLI.",
        language: "Python",
        url: "https://github.com/shaik/anagram",
        updatedAt: "2023-11-27"
    },
    {
        name: "lcd",
        description: "Arduino sketch for managing liquid crystal screen displays.",
        language: "C++",
        url: "https://github.com/shaik/lcd",
        updatedAt: "2021-10-21"
    },
    {
        name: "p15",
        description: "A TypeScript project experimenting with game loop mechanics and grid renderings.",
        language: "TypeScript",
        url: "https://github.com/shaik/p15",
        updatedAt: "2020-05-30"
    },
    {
        name: "tut1",
        description: "Hands-on tutorial project exploring server execution patterns using Deno.",
        language: "TypeScript",
        url: "https://github.com/shaik/tut1",
        updatedAt: "2020-05-23"
    },
    {
        name: "camctl",
        description: "Web camera controller software, binding HTML5 video objects to physical triggers.",
        language: "JavaScript",
        url: "https://github.com/shaik/camctl",
        updatedAt: "2018-02-03"
    },
    {
        name: "ard_measure_ditance",
        description: "Sonar-based distance measuring micro-controller program displaying values on a 7-segment display.",
        language: "C++",
        url: "https://github.com/shaik/ard_measure_ditance",
        updatedAt: "2015-08-01"
    },
    {
        name: "management-essentials",
        description: "Reading list and summaries site for key leadership and team management topics.",
        language: "HTML",
        url: "https://github.com/shaik/management-essentials",
        updatedAt: "2015-05-04"
    }
];

// Elements
const reposGrid = document.getElementById("repos-grid");
const searchInput = document.getElementById("repo-search");
const clearSearchBtn = document.getElementById("clear-search");
const tagsContainer = document.getElementById("tags-container");

// State
let activeLanguage = "all";
let searchQuery = "";

// Initialize
function init() {
    renderLanguages();
    renderRepos();
    setupListeners();
    setupCardGlowEffect();
}

// Render dynamic language filtering tags
function renderLanguages() {
    tagsContainer.innerHTML = '<button class="filter-tag active" data-lang="all">All</button>';
    const languages = new Set();
    repositories.forEach(repo => {
        if (repo.language) {
            languages.add(repo.language);
        }
    });

    // Sort languages alphabetically
    const sortedLangs = Array.from(languages).sort();

    // Add filters to container
    sortedLangs.forEach(lang => {
        const btn = document.createElement("button");
        btn.className = "filter-tag";
        btn.textContent = lang;
        btn.dataset.lang = lang.toLowerCase();
        tagsContainer.appendChild(btn);
    });
}

// Helper to format date
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', options);
}

// Get dot class corresponding to language
function getLanguageClass(lang) {
    if (!lang) return 'lang-other-dot';
    switch (lang.toLowerCase()) {
        case 'javascript': return 'lang-js-dot';
        case 'typescript': return 'lang-ts-dot';
        case 'python': return 'lang-py-dot';
        case 'html': return 'lang-html-dot';
        default: return 'lang-other-dot';
    }
}

// Render filtered repositories
function renderRepos() {
    reposGrid.innerHTML = "";

    const filtered = repositories.filter(repo => {
        const matchesSearch = repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesLang = activeLanguage === "all" || 
                            (repo.language && repo.language.toLowerCase() === activeLanguage.toLowerCase());
        
        return matchesSearch && matchesLang;
    });

    if (filtered.length === 0) {
        reposGrid.innerHTML = `
            <div class="no-results-state">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                <p>No repositories found matching your current filters.</p>
            </div>
        `;
        return;
    }

    // Sort by update date (newest first)
    filtered.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    filtered.forEach(repo => {
        const card = document.createElement("article");
        card.className = "repo-card";
        
        card.innerHTML = `
            <div class="repo-top">
                <div class="repo-name-wrap">
                    <h3 class="repo-name">${repo.name}</h3>
                    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-git-link" title="View repository">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                        </svg>
                    </a>
                </div>
                <p class="${repo.description ? 'repo-description' : 'repo-empty-desc'}">
                    ${repo.description || 'No description provided.'}
                </p>
            </div>
            <div class="repo-meta">
                <span class="repo-lang">
                    <span class="lang-dot ${getLanguageClass(repo.language)}"></span>
                    ${repo.language || 'Other'}
                </span>
                <span class="repo-date">Updated ${formatDate(repo.updatedAt)}</span>
            </div>
        `;
        reposGrid.appendChild(card);
    });
}

// Binds search and filter event listeners
function setupListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim().length > 0) {
            clearSearchBtn.style.display = "flex";
        } else {
            clearSearchBtn.style.display = "none";
        }
        renderRepos();
    });

    // Clear search button
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderRepos();
        searchInput.focus();
    });

    // Language buttons
    tagsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-tag");
        if (!btn) return;

        // Update active class
        document.querySelectorAll(".filter-tag").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        activeLanguage = btn.dataset.lang;
        renderRepos();
    });
}

// Premium radial cursor tracking spotlight effect on cards
function setupCardGlowEffect() {
    document.addEventListener("mousemove", (e) => {
        const cards = document.querySelectorAll(".project-card");
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
}

// Run initial execution
document.addEventListener("DOMContentLoaded", init);
