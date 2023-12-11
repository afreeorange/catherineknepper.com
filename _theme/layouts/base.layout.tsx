import { h, Fragment, ComponentChildren } from "preact";
import { render as r } from "preact-render-to-string";

import eleventyNavigation from "@11ty/eleventy-navigation";

type NavNodes = {
  key: string;
  order: number;
  url: string;
  pluginType: string;
  title: string;
  children: any[];
}[];

const Shell = ({
  data,
  children,
  navigationNodes,
}: {
  data: any;
  children: ComponentChildren;
  navigationNodes: NavNodes;
}) => (
  <html lang="en-US">
    <head>
      {data.title ? (
        <title>{data.title} &ndash; Catherine Knepper</title>
      ) : (
        <title>Catherine Knepper</title>
      )}

      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      <meta
        property="og:title"
        content="Catherine Knepper Writing Services, LLC"
      />
      <meta
        property="og:description"
        content="I help smart, talented people bring their ideas to the page and to the marketplace."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="http://catherineknepper.com/catherine-small.jpg"
      />
      <meta property="og:url" content="http://catherineknepper.com/" />

      <link rel="stylesheet" href="/assets/css/bundle.css" />

      <script
        async
        defer
        data-domain="catherineknepper.com"
        src="https://plausible.io/js/plausible.js"
      ></script>
    </head>

    <body class={data.stub}>
      <header>
        <h1>
          <a href="/" title="Home">
            Catherine Knepper
          </a>
        </h1>
        <nav>
          <ul>
            {navigationNodes.map((_) => (
              <li class={_.url === data.page.url ? "active" : undefined}>
                <a href={_.url} title={_.title}>
                  {_.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div class="content">{children}</div>
      </main>
      <footer>
        <p>
          <span>&copy;</span> {new Date().getFullYear()}, Catherine Knepper
          Writing Services, LLC
          <br />I respect your privacy and use{" "}
          <a href="https://plausible.io/" title="Plausible Analytics">
            Plausible
          </a>{" "}
          for this website&#8217;s analytics.
          {data.stub === "about" && (
            <>
              <br />
              Photo by{" "}
              <a
                href="https://kathryngamble.com/"
                title="Kathryn Gamble, Photographer"
              >
                Kathryn Gamble
              </a>{" "}
            </>
          )}
        </p>
      </footer>
    </body>
  </html>
);

export function render(data) {
  const navigationNodes: NavNodes = Object.values(
    eleventyNavigation.navigation.getDependencyGraph(data.collections.all)
      .nodes,
  );

  return r(
    <Shell data={data} navigationNodes={navigationNodes}>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </Shell>,
  );
}
