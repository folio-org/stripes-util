import { compact } from 'lodash';

/**
 * Given an item and holdings record, return its effective call number as a string.
 *
 * The effective call number is composed of the following elements
 * which are scattered across an item record:
 *   <EffectiveCallNumberPrefix>
 *   <EffectiveCallNumber>
 *   <EffectiveCallNumberSuffix>
 *   <Volume>
 *   <Enumeration>
 *   <Chronology>
 *   <EffectiveCopy>
 *
 * @param {object} instanceItem an item record as returned from /inventory/items/${item-id}
 * @param {object} instanceItem returned from circulation/loans with structure {item: {}}
 * @return {string} the effective call number
 */
export default function effectiveCallNumber(instanceItem) {
  const rootItem = instanceItem?.item ?? instanceItem;

  const prefix = rootItem?.effectiveCallNumberComponents?.prefix || rootItem?.callNumberComponents?.prefix;
  const suffix = rootItem?.effectiveCallNumberComponents?.suffix || rootItem?.callNumberComponents?.suffix;
  const callNumber = rootItem?.effectiveCallNumberComponents?.callNumber || rootItem?.callNumberComponents?.callNumber;

  const result = compact([
    prefix,
    callNumber,
    suffix,
    rootItem?.volume,
    rootItem?.enumeration,
    rootItem?.chronology,
    rootItem?.copyNumber,
  ]);

  return result.join(' ');
}
