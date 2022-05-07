const { reverse, programmingClass, vectorSum } = require('./warren-academy');

test('Desafio 01', () => {
  expect(reverse(10)).toEqual([]);
  expect(reverse(22)).toEqual([12, 14, 16, 18, 21]);
})

test('Desafio 02', () => {
  expect(programmingClass(3,[-2,-1,0,1,2])).toEqual('Aula normal');
  expect(programmingClass(3,[-2,-1,1,1,2])).toEqual('Aula cancelada');
  expect(programmingClass(1,[2,1,1,1,2])).toEqual('Aula cancelada');
})

test('Desafio 03', () => {
  expect(programmingClass(3,[-2,-1,0,1,2])).toEqual('Aula normal');
  expect(programmingClass(3,[-2,-1,1,1,2])).toEqual('Aula cancelada');
  expect(programmingClass(1,[2,1,1,1,2])).toEqual('Aula cancelada');
})
