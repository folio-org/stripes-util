import exportCsv from './exportCsv';

const list = [
  { a: 'r1a', b: 'r1b', c: 'r1c' },
  { a: 'r2a', b: 'r2b', c: 'r2c' },
  { a: 'r3a', b: 'r3b', c: 'r3c' },
];

describe('download a CSV file', () => {
  global.URL.createObjectURL = jest.fn();
  global.Blob = jest.fn();

  test('with no options', () => {
    const createElementSpy = jest.spyOn(global.document, 'createElement');
    const appendChildSpy = jest.spyOn(global.document.body, 'appendChild');

    exportCsv(list, {});
    expect(createElementSpy).toHaveBeenCalled();
    expect(appendChildSpy).toHaveBeenCalled();
    expect(global.URL.createObjectURL).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
  });

  test('IE 10+', () => {
    global.navigator.msSaveBlob = jest.fn();
    const spy = jest.spyOn(global.navigator, 'msSaveBlob');

    exportCsv(list, {});
    expect(spy).toHaveBeenCalled();
  });

  test('options: excludeFields', () => {
    const l = [
      { a: 'r1a', b: 'r1b', c: 'r1c' },
      { a: 'r2a', b: 'r2b', c: 'r2c' },
      { a: 'r3a', b: 'r3b', c: 'r3c' },
    ];
    const lExpect = ['"a"\n"r1a"\n"r2a"\n"r3a"'];

    exportCsv(l, { excludeFields: ['b', 'c'] });
    expect(Blob).toHaveBeenLastCalledWith(lExpect, { type: 'text/csv;charset=utf-8;' });
  });

  test('options: excludeFields, non-existent field', () => {
    const l = [
      { a: 'r1a', b: 'r1b', c: 'r1c' },
      { a: 'r2a', b: 'r2b', c: 'r2c' },
      { a: 'r3a', b: 'r3b', c: 'r3c' },
    ];
    const lExpect = ['"a","b","c"\n"r1a","r1b","r1c"\n"r2a","r2b","r2c"\n"r3a","r3b","r3c"'];

    exportCsv(l, { excludeFields: ['x'] });
    expect(Blob).toHaveBeenLastCalledWith(lExpect, { type: 'text/csv;charset=utf-8;' });
  });

  test('exclude fields, legacy array implementation', () => {
    const l = [
      { a: 'r1a', b: 'r1b', c: 'r1c' },
      { a: 'r2a', b: 'r2b', c: 'r2c' },
      { a: 'r3a', b: 'r3b', c: 'r3c' },
    ];
    const lExpect = ['"a"\n"r1a"\n"r2a"\n"r3a"'];

    exportCsv(l, ['b', 'c']);
    expect(Blob).toHaveBeenLastCalledWith(lExpect, { type: 'text/csv;charset=utf-8;' });
  });

  test('options: onlyFields', () => {
    const l = [
      { a: 'r1a', b: 'r1b', c: 'r1c' },
      { a: 'r2a', b: 'r2b', c: 'r2c' },
      { a: 'r3a', b: 'r3b', c: 'r3c' },
    ];
    const lExpect = ['"a"\n"r1a"\n"r2a"\n"r3a"'];

    exportCsv(l, { onlyFields: ['a'] });
    expect(Blob).toHaveBeenLastCalledWith(lExpect, { type: 'text/csv;charset=utf-8;' });
  });

  test('include fields', () => {
    const l = [
      { a: 'r1a', b: 'r1b', c: 'r1c' },
      { a: 'r2a', b: 'r2b', c: 'r2c' },
      { a: 'r3a', b: 'r3b', c: 'r3c' },
    ];
    const lExpect = ['"a","x"\n"r1a",\n"r2a",\n"r3a",'];

    exportCsv(l, { excludeFields: ['b', 'c'], explicitlyIncludeFields: ['a', 'x'] });
    expect(Blob).toHaveBeenLastCalledWith(lExpect, { type: 'text/csv;charset=utf-8;' });
  });


  test('no arguments', () => {
    const appendChildSpy = jest.spyOn(global.document.body, 'appendChild');

    exportCsv();
    expect(appendChildSpy).not.toHaveBeenCalled();

    appendChildSpy.mockRestore();
  });

  test('empty list', () => {
    const appendChildSpy = jest.spyOn(global.document.body, 'appendChild');

    exportCsv([], {});
    expect(appendChildSpy).not.toHaveBeenCalled();

    appendChildSpy.mockRestore();
  });
});
