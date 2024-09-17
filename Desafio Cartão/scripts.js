/* Funções para aparecer na tela */ 
function changeCardHolderText(){
    // 1 parte é o que vai ser transformado // == // o que ele irá se transformar//
    document.getElementById('name-text').innerText = document.getElementById('name').value;
};

function changeCardNumber(){
    document.getElementById('cardnumber-text').innerText = document.getElementById('cardnumber').value;
};

function changeCvc(){
    document.getElementById('cvc-text').innerText = document.getElementById('cvc').value;
};

function changeDate(){
    document.getElementById('date-text').innerText = document.getElementById('dateM').value + "/" + document.getElementById('dateY').value;
}
/* Checar validação do formulario  */

/* const frmCartao = document.getElementById("frmCartao");
const cardname = document.getElementById("name");
const cardnumber = document.getElementById("cardnumber");
const dateM = document.getElementById("dateM");
const dateY = document.getElementById("dateY");
const cvc = document.getElementById("cvc"); */

/* Função para detectar submit do botão */
/* frmCartao.addEventListener("submit" , (e) =>{
    e.preventDefault();
    checkInputs();
    console.log("Alo");
}) */

let nameValid = false;
let cardnumberValid = false;
let dateMValid = false;
let dateYValid = false;
let cvcValid = false;

function checkInputs(){
  if(document.getElementById('name').value === ''){
    document.getElementById('name-mensage').style.display = 'block';
    document.getElementById('name').style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    nameValid = true;
  }
  if(document.getElementById('cardnumber').value === ''){
    document.getElementById('cardnumber-mensage').style.display = 'block';
    document.getElementById('cardnumber').style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    cardnumberValid = true;
  }
  if(document.getElementById('dateM').value === ''){
    document.getElementById('date-mensage').style.display = 'block';
    document.getElementById('dateM').style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    dateMValid = true;
  }
  if(document.getElementById('dateY').value === ''){
    document.getElementById('date-mensage').style.display = 'block';
    document.getElementById('dateY').style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    dateYValid = true;
  }
  if(document.getElementById('cvc').value === ''){
    document.getElementById('cvc-mensage').style.display = 'block';
    document.getElementById('cvc').style.borderColor = 'hsl(0, 100%, 66%)';
  } else {
    cvcValid = true;
  }
  
  if(nameValid && cardnumberValid && dateMValid && dateYValid && cvcValid){
    tudoCerto();  
  };
};

function tudoCerto(){
  document.getElementsByClassName('containerM')[0].style.display = 'block';
  document.getElementsByClassName('containerF')[0].style.display = 'none';
  console.log('tudo certo');
};

/* Função para validar sucesso ou erro */
/* function checkInputs(){
    const cardnameValue = cardname.value;
    const cardnumberValue = cardnumber.value;
    const dateMValue = dateM.value;
    const dateYValue = dateY.value;
    const cvcValue = cvc.value;

if(cardnameValue === "" ){
    setErrorfor(cardname, "Cant be Blank");
}else{
    setSucessfor(cardname);
}
if(cardnumberValue === "" ){
    setErrorfor(cardnumber, "Cant be Blank");
}else{
    setSucessfor(cardnumber);
}
if(dateMValue === "" ){
    setErrorfor(dateM, "Cant be Blank");
}else{
    setSucessfor(dateM);
}
if(dateYValue === "" ){
    setErrorfor(dateY, "Cant be Blank");
}else{
    setSucessfor(dateY);
}
if(cvcValue === "" ){
  document.getElementById('cvc-mensage').style.display = 'block';
     setErrorfor(cvc-mensage); 
}
else{
    setSucessfor(cvc);
} */

/* const formControls = frmCartao.querySelectorAll(".input-box");

const formIsValid = [... formControls].every((inputbox) => {
       return (inputbox.className === "input-box success");
}) */

/* if (formIsValid){
    console.log("fon");
} */


/* function setErrorfor(input){
 *//*     const inputbox = input.parentElement;
    const small = inputbox.querySelector("small"); */

    

/*     small.innerText = message;

    inputbox.className = "input-box error"; */
/* } */


/* function setSucessfor(input, message){
    const inputbox = input.parentElement;
    inputbox.className = "input-box sucess";
} */






/* Pega informações do Botão */
 /* var btnConf = document.querySelector("#btnConf"); */
/* Evento ao Clickar botão Botão */
     /* btnConf.addEventListener("click", function(event) { 
     
        event.preventDefault();
        
        var frmCartao = document.querySelector("#frmCartao");
        
        var divM = document.querySelector("#divMensagens1");
        divM.textContent="";
        var divM = document.querySelector("#divMensagens2");
        divM.textContent="";
        var divM = document.querySelector("#divMensagens3");
        divM.textContent="";
        
         if ( validarVazio(frmCartao) == false ) {
            return;
         }
        console.log(frmCartao.cardnumber.value);

     }) 
      




    function validarVazio(frmCartao){
        if (validarVazioNome(frmCartao) == true && validarVazioNumero(frmCartao) == true && validarVazioData(frmCartao)== true && validarVazioCvc(frmCartao)== true  ){
            console.log("ta ok");
            return true;
        }
        return false;
    }


    function validarVazioNome(frmCartao){
        if( frmCartao.cardholder.value == 0 ) {
            criaMensagem1("Can't be blank");
            
            return false;
        }
        return true;
    }

    function validarVazioNumero(frmCartao){
      if (frmCartao.cardnumber.value == 0 ){
        criaMensagem2("Can't be blank");
        return false;
      }
      return true;
    }


      function validarVazioData(frmCartao){
        if (frmCartao.dateM.value == 0 || frmCartao.dateY.value == 0){
        criaMensagem3("Can't be blank");
          return false;
        }
        return true;
    }

    function validarVazioCvc(frmCartao){
        if (frmCartao.cvc.value == 0){
        criaMensagem3("Can't be blank");
        console.log("Cant be blank");
          return false;
        }
        return true;
    }

    function criaMensagem1(text){
        var msg = document.createElement("div");
            msg.classList.add("alerta");
            msg.textContent = text;
        var divM = document.querySelector("#divMensagens1");
            divM.appendChild(msg);  
    }
    function criaMensagem2(text){
        var msg = document.createElement("div");
            msg.classList.add("alerta");
            msg.textContent = text;
        var divM = document.querySelector("#divMensagens2");
            divM.appendChild(msg);  
    }
    function criaMensagem3(text){
        var msg = document.createElement("div");
            msg.classList.add("alerta");
            msg.textContent = text;
        var divM = document.querySelector("#divMensagens3");
            divM.appendChild(msg);  
    }


 */

