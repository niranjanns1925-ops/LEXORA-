// ── Bilingual UI strings ──────────────────────────────────────────────────────
const uiText = {
    en: {
        heading: "LEXORA",
        hint: "Hint:",
        guesses: "Incorrect guesses:",
        modalWin: "🎉 Congrats!",
        modalLose: "💀 Game Over!",
        foundWord: "You found the word:",
        correctWord: "The correct word was:",
        playAgain: "Play Again",
        logout: "Logout",
    },
    ta: {
        heading: "LEXORA",
        hint: "குறிப்பு:",
        guesses: "தவறான யூகங்கள்:",
        modalWin: "🎉 வாழ்த்துகள்!",
        modalLose: "💀 விளையாட்டு முடிந்தது!",
        foundWord: "நீங்கள் வார்த்தையை கண்டுபிடித்தீர்கள்:",
        correctWord: "சரியான வார்த்தை:",
        playAgain: "மீண்டும் விளையாடு",
        logout: "வெளியேறு",
    }
};

let activeLang = 'en';

// ── DOM references ────────────────────────────────────────────────────────────
const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// ── Game state ────────────────────────────────────────────────────────────────
let currentWord, currentHintEn, currentHintTa, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// ── Profile / Stats helpers ───────────────────────────────────────────────────
const playerKey = sessionStorage.getItem('hgPlayer') || localStorage.getItem('hgPlayer') || 'Guest';

function getProfile() {
    const def = { name: playerKey, avatar: '🎯' };
    return JSON.parse(localStorage.getItem('hgProfile_' + playerKey) || JSON.stringify(def));
}

function getStats() {
    const def = { played: 0, won: 0, lost: 0, streak: 0, bestStreak: 0 };
    return JSON.parse(localStorage.getItem('hgStats_' + playerKey) || JSON.stringify(def));
}
function saveStats(obj) {
    localStorage.setItem('hgStats_' + playerKey, JSON.stringify(obj));
}

function recordGame(won) {
    const s = getStats();
    s.played++;
    if (won) {
        s.won++;
        s.streak++;
        if (s.streak > s.bestStreak) s.bestStreak = s.streak;
    } else {
        s.lost++;
        s.streak = 0;
    }
    saveStats(s);
}

// ── Load avatar + name into top bar ──────────────────────────────────────────
function loadTopBar() {
    const p = getProfile();
    const avatarEl = document.getElementById('top-avatar');
    const usernameEl = document.getElementById('top-username');
    if (avatarEl) avatarEl.textContent = p.avatar;
    if (usernameEl) usernameEl.textContent = p.name;
}

// ── Helper: render hint label ─────────────────────────────────────────────────
function renderHint() {
    const el = document.getElementById('hint-label');
    if (!el) return;
    const val = activeLang === 'ta' ? currentHintTa : currentHintEn;
    el.innerHTML = `${uiText[activeLang].hint} <b>${val}</b>`;
}

// ── Helper: render guesses label ──────────────────────────────────────────────
function renderGuesses() {
    const el = document.getElementById('guesses-label');
    if (!el) return;
    el.innerHTML = `${uiText[activeLang].guesses} <b>${wrongGuessCount} / ${maxGuesses}</b>`;
}

// ── Language switch ───────────────────────────────────────────────────────────
function switchLang(lang) {
    activeLang = lang;
    const heading = document.getElementById('game-heading');
    if (heading) heading.innerText = uiText[lang].heading;
    renderHint();
    renderGuesses();
    const btnPA = document.getElementById('btn-play-again');
    const btnOut = document.getElementById('btn-logout');
    if (btnPA) btnPA.innerText = uiText[lang].playAgain;
    if (btnOut) btnOut.title = uiText[lang].logout;
    document.getElementById('ls-en')?.classList.toggle('active', lang === 'en');
    document.getElementById('ls-ta')?.classList.toggle('active', lang === 'ta');
    document.body.style.fontFamily = lang === 'ta'
        ? "'Noto Sans Tamil', sans-serif"
        : "'Open Sans', sans-serif";
}

// ── Reset board for new round ─────────────────────────────────────────────────
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "hangman-0.svg";
    renderGuesses();
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
};

// ── Pick random word ──────────────────────────────────────────────────────────
const getRandomWord = () => {
    const entry = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = entry.word;
    currentHintEn = entry.hint;
    currentHintTa = entry.hintTa || entry.hint;
    renderHint();
    resetGame();
};

// ── Game over modal ───────────────────────────────────────────────────────────
const gameOver = (isVictory) => {
    recordGame(isVictory);                      // ← track stat
    const t = uiText[activeLang];
    const modalText = isVictory ? t.foundWord : t.correctWord;
    gameModal.querySelector("img").src = `${isVictory ? 'victory' : 'lost'}.gif`;
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    if (modalTitle) modalTitle.innerText = isVictory ? t.modalWin : t.modalLose;
    if (modalBody) modalBody.innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
};

// ── Handle letter click ───────────────────────────────────────────────────────
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    renderGuesses();
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
};

// ── Build A–Z keyboard ────────────────────────────────────────────────────────
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// ── Logout (also on btn-logout anchor) ───────────────────────────────────────
function doLogout() {
    sessionStorage.removeItem('hgPlayer');
    window.location.href = 'login.html';
}
const logoutBtn = document.getElementById('btn-logout');
if (logoutBtn) logoutBtn.addEventListener('click', (e) => { e.preventDefault(); doLogout(); });

// ── Play Again ────────────────────────────────────────────────────────────────
playAgainBtn.addEventListener("click", getRandomWord);

// ── Init ──────────────────────────────────────────────────────────────────────
loadTopBar();
getRandomWord();