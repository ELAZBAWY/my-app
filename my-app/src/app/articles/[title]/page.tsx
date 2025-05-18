import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function ShowArticalPage(props: { params: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; }) {
  return (
    <div>
      <h1>Show Articles</h1>
      <h1>{props.params.title}</h1>
    </div>
  );
}
