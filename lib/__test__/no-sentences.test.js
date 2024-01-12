const rule = require("../rules/no-sentences");
RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015, sourceType: "module", } });

ruleTester.run("no-sentences", rule, {
	valid: [
		{
            code: `
                // code
                var x = 5;
            `,
            options: ['forbidden code'],
		},
		{
            code: `
                // code
                var x = 5;
            `,
            options: ['xz', 'xx'],
		}
	],

	invalid: [
		{
            code: `
                // forbidden code
                var forbiddenCode = 34
            `,
            errors: [{
                message: 'Avoid using the specified sentence in the code',
            }],
            options: ['forbidden code'],
		},
		{
            code: `
                // code
                var forbiddenCode = 34
            `,
            errors: [{
                message: 'Avoid using the specified sentence in the code',
            }],
            options: ['forbidden code' ,'forbiddenCode'],
		},
	]
})