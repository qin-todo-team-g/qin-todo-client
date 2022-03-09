import '@testing-library/jest-dom'
import {Lane} from '../components/Lane'
import { render, screen } from '@testing-library/react';

describe('Laneコンポーネントのテスト', () => {
  it('"今日する"が正しく表示されているか', () => {
    render(<Lane color="red" title="今日する" />);
    expect(screen.getByText('今日する')).toBeInTheDocument();
  })
  it('"明日する"が正しく表示されているか', () => {
    render(<Lane color="orange" title="明日する" />);
    expect(screen.getByText('明日する')).toBeInTheDocument();
  })
  it('"今度する"が正しく表示されているか', () => {
    render(<Lane color="yellow" title="今度する" />);
    expect(screen.getByText('今度する')).toBeInTheDocument();
  })
});