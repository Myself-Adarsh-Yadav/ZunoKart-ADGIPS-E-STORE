const wishLists = document.querySelectorAll(".wishList");

wishLists.forEach(wishList => {
  wishList.addEventListener("click", event => {
    const btn = event.target;
    const message = btn.nextElementSibling;

    // Toggle heart
    if (btn.textContent === "🖤") {
      btn.textContent = "❤️";
      message.textContent = "Added to Wishlist";
    message.classList.add("show");

    // Hide after 2 seconds
    setTimeout(() => {
      message.classList.remove("show");
      message.textContent = "";
    }, 2000);

    } else {
      btn.textContent = "🖤";
      message.style.color = "red";
      message.textContent = "Removed from Wishlist";
    message.classList.add("hide");

    // Hide after 2 seconds
    setTimeout(() => {
      message.classList.remove("hide");
      message.textContent = "";
    }, 2000);
    }
  });
});
