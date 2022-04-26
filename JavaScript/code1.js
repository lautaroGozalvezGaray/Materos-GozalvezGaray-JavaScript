
alert("Bienvenido a materos, tenemos un producto para cada necesidad. Mates, termos y mochilas");

class Productos{
    constructor(categoria, precio, tipo){
        this.categoria=categoria;
        this.precio=parseInt(precio);
        this.tipo=tipo;
    }
    sumarIva(){
        this.precio*=1.21;
    }
}

//creacion de productos con sus caracteristicas

const producto1 = new Productos("mates", 1000, "mate de calabaza");
const producto2 = new Productos("mates", 2500, "mate de madera");
const producto3 = new Productos("mates", 4000, "mate de grande");
const producto4 = new Productos("mates", 5800, "mate de chico");
const producto5 = new Productos("termos", 8000, "mate de cuero");
const producto6 = new Productos("termos", 9000, "termo 1.5l");
const producto7 = new Productos("termos", 8500, "termo 1l");
const producto8 = new Productos("termos", 5000, "termo economico");
const producto9 = new Productos("termos", 7800, "termo con pico");
const producto10 = new Productos("termos", 6000, "termo economico 1.5");
const producto11 = new Productos("mochilas", 12000, "mochila grande");
const producto12 = new Productos("mochilas", 10000, "mochila chica");
const producto13 = new Productos("mochilas", 13500, "mochila grande con bolcillo");
const producto14 = new Productos("mochilas", 15000, "mochila grande roja");
const producto15 = new Productos("mochilas", 18000, "mochila grande azul");

//se crea un array para almacenar todos los productos.

const stock=[];
stock.push(producto1, producto2, producto3, producto4, producto5,
     producto6,producto7,producto8,producto9,producto10,producto11,
     producto12,producto13,producto14,producto15);

//se le suma iva a cada producto
for (const productos of stock){
    productos.sumarIva();
}

let newSearch="";

const buySelect=[];//almacenamos los productos que el cliente quiere comprar.
let show=[];


do{
    
    //dependiendo de lo que el usuario ingrese, hacemos un filtrado.

    let selectCategories= prompt("seleccione la categoria: mates, termos, mochilas");
    alert("Usted selecciono: " + selectCategories);
    show = stock.filter(productos=>productos.categoria==selectCategories);

    console.log("El resultdo de su busqueda es: ")
    console.log(show);//muestra los productos en base a lo que filtro el cliente



    if(selectCategories=="mates"){
        again="";
        do{

            select=prompt("Ingrese un producto. (1,2,3,4)");
            
            if(select=="1"){
                buySelect.push(producto1);
            }else if(select=="2"){
                buySelect.push(producto2);
            }else if(select=="3"){
                buySelect.push(producto3);
            }else if(select=="4"){
                buySelect.push(producto4);
            }

            again=prompt("desea agregar otro mate: si / no");

        }while(again!="no")

    }else if(selectCategories=="termos"){
        again="";
        do{
            
            select=prompt("Ingrese un producto. (5,6,7,8,9,10)");
            
            if(select=="5"){
                buySelect.push(producto5);
            }else if(select=="6"){
                buySelect.push(producto6);
            }else if(select=="7"){
                buySelect.push(producto7);
            }else if(select=="8"){
                buySelect.push(producto8);
            }else if(select=="9"){
                buySelect.push(producto9);
            }else if(select=="10"){
                buySelect.push(producto10);
            }

            again=prompt("desea agregar otro termo: si / no");

        }while(again!="no")

    }else if(selectCategories=="mochilas"){
        again="";

        do{
            select=prompt("Ingrese un producto. (11, 12, 13, 14, 15)");
            
            if(select=="11"){
                buySelect.push(producto11);
            }else if(select=="12"){
                buySelect.push(producto12);
            }else if(select=="13"){
                buySelect.push(producto13);
            }else if(select=="14"){
                buySelect.push(producto14);
            }else if(select=="15"){
                buySelect.push(producto15);
            }

            again=prompt("desea agregar otra mochila: si / no");
            
        }while(again!="no")
    }

    newSearch=prompt("desea hacer una nueva busqueda? si / no ");

}while(newSearch!="no");

//mostramos los productos que selecciono
console.log("usted va compra los siguientes productos:");
console.log(buySelect);

//tomamos el valor de los objetos que selecciono el usuario y le mostramos un total de su compra
total="";
for (const costo of buySelect){
    total=parseInt(total+costo.precio);
}

alert("El total de su compra es de: $"+ total);
console.log("El total de su compra es de: $"+ total)

const ul1 = document.getElementById("productoBuscados");

show.forEach( (elemento) => {
    // Crear elemento lista
    const li = document.createElement("li");
    li.innerHTML = `<strong>categoria</strong> ${elemento.categoria}, <strong>Monto: $</strong> ${elemento.precio}, <strong>tipo:</strong> ${elemento.tipo}`;
    // Agregar nodo LI a UL
    ul1.append(li);
});


const ul = document.getElementById("productoSeleccionados");

buySelect.forEach( (elemento) => {
    // Crear elemento lista
    const li = document.createElement("li");
    li.innerHTML = `<strong>categoria</strong> ${elemento.categoria}, <strong>Monto: $</strong> ${elemento.precio}, <strong>tipo:</strong> ${elemento.tipo}`;
    // Agregar nodo LI a UL
    ul.append(li);
});

let p = document.getElementById("total");
p.innerText=`$ ${total}`;




























































