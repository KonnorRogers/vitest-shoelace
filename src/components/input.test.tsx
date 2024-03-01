import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../utils/test-utils';
import Input from './Input';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.component.js';

describe('Input', () => {
  it('should render the input', async () => {
    render(<Input data-testid="input" value="BLAH" />);
    const elem = screen.getByTestId('input') as SlInput;
    expect(elem).toBeTruthy();

    await elem.updateComplete;
    await new Promise<void>((resolve) => setTimeout(() => resolve()));
    expect(elem.value).toEqual('BLAH');
  });
});
