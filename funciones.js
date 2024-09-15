function saludar(){
    alert("Bienvenido a JavaScript desde un archivo externo");
    
}
function calcularPromedio(){
    let cal1 = parseInt(prompt("Calificacion Programacion Web", 85));
    var cal2 = parseInt(prompt("Calificacion Automatas II"));
    let cal3 = parseInt(prompt("Calificacion Ing. de Software"));

    const PI = 3.14;
    const IVA=16;
    const GRAVEDAD= 9.81;

    //PI=3.15;
    console.log(`Valor de PI es ${PI}`);
    var cal2 =70;

    if(true){
        let cal1=0;
        alert("Calificacion 1 en el scope del if es de " + cal1);
    }

    let promedio = (cal1+ cal2 + cal3)/3;
    //Imprimiendo utilizando Template String
    alert(`Tu promedio es:  ${(cal1+ cal2 + cal3)/3} con ${cal1}, ${cal2} y ${cal3}`);
}

const confirmar = () => {
    let respuesta = confirm("¿Vas a recursar Programacion Web?")
    if(respuesta ){
        alert("Animo que existe el verano! :)");
    }else{
        alert("Felicidades pero aun no termina el semestre ...")
    }
}

const objetos = () => {
    const laptop ={
        marca: "HP",
        procesador : "Intel Core i9",
        ram : "16GB",
        almacenamiento: "1TB",
        usos :["jugar", "escuchar musica","trabajar"],
        tipo_dis : "M2"
    }
    console.log(laptop);
    console.log(`Marca:  ${laptop.marca}
    Procesador: ${laptop.procesador}
    RAM: ${laptop.ram}
    Alamcenamiento : ${laptop.almacenamiento}
    Tipo de Disco : ${laptop.tipo_dis}
    Usos: ${laptop.usos}`)
    
    //Agregando nuevo atributo
    laptop.tam_pantalla = "15.2 p";
    console.log(laptop)
}

function calcularTiempoTotal() {
    let Amin1 = parseInt(prompt("Tiempo del atleta 1 en minutos"));
    let Aseg1 = parseInt(prompt("Tiempo del atleta 1 en segundos"));
    let Amin2 = parseInt(prompt("Tiempo del atleta 2 en minutos"));
    let Aseg2 = parseInt(prompt("Tiempo del atleta 2 en segundos"));

    if(isNaN(Amin1) || Aseg1 <=60 && (Amin1 && Aseg1)<=0 ){
        alert("Accion Invalida");
        return;
    }

    if(isNaN(Amin2) || Aseg2 <=60 && (Amin2 && Aseg2)<=0 ){
        alert("Accion Invalida");
        return;
    }

    if (Aseg1 >= 60) {
        Amin1 += Math.floor(Aseg1 / 60);
        Aseg1 %= 60;
    }
    if (Aseg2 >= 60) {
        Amin2 += Math.floor(Aseg2 / 60);
        Aseg2 %= 60;
    }

    let minTotal = Amin1 + Amin2;
    let segTotal = Aseg1 + Aseg2;

    if (segTotal >= 60) {
        minTotal += Math.floor(segTotal / 60);
        segTotal %= 60;
    }

    let horas = 0;
    if (minTotal >= 60) {
        horas += Math.floor(minTotal / 60);
        minTotal %= 60;
    }

    alert(`Tiempo total: ${horas} horas, ${minTotal} minutos y ${segTotal} segundos`);
}

 const destructurarObjeto = () =>{
    const tiendaCosmeticos ={
        nombreTienda:"Cosmeticos AlmaGaby S.A de C.V",
        redesSociales:{
            facebook:"https://cosmeticos.almagaby.facebook.com",
            instagram:"https://cosmeticos.almagaby.instagram.com",
            twitter:"@almagaby"
        },
        contactos:{
            whatsapp: "5522336457",
            email:["cosmeticos.almagaby@gmail.com", "almagaby-cosmeticos@outlook"]
        },
        perfumes: {
            mujeres:{
                perfume1:{
                    nombre:"Diablitos",
                    precio: "800",
                    tamanio: "100ml"
                },
                perfume2:{
                    nombre:"Chanel No.5",
                    precio: "2500",
                    tamanio: "250ml"
                }

            },
            hombres:{
                perfume1:{
                    nombre:"7 Machos",
                    precio: "1200",
                    tamanio: "100ml"
                },
                perfume2:{
                    nombre:"212 Carolina Herrera",
                    precio: "1400",
                    tamanio: "100ml"
                }

            }
        }
    }
    /*let mujerNombrePerfume1 = tiendaCosmeticos.perfumes.mujeres.perfume1.nombre;
    let mujerPrecioPerfume1 = tiendaCosmeticos.perfumes.mujeres.perfume1.precio;
    let mujerTamanioPerfume1 = tiendaCosmeticos.perfumes.mujeres.perfume1.tamanio;*/

    /*console.log(`Nombre de la Tienda: ${tiendaCosmeticos.nombreTienda}
    Perfume 1: ${mujerNombrePerfume1}
    Precio: ${mujerPrecioPerfume1}
    Tamaño: ${mujerTamanioPerfume1}`);
    const {precio,nombre,tamanio}=tiendaCosmeticos.perfumes.hombres.perfume2;
    console.log(`Perfume Hombre No.2
    Nombre: ${nombre}
    Precio: ${precio}
    Tamaño: ${tamanio}`);*/
    const{nombreTienda}=tiendaCosmeticos;
    const{facebook, instagram, twitter}=tiendaCosmeticos.redesSociales;
    const {whatsapp,email}=tiendaCosmeticos.contactos;
    const{nombre, precio, tamanio}= tiendaCosmeticos.perfumes.mujeres.perfume2;
    console.log(`Nombre de la Tienda: ${nombreTienda}
    Redes Sociales:
    Facebook: ${facebook}
    Intstagram: ${instagram}
    Twitter: ${twitter}
    Contactos:
    Whatsapp: ${whatsapp}
    email 1: ${email[0]}
    email 2: ${email[1]}
    Perfume Mujer No.2:
    Nombre: ${nombre}
    Precio: ${precio}
    Tamaño: ${tamanio}
    `)
}
//Imprimir nombre de la tienda, redes sociales, contacto whatsapp, correos y el perfume 2 de mujeres 