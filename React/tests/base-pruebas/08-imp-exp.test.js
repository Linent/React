import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroesById debe de retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById( id );
    //const heroeByOwner = getHeroesByOwner( 'DC' );
    console.log(hero);
     expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  })
  test('getHeroesById debe de retornar un undefined', () => {
    const id = 100;
    const hero = getHeroeById( id );
    //const heroeByOwner = getHeroesByOwner( 'DC' );
    console.log(hero);
     expect( hero ).toBeFalsy();
  })
  test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const owner2 = 'Marvel';
    const heroeDC = getHeroesByOwner( owner );
    const heroesMarvel = getHeroesByOwner( owner2 );
    console.log( heroeDC, heroesMarvel);
    
    expect( heroeDC.length ).toEqual(3);
    //expect( heroesMarvel ).toHaveLength(2);
  })
})
