import { render, screen } from '@testing-library/react'
import {Icon} from '../components/icon';

describe('<Icon />', () => {
  it('O ícone contém uma img com o altText correto', () => {
    
    // 1 - Renderizar o componente
    render(<Icon iconType='imgtest.jpg' altText='teste' />);

    // 2 - Buscar o que quero validar
    const alt = screen.getByAltText(/teste/i);

    // 3 - Validar de fato
    expect(alt).toBeInTheDocument();

    const src = screen.getByTestId('src-data');

    // 3 - Validar de fato
    expect(src).toHaveTextContent('imgtest.jpg');
    
  })
})