
import S from '@sanity/desk-tool/structure-builder'
import Iframe from 'sanity-plugin-iframe-pane'
import resolveProductionUrl from './resolveProductionUrl'
import { TiHome } from 'react-icons/ti'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  !['globalSettings'].includes(listItem.getId())

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc) => resolveProductionUrl(doc),
      })
      .title('Preview'),
  ])
}

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