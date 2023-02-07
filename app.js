const Vehiculos = [
    {
        numVehiculo: 1,
        "marcaModelo": "bmw,i350",
        "color": "blanco",
        "Km": 0,
        "precio": "35.000",
        "anio": 2023,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTI6xfzW12hUHQ_-uLq8jPnGqpRv4a7wQgPQ&usqp=CAU"
    },
    {
        numVehiculo: 2,
        "marcaModelo": "Honda Civic exs 16",
        "color": "gris",
        "Km": 50000,
        "precio": "12.000",
        "anio": 2016,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJWPzfxH5K10v-3AeLWK9z8I-_Ji8H4S6xg&usqp=CAU"
    },
    {
        numVehiculo: 3,
        "marcaModelo": "Mercedes Benz c300",
        "color": "blanco",
        "Km": 5000,
        "precio": "40.000",
        "anio": 2017,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZisiyXlVUymyUx5bP_aLW3uQPnPNK1bk5Q&usqp=CAU"
    },
    {
        numVehiculo: 4,
        "marcaModelo": "Toyota Hilux 23",
        "color": "negra",
        "Km": 0,
        "precio": "35.000",
        "anio": 2023,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_Q6PBpfTNo0rwNSVJ6uSwKHAsN7SGrmlmg&usqp=CAU"
    },
    {
        numVehiculo: 5,
        "marcaModelo": "Volkswagen Scirocco 2.0 Tsi 211cv",
        "color": "blanco",
        "Km": 100000,
        "precio": "25.000",
        "anio": 2013,
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_803056-MLA53069025868_122022-O.webp"
    },
    {
        numVehiculo: 6,
        "marcaModelo": "Citroen c3",
        "color": "gris",
        "Km": 70.000,
        "precio": "7.000",
        "anio": 2015,
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14LIkQJeyvpNx2vkpPo-d7I69xoDDvsPQiQ&usqp=CAU"
    }
];


let obtenerArray = document.getElementById("info");


const guardarVehi = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarVehi("Lista Vehiculos", JSON.stringify(Vehiculos));

const vehiAlmacenadosLocal = JSON.parse(localStorage.getItem("Lista Vehiculos"));

console.log(vehiAlmacenadosLocal);

const btn = document.getElementById("btn");


btn.onclick = () => {
    for (const vehi of vehiAlmacenadosLocal) {
    let infoAMostrar = document.createElement("div");
    infoAMostrar.innerHTML = `<h2> numVehiculo : ${vehi.numVehiculo}</h2>
    <h3> Marca y modelo : ${vehi.marcaModelo}</h3>
    <h4> Color : ${vehi.color}</h4>
    <p> Km : ${vehi.Km}</p>
    <p> Precio : ${vehi.precio}</p>
    <p> Año : ${vehi.anio}</p>
    <hr>`
    obtenerArray.append(infoAMostrar);
}
};