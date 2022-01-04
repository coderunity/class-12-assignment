
/**
 * Age Celculator
 */


const check_button = document.querySelector('#button');
const name = document.querySelector('#name');
const year = document.querySelector('#year');
const result = document.querySelector('#result');
const namevalidation = document.querySelector('#name_validation');
const year_validation = document.querySelector('#year_validation');


check_button.addEventListener( 'click', () => {

 


    result.innerHTML = `<p class="alert alert-danger"> Please enter your valid informetion </p>`

    if (name.value == ''){

        namevalidation.innerHTML = ` *Name feild required` 
  
    }else if( /^[a-zA-Z\s]{1,}/.test(name.value) == false ){
        namevalidation.innerHTML = ` *Enter your Valid Name` 
    }else if(year.value == ''){
        year_validation.innerHTML = ` *Year feild required` 
    }else if(/^[0-9]{4}$/.test(year.value) == false){
        year_validation.innerHTML = ` *Type your Brith year in 4 dijit`  
    }else{

        

    result.innerHTML = agescll(name.value, year.value);

    name.value = '';
    year.value = '';


    }

});

name.addEventListener('keyup', () => {

    namevalidation.innerHTML = ''
});

year.addEventListener('keyup', () => {

    year_validation.innerHTML = ''
});



/**
 * Marriage Calculator
 */

const names = document.querySelector('#names');
const years = document.querySelector('#years');
const button_chack = document.querySelector('#chack');
const results = document.querySelector('#results');
const select = document.querySelector('#select');
const namesvalitasion = document.querySelector('#namesvalitasion');
const yearsvalitation = document.querySelector('#yearsvalitation');

button_chack.addEventListener('click', () => {

    results.innerHTML = `<p class="alert alert-danger"> *Please enter your valid informetion </p>`

    if(years.value == ''){
        yearsvalitation.innerHTML = ` *Brith feild required`
    }else if(/^[a-zA-Z\s]{1,}/.test(names.value) == false){
        namesvalitasion.innerHTML =`*Plz type your valid name`
    }else if(years.value == ''){
        yearsvalitation.innerHTML =`*Type your Brith year in 4 dijit`
    }else if(/^[0-9]{4}$/.test(years.value) == false){
        yearsvalitation.innerHTML =`*Type your Brith year in 4 dijit`
    }else{

        results.innerHTML = agecellchack(names.value, years.value);
        names.value = '';
        years.value = '';
    }

});

names.addEventListener('keyup', () => {

    namesvalitasion.innerHTML =``
});

years.addEventListener('keyup', () => {

    yearsvalitation.innerHTML =``
});




/**
 * curruncy convater
 */


const usdamount = document.querySelector('#usdamount');
const usdselect = document.querySelector('#usdselect');
const forms = document.querySelector('#forms');
const usdresult = document.querySelector('#usdresult');
const buttons = document.querySelector('#buttons');
const amountmessage = document.querySelector('#amountmessage');

forms.addEventListener('submit', (e) => {

    e.preventDefault();
    if(usdamount.value == '' || usdselect.value == '0' ){

        usdresult.innerHTML = `<p class="alert alert-danger">All fields are requred</p>`   
    }else if(usdselect.value === usdselect.children[1].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} USD = ${usdamount.value * usdselect.children[1].value } BDT`

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[2].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} CAD = ${usdamount.value * usdselect.children[2].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[3].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} ERO = ${usdamount.value * usdselect.children[3].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[4].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} GBP = ${usdamount.value * usdselect.children[4].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[5].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} SAR = ${usdamount.value * usdselect.children[5].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[6].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} AED = ${usdamount.value * usdselect.children[6].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
        usdamount.value = ``;
    }else if(usdselect.value === usdselect.children[7].value){
        usdresult.style.color = 'green';
        usdresult.innerHTML =` ${usdamount.value} MYR = ${usdamount.value * usdselect.children[7].value } BDT `

        usdselect.value = `${usdselect.children[0].value}`;
     usdamount.value = ``;
    }else{
      
        
      
    } 

});

forms.addEventListener('keyup', (e) =>{

    e.preventDefault();

    if(/^[\d]+$/.test(usdamount.value) == false){

        amountmessage.innerHTML = `Plz type only number`    
    }else{
        amountmessage.innerHTML =``
    }

});

