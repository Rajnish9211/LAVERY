let cardDiv = document.getElementById("cards");
let searchBar = document.getElementById("searchInput");
let img = document.getElementById("heroImg");
let heroDesc = document.getElementById("heroDescription");
let heroName = document.getElementById("heroName");
let comics = document.getElementById("comics");
let moreDetails = document.getElementById("more-details");
let favData = JSON.parse(window.localStorage.getItem("search") || {});

// ! Fav cards from local storage onload function

window.onload = () => {
	emptyData();
};

// ! Main emptyData function

const emptyData = async function getData() {
	heroName.textContent = favData.name;
	let path = favData.thumbnail.path + "." + favData.thumbnail.extension;
	img.setAttribute("src", path);
	img.setAttribute("alt", path);
	heroDesc.textContent = favData.description;

	favData.comics.items.forEach((e) => {
		let para = document.createElement("a");
		para.textContent = e.name;
		para.setAttribute("href", e.resourceURI);
		comics.appendChild(para);
	});

	// * For Comic Links
	favData.urls.forEach((e) => {
		let para = document.createElement("a");
		para.textContent = e.type;
		para.setAttribute("href", e.resourceURI);
		moreDetails.appendChild(para);
	});
};
