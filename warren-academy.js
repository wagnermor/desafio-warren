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

console.log(`Desafio 01:\n ${reverse(27)}`);

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
function programming_class(xStudents, arrivals) {
	let count = 0;
	for(let arrival of arrivals) if(arrival <= 0) count++;
	return count >= xStudents ? 'Aula normal' : 'Aula cancelada';
};

console.log(`\nDesafio 02:\n ${programming_class(3, [-2, -1, 0, 1, 2])}\n`);

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

function vector_sum(n, v) {

	const print_all_sum_rec = function(target, v, current_sum, start, result, output) {
		const stop = v[v.length - 1];
		if (current_sum === target) {
			output.push(result.slice());
		}
	
		for (let i = start; i <= stop; i++) {
			let temp_sum = current_sum + i;
			if (temp_sum <= target) {
					result.push(i);
					print_all_sum_rec(target, v, temp_sum, i, result, output);
					result.pop();
			} else {
					return;
			}
		}
	};
	
	const print_all_sum = function(target, v) {
		const output = [];
		const result = [];
		print_all_sum_rec(target, v, 0, v[0], result, output);
		return output;
	};

	const print_min_len = function() {
		print_all_sum(n, v);
		const minLength = print_all_sum(n, v).reduce((prev, curr) => prev.length = curr.length);
		const arrays = print_all_sum(n, v).filter(item => item.length === minLength);

		console.log(n);
		arrays.map(item => console.log(item));
		return arrays
	}
	return print_min_len();
}
console.log('Desafio 03:');
vector_sum(10, [2,3,4]);

module.exports = {
	reverse,
	programming_class,
	vector_sum
}
