# Change history for stripes-util

## 4.1.0 IN PROGRESS
* Tests! Refs STUTL-6.
* Add the `parseJwt` function from ui-developer as a new export. Refs STUTL-13.
* Jest deps should be dev deps.

## [4.0.0](https://github.com/folio-org/stripes-util/tree/v4.0.0) (2020-10-06)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v3.0.0...v4.0.0)

* Increment `react-intl` to `^v5`. Refs STUTL-9.
* Add the `eachPromise` function from ui-users as a new export.

## [3.0.0](https://github.com/folio-org/stripes-util/tree/v3.0.0) (2020-05-20)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v2.0.0...v3.0.0)

* Upgrade `react-intl` to `^4.5.3`. Refs STRIPES-672.

## [2.0.0](https://github.com/folio-org/stripes-util/tree/v2.0.0) (2020-03-04)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.6.2...v2.0.0)

* Add configuration to turn on/off header adding to csv file. Refs UIDEXP-1.
* Extend function `effectiveCallNumber` for being able to use it with loans. Refs UIU-1391.
* Move `react-intl` to peerDependencies.
* Fix a mistake in `effectiveCallNumber` function. Fixes UIU-1391.

## [1.6.2](https://github.com/folio-org/stripes-util/tree/v1.6.2) (2019-12-18)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.6.1...v1.6.2)

* Nah, we want `effectiveCallNumber` to derive all values from the item record. Refs STUTL-5.

## [1.6.1](https://github.com/folio-org/stripes-util/tree/v1.6.1) (2019-12-04)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.6.0...v1.6.1)

* `effectiveCallNumber` also accepts a holdings record to help assemble the call number. Refs STUTL-4.

## [1.6.0](https://github.com/folio-org/stripes-util/tree/v1.6.0) (2019-12-04)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.5.0...v1.6.0)

* Export `effectiveCallNumber` to format a call number from an item record. Refs UIREQ-366.

## [1.5.0](https://github.com/folio-org/stripes-util/tree/v1.4.0) (2019-07-22)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.4.0...v1.5.0)

* Begin a [library of validator functions](validators), currently only providing `required`.

## [1.4.0](https://github.com/folio-org/stripes-util/tree/v1.4.0) (2019-05-10)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v1.3.0...v1.4.0)

* Turned off sideEffects to enable tree-shaking for production builds. Refs STRIPES-564 and STRIPES-581.

## [1.3.0](https://github.com/folio-org/stripes-util/tree/v1.3.0) (2018-11-29)

* Allow CSV export to Use UI labels as column headers

## [1.2.0](https://github.com/folio-org/stripes-util/tree/v1.2.0) (2018-10-05)

* Export `exportToCsv`

## [1.1.0](https://github.com/folio-org/stripes-util/tree/v1.1.0) (2018-09-27)

* Add `options` param to `exportToCsv`. Fixes [UIREQ-102](https://issues.folio.org/browse/UIREQ-102).

## [1.0.0](https://github.com/folio-org/stripes-util/tree/v1.0.0) (2018-09-10)

* Initial package setup. Fixes STRIPES-522.
* exportToCsv function. Fixes UIU-416.
