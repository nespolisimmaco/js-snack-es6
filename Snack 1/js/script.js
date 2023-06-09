// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: "Pinarello",
        peso: 7
    },
    {
        nome: "Van Rysel",
        peso: 10
    },
    {
        nome: "Pinarello",
        peso: 8
    },
    {
        nome: "Van Rysel",
        peso: 6
    },
    {
        nome: "Triban",
        peso: 9
    },
];

let biciLeggera = bici[0];
console.log(biciLeggera);
bici.forEach((curBici) => {
    const {nome, peso} = curBici;
    if (peso < biciLeggera.peso) {
        biciLeggera = curBici;
    }
    console.log(nome, peso);
})
document.querySelector("h1").innerHTML = `La bici col minor peso è ${biciLeggera.nome} e pesa ${biciLeggera.peso}kg`;