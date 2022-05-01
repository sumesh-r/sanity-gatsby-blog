export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "626e653ca92f1b37758716f4",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-14j7544w",
                  apiId: "b758d0a6-2a3f-4b7c-99b8-686574928bba",
                },
                {
                  buildHookId: "626e653c27fc4038503560a8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qqydp3wa",
                  apiId: "38495156-279a-457a-8edc-f1406f1fd0ff",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sumesh-r/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qqydp3wa.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
