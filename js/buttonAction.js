const [$prevBtn, $nextBtn] = document.querySelectorAll(".button-wrap button");
const $contentWrap = document.querySelector(".cd-wrap");
const $diskInners = document.querySelectorAll(".disk_inner");
const $albums = document.querySelectorAll(".album");
const $pointBtn = document.querySelector(".point-wrap");
const bgArray = [
	["#0272a4", "#f6a564"],
	["#b6bfc8", "#36595b"],
	["#e58e82", "#6f569f"],
	["#d4b386", "#d49a7b"],
	["#b13134", "#4f2107"],
	["#dddfdc", "#77948a"],
];

function readyButton() {
	const totalNum = $albums.length;
	let pageNum = 0;

	$prevBtn.addEventListener("click", () => {
		if (pageNum > 0) pageNum -= 1;
		else pageNum = totalNum - 1;
		changePage(pageNum, totalNum);
	});

	$nextBtn.addEventListener("click", () => {
		if (pageNum < totalNum - 1) pageNum += 1;
		else pageNum = 0;
		changePage(pageNum, totalNum);
	});

	$pointBtn.addEventListener("click", ({ target }) => {
		const $liList = target.closest("ul").children;
		if (target.tagName === "LI") {
			pageNum = Array.from($liList).indexOf(target);
			changePage(pageNum, totalNum);
		}
	});

	changePage(pageNum, totalNum);
}

function changePage(pageNum, totalNum) {
	$contentWrap.style.background = `linear-gradient(120deg,${bgArray[pageNum][0]},${bgArray[pageNum][1]})`;
	Array.from({ length: totalNum }).forEach((_, i) => {
		$albums[i].classList.remove("active");
		$pointBtn.children[i].classList.remove("active"); //.classList.remove("active");
	});
	$albums[pageNum].classList.add("active"); // 현재 페이지의 album을 활성화
	$pointBtn.children[pageNum].classList.add("active");
	$diskInners[pageNum].style.background = bgArray[pageNum][0];
}

document.addEventListener("DOMContentLoaded", readyButton);
