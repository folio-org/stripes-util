This directory contains validator functions to be used with [redux-form](https://github.com/erikras/redux-form) fields.

Use as follows:

	import { required, etc } from '@folio/stripes-util';
	// ...
	<Field name="title" validate={required} />

The following validators are currently provided:

* `required` -- fails when the field is empty.
