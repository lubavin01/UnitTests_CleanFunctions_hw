import showHealth from '../src/function';

describe('showHealth', () => {
  test("{name: 'Маг', health: 90}", () => {
    expect(showHealth({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test("{name: 'Маг', health: 45}", () => {
    expect(showHealth({ name: 'Маг', health: 45 })).toBe('wounded');
  });

  test("{name: 'Маг', health: 14}", () => {
    expect(showHealth({ name: 'Маг', health: 14 })).toBe('critical');
  });
});