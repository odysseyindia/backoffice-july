const table = document.querySelector(".table");

const first = document.querySelector(".first");
const prev  = document.querySelector(".prev");
const next  = document.querySelector(".next");
const last  = document.querySelector(".last");

let array = [];
let page = 0;

for (let i=0; i<= 25; i++){
  let tr 		= document.createElement("tr");
  let td 		= document.createElement("td");
  let checkbox  = document.createElement("input");
  let editBtn   = document.createElement("input");
  let deleteBtn = document.createElement("input");

  tr.appendChild(td.appendChild(checkbox));
  // append the rows
  td.textContent = local_data[i].Organisation;
  tr.appendChild(td);
  td.textContent = local_data[i].CityCode;
  tr.appendChild(td);
  td.textContent = local_data[i].Addressbook_id;
  tr.appendChild(td);
  
  td.textContent = "";
  tr.appendChild(td.appendChild(editBtn));
  tr.appendChild(td.appendChild(deleteBtn));
  table.append(tr);
}

next.addEventListener('click',()=>{
	page == array.length - 10 ? page = 0  : page += 10;
	table.innerHTML = "";
	for (let i=page; i< page+10; i++){
		table.appendChild(array(i));
	}
})