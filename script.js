// Video hover play/pause
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => video.pause());
});

// Form submit handling
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        successMsg.style.display = "block";
      } else {
        alert("Form submission failed. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    });
  });
}
