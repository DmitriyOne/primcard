import {
  defineConfig,
  globalIgnores,
} from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig =
  defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    {
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "react/no-array-index-key": "error",
        "react/jsx-closing-tag-location": ["error", { location: "tag-aligned" }],
        "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
        "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/jsx-tag-spacing": [
          "error",
          {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "never",
          },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "interface",
            format: ["PascalCase"],
            prefix: ["I"],
          },
          {
            selector: "typeAlias",
            format: ["PascalCase"],
            prefix: ["T"],
          },
        ],
        semi: ["error", "never"],
        "comma-dangle": ["error", "always-multiline"],
        "object-curly-spacing": ["error", "always"],
        "key-spacing": ["error", { afterColon: true }],
        quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
        "space-before-blocks": ["error", "always"],
        indent: ["error", 2, { SwitchCase: 1 }],
      },
    },
    globalIgnores([
      // Default ignores of eslint-config-next:
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ]),
  ])

export default eslintConfig
