document.addEventListener("DOMContentLoaded", () => {

  // Mobile nav toggle
  const toggles = document.querySelectorAll(".nav-toggle");
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const nav = btn.parentElement.querySelector(".main-nav");
      if(!nav) return;
      nav.classList.toggle("open");
    });
  });

  // Reveal animations on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("section, .card, .gallery img, .intro-image img, .about-img img, .hero-title, .hero-sub").forEach(el=>{
    observer.observe(el);
  });

  // Hero animation delay
  const heroTitle = document.querySelector(".hero-title");
  const heroSub = document.querySelector(".hero-sub");
  if(heroTitle) setTimeout(()=>{ heroTitle.classList.add("revealed"); }, 200);
  if(heroSub) setTimeout(()=>{ heroSub.classList.add("revealed"); }, 400);

  // FAQ toggle (multiple open allowed)
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faq = button.parentElement;

    // toggle this one only
    faq.classList.toggle("open");

    // expand/collapse the answer
    const answer = faq.querySelector(".faq-answer");
    if (faq.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});


    // Lightbox for portfolio
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});

  // Contact form simple handler
  const contactForm = document.getElementById("contactForm");
  if(contactForm){
    contactForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      alert("Thank you — your message has been noted. Rajan will reach out soon.");
      contactForm.reset();
    });
  }

  // Smooth scroll for buttons with href #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

});
