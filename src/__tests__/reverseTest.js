import { reverse } from '../utils/reverse';

describe('teste para a função reverse do Mario ', () => {
  it("deve retornar string invertida", () => {
    const result = reverse('claudio');
    const expected = 'oidualc';

    expect(result).toEqual(expected);
  

});
})
