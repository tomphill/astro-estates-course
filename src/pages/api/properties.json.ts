import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const response = await fetch(`${import.meta.env.WPGRAPHQL_URL}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query AllProperties {
        properties(first: 10000) {
          nodes {
            databaseId
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
            title
            uri
            propertyDetails {
              bathrooms
              bedrooms
              price
            }
          }
        }
      }
      `,
    }),
  });
  const { data } = await response.json();
  return new Response(JSON.stringify({ properties: data.properties.nodes }));
};
