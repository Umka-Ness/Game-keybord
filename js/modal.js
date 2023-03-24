export default function closeModal(e) {
  if (e.target === closeIco) {
    backdrop.classList.add("is-hidden");
  }
  return;
}
