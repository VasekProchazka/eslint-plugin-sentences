module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow the specified sentence',
    },
    schema: {
      type: "array",
      items:  {
        type: "array",
        items: {
          type: 'object',
          properties: {
            sentence: { type: "string" },
            message: { type: "string" },
        },
        additionalProperties: false,
        required: ['sentence'],
        }
      },
    }
  },
  create: function (context) {
    return {
      Program: function (node) {
        const code = context.getSourceCode();
        const lines = code.getText().split('\n');

        context.options[0].forEach((option) => {
          lines.forEach((line, index) => {
            if (line.includes(option.sentence)) {
              context.report({
                node: node,
                loc: {
                  line: index + 1,
                  column: 0,
                },
                message: option.message || 'Avoid using the specified sentence in the code',
              });
            }
          })
        })
      }
    }
  }
}