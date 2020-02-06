# withOkapiKy

## Introduction

Everyone knows that 99 times out of a hundred, [stripes-connect](https://github.com/folio-org/stripes-connect) is the right way to interact with Okapi-mediated FOLIO web services. But on the hundredth occasion, you run into something that you just can't express using stripes-connect: for example, you might need to iterate across a result-set and POST an action to each record in that list. Stripes-connect can't do it because the ways of injecting record-IDs into the paths it uses are all more or less dependent on the URL your UI is visiting, or the props of the component.

When you find yourself in that situation, you need `withOkapiKy`.

[Ky](https://github.com/sindresorhus/ky) is a higher-level API to HTTP `fetch`, allowing you to avoid much of the tedious  promise-resolution and error-checking that raw `fetch` needs. `withOkapiKy` is a HOC that provides an `okapiKy` prop which is a Ky object customised to communicate with Okapi: it knows which service to send requests to, and what tenant header and authentication token to send.

## Basic Usage

```
import { withOkapiKy } from '@folio/stripes-util';

class SomeClass extends React.Component {
  static propTypes = {
    okapiKy: PropTypes.func.isRequired,
  };

  sendActionToRecords = (ids) => {
    const promises = ids.map(id =>
      this.props.okapiKy(`rs/patronrequests/${id}/performAction`, {
	method: 'POST',
	json: { action: 'supplierPrintPullSlip' },
      }).json()
    );
    Promises.all(promises).then(...);
  }
};

export default withOkapiKy(SomeClass);
```
