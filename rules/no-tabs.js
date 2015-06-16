module.exports = function(context) {
  var regex = /[\t]/;

  return {
    'Program': function(node) {
      var match;
      var lines = context.getSourceLines();

      lines.forEach(function(line, i) {
        match = regex.exec(line);

        if (match) {
          context.report(node, { line: i + 1, column: match.index + 1 }, 'Tabs found.');
        }
      });
    }
  };
};
