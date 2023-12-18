import { h, Fragment } from "preact";
import { render as r } from "preact-render-to-string";

export const data = {
  eleventyExcludeFromCollections: true,
  permalink: false,
  title: null,
};

export function render(data) {
  return r(
    <>
      {data.collections.pagesSortedByNavigationOrder.map((_) => (
        <section class={_.data.stub}>
          <h2>{_.data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: _.content }} />
        </section>
      ))}
    </>,
  );
}
