// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
    {
        nome: "Napoli",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Lazio",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "MIlan",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Atalanta",
        punti: 0,
        falliSubiti: 0,
    },
];

squadre.forEach((curSquadra) => {
    curSquadra.punti = getRndInteger(40, 70);
    curSquadra.falliSubiti = getRndInteger(300, 500);
    console.log(curSquadra.punti, curSquadra.falliSubiti);
});

//////////////////////////
// FUNCTIONS

// Genero numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }