import getSourceSuppressor from './getSourceSuppressor';

describe('getSourceSuppressor', () => {
  it('should return \'true\' if action should be suppressed based on source', () => {
    expect(getSourceSuppressor('local')({ source: 'local' })).toBeTruthy();
    expect(getSourceSuppressor(['marc', 'folio', 'consortium'])({ source: 'folio' })).toBeTruthy();
  });

  it('should return \'false\' if action should NOT be suppressed based on source', () => {
    expect(getSourceSuppressor('folio')({ source: 'local' })).toBeFalsy();
    expect(getSourceSuppressor(['marc', 'folio', 'consortium'])({ source: 'local' })).toBeFalsy();
  });
});
