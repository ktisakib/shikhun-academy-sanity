import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
const {theme} = await import('https://themer.sanity.build/api/hues?preset=tw-cyan')
export default createConfig({
  theme,
  name: 'default',
  title: 'shikhun-academy',
  projectId: 'hi8cvush',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
