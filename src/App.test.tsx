import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'reducer';

test('renders App', async () => {
    const promise = Promise.resolve();

    const store = configureStore({ reducer: rootReducer });

    render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
    );
    await act(() => promise);
    const mainLogo = screen.getByTestId('logo');
    expect(mainLogo).toBeInTheDocument();
});
