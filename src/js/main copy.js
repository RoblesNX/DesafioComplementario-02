const services = [
    { name: "Accounting", price: "1500"},
    { name: "Accounting + Sales", price: "2000"},
    { name: "Accounting + Sales + Invoicing", price: "3000"},
]

do {
    const selecionServicio = prompt(`
    Select the service to receive more information:
    1. ${services[0].name}
    2. ${services[1].name}
    3. ${services[2].name}
    `)

    switch (selecionServicio) {
        case '1':
            var serviceName = services[0].name;
            var servicePrice = services[0].price;
            quote(selecionServicio);
            break;
        case '2':
            var serviceName = services[1].name;
            var servicePrice = services[1].price;
            quote(selecionServicio);
            break;
        case '3':
            var serviceName = services[2].name;
            var servicePrice = services[2].price;
            quote(selecionServicio);
            break;
        default:
            alert(`Enter a correct option to request information`);
            break;
    }

    var continuar = prompt(`
    Do you want to receive information about another of our services?
    1. Yes
    2. No
    `)

} while (continuar == '1');


/******************************************************************************************************/
/*************************************  DECLARACIÓN DE LA FUNCIÓN  ************************************/

function quote() {
    alert(`The product ${serviceName} was selected correctly and the estimated price is USD ${servicePrice}`);
    if (window.confirm(`¿Do you want to receive information in your email from one of our sales rep?`)) {
        const emailServicio = prompt(`Please enter your eMail`);
        alert(`Thank you! You will receive an information eMail to ${emailServicio} in the next 30 minutes to give you more information about our service ${serviceName}`);
    }
}

/******************************************************************************************************/

