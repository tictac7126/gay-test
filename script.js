const yesOverlay = document.querySelector(".overlay.yes");
const noOverlay = document.querySelector(".overlay.no");

function showYes() {
	yesOverlay.classList.remove("hidden");
}
function showNo() {
	noOverlay.classList.remove("hidden");
}
function reset() {
	yesOverlay.classList.add("hidden");
	noOverlay.classList.add("hidden");
}
