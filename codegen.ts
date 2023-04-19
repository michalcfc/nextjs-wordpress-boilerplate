import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://jachimov.pl/graphql',
  generates: {
    './src/generated/': {
      preset: 'client',
    },
  },
};

export default config;
