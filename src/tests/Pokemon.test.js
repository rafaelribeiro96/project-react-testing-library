import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente Pokemon', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent(/electric/i);
    const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });
    const src = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    expect(pokemonImg).toHaveAttribute('src', src);
  });

  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const urlLink = history.location.pathname;
    expect(urlLink).toBe('/pokemons/25');
  });

  test('A imagem de favorito star possui o src alt', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkFavorite = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(checkFavorite);
    const pokemonImg = screen.getByAltText(/Pikachu is marked as favorite/i);
    expect(pokemonImg).toHaveAttribute('alt', 'Pikachu is marked as favorite');
    expect(pokemonImg).toHaveAttribute('src', '/star-icon.svg');
  });
});
