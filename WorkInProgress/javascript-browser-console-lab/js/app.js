function o(id,t){document.getElementById(id).textContent=t;}
function runVariables(){let num=5;const pi=3.14;o('out1',`num=${num}\npi=${pi}`);}
function runArrow(){const dbl=n=>n*2;o('out2','dbl(10) = '+dbl(10));}
function runOps(){o('out3',`5+3=${5+3}\n8*2=${8*2}\n27/3=${27/3}`);}
function runLoop(){let s='';for(let i=1;i<=5;i++)s+=`5 x ${i} = ${5*i}\n`;o('out4',s);}
function runCollections(){let arr=['Jack','Jill',4,true];let txt='Array:\n';arr.forEach(v=>txt+=v+'\n');let m=new Map([['name','John'],['age',22]]);txt+='\nMap:\n';m.forEach((v,k)=>txt+=`${k}: ${v}\n`);o('out5',txt);}