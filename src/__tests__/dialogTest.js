import { render, screen } from '@testing-library/react'
import {Dialog} from '../components/dialog';

describe('<Dialog />', () => {
  it('Dialog renderiza o children', () => {
    
    // 1 - Renderizar o componente
    render(<Dialog isOpen={true} />);

    // 2 - Buscar o que quero validar
    const texto = screen.getByText(/teste/i);

    // 3 - Validar de fato
    expect(texto).toBeInTheDocument();

        
  })
})
describe('<Dialog />', () => {
  it('Dialog não renderiza children', () => {
    
    // 1 - Renderizar o componente
    render(<Dialog isOpen={false} />);

    // 2 - Buscar o que quero validar
    const texto = screen.findAllByText('TESTE')

    // 3 - Validar de fato
    expect(texto).toBeFalsy

        
  })
})