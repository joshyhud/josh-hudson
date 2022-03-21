
import S from '@sanity/desk-tool/structure-builder'
import { TiHome } from 'react-icons/ti'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['globalSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(TiHome)
        .child(
          S.list()
          .title('Global Settings')
          .items([
            S.listItem()
              .title('Global Settings')
              .icon()
              .child(
                S.document()
                  .id('globalSettings')
                  .title('Settings')
                  .schemaType('globalSettings')
                  .documentId('globalSettings')
              ),
          ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])