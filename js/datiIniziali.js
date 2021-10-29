const iconsList = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];


const iconContainer = document.querySelector(".icon-container");
const filterSelect = document.getElementById("filter_select");

console.log(filterSelect);

filterSelect.addEventListener("change", renderPage);



function renderPage() {

	/* console.log(this.value); */
	let filtro = this.value || "all";

	const colors = {
		"animal": "blue",
		"vegetable": "orange",
		"user": "purple",
	};

	function raggruppaPerCategoria(iconsList) {
		/* const listaGruppi = {}; */
		for (let i = 0; i < iconsList.length; i++) {

			iconsList[i].color = colors[iconsList[i].type];

			/* 	const { type, name, prefix, family } = iconsList[i];
	
	
				if (!listaGruppi[type]) {
					listaGruppi[type] = [];
				}
	
				listaGruppi[type].push({
					"name": name,
					"prefix": prefix,
					family,
					color() {
						return colors[type];
					}
				}); */
		}
		stampaSingolaCategoria(iconsList);
	}

	function stampaSingolaCategoria(listaDaStampare) {
		iconContainer.innerHTML = "";

		const stampa = listaDaStampare.filter(item => {
			if (filtro === "all") {
				return true;
			}
			return filtro === item.type;
		});

		for (let i = 0; i < stampa.length; i++) {

			const icon = stampa[i];
			const { name, prefix, family, color } = icon;

			iconContainer.innerHTML += `
			<div class="col d-flex justify-content-center my-4">
				<div class="card my-width my-rounded py-5">
					<div class="card-img-top d-flex justify-content-center align-items-center pt-4">
						<i class="${family} ${prefix + name} fs-1" style="color: ${color}" ></i>
					</div>
					<div class="card-body py-2">
						<div class="card-title text-center fw-bold">${name.toUpperCase()}</div>
					</div>
				</div>
			</div>`;

		}

		/* for (let prop in listaDaStampare) {

			if (filtro === "all" || filtro === prop) {


				for (let i = 0; i < listaDaStampare[prop].length; i++) {

					const icon = listaDaStampare[prop][i];
					const { name, prefix, family, color } = icon;

					iconContainer.innerHTML += `
					<div class="col d-flex justify-content-center my-4">
						<div class="card my-width my-rounded py-5">
							<div class="card-img-top d-flex justify-content-center align-items-center pt-4">
								<i class="${family} ${prefix + name} fs-1" style="color: ${color()}" ></i>
							</div>
							<div class="card-body py-2">
								<div class="card-title text-center fw-bold">${name.toUpperCase()}</div>
							</div>
						</div>
					</div>`;

				}
			}
		} */
	}
	const iconeRaggruppate = raggruppaPerCategoria(iconsList);

	/* console.log(iconeRaggruppate); */
}
renderPage();

/* const iconContainer = document.querySelector(".icon-container");
const colors = {
	"animal": "blue",
	"vegetable": "orange",
	"user": "purple",
};

function stampaIcone(list) {

	for (let i = 0; i < list.length; i++) {

		const icon = list[i];
		const { name, prefix, family, type } = icon;
		const color = colors[type];

		iconContainer.innerHTML += `
	<div class="col d-flex justify-content-center my-4">
	  <div class="card my-width my-rounded py-5">
		<div class="card-img-top d-flex justify-content-center align-items-center pt-4">
		  <i class="${family} ${prefix + name} fs-1" style="color: ${color}" ></i>
		</div>
		<div class="card-body py-2">
		  <div class="card-title text-center fw-bold">${icon.name.toUpperCase()}</div>
		</div>
	  </div>
	</div>`;

	}
}

stampaIcone(iconsList); */