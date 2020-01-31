//alert("Olá HCODE!");

//var resposta = confirm("Deseja excluir?");
//console.log(resposta);

//var, let, const
const a = 10;
const b = 33;

//alert(a + b);

function somar(a, b){
	//return a + b;
	return parseInt(a) + parseInt(b);
}

//console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click",function (){
	let valorA = document.querySelector("#valorA").value;
	let valorB = document.querySelector("#valorB").value;
	if (valorA.length > 0 && valorB.length > 0) {
		//alert(parseInt(valorA) + parseInt(valorB));
		alert(somar(valorA, valorB));
	} else {
		alert("Digite os valores para o cálculo!");
	}

	//alert("Timão Campeão!");
} );
