 var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    //Countries From Asia - 1
var  aa=data.filter((item)=>item.region==='Asia');
console.log(aa);
//Countries with Population < 200000 - 2
var popu=data.filter((element)=>element.population<200000
console.log(popu);
//Get Name,Capital,Flag using ForEach - 3
var result=data.forEach((element)=>{console.log('${element.name} ${element.capital} ${element.flag}')})
//Print the Countries only USD - 5
let cusd=data.filter((element)=>{
    for(let i in element.currencies){
    if(element.currencies[i].code==='USD'){
    return true;
    }
    }
    }).map((element)=>element.name);
    console.log(cusd);
//Calculate the Populations by using Reduce - 4
    var result=data.reduce((acc,element)=>acc+element.population,0);
console.log(result);
}
