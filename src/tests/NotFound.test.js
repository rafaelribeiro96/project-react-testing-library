import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe('Testa o componente NotFound', () => {
  test('Teste se a página contém um heading h2 com o texto', () => {
    renderWithRouter(<NotFound />);
    const notFoundH2 = screen.getByRole('heading', { name: /not found/i, level: 2 });
    expect(notFoundH2).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const nfSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const nfImg = screen.getByRole('img', { name: /pikachu crying/i });
    expect(nfImg).toHaveAttribute('src', nfSrc);
    expect(nfImg).toBeInTheDocument();
  });
});
