const btnCambiar = document.getElementById ('btnCambiar');
const btnVolver = document.getElementById ('btnVolver');

const div1 = document.getElementById ('item1');
const div2 = document.getElementById ('item2');
const div3 = document.getElementById ('item3');


btnCambiar.addEventListener('click', function(){
    div1.style="background-color:red !important";
    div2.style="background-color:red !important;width:100%";
    div3.style="background-color:red !important;width:100%";
});

btnVolver.addEventListener('click', function(){
    div1.style="";
    div2.style="";
    div3.style="";
})

