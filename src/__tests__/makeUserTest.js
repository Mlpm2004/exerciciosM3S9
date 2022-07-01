import { makeuser } from '../utils/makeUser';

describe('teste para makeUser ', () => {
  it("recebe um nome e a lista de hobbies e retorna um objeto com essas propriedades", () => {
    const result = makeuser('claudio',['cerveja','vinho']);
    const expected = {name:'claudio',hobbies:['cerveja','vinho']};

    expect(result).toEqual(expected);
  

});
})
