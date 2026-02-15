// Modal oynani yaratish
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalImg = document.createElement("img");
      modalImg.src = img.src;
      modalImg.alt = img.alt;

      modal.appendChild(modalImg);
      document.body.appendChild(modal);

      modal.addEventListener("click", () => {
        modal.remove();
      });
    });
  });
});

// CSS qo‘shimcha (modal uchun)
const style = document.createElement("style");
style.innerHTML = `
  .modal {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(255,255,255,0.5);
  }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded", () => {
  let heartCount = 0;
  const maxHearts = 100; // 100 ta yurakcha

  function createHeart() {
    if (heartCount >= maxHearts) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Tasodifiy joylashuv (chapdan)
    heart.style.left = Math.random() * 100 + "vw";

    // Tasodifiy o‘lcham
    const size = Math.random() * 20 + 20; // 20–40px
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    document.body.appendChild(heart);
    heartCount++;

    // ❌ Yurakchani o‘chirish qismi olib tashlandi
  }

  // Har 200ms da bitta yurakcha yaratish
  const interval = setInterval(() => {
    createHeart();
    if (heartCount >= maxHearts) {
      clearInterval(interval);
    }
  }, 200);
});