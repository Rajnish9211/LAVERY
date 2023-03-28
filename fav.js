let cardDiv = document.getElementById("cards");
let searchBar = document.getElementById("searchInput");

let favData = JSON.parse(window.localStorage.getItem("fav") || []);
console.log(favData);

// !Empty data first load
window.onload = () => {
	emptyData();
};

// ! Main empty data function

const emptyData = async function getData() {
	let data = favData;

	// ! Removing all Child before creating new
	while (cardDiv.firstChild) {
		await cardDiv.removeChild(cardDiv.firstChild);
	}
	data.forEach((e) => {
		let newDiv = document.createElement("div");
		cardDiv.appendChild(newDiv);
		newDiv.innerHTML = `<div>
	<h4>${e.name}</h4>
	<img src=${e.thumbnail.path + "." + e.thumbnail.extension} alt=${e.thumbnail.path + "." + e.thumbnail.extension}/>
	<p>${e.description}</p>
	</div>`;
		let btn = document.createElement("button");
		newDiv.appendChild(btn);
		btn.setAttribute("id", "btn");
		btn.textContent = "Remove Fav ❤️";
		btn.addEventListener("click", () => {
			let newData = favData.filter((d) => d.name != e.name);
			console.log(newData);
			favData = newData;
			window.localStorage.setItem("fav", JSON.stringify(favData));
			window.location.reload();
		});
	});
};
