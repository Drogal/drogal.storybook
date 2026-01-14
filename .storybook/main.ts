import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/Overview.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "storybook-addon-react-docgen"
  ],
  "framework": "@storybook/react-vite",
  
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => {
        // Inclui props de bibliotecas externas (node_modules)
        if (prop.parent) {
          return !/node_modules\/(?!drogal\.internal\.ui)/.test(prop.parent.fileName);
        }
        return true;
      },
    },
  },

  async viteFinal(config) {
    // customize the Vite config here
    config.build = {
      ...config.build,
      minify: false,
    }
    return config;
  }
};
export default config;