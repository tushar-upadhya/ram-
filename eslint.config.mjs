import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat to use legacy ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js recommended rules for performance
    "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
    "eslint:recommended", // Basic ESLint rules
    "plugin:react/recommended" // React-specific linting rules
  ),
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022, // Modern ECMAScript features
        sourceType: "module", // Use ES modules
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      // Core ESLint rules
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"], // Warn on unused variables
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // React-specific rules
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/prop-types": "off", // Disabled if using TypeScript
      "react/jsx-uses-react": "off", // Not needed in React 17+
      "react/jsx-uses-vars": "warn", // Ensure variables in JSX are used
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];

export default eslintConfig;
