import {createCliConfig} from 'sanity/cli'

export default createCliConfig({
  api: {
    projectId: 'hi8cvush',
    dataset: 'production',
  },
  vite: (config) => ({
    ...config,
    build: {
      ...config.build,
      // esbuild requires es2022 or later to allow top-level await: https://esbuild.github.io/content-types/#javascript
      target: 'es2022',
    },
  }),
})
