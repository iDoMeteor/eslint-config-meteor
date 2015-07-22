module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "experimentalObjectRestSpread": true,
    "forOf": true,
    "generators": true,
    "jsx": true
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "regexYFlag": true,
    "regexUFlag": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
  },
  "env": {
    "browser": true,
    "es6": true,
    "jasmine": true,
    "jquery": true,
    "meteor": true,
    "mocha": true,
    "mongo": true,
    "node": true,
    "phantomjs": true,
  },
  "extends": "eslint:recommended",

  "rules": {

    /**
     * General
     */

    // This will throw warnings anywhere 'use strict' occurs, which is good.
    "strict": [2, "never"],
    // This wants you to migrate to using let & const instead of var for locals
    "no-var": 0, // Best to start migrating now tho :)


    /**
     * Allowances
     */

    "block-scoped-var": 0,
    "dot-notation": 0,      // Dynamic keys ftw, especially ES6 style
    "eqeqeq": 0,            // This contradicts MDG Style Guide, which prolly is [2, "allow-null"]
    "no-console": 0,
    "no-param-reassign": 0, // I do it, but don't use arguments meta-var much
    "no-reserved-keys": 0,  // 3rd edition is dead, no worries here
    "radix": 0,             // If you screw up your numbers, your own fault
    "yoda": 0,              // I yoda, everyone should
    "vars-on-top": 0,       // Seriously, hoist your vars. But sometimes I like to validate
                            // first.  Just don't bury (or not delcare!) your declarations.

    /**
     * Errors
     */

    "curly": [2, "multi-line"],
    "no-cond-assign": [2, "always"],  // This is why you should yoda :p
    "no-constant-condition": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,                    // Empties can break Meteor in Templates.*
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,     // No need for these in Meteor!
    "no-self-compare": 2,
    "no-sequences": 2,      // I hate that!
    "no-shadow": [1, {"hoist": "functions}"]
    "no-sparse-arrays": 2,
    "no-throw-literal": 2,  // Hopefully this lets Meteor.Error pass
    "no-unreachable": 2,
    "no-with": 2,
    "use-isnan": 2,
    "wrap-iife": [2, "any"],


    /**
     * Warnings
     */

    "comma-dangle": [1, "always-multiline"],
    "consistent-return": 1,
    "default-case": 1,          // *If* you happen to use a switch, maybe you don't want a default
    "guard-for-in": 1,
    "max-len": [1, 80, 4],      // Warn if over 80, tabs expand to 4 (should use spaces anyway)
    "no-alert": 1,
    "no-caller": 1,             // Should be 2, but there is some code out there... ;>
    "no-debugger": 1,
    "no-extra-boolean-cast": 1,   // I should give it a 2 but being nice!! (Sasha uses them)
                                  //                                     ^punny, eh! :D
    "no-fallthrough": 1,          // *If* you happen to.. it shouldn't be often.
    "no-floating-decimal": 1,     // Should be 2, but I bet lots of you...
    "no-multi-str": 1,            // Should be 2, I'm being nice :>
    "no-shadow-restricted-names": 2,
    "no-unused-vars": [2, {
      "vars": "local",
      "args": "all"
    }],
    "no-use-before-define": 2,

    /**
     * Style
     */
    "brace-style": [2,
      "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": [2, {
      "properties": "always"
    }],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "comma-style": [2, "last"],
    "eol-last": 0,
    "func-names": 0,      // Something I'm trying to eliminate, anonymous functions
    "func-style": 0,      // Flexibility ftw
    "indent": [2, 2, {"indentSwitchCase": true}],
    "key-spacing": [2, {
        "afterColon": true,
        "align": "value",
        "beforeColon": false,
    }], // 'prop': x, extra spacing allowed if lining up blocks
    "linebreak-style": [
      2,
      "unix"
    ],
    "new-cap": 2,
    "no-multiple-empty-lines": 0,
    "no-nested-ternary": 0,     // I <3 them, as long as they are clean & clear
    "no-new-object": 2,         // There are good reasons not to
    "no-array-constructor": 2,  // There are good reasons not to
    "no-spaced-func": 2,        // Nice addition!
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "one-var": [2, "never"],
    "padded-blocks": 0, "always"],
    "quotes": [
      2, "single", "avoid-escape"
    ],
    "semi": [2, "always"],
    "semi-spacing": [2, {
      "before": false,
      "after": true
    }],
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, "always"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "spaced-line-comment": 2,

    /**
     * JSX style
     *
     * This is untouched from Meteor's config, I don't JSX yet.
     * I have a feeling it is pretty much default.
     */
    "react/display-name": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-quotes": [2, "double"],
    "react/jsx-no-undef": 2,
    "react/jsx-sort-props": 0,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2,
    "react/sort-comp": [2, {
      "order": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "getDefaultProps",
        "getInitialState",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "/^on.+$/",
        "/^get.+$/",
        "/^render.+$/",
        "render"
      ]
    }]
  }
}
