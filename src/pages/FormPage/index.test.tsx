import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import FormPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  test('Checking first name and second name fields work', async () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/first name/i), 'React');
    await userEvent.type(screen.getByLabelText(/second name/i), 'React');
    expect(screen.getByLabelText(/first name/i)).toHaveValue('React');
    expect(screen.getByLabelText(/second name/i)).toHaveValue('React');
  });
  test('Checking select fields work', async () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.selectOptions(screen.getByLabelText(/Country/i), 'Belarus');
    expect(screen.getByText<HTMLOptionElement>(/Belarus/i).selected).toBe(true);
  });
  test('Checking genders fields work', async () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.click(screen.getByLabelText('Male'));
    expect(screen.getByLabelText('Male')).toBeChecked();
  });
  test('Upload file', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.upload(screen.getByLabelText(/Add photo/i), file);
    expect(screen.getByLabelText<HTMLInputElement>(/Add photo/i).files?.[0]).toStrictEqual(file);
    expect(screen.getByLabelText<HTMLInputElement>(/Add photo/i).files?.item(0)).toStrictEqual(
      file
    );
    expect(screen.getByLabelText<HTMLInputElement>(/Add photo/i).files).toHaveLength(1);
  });
  test('Set date', async () => {
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/Date of Birth/i), '2020-05-24');
    expect(screen.getByLabelText(/Date of Birth/i)).toHaveValue('2020-05-24');
  });
  test('Create person card', async () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    window.URL.createObjectURL = vi.fn();
    render(<FormPage />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByLabelText(/first name/i), 'James');
    await userEvent.type(screen.getByLabelText(/second name/i), 'Bond');
    await userEvent.click(screen.getByLabelText('Male'));
    await userEvent.type(screen.getByLabelText(/Date of Birth/i), '2020-05-24');
    await userEvent.selectOptions(screen.getByLabelText(/Country/i), 'Belarus');
    await userEvent.upload(screen.getByLabelText(/Add photo/i), file);
    await userEvent.click(screen.getByLabelText(/Consent to personal data processing/i));
    await userEvent.click(screen.getByText('Submit'));
    const cardsArray = await screen.findAllByRole('listitem');
    expect(cardsArray).toHaveLength(1);
    expect(cardsArray[0]).toHaveTextContent('James Bond');
  });
});
