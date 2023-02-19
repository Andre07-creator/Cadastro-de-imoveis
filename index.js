let choice = 0;
let imobiles = [];

do {
  choice = prompt(
    `Quantidade de imoveis: ${imobiles.length}\n (1) Salvar um imovel\n (2)Mostrar todos os imoveis salvos\n (3) Sair`
  );

  let showAll = "";
  let k = 0;
  switch (choice) {
    case "1":
      let imobile = {};
      imobile.name = prompt("Nome do proprietario:");
      imobile.roomQuantity = prompt("Quantidade de quartos:");
      imobile.bathroomQuantity = prompt("Quantidade de banheiros:");
      imobile.garage = prompt("Possui garagem?");
      imobiles.push(imobile);
      console.log(imobile[0]);
      break;
    case "2":
      imobiles.forEach(function (element, indice) {
        showAll +=
          "Informação do imovel " +
          (indice + 1) +
          "\n" +
          "Nome do proprietario: " +
          element.name +
          "\n" +
          "Numero de quartos: " +
          element.roomQuantity +
          "\n" +
          "Quantidade de banheiros: " +
          element.bathroomQuantity +
          "\n" +
          "Tem garagem: " +
          element.garage +
          "\n\n";
      });
      // for (let i = 0; imobiles.length > i; i++) {
      //   let k = i + 1;
      //   showAll +=
      //     "Informação do imovel " +
      //     k +
      //     "\n" +
      //     "Nome do proprietario: " +
      //     imobiles[i].name +
      //     "\n" +
      //     "Numero de quartos: " +
      //     imobiles[i].roomQuantity +
      //     "\n" +
      //     "Quantidade de banheiros: " +
      //     imobiles[i].bathroomQuantity +
      //     "\n" +
      //     "Tem garagem: " +
      //     imobiles[i].garage +
      //     "\n\n";
      // }
      alert(showAll);
      break;
    case "3":
      alert("ecerrando!!!");
      break;
    default:
      alert("Digite uma opção valida");
  }
} while (choice != "3");
