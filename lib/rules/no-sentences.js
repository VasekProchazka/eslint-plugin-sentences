module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the specified sentence',
    },
    schema: {
      type: "array",
      items: {
        string: ["always", "never"]
      },
    }
  },
  create: function (context) {
    return {
      Program: function (node) {
        const code = context.sourceCode.getText();
        const comments = context.sourceCode.getAllComments();

        context.options.forEach((option) => {
          if (code.includes(option) || comments.includes(option)) {
            context.report({
              node,
              message: 'Avoid using the specified sentence in the code',
            });
          }
        })
      }
    }
  }
}