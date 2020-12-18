import { Parser } from 'json2csv';

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
  });

  test('IE 10+', () => {
    global.navigator.msSaveBlob = jest.fn();
    const spy = jest.spyOn(global.navigator, 'msSaveBlob');

    exportCsv(list, {});
    expect(spy).toHaveBeenCalled();
  });

});
