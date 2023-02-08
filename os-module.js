const os = require("os");

const coeursCPU = os.cpus();

// console.log(coeursCPU);
coeursCPU.forEach((coeur) => {
  console.log(coeur.model);
});

console.log(`Nom de l'ordinateur : ${os.hostname()}`);
console.log(`RAM ": ${os.totalmem()}`);
