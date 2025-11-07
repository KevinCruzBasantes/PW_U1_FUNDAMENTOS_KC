function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;

}

function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}

function construirH1() {
    return '<h1 id="id_calculadora">Calculador</h1>';
}
function eleminarElemento(idElemento) {

    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}
function evaluarOperacion(tipo){
    let num1= parseFloat(document.getElementById('id_n1').value);
    let num2= parseFloat(document.getElementById('id_n2').value);
    let resultado=0;
    if(tipo==='+'){
        resultado=sumar(num1,num2)
    }
    if(tipo==='-'){
        resultado=restar(num1,num2)
    }
    if(tipo==='*'){
        resultado=multiplicar(num1,num2)
    }
    if(tipo==='/'){
        resultado=dividir(num1,num2)
    }
    document.getElementById('id_resultado').innerText=resultado;
}
function sumar(num1, num2) {

    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}
function fundamentosJS(){
    /* Tipos de variables*/
    var nombre = "Kevin";
    let apellido = "Cruz";
    let apellido2 = 15;
    apellido2 = "Hola"; //reasignacion de variable
    let arreglo = [1, 2, 3, 4, 5];
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const PI = 3.1416;
    const IVA = 0.16;
    console.log("Fundamentos JS");
    console.log("Nombre: " + nombre + " " + apellido);
    console.log(arreglo); 
    //Arreglos
    const arrelosDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    arrelosDias.push("Sabado");
    console.log(arrelosDias);
    arrelosDias.unshift("Dias");
    console.log(arrelosDias);
    console.log(arrelosDias[0]);
    //Manejo de nulos undefined y vacio
    arrelosDias.push(null);
    arrelosDias.push("");
    console.log(arrelosDias);
    console.log(arrelosDias[9]);
    const numerosPares = [2,4,6,8];
    const numerosImpares = [1,3,5,7,9];
    const numerosTotales =numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    //Sentencias de Control
    let edad = 15;
    if(edad>=18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad");
    }

    let dia = "Lunes";
    switch(dia){
        case "Lunes":
            console.log("Es Lunes");
            break;
        case "Martes":
            console.log("Es Martes");
            break;
        default:
            console.log("No es ninguno de estos dias");
    }
    for(let i =0; i<5; i++){
        console.log("El valor de i es: "+ i);
    }
    const frutas = ["Manzana", "Banana", "Cereza","Papaya"];
    for(let fruta of frutas){
        console.log("Fruta: "+ fruta);
    }
    //Manejo de objetos
    const profesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido="Lopez";
    console.log(profesor);

    if(profesor.ciudad === "Quito"){
        console.log("Es quiteño");

    }
    if(profesor.edad !== 36){
        console.log("Es diferente de 36");

    }else{
        console.log("Es 36 ");
    }
    //for para iterar un objeto
    for (let clave in profesor){
        console.log(clave);
        console.log(profesor[clave]);
    }
    //Desestructuracion
   
    
      const e1 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    }
      const e2 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    }
    const arrgloEstudiantes = [e1,e2, {
        nombre: "Edison3",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    }];
    console.log(arrgloEstudiantes[0]);
    console.log(arrgloEstudiantes[2]);
     // desdestructuracion de arreglos
    const ar1 = [1,2,3,4,5,6,7];
    const [p1,p2,p3,p4,p5] = ar1;
    console.log(p1);
    console.log(p4);
    const[primero,,,,,,ultimo]=ar1;
    console.log(primero);
    console.log(ultimo);
    const [pos1,pos2]=[1,2,3,4,5];
    imprime(ar1);
    //Desestructuracion de objetos
       const e3 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    }
    
    const {nombre:n1,ciudad:c} = e3;
    console.log(n1);
    console.log(c);
    const {nombre:n,ciudad:ciu} = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito"
    };
    console.log(n);
    console.log(ciu);
        const e4 = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 35,
        ecuatorino: true,
        genero: 'M',
        ciudad: "Quito",
        direccion:{
            calle:"Av. Siempre Viva",
            barrio:"Springfield",
            numeracion: 742
        }
    
    }
    console.log(e4.direccion);
    console.log(e4.direccion.calle);
    //desestruccturacion de abributos de un objeto q tiene un objeto
    const{edad:ed ,direccion} = e4;
    console.log(ed);
    console.log(direccion);
    const {calle} = direccion;
    console.log(calle);
    const {direccion:{barrio,calle:c1,numeracion}} = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);
    }
    function imprime([a,b,c]){
        console.log(a);
        console.log(b);
        console.log(c);
    }