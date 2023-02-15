import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: 'h93qkugt',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21",
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source)

export default client