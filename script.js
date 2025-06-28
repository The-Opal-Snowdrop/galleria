// Modal functionality (if you still use it)
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementById("modal-close");

if (modal) {
  document.querySelectorAll(".gallery-item img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.textContent = img.alt || "";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Video play on hover
document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});

// Contact form AJAX submit with thank-you
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: contactForm.method,
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          contactForm.reset();
          document.getElementById("formSuccess").style.display = "block";
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("Submission failed. Check your connection and try again.");
      });
  });
}
