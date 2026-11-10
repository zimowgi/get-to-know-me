/* =====================================================================
   GAME LOGIC
   You do not need to edit this file. Your questions live in questions.js.
   ===================================================================== */

/* ---------- 1. The deck (pure logic, no page code) ---------- */

// Returns a shuffled copy of a list (Fisher-Yates shuffle: a fair shuffle).
function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// A deck hands out every question exactly once, in random order.
function createDeck(questions) {
  let remaining = shuffle(questions);
  let shown = 0;

  return {
    total: questions.length,
    // Returns the next random question, or null when the deck is empty.
    draw() {
      if (remaining.length === 0) return null;
      shown += 1;
      return remaining.pop();
    },
    shownCount() { return shown; },
    isEmpty() { return remaining.length === 0; },
    // Shuffle everything again and start a fresh round.
    reset() {
      remaining = shuffle(questions);
      shown = 0;
    },
  };
}

/* ---------- 2. The page (only runs in a browser) ---------- */

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    // Clean the list: keep only non-empty text lines.
    const questions = (typeof QUESTIONS !== "undefined" ? QUESTIONS : [])
      .filter(function (q) { return typeof q === "string" && q.trim() !== ""; })
      .map(function (q) { return q.trim(); });

    const info = typeof GAME_INFO !== "undefined" ? GAME_INFO : {};

    const $ = function (id) { return document.getElementById(id); };
    const welcome = $("welcome");
    const game = $("game");
    const complete = $("complete");
    const startBtn = $("start-btn");
    const randomBtn = $("random-btn");
    const nextBtn = $("next-btn");
    const restartBtn = $("restart-btn");
    const againBtn = $("again-btn");
    const card = $("card");
    const questionText = $("question-text");
    const cardLabel = $("card-label");
    const counter = $("counter");
    const progress = document.querySelector(".progress");
    const progressBar = $("progress-bar");

    // Fill in the welcome text from questions.js
    if (info.title) {
      $("game-title").textContent = info.title;
      document.title = info.title;
    }
    $("game-description").textContent = info.description || "";

    // Safety check: no questions at all
    if (questions.length === 0) {
      startBtn.disabled = true;
      const err = $("welcome-error");
      err.textContent = "No questions found. Open questions.js and add some questions.";
      err.hidden = false;
      return;
    }

    $("welcome-count").textContent = questions.length + " questions in the deck";

    const deck = createDeck(questions);

    function show(section) {
      [welcome, game, complete].forEach(function (s) { s.hidden = (s !== section); });
    }

    // Draw a random unseen question and display it.
    function drawAndShow() {
      const question = deck.draw();

      if (question === null) {          // deck finished
        showComplete();
        return;
      }

      const n = deck.shownCount();
      const total = deck.total;

      questionText.textContent = question;
      cardLabel.textContent = "Question " + n;
      counter.textContent = "Question " + n + " of " + total;

      const pct = Math.round((n / total) * 100);
      progressBar.style.width = pct + "%";
      progress.setAttribute("aria-valuenow", String(pct));

      // On the last card, the buttons tell the player what happens next.
      if (deck.isEmpty()) {
        randomBtn.textContent = "Finish the Round";
        nextBtn.textContent = "Finish";
      } else {
        randomBtn.textContent = "Get a Random Question";
        nextBtn.textContent = "Next Question";
      }

      // Replay the entrance animation
      card.classList.remove("animate-in");
      void card.offsetWidth;            // forces the browser to restart the animation
      card.classList.add("animate-in");
    }

    function showComplete() {
      $("complete-text").textContent =
        "You went through all " + deck.total + " questions. " +
        "Shuffle the deck to play a brand new round in a different order.";
      show(complete);
      $("complete-title").focus();
    }

    function startRound() {
      deck.reset();
      show(game);
      drawAndShow();
      card.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }

    startBtn.addEventListener("click", startRound);
    restartBtn.addEventListener("click", startRound);
    againBtn.addEventListener("click", startRound);
    randomBtn.addEventListener("click", drawAndShow);
    nextBtn.addEventListener("click", drawAndShow);
  });
}

/* Lets the test script load the logic. Harmless in a browser. */
if (typeof module !== "undefined") {
  module.exports = { shuffle: shuffle, createDeck: createDeck };
}
