// function untuk update name dan launch confetti
function updateNameAndLaunchConfetti() {
  const name = document.getElementById("nameInput").value;
  const heading = document.getElementById("birthdayHeading");

  if (name) {
    heading.textContent = `🎊Happy Birthday, ${name}!🎉`;
  } else {
    heading.textContent = "Happy Birthday!";
  }

  launchConfetti();
}

// function untuk membuat confetti
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.getElementById("confettiContainer").appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 5000);
}

// function untuk menjalankan confetti ketika tombol submit diklik
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(createConfetti, i * 100);
  }
}
