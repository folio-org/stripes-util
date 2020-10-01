import { describe, expect, test } from '@jest/globals';

import effectiveCallNumber from './effectiveCallNumber';

const item = {
  callNumberComponents: {
    prefix: 'prefix',
    suffix: 'suffix',
    callNumber: 'callNumber',
  },
  volume: 'volume',
  enumeration: 'enumeration',
  chronology: 'chronology',
  copyNumber: 'copyNumber',
};

describe('handles /inventory/items/item-id shaped items', () => {
  test('fully populated element', () => {
    expect(effectiveCallNumber(item)).toEqual('prefix callNumber suffix volume enumeration chronology copyNumber');
  });

  describe('effectiveCallNumberComponents override callNumberComponents', () => {
    const pItem = { ...item };
    pItem.effectiveCallNumberComponents = {
      prefix: 'ecn-prefix',
      suffix: 'ecn-suffix',
      callNumber: 'ecn-callNumber',
    };

    expect(effectiveCallNumber(pItem)).toEqual('ecn-prefix ecn-callNumber ecn-suffix volume enumeration chronology copyNumber');
  });

  test('without prefix', () => {
    const pItem = { ...item };
    const pComponents = { ...item.callNumberComponents };
    delete pComponents.prefix;
    pItem.callNumberComponents = pComponents;
    expect(effectiveCallNumber(pItem)).toEqual('callNumber suffix volume enumeration chronology copyNumber');
  });

  test('without callNumber', () => {
    const pItem = { ...item };
    const pComponents = { ...item.callNumberComponents };
    delete pComponents.callNumber;
    pItem.callNumberComponents = pComponents;
    expect(effectiveCallNumber(pItem)).toEqual('prefix suffix volume enumeration chronology copyNumber');
  });

  test('without suffix', () => {
    const pItem = { ...item };
    const pComponents = { ...item.callNumberComponents };
    delete pComponents.suffix;
    pItem.callNumberComponents = pComponents;
    expect(effectiveCallNumber(pItem)).toEqual('prefix callNumber volume enumeration chronology copyNumber');
  });

  test('without volume', () => {
    const pItem = { ...item };
    delete pItem.volume;
    expect(effectiveCallNumber(pItem)).toEqual('prefix callNumber suffix enumeration chronology copyNumber');
  });

  test('without enumeration', () => {
    const pItem = { ...item };
    delete pItem.enumeration;
    expect(effectiveCallNumber(pItem)).toEqual('prefix callNumber suffix volume chronology copyNumber');
  });

  test('without chronology', () => {
    const pItem = { ...item };
    delete pItem.chronology;
    expect(effectiveCallNumber(pItem)).toEqual('prefix callNumber suffix volume enumeration copyNumber');
  });

  test('without copyNumber', () => {
    const pItem = { ...item };
    delete pItem.copyNumber;
    expect(effectiveCallNumber(pItem)).toEqual('prefix callNumber suffix volume enumeration chronology');
  });
});

describe('handles circulation/loans shaped items', () => {
  const loanItem = { item };
  test('fully populated element', () => {
    expect(effectiveCallNumber(loanItem)).toEqual('prefix callNumber suffix volume enumeration chronology copyNumber');
  });
});
