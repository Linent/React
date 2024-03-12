import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas del componente <CounterApp />', () => {
    const counter = 10; 
    test('probar el snapshot', () => {
        const { container } =  render( <CounterApp value={ counter } />);
         expect( container ).toMatchSnapshot();
    })
    test('debe de mostrar el valor inicial de 100', () =>{
            render ( <CounterApp value={ 100 }/> )
            expect(screen.getByText(100)).toBeTruthy();
    })
    test('debe de incrementar con el boton +1', () => {
        render ( <CounterApp value={ counter } /> );
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11') ).toBeTruthy();
    });
    test('debe de decrementar con el boton -1', () => {
        render ( <CounterApp value={ counter } /> );
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9') ).toBeTruthy();
    });
    test('debe de reiniciar con el boton reset', () => {
        render ( <CounterApp value={ 366 } /> );
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText( 366 ) ).toBeTruthy();
    });
})
