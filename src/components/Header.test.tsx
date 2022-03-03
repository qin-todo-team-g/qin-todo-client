import '@testing-library/jest-dom'
import {Header} from './Header'
import { render, screen } from '@testing-library/react';

describe('Headerのテスト', () => {
  it('ヘッダーが正しく表示されているか', () => {
    render(<Header />);
    expect(screen.getByText('Qin Todo')).toBeInTheDocument();
  })
});