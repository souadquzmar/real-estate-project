document.querySelector(".advanced-listing").addEventListener("click", (e) => {
  e.preventDefault();
  const modal = document.querySelector(".my-modal");
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
  } else {
    modal.classList.add("show");
  }
});