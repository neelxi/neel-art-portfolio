(function () {
  "use strict";

  var progress = document.getElementById("scrollProgress");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxTitle = document.getElementById("lightboxTitle");
  var lightboxMeta = document.getElementById("lightboxMeta");
  var closeButton = document.getElementById("lightboxClose");

  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var percentage = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = Math.min(100, Math.max(0, percentage)) + "%";
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }

  document.querySelectorAll(".lightbox-trigger").forEach(function (button) {
    button.addEventListener("click", function () {
      var image = button.querySelector("img");
      lightboxImage.src = button.dataset.full || image.src;
      lightboxImage.alt = image.alt;
      lightboxTitle.textContent = button.dataset.title || "Artwork";
      lightboxMeta.textContent = button.dataset.meta || "";
      lightbox.showModal();
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.close();
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  lightbox.addEventListener("close", function () {
    document.body.style.overflow = "";
  });

  document.getElementById("footerYear").textContent = new Date().getFullYear();
})();
