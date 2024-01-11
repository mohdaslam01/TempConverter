
const textbox=document.getElementById('textBox');
const radiobuttonF=document.getElementById('toF');
const radiobuttonC=document.getElementById('toC');
const result=document.getElementById('result'); 
const outputdisplay=document.getElementById('outputdisplay'); 

function covertfunc(){
    if(radiobuttonF.checked){
        let num2=Number(textbox.value);
        result.textContent=`f=(${num2} * 9/5) + 32`        
    }else if(radiobuttonC.checked){
        let num2=Number(textbox.value);
        result.textContent=`c=(${Number(textbox.value)} - 32) * 5/9`;
    }else{
        result.textContent="Click Submit to see Steps";
    }
}   
function toCfunc(){
    let num2=Number(textbox.value);
    num2=(num2 - 32) * 5/9;
    textbox.innerHTML=num2;
    outputdisplay.textContent=num2;
}

function toFfunc(){
    let num2=Number(textbox.value);
    num2= (num2 * 9/5) + 32;
    textbox.innerHTML=num2;
    outputdisplay.textContent=num2;
    
}
