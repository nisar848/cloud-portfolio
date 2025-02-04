(function() {
  // Keyboard focus outline functionality
  const handleFirstTab = (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
      window.addEventListener("touchstart", handleMouseDownOnce);
    }
  };

  const handleMouseDownOnce = () => {
    document.body.classList.remove("user-is-tabbing");
    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.removeEventListener("touchstart", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  };

  window.addEventListener("keydown", handleFirstTab);

  // Back-to-top button functionality
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;

  if (backToTopButton) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Optionally, you can use CSS classes for transitions instead of inline styles
    const alterStyles = (isVisible) => {
      backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
      backToTopButton.style.opacity = isVisible ? 1 : 0;
      backToTopButton.style.transform = isVisible && !prefersReducedMotion ? "scale(1)" : "none";
    };

    // Debounce utility to limit scroll handler calls
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(null, args), wait);
      };
    };

    const handleScroll = () => {
      const shouldBeVisible = window.scrollY > 700;
      if (shouldBeVisible !== isBackToTopRendered) {
        isBackToTopRendered = shouldBeVisible;
        alterStyles(isBackToTopRendered);
      }
    };

    window.addEventListener("scroll", debounce(handleScroll, 50), { passive: true });
  }

  // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal elements
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".modal .close");

  // Add click event to all images inside .project-images
  document.querySelectorAll('.project-images img').forEach(img => {
    img.style.cursor = "pointer"; // Indicate the image is clickable
    img.addEventListener('click', function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.textContent = this.alt; // Use the image's alt text as a caption
    });
  });

  // Close the modal when the close button is clicked
  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
  });

  // Also close the modal if the user clicks anywhere outside the image
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
})();