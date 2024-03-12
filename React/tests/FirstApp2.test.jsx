import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtitulo'
    
     test(' debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title = { title } />)
        
        expect( container ).toMatchSnapshot();
    })  

    test('debe de mostrar el mensaje "hola soy Goku"', () => {
        
       

        /*  const h1 = container.querySelector('h1');
         expect(h1.innerHTML).toContain( title ); */
         render(<FirstApp title = { title }/> )
        screen.debug();
         expect( screen.getByText( title ) ).toBeTruthy();
        //expect( getByTestId('test-title').innerHTML ).toContain( title );
    })
    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={title}/>);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    })
    test('Debe de mostrar el subtitulo enviado por props', () => {
        render( <FirstApp tittle={ title } subTitle={ subTitle }/> )
        expect( screen.getAllByText(subTitle).length ).toBe(2);
    })
    
})
