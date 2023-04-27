import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../components/Contact';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('example', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  const sendButton = screen.getByRole('button');
  userEvent.click(sendButton);

  const setErrorMessage = screen.getByText('* Must enter email address');
  expect(setErrorMessage).toBeInTheDocument();
});
