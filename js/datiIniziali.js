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
      <div class="card my-width my-rounded">
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

stampaIcone(iconsList);