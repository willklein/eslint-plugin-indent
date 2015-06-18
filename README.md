# eslint-plugin-whitespace

> ESLint plugin for whitespace

## Usage

This plugin requires ESLint to also be installed. With both ESLint and this plugin installed, you will need to enable the plugin and configure its rules.

### Installation

Install ESLint if you have not already:

    npm install eslint

Install the plugin:

    npm install eslint-plugin-whitespace

### Configuration

Configure the plugin and its rules in your `.eslintrc` file or your shareable config.

Sample `.eslintrc`:

    {
      "plugins": [
        // other plugins would go here
    
        "whitespace"
      ],
    
      rules: {
        // other rules here
    
        // whitespace rules
        whitespace/no-tabs: 2
      }
    }

Configuring rules to `1` will set them to warn and configuring them to `2` will set them to error.

## List of supported rules

* no-tabs: Disallow tab characters

While there is currently only one rule, other whitespace rules are planned for enforcing additional whitespace conventions.

## Under Development

This plugin is under active development and its API may change at any time.

## License

[MIT](http://mit-license.org/) © [Will Klein](http://willkle.in)
