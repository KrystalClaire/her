const message = `hi love \n\nI know your MANPRIN presentation is coming up, and I just wanted to say something before you overthink yourself too much.\n\nI know how your mind works.\nYou’ll probably doubt your slides.\nReplay your lines.\nWonder if you’re prepared enough.\n\nBut you are.\n\nYou’ve always been the type of person who puts effort into what matters.\nYou study.\nYou think deeply.\nYou care.\nAnd that alone already makes you stand out.\n\nEven if you feel nervous, that doesn’t mean you’re not capable.\nIt just means this matters to you.\nAnd I kind of admire that about you.\n\nWhen you stand there to present, just breathe.\nTalk the way you normally do.\nTrust what you know.\n\nBecause honestly?\nThe way you explain things when you’re passionate about them…\nit’s really nice to listen to.\n\nI don’t say this a lot,\nbut I’m really proud of you.\n\nNot just for MANPRIN.\nBut for how you keep pushing yourself even when you’re unsure.\nThat quiet strength you have?\nIt’s one of my favorite things about you.\n\nSo go do your best.\nNot to impress anyone.\nNot to be perfect.\nJust to be you.\n\nAnd after it’s over,\nI hope you let yourself feel proud too.\n\nI’ll be here.\nCheering quietly.\nProbably smiling more than I should.\nI LOVE YOU`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
/* Floating hearts generator */
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
