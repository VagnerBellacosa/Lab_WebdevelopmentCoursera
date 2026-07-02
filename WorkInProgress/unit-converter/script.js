function convertTemp(){
let c=parseFloat(celsius.value)||0;
fahrenheit.value=(c*9/5+32).toFixed(2);
}
function convertWeight(){
let k=parseFloat(kg.value)||0;
lb.value=(k*2.205).toFixed(2);
}
function convertDistance(){
let k=parseFloat(km.value)||0;
mi.value=(k/1.609).toFixed(2);
}
