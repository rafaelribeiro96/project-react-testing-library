import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Testa o componente FavoritePokemons', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon found:', () => {
    renderWithRouter(<FavoritePokemons />);
    const mensageFavorite = 'No favorite pokemon found';
    const favoriteMensage = screen.getByText(mensageFavorite);
    expect(favoriteMensage).toBeInTheDocument();
  });
});
