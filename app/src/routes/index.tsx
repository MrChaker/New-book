import { Spacer }  from "~/components/Spacer";
import TOC  from "~/components/TOC";
import TOCItem  from "~/components/TOCItem";
import TOCTitle  from "~/components/TOCTitle";

export default function __Home__() {
  return (
    <TOC
      prevPage="/article/bootcamp1"
      nextPage="/article/chapter1">
      <div id="chapter">
        <TOCTitle label="Chapters" />
        <ul>
          <TOCItem
            article_type={1}
            href="chapter1">
            A {" "}
            <i>
              Few
            </i>
            {" "} Refreshers
          </TOCItem>
          <TOCItem
            article_type={2}
            href="chapter2">
            Slopes
          </TOCItem>
          <TOCItem
            article_type={3}
            href="chapter3">
            Functions
          </TOCItem>
          <TOCItem
            article_type={4}
            href="chapter4">
            Derivatives
          </TOCItem>
          <TOCItem
            article_type={5}
            href="chapter5">
            The Trigonometric Functions
          </TOCItem>
        </ul>
      </div>
      <Spacer />
      <div id="bootcamp">
        <TOCTitle label="Bootcamps" />
        <ul>
          <TOCItem
            article_type={1}
            href="bootcamp1">
            Sets
          </TOCItem>
          <TOCItem
            article_type={2}
            href="bootcamp2">
            Powers of 10
          </TOCItem>
        </ul>
      </div>
    </TOC>
  );
};
