import calculate from '../calculate';

describe('calculate', () => {
  it('should return an empty object for AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should concatenate numbers when a number button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '3');
    expect(result).toEqual({ total: '10', next: '53', operation: '+' });
  });

  it('should add decimal point to next when "." button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });

  it('should return the correct result when "=" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('should change the sign of next or total when "+/-" button is clicked', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toEqual({ total: '10', next: '-5', operation: '+' });
  });
});
