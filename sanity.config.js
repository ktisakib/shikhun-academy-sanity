import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
export default createConfig({
  name: 'default',
  title: 'shikhun-academy',

  projectId: 'hi8cvush',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
