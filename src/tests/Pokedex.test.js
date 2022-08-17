import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokedex', () => {
  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i, hidden: false });
    userEvent.click(allButton);
    expect(allButton).toBeEnabled();
  });

  test('Os botões de filtragem por tipo possuem o data-testid exceto o botão All', () => {
    renderWithRouter(<App />);
    const buttonLenght = 7;
    const buttonPokemons = screen.queryAllByTestId('pokemon-type-button');
    expect(buttonPokemons.length).toBe(buttonLenght);
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const bugType = screen.getByRole('button', { name: 'Bug' });
    const dragonType = screen.getByRole('button', { name: 'Dragon' });
    const electricType = screen.getByRole('button', { name: 'Electric' });
    const fireType = screen.getByRole('button', { name: 'Fire' });
    const normalType = screen.getByRole('button', { name: 'Normal' });
    const poisonType = screen.getByRole('button', { name: 'Poison' });
    const psychicType = screen.getByRole('button', { name: 'Psychic' });

    userEvent.click(bugType);
    userEvent.click(dragonType);
    userEvent.click(electricType);
    userEvent.click(fireType);
    userEvent.click(normalType);
    userEvent.click(poisonType);
    userEvent.click(psychicType);

    expect(dragonType).toBeEnabled();
    expect(electricType).toBeEnabled();
    expect(fireType).toBeEnabled();
    expect(normalType).toBeEnabled();
    expect(poisonType).toBeEnabled();
    expect(psychicType).toBeEnabled();
  });
});
