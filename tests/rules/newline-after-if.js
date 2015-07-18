var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');

var eslintTester = new ESLintTester(linter);

var expectedErrors = [ { message: 'Newline missing after if block.' } ];

eslintTester.addRuleTest('rules/newline-after-if', {
  valid: [
    'if(true);\n\n;',
    'if(true){}\n\n;'
  ],

  invalid: [
    {
      code: 'if(true);;',
      errors: expectedErrors
    },
    {
      code: 'if(true);\n;',
      errors: expectedErrors
    },
    {
      code: 'if(true){};',
      errors: expectedErrors
    },
    {
      code: 'if(true){};\n;',
      errors: expectedErrors
    }
  ]
});
