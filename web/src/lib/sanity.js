import {
  createClient,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity"
import createImageUrlBuilder from "@sanity/image-url"

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: "v1",
  useCdn: process.env.NODE_ENV === "production",
}

export const urlFor = source => createImageUrlBuilder(config).image(source)

// Set up Portable Text serialization
// export const PortableText = createPortableTextComponent({
//   ...config,
//   // Serializers passed to @sanity/block-content-to-react
//   // (https://github.com/sanity-io/block-content-to-react)
//   serializers: {},
// })

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// // Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// // Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

// Helper function for easily switching between normal client and preview client
export const getClient = usePreview =>
  usePreview ? previewClient : sanityClient

export const overlayDrafts = (data, preview) => {
  // if not array return data as it is
  if (!Array.isArray(data)) return data

  // if array only has 1 item return that item
  if (data.length === 1) return data[0]

  // if preview return draft or if no draft the first item
  if (preview)
    return data.find(item => item._id.startsWith(`drafts.`)) || data[0]

  return data[0]
}
