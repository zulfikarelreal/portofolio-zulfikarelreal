// CURSOR
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursorFollower");
let mouseX = 0,
  mouseY = 0,
  followerX = 0,
  followerY = 0;
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});
function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + "px";
  follower.style.top = followerY + "px";
  requestAnimationFrame(animateFollower);
}
animateFollower();
document
  .querySelectorAll(
    "a, button, .contact-card, .service-card, .info-card, .tl-card",
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      follower.style.width = "50px";
      follower.style.height = "50px";
    });
    el.addEventListener("mouseleave", () => {
      follower.style.width = "32px";
      follower.style.height = "32px";
    });
  });

// NAV SCROLL
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
  document
    .getElementById("scrollTop")
    .classList.toggle("visible", window.scrollY > 400);
  updateActiveNav();
  animateSkillBars();
});

// HAMBURGER
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ACTIVE NAV
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 120;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link)
      link.classList.toggle("active", scrollY >= top && scrollY < top + height);
  });
}

// SCROLL TOP
document
  .getElementById("scrollTop")
  .addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

// REVEAL ON SCROLL
const revealEls = document.querySelectorAll(
  ".section-title, .section-tag, .info-card, .service-card, .skill-category, .skill-bar-item, .contact-card, .contact-form, .about-text p, .about-stats, .contact-sub, .tl-card, .cert-card",
);
revealEls.forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = (i % 5) * 0.07 + "s";
});
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => revealObserver.observe(el));

// SKILL BARS
let skillBarsAnimated = false;
function animateSkillBars() {
  if (skillBarsAnimated) return;
  const s = document.getElementById("skills");
  if (s && s.getBoundingClientRect().top < window.innerHeight * 0.8) {
    document
      .querySelectorAll(".sb-fill")
      .forEach((bar) => bar.classList.add("animated"));
    skillBarsAnimated = true;
  }
}

// COUNTER
function animateCounters() {
  document.querySelectorAll(".stat-num").forEach((el) => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const inc = target / 50;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else el.textContent = Math.floor(current);
    }, 30);
  });
}
const aboutObs = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      aboutObs.disconnect();
    }
  },
  { threshold: 0.4 },
);
const aboutSec = document.getElementById("about");
if (aboutSec) aboutObs.observe(aboutSec);

// CONTACT FORM → WA
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("fname").value;
  const email = document.getElementById("femail").value;
  const msg = document.getElementById("fmsg").value;
  const text = `Halo Zulfikar!%0A%0ANama: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0APesan:%0A${encodeURIComponent(msg)}`;
  window.open(`https://wa.me/6282123477891?text=${text}`, "_blank");
});

// CERTIFICATE MODAL
function openCertModal(title, imgSrc) {
  document.getElementById('certModalTitle').textContent = title;
  document.getElementById('certModalName').textContent = title;
  const img = document.getElementById('certModalImg');
  const ph = document.getElementById('certModalPH');
  img.src = imgSrc;
  img.style.display = 'block';
  ph.style.display = 'none';
  document.getElementById('certModalDl').href = imgSrc;
  document.getElementById('certModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCertModal() {
  document.getElementById('certModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeCertModalOutside(e) {
  if (e.target.id === 'certModalOverlay') closeCertModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCertModal(); });

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      const offset = -25; // ubah sesuai kebutuhan
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});