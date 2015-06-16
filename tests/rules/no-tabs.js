var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(linter);

var expectedErrors = [ { message: 'Tabs found.' } ];

eslintTester.addRuleTest('rules/no-tabs', {
  valid: [
    '  var thisHas = "spaces";'
  ],

  invalid: [
    {
      code: '	var thisHas = "a tab";',
      errors: expectedErrors
    },
    {
      code: '  var thisHas =	"a tab";',
      errors: expectedErrors
    }
  ]
});
