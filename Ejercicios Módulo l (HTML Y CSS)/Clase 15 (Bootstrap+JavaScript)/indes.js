const inputItem = document.getElementById('inputItem');
const listItems = document.getElementById('listItems');
const btnAgregar = document.getElementById('btnAgregar');


btnAgregar.addEventListener('click', function () {
    const trItems = document.createElement("tr");
    const tdItems1 = document.createElement("td");
    const tdItems2 = document.createElement("td");
    const trLength = document.querySelectorAll("tbody tr");


    trItems.id = "posicion" + trLength.length;
    trItems.appendChild(tdItems1);
    trItems.appendChild(tdItems2);
    listItems.appendChild(trItems);

    tdItems1.innerText = inputItem.value
    tdItems1.className = "text-center";
    tdItems2.innerHTML = "<button data-id='" + trLength.length + "' type='button' class='btn btn-dark' id='btnEliminar'>ELIMINAR</button>";
    tdItems2.className = "text-center";






    const btnEliminar = document.getElementById('btnEliminar');
    btnEliminar.addEventListener('click', function () {

    })

    
})









