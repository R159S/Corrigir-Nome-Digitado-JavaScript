nome = prompt("Escreva o seu nome aqui: ");
nome = nome.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });

document.write("Olá, ", nome,"!");