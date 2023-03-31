import React, { useState } from "react";
import { MathInput } from "../mathInput/mathInput";
import { Navbar } from "./navbar";

export type ExampleProps = {};

export const Example = ({}: ExampleProps) => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 && (
        <div className="px-2 ">
          <p className="mb-2">
            This is a mock webpage that implements the input component in a
            page.
          </p>
          <MathInput />
        </div>
      )}
      {page === 1 && (
        <div className="px-2 ">
          <p className="mb-2">
            This is a mock webpage that implements the input component in a
            container.
          </p>
          <div className="border-4 rounded border-slate-400 px-2 py-3 w-6/12">
            <p className="pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              hendrerit congue lacus, sed eleifend felis interdum eu. Proin id
              vulputate dolor. Sed non velit facilisis, auctor felis vitae,
              mattis tortor. Morbi at faucibus justo. Suspendisse nec dapibus
              est, sed venenatis augue. Praesent volutpat nisl ut diam aliquet
              bibendum. Morbi magna ex, consequat et posuere sit amet, accumsan
              non urna. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Fusce nibh tellus, aliquam vel
              eleifend finibus, viverra et felis. Pellentesque leo est, blandit
              in massa non, porttitor feugiat leo. Aenean porta dolor eget
              tempus laoreet. Praesent viverra blandit posuere. Suspendisse nec
              commodo quam, id commodo urna. Nunc sodales nulla ligula, at
              condimentum leo finibus sit amet. Etiam bibendum quam sem, dapibus
              fringilla lectus tincidunt non. Aenean vehicula sem neque, eu
              vehicula mauris dapibus id. Etiam mattis velit id nisl dignissim,
              sed tincidunt ipsum dapibus. Proin efficitur ultricies diam, id
              finibus quam. Fusce ligula nisi, semper ac convallis eget,
              fermentum sed erat. Quisque congue ligula nunc, sit amet dignissim
              metus molestie a. Duis ultrices, diam eget pharetra aliquam, odio
              elit dapibus lectus, a pretium arcu velit quis lorem. Morbi ac
              molestie dolor. Ut condimentum purus sit amet finibus imperdiet.
            </p>
            <MathInput />
          </div>
        </div>
      )}
    </div>
  );
};