
/**
 * Age Celculator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function agescll(name, year){

    let date = new Date();
    let age = date.getFullYear() - year;

    let agestatus = ageStausChack(age);

    return `
    <p class="alert alert-${agestatus.status}">Hello  ${name} You are ${age} years old & You are ${agestatus.name} </p>

    `;
 
}

/**
 * Chack Age staus
 * @param {*} age 
 * @returns 
 */


function ageStausChack(age){

    if(age >= 0 && age <= 10){

        return {
        name   : 'Babu',
        status : 'success'
        };

    }else if(age >= 10 && age <= 17){

        return {
            name   : 'Kisor',
            status : 'info'
            };

    }else if(age >= 17 && age <= 40){

        return {
            name   : 'jubok',
            status : 'primary'
            };

    }else if(age >= 40 && age <= 55){

        return {
            name   : 'Boyosko',
            status : 'warning'
            };

    }else if(age >= 55 && age <= 70){

        return {
            name   : 'Biddho',
            status : 'denger'
            };

    }else{

        return {
            name   : 'Jin Boot',
            status : 'dark'
            };
    }

};


/**
 * Marriage Calculator
 */

function agecellchack (names, years){
    let date = new Date();
    let ages = date.getFullYear() - years;

    let ageStatuschacks = agestatuschacks(ages); 

    return ` <p class="alert alert-${ageStatuschacks.colors}"> Hello ${names} you are ${ages} year old & ${ageStatuschacks.names} & Your Status: ${select.value}</p>`
}


function agestatuschacks(ages){

    if(ages >= 0 && ages < 18){
        return{
            names    : 'You are not old enough to get married yet',
            colors   : 'danger'
        }
    }else if(ages >= 18 && ages < 30){
        return{
            names    : 'You are old enough to get married, so get married early',
            colors   : 'success'
        }
    }
}