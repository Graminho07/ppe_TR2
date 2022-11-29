let receita1 = {receita: 'Batata Frita'}

localStorage.setItem('receita1', JSON.stringify(receita1));

let receitaString1 = localStorage.getItem('receita1');

let receitaObj1 = JSON.parse(receitaString1);

console.log(receitaObj1);

let receita2 = {receita: 'Hambúrguer'}

localStorage.setItem('receita2', JSON.stringify(receita2));

let receitaString2 = localStorage.getItem('receita2');

let receitaObj2 = JSON.parse(receitaString2);

console.log(receitaObj2);

let receita3 = {receita: 'Milkshake'}

localStorage.setItem('receita3', JSON.stringify(receita3));

let receitaString3 = localStorage.getItem('receita3');

let receitaObj3 = JSON.parse(receitaString3);

console.log(receitaObj3);

let mododepreparo = {mododepreparo: 'Modo de preparo'}

localStorage.setItem('Modo de preparo', JSON.stringify(mododepreparo));

let mododepreparoString = localStorage.getItem('Modo de preparo');

let mododepreparoObj = JSON.parse(mododepreparoString);

console.log(mododepreparoObj);

let ingredientes = {ingredientes: 'Seus Ingredientes'}

localStorage.setItem('Seus Ingredientes', JSON.stringify(ingredientes));

let ingredientesString = localStorage.getItem('Seus Ingredientes');

let ingredientesObj = JSON.parse(ingredientesString);

console.log(ingredientesObj);