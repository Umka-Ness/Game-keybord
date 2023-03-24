export function closeModal(e) {
  const closeIco = document.querySelector(".modal");
  const backdrop = document.querySelector(".backdrop");
  if (e.target === closeIco) {
    backdrop.classList.add("is-hidden");
  }
  return;
}
