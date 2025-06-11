// Quiz logic
const quiz = [
  {
    q: "What is the capital of France?",
    options: { a: "Paris", b: "Berlin" },
    correct: "a"
  },
  {
    q: "2 + 2 = ?",
    options: { a: "3", b: "4" },
    correct: "b"
  }
];

let current = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;
  document.querySelectorAll(".quiz-buttons button")[0].innerText = "A: " + q.options.a;
  document.querySelectorAll(".quiz-buttons button")[1].innerText = "B: " + q.options.b;
  document.getElementById("result").innerText = "";
}

function answer(ans) {
  const q = quiz[current];
  const result = ans === q.correct ? "✅ Correct!" : "❌ Wrong!";
  document.getElementById("result").innerText = result;
  current = (current + 1) % quiz.length;
  setTimeout(loadQuestion, 1500);
}

loadQuestion();

// Carousel logic
const images = [
  "https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/lands-endslide__800x600.jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
  "https://rawgit.com/creativetimofficial/material-kit/master/assets/img/bg2.jpg"
];
let index = 0;

function showImage() {
  document.getElementById("carouselImage").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// Joke API logic
async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById('joke').innerText = `${data.setup} — ${data.punchline}`;
}
