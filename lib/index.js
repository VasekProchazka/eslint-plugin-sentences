const noSentencesRule = require("./rules/no-sentences");
const plugin = { rules: { "no-sentences": noSentencesRule } };
module.exports = plugin;