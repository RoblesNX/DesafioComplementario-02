const services = [
    { name: "Accounting", price: "1500" },
    { name: "Accounting + Sales", price: "2000" },
    { name: "Accounting + Sales + Invoicing", price: "3000" },
]

servicesQuote = [];

do {
const selecionServicio = prompt(` 
        Select the service to add the item you your quote:
        1. ${services[0].name}
        2. ${services[1].name}
        3. ${services[2].name}
         `)

if (selecionServicio == '1') {
    addItem(services[0]);
}
else if (selecionServicio == '2') {
    addItem(services[1]);
} else if (selecionServicio == '3') {
    addItem(services[2]);
}

var continuar = prompt(` 
        Do you want to add another service to your quote?
        1. Yes
        2. No
         `)

} while (continuar == '1');

for (let i = 0; i < servicesQuote.length; i++) {
    alert(`${servicesQuote[i].name} ${servicesQuote[i].price}`);
}

/******************************************************************************************************/
/*************************************  DECLARACIÓN DE LA FUNCIÓN  ************************************/

function addItem(service) {
    servicesQuote.push(service)
}

/******************************************************************************************************/