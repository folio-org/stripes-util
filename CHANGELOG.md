# Change history for stripes-util

## 6.2.0 IN PROGRESS

* `exportCSV` render download link to `OverlayContainer` to allow click to work and avoid focus-trapping of stripes modals. Refs STUTL-48.

## [6.2.0](https://github.com/folio-org/stripes-util/tree/v6.2.0) (2024-10-11)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v6.1.0...v6.2.0)

* Implement `escapeCqlWildcards` to escape ALL CQL wildcards. Refs STUTL-45, STUTL-33.

## [6.1.0](https://github.com/folio-org/stripes-util/tree/v6.1.0) (2024-03-12)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v6.0.0...v6.1.0)

* Update `effectiveCallNumber` to include item's "Display summary" in the output. Refs STUTL-44.

## [6.0.0](https://github.com/folio-org/stripes-util/tree/v6.0.0) (2023-10-11)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v5.2.1...v6.0.0)

* Add `getHeaderWithCredentials` for leverage cookie-based authentication in all API requests. Refs STUTL-32.
* Add `getSourceSuppressor` to build action suppressor based on an entry sources. Refs STUTL-34.
* *BREAKING* Bump `react` to `v18`. Refs STUTL-35.
* Leverage `jest-config-stripes` for shared test config. Refs STUTL-40.
* Prune unused deps, including `engines.node`. Refs STUTL-41.
* *BREAKING* bump `react-intl` to `v6.4.4`. Refs STUTL-42.

## [5.2.1](https://github.com/folio-org/stripes-util/tree/v5.2.1) (2023-01-30)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v5.2.0...v5.2.1)

* Update `query-string` to `^7.1.2` fixing DoS CVE-2022-38900. Refs STUTL-26.

## [5.2.0](https://github.com/folio-org/stripes-util/tree/v5.2.0) (2022-06-14)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v5.1.0...v5.2.0)

* Update NodeJS to v16, active LTS. Refs STUTL-24.
* replace `babel-eslint` with `@babel/eslint-parser`. Refs STUTL-23.

## [5.1.0](https://github.com/folio-org/stripes-util/tree/v5.1.0) (2022-02-11)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v5.0.0...v5.1.0)

* Add `getPermissionLabelString` and `withTranslationErrorsDisabled`. Fixes STUTL-20.

## [5.0.0](https://github.com/folio-org/stripes-util/tree/v5.0.0) (2021-09-27)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v4.2.0...v5.0.0)

* React 17. Refs STUTL-18.

## [4.2.0](https://github.com/folio-org/stripes-util/tree/v4.2.0) (2021-06-09)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v4.1.0...v4.2.0)

* `exportToCsv` correctly handles legacy array implementation. Refs STUTL-14.
* Announce deprecation of `exportToCsv`, now provided in `stripes-components`. Refs STUTL-15.

## [4.1.0](https://github.com/folio-org/stripes-util/tree/v4.1.0) (2021-02-25)
[Full Changelog](https://github.com/folio-org/stripes-util/compare/v4.0.0...v4.1.0)

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
