var statements = document.querySelectorAll(".statements");
var missionStatement = document.querySelector(".mission_statement");

var challengeBtn = document.querySelector(".challenge-btn");
var challengeOverlay = document.querySelector(".challenge_statement");

challengeBtn.addEventListener("mouseenter", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  challengeOverlay.classList.add("active");
});

challengeBtn.addEventListener("mouseleave", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  missionStatement.classList.add("active");
});



// Events button JS.-----
var eventsBtn = document.querySelector(".events-btn");
var eventsOverlay = document.querySelector(".events_statement");

eventsBtn.addEventListener("mouseenter", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  eventsOverlay.classList.add("active");
});

eventsBtn.addEventListener("mouseleave", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  missionStatement.classList.add("active");
});



// Clubs button JS.-----
var clubsBtn = document.querySelector(".clubs-btn");
var clubsOverlay = document.querySelector(".clubs_statement");

clubsBtn.addEventListener("mouseenter", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  clubsOverlay.classList.add("active");
});

clubsBtn.addEventListener("mouseleave", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  missionStatement.classList.add("active");
});



// Forum button JS-----
var forumBtn = document.querySelector(".forum-btn");
var forumOverlay = document.querySelector(".forum_statement");

forumBtn.addEventListener("mouseenter", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  forumOverlay.classList.add("active");
});

forumBtn.addEventListener("mouseleave", function(e) {
  // remove active class from all the statements
  for (let i = 0; i < statements.length; i++) {
    statements[i].classList.remove("active");
  }
  // add active class to this specific statement
  missionStatement.classList.add("active");
});
