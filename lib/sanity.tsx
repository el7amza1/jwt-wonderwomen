import { createClient, createPreviewSubscriptionHook } from "next-sanity";

// import ReactTooltip from "react-tooltip";

import { PortableText as PortableTextComponent } from "@portabletext/react";

import createImageUrlBuilder from "@sanity/image-url";

import { config } from "./config";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  PortableTextBlock,
  PortableTextMarkDefinition,
  ArbitraryTypedObject,
  PortableTextSpan,
} from "@portabletext/types";

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = (props: any) => (
  <PortableTextComponent
    components={{
      types: {
        code: () => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
    }}
    {...props}
  />
);

// export const PortableText = createPortableTextComponent({
//   ...config,
//   // Serializers passed to @sanity/block-content-to-react
//   // (https://github.com/sanity-io/block-content-to-react)
//   serializers: {
//     types: {
//       code: (props) => (
//         <pre data-language={props.node.language}>
//           <code>{props.node.code}</code>
//         </pre>
//       ),
//     },
//   },
// });

export const client = createClient(config);

// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
// });

export const getClient = () => client;
export default client;
