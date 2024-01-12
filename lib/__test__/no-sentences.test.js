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
            options: [{ sentence: 'forbidden code'}],
		},
		{
            code: `
                // code
                var x = 5;
            `,
            options: [{ sentence: 'xz'}, { sentence: 'xx'}],
		}
	],

	invalid: [
		{
            code: `
                // forbidden code
                var forbiddenCode = 34
            `,
            errors: [{
                message: 'forbidden message',
            }],
            options: [{ sentence: 'forbidden code', message: 'forbidden message'}],
		},
		{
            code: `
                // forbidden code
                var forbiddenCode = 34
            `,
            errors: [
                { message: 'Avoid using the specified sentence in the code' },
                { message: 'Avoid using the specified sentence in the code' },
            ],
            options: [{ sentence: 'forbidden code'}, { sentence: 'forbiddenCode'}],
		},
	]
})