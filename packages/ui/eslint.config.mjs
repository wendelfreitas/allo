import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    // Config files outside tsconfig: lint without type-aware rules
    {
        files: ["jest.config.mjs", ".jest/**/*.js"],
        languageOptions: {
            globals: { ...globals.node },
            parser: tsParser,
            parserOptions: { emitDecoratorMetadata: true },
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    // Type-aware linting for files in tsconfig.lint.json
    ...compat.extends(
        "@allo/eslint-config/react-internal.js",
        "plugin:storybook/recommended",
    ),
    {
        files: ["src/**", "turbo/**"],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: "commonjs",

            parserOptions: {
                project: "./tsconfig.lint.json",
                tsconfigRootDir: __dirname,
            },
        },

        rules: {
            "no-redeclare": ["error", {
                builtinGlobals: false,
            }],
        },
    },
];