/* Desafio 01
Alguns números inteiros positivos n possuem uma propriedade na qual a soma de n + reverso(n) resultam em números ímpares. Por exemplo, 36 + 63 = 99 e 409 + 904 = 1313. Considere que n ou reverso(n) não podem começar com 0.
Existem 120 números reversíveis abaixo de 1000. >>> PS a baixo de 1000 existem 404
Construa um algoritmo que mostre na tela todos os números n onde a soma de n + reverso(n) resultem em números ímpares que estão abaixo de 1 milhão.*/
function reverse(n) {
	const reverses = [];
	for(let i = 11; i < n; i++) {
		let inverse = i.toString().split('').reverse().join('');
		let sum = i + Number(inverse);
		if(sum % 2 === 1 && inverse[0] !== '0') reverses.push(i);
	};
	return reverses;
};

/*Desafio 02
Um professor de programação, frustrado com a falta de disciplina de seus alunos, decidi cancelar a aula se menos de x alunos estiverem presentes quando a aula for iniciada. O tempo de chegada varia entre:

Normal: tempoChegada <= 0
Atraso: tempoChegada > 0
Construa um algoritmo que dado o tempo de chegada de cada aluno e o limite x de alunos presentes, determina se a classe vai ser cancelada ou não ("Aula cancelada” ou “Aula normal”).

Exemplo:

Entrada de dados:
x = 3
tempoChegada = [-2, -1, 0, 1, 2]

Saída de dados:
Aula normal.

Explicação:
Os três primeiros alunos chegaram no horário. Os dois últimos estavam atrasados. O limite é de três alunos, portanto a aula não será cancelada.*/
function programmingClass(xStudents, arrivals) {
	let count = 0;
	for(let arrival of arrivals) if(arrival <= 0) count++;
	return count >= xStudents ? 'Aula normal' : 'Aula cancelada';
};

/*Desafio 03
Dado um vetor de números e um número n. Determine a soma com o menor número de elementos entre os números do vetor mais próxima de n e também mostre os elementos que compõem a soma. Para criar a soma, utilize qualquer elemento do vetor uma ou mais vezes.

Exemplo:

Entrada de dados:

N = 10
V = [2, 3, 4]

Saída de dados:

10
[2, 4, 4]
[3, 3, 4]

Explicação:

Se N = 10 e V = [2, 3, 4] você pode utilizar as seguintes soma: [2, 2, 2, 2, 2], [2, 2, 3, 3], [2, 4, 4] ou [3, 3, 4]. Como a quantidade de elementos em [2, 4, 4] e [3, 3, 4] é igual, os dois conjuntos devem ser mostrados.*/
function vectorSum(n, v) {
	let start = v[0];//2
	let stop = v[v.length - 1]//4
	let control = start;
	const target = n;//10
	const arrays = [];
	let result = [];
	
	console.log(`Start: ${start}`)
	console.log(`Stop: ${stop}`)
	
	let current_sum = 0;
	let temp_sum;
	for(let i = start; i <= stop; i++) {
		temp_sum = 0;
		result = []
		let j = i
		temp_sum = current_sum + i;
		console.log(`temp_sum: ${temp_sum}`)
		while(temp_sum <= target) {
			console.log(`temp_sum: ${temp_sum}`)
			result.push(j)
			temp_sum += j;
			current_sum += j
			if(current_sum === target) {
				arrays.push(result)
			}
		}
		console.log(`result: ${result}`);
	}
	console.log(`arrays: ${arrays}`);


	return arrays;
};

console.log(vectorSum(10, [2,3,4]));

module.exports = {
	reverse,
	programmingClass,
	vectorSum
}
