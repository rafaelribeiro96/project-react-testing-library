import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testa o componente About', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutH2 = screen.getByRole('heading', { name: 'About Pokédex' });
    expect(aboutH2).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    renderWithRouter(<About />);
    const aboutSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const aboutImg = screen.getByRole('img', { name: /pokédex/i });
    expect(aboutImg).toHaveAttribute('src', aboutSrc);
    expect(aboutImg).toBeInTheDocument();
  });
});
