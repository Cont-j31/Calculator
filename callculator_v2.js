let primeiroN;
let oper;
let segundoN;

const resultado = document.getElementById("resultado");
const igual = document.getElementById("btni");
const btnNmr = [
btnv,
btn0,
btn1,
btn2,
btn3,
btn4,
btn5,
btn6,
btn7,
btn8,
btn9,
]
const btnSin = [
btna,
btnm,
btnx,
btnd,
]
btnNmr.forEach(function(botaoN){
	
	botaoN.addEventListener("click", function(){
		
		resultado.value += botaoN.value;
		
		
	});
});

btnSin.forEach(function(botaoS){
	
	botaoS.addEventListener("click", function(){
		
		
		primeiroN = resultado.value
		
		oper = botaoS.value;
		
		resultado.value = "";
	});
});

igual.addEventListener("click",function(){
	
	segundoN = resultado.value;
	
	if (oper == "+"){
		primeiroN = primeiroN.replace(",", ".")
		segundoN = segundoN.replace(",", ".");
		resultado.value = Number(primeiroN) + Number(segundoN);
	}
	
	if (oper == "-"){
		primeiroN = primeiroN.replace(",", ".")
		segundoN = segundoN.replace(",", ".");
		resultado.value = Number(primeiroN) - Number(segundoN);
	}
	if (oper == "x"){
		primeiroN = primeiroN.replace(",", ".")
		segundoN = segundoN.replace(",", ".");
		resultado.value = Number(primeiroN) * Number(segundoN);
	}
	if (oper == "/"){
		primeiroN = primeiroN.replace(",", ".")
		segundoN = segundoN.replace(",", ".");
		resultado.value = Number(primeiroN) / Number(segundoN);
	}
});