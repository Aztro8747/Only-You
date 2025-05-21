document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".image-item");
    const modal = document.getElementById("info-modal");
    const modalText = document.getElementById("info-text");
    const modalPrice = document.getElementById("info-price");
    const overlay = document.getElementById("overlay");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const info = item.getAttribute("data-info");
            const price = item.getAttribute("data-price");

            modalText.textContent = info;
            modalPrice.textContent = price;

            modal.style.display = "block";
            overlay.classList.add("show");
            setTimeout(() => modal.classList.add("show"), 10);
        });
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
            modal.style.display = "none";
            overlay.classList.remove("show");
        }, 300);
    });
});
