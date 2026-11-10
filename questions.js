/* =====================================================================
   YOUR QUESTIONS LIVE HERE
   =====================================================================
   HOW TO EDIT (no coding needed):

   1. Each question is one line of text inside quotation marks "like this",
      followed by a comma at the end of the line.
   2. To CHANGE a question: edit the words between the quotation marks.
   3. To ADD a question: copy any line and paste it above the "];" line.
   4. To DELETE a question: delete the whole line.
   5. The game counts your questions automatically. 100, 37 or 250 all work.

   TIPS:
   - Keep the quotation marks and the comma at the end of every line.
   - If your question needs a quotation mark inside it, use a single
     apostrophe (') instead of a double quote ("). Example: "What's your favorite...?"
   - Save the file, then refresh the page in your browser.
   ===================================================================== */

// The text shown on the welcome screen. Change these freely.
const GAME_INFO = {
  title: "Get to Know Me",
  description:
    "A conversation card game for friends, family, dates and teams. Draw a card, read it aloud, and take turns answering. There are no wrong answers.",
};

// The questions. Replace them with your own!
const QUESTIONS = [
  // ---- Self-Reflection ----
  "What’s something you wish more people knew about you?",
  "What’s a mistake you’re grateful for?",
  "What are you most proud of recently?",
  "When do you feel most like yourself?",
  "What does success mean to you?",

  // ---- Relationships ----
  "What makes you feel most loved?",
  "What’s one thing you’ve never told your best friend?",
  "Who has impacted your life the most and why?",
  "How do you define trust?",
  "When do you feel truly seen?",

  // ---- Aspirations & Dreams ----
  "What’s a dream you’ve let go of?",
  "What’s one goal you haven’t shared with anyone?",
  "What would you try if you knew you couldn’t fail?",
  "Where do you see yourself in five years?",
  "What’s something on your bucket list?",

  // ---- Values & Beliefs ----
  "Do you believe people can change?",
  "Is honesty always the best policy?",
  "What’s a belief you’ve recently questioned?",
  "What value guides most of your decisions?",
  "Would you rather be respected or liked?",

  // ---- Mental & Emotional Health ----
  "What’s your emotional state right now?",
  "How do you deal with stress?",
  "What’s something you’re afraid to feel?",
  "What emotion do you find hard to express?",
  "What’s a mental health habit that helps you?",

  // ---- Time & Regret ----
  "What’s a moment you wish you could relive?",
  "What would you change about your past?",
  "Do you fear getting older?",
  "What’s your biggest regret?",
  "What’s something you wish you had started earlier?",

  // ---- Society & Culture ----
  "What social issue matters most to you?",
  "How do you define privilege?",
  "What’s something society gets wrong?",
  "What role does the media play in your thinking?",
  "How do you handle cultural differences?",

  // ---- Change & Resilience ----
  "How do you deal with failure?",
  "What change shaped your life the most?",
  "Are you comfortable with uncertainty?",
  "What’s the hardest change you’ve faced?",
  "What helps you stay strong in tough times?",

  // ---- Random Deep Dives ----
  "What’s something you believe that most people don’t?",
  "If your shadow could talk, what would it say?",
  "What would you write in a letter to your future self?",
  "What does silence mean to you?",
  "If your life were a book, what would the title be?",

  // ---- Creativity & Imagination ----
  "What would your dream art project be?",
  "If you could design a theme park, what would it be like?",
  "What’s the most creative thing you’ve ever done?",
  "Which fictional world would you live in?",
  "What would your imaginary friend say about you today?",

  // ---- Listening & Communication ----
  "Do you feel truly heard in conversations?",
  "How do you show someone you're really listening?",
  "What’s the difference between hearing and listening?",
  "What makes a conversation meaningful?",
  "What’s a question you wish people asked more often?",

  // ---- Life Choices & Turning Points ----
  "What’s the most important decision you've made so far?",
  "How do you know when it’s time to move on?",
  "What’s one choice that changed everything for you?",
  "Have you ever taken a leap of faith? What happened?",
  "What decision do you still think about today?",

  // ---- Learning & Curiosity ----
  "What topic could you talk about for hours?",
  "What’s something new you learned recently?",
  "What do you want to understand better?",
  "What’s a skill you wish schools taught?",
  "When do you feel most curious?",

  // ---- Morals & Dilemmas ----
  "Would you rather lie to protect someone or tell a hurtful truth?",
  "Is it okay to break rules for a good cause?",
  "What would you do if no one were watching?",
  "Can the ends ever justify the means?",
  "Have you ever stood up for something unpopular?",

  // ---- Technology & Modern Life ----
  "What’s your screen time like?",
  "How does tech help or hurt your mental health?",
  "What app do you wish didn’t exist?",
  "What role does social media play in your life?",
  "Do you feel more connected or more alone online?",

  // ---- Vulnerability & Honesty ----
  "What’s something you're afraid to admit?",
  "When did you last feel truly vulnerable?",
  "What’s a hard truth you’ve accepted?",
  "How do you react when someone opens up to you?",
  "What does being \"real\" mean to you?",

  // ---- Nature & Environment ----
  "Where’s your happy place in nature?",
  "What’s one thing you’d protect in the world?",
  "Do you feel responsible for the planet?",
  "What’s your favorite memory in nature?",
  "How does the environment impact your mood?",

  // ---- Identity & Culture ----
  "What traditions shaped who you are?",
  "What’s something unique about your background?",
  "How has your culture influenced your worldview?",
  "What’s a stereotype you’ve dealt with?",
  "What part of your identity are you most proud of?",

  // ---- Perspective Shifters ----
  "What’s something you changed your mind about?",
  "How do you handle someone who disagrees with you?",
  "What’s a perspective you wish more people had?",
  "What do you think the world needs more of?",
  "If you were born 100 years ago, who would you be?",

  // ---- Self-Discovery ----
  "What habit has changed your life the most?",
  "What’s one thing you’d tell your younger self?",
  "How do you define happiness for yourself?",
  "What’s a fear you’ve overcome recently?",
  "Which part of your personality are you most proud of?",
];
