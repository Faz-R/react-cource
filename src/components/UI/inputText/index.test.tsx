import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import InputText from '.';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../form/interface';

describe('The presence of a loader at the time of the request', () => {
  test('', async () => {
    render(
      <InputText
        labelName=""
        register={{} as ReturnType<UseFormRegister<FormValues>>}
        error={{ message: 'Error' } as FieldError}
      />
    );
    expect(screen.findByText('Error')).toBeInTheDocument;
  });
});
