# eslint-plugin-sentences

Prohibit words, sentences in code & comments.

## Installation

Install [ESLint](https://github.com/eslint/eslint) either locally or globally.

```bash
npm install --save-dev eslint
```

```bash
npm install --save-dev eslint-plugin-sentences
```

## Configuration via .eslintrc

```js
{
    "plugins": [
        "sentences"
    ],
    "rules": {
        "sentences/no-sentences": [`error`, [
            { sentence: 'prohibit sentence', message: 'custom message to show' }
        ]]
    }
}
```