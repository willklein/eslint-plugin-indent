var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(linter);

var expectedErrors = [ { message: 'Spaces found.' } ];

eslintTester.addRuleTest('rules/no-spaces', {
  valid: [
    '	var	thisHas	=	"atab";',
  ],

  invalid: [
    {
      code: ' var thisHas = "a space";',
      errors: expectedErrors
    }
  ]
});
