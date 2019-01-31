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
// 1.  mouse over - mission statement text fades out.
// 2. challenge statement fades in.
// 3. mouse off - challenge statement fades out.
