const { reverse, programming_class, vector_sum } = require('./warren-academy');

test('Desafio 01', () => {
  expect(reverse(10)).toEqual([]);
  expect(reverse(22)).toEqual([12, 14, 16, 18, 21]);
})

test('Desafio 02', () => {
  expect(programming_class(3,[-2,-1,0,1,2])).toEqual('Aula normal');
  expect(programming_class(3,[-2,-1,1,1,2])).toEqual('Aula cancelada');
  expect(programming_class(1,[2,1,1,1,2])).toEqual('Aula cancelada');
})

test('Desafio 03', () => {
  expect(vector_sum(10,[2,3,4])).toEqual([[2,4,4],[3,3,4]]);
  expect(vector_sum(25,[2,3,4,5])).toEqual([[5,5,5,5,5]]);
  expect(vector_sum(23,[2,3,4,5,6])).toEqual([[5,6,6,6]]);
})
