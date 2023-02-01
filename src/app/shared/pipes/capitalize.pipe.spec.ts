import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  const pipe = new CapitalizePipe();
  const text = 'hello world';
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of the text', () => {
    expect(pipe.transform(text)).toBe('Hello world');
  });
});
