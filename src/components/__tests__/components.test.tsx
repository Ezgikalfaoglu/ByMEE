import { fireEvent, render, screen } from '@testing-library/react-native';
import { Button, StateView, TextField } from '@/components';

describe('shared components', () => {
  it('Button shows the exact label and calls onPress', async () => {
    const onPress = jest.fn();
    await render(<Button label="Get started" onPress={onPress} />);
    await fireEvent.press(screen.getByRole('button', { name: 'Get started' }));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('Button does not call onPress when disabled', async () => {
    const onPress = jest.fn();
    await render(<Button label="Continue" onPress={onPress} disabled />);
    await fireEvent.press(screen.getByRole('button', { name: 'Continue' }));
    expect(onPress).not.toHaveBeenCalled();
  });

  it('TextField shows the error text', async () => {
    await render(<TextField label="Name" error="Please enter your name." />);
    expect(screen.getByText('Please enter your name.')).toBeTruthy();
  });

  it('StateView error uses the default texts', async () => {
    const onAction = jest.fn();
    await render(<StateView state="error" onAction={onAction} />);
    expect(screen.getByText('Something went wrong.')).toBeTruthy();
    await fireEvent.press(screen.getByRole('button', { name: 'Try again' }));
    expect(onAction).toHaveBeenCalled();
  });
});
