# cra-config

enable configuration containing complex javascript objects for [create-react-app](https://facebook.github.io/create-react-app/) based applications

create-react-app has support for flat environment variables around a fixed set of predefined environments corrosponding to managed values of `NODE_ENV`, this may be sufficient for your use-cases.

if your requirements involve environments outside of those supported and/or you wish to work with rich javascript objects for configuration, then this package may be of value to you.

## usage

create a folder called `config` at the root of your project and place files in it with the format and naming conventions described below.

### format

```node
module.exports = {
  someStringKey: "some-value",
  someIntegerKey: 123,
  someBooleanKey: true,
  someObjectKey: {
    someNestedStringKey: "some-nested-value"
  },
  someArrayKey: ["red", "white", "blue"]
};
```

### `{environment-name}.js`

this file would contain values to be used when the environment-variable `CONFIG_ENV` is set to `environment-name`.

> for example, `lab.js` would be used when the `CONFIG_ENV` environment-variable is set to `lab`

### `default.js`

this file would contain values to be used across all environments, or those which should be defaulted if not provided in environment specific files.

> the key/values in this file would always be present unless overridden by an environment specific file

### `local.js`

this would be used to customize default values for local usage

> add `config/local.js` to your `.gitignore` file
