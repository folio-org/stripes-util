import validateUUID from './validateUUID';

describe('validateUUID', () => {
  test('accepts valid UUIDs', () => {
    expect(validateUUID('123e4567-e89b-12d3-a456-426614174000')).toBe(true);
    expect(validateUUID('123E4567-E89B-42D3-A456-426614174000')).toBe(true);
  });

  test('rejects invalid UUIDs', () => {
    expect(validateUUID('123e4567-e89b-62d3-a456-426614174000')).toBe(false);
    expect(validateUUID('123e4567-e89b-12d3-c456-426614174000')).toBe(false);
    expect(validateUUID('123e4567e89b12d3a456426614174000')).toBe(false);
    expect(validateUUID('not-a-uuid')).toBe(false);
  });
});
