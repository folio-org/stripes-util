import isValidUUID from './isValidUUID';

describe('isValidUUID', () => {
  test('accepts valid UUIDs', () => {
    expect(isValidUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
    expect(isValidUUID('123E4567-E89B-42D3-A456-426614174000')).toBe(true);
  });

  test('rejects invalid UUIDs', () => {
    expect(isValidUUID('123e4567-e89b-62d3-a456-426614174000')).toBe(false);
    expect(isValidUUID('123e4567-e89b-12d3-c456-426614174000')).toBe(false);
    expect(isValidUUID('123e4567e89b12d3a456426614174000')).toBe(false);
    expect(isValidUUID('not-a-uuid')).toBe(false);
  });
});
