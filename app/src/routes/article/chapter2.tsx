import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import Table  from "~/components/Table";
import { SolutionNote, Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter2__() {
  return (
    <Article
      prevPage="/article/chapter1"
      nextPage="/article/chapter3"
      pageNecessaryMargin={610}
      maxElementWidth={900}>
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            definition
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            measuring slope
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            sign combinations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            pathological cases
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            “rise over run”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            solving for “rise” and “run”
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            slopes and line equations
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            slopes and units
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            postscript: units vs dimensions
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 2:">
        Slopes
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Definition.
          </b>
          {" "} The {" "}
          <i>
            slope
          </i>
          {" "} of a line is a
          mathematical measure of how “steep” a line is.
          Here are a few examples (for an explanation of
          the values, see below):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch2_ch_collection_of_examples.svg" />
        <Pause />
        <OuterP>
          To explain, the slope of a line is...
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the number of units the line goes up with each
          unit to the right
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          ...assuming that numbers on the {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis
          </NoBreak>
          {" "} increase
          going up and that numbers on the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} increase
          going right, as is usually the case. One can also
          describe slope as...
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the amount of vertical change per unit of
          horizontal change
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          ...more elegant!
        </OuterP>
        <OuterP class="indent-10">
          For example, the line below has slope 1, because
          it goes up by {" "}
          <Math>
            $1$
          </Math>
          {" "} unit for each unit to the right:
        </OuterP>
        <Pause />
        <Image src="/images/slope_1_example.svg" />
        <Pause />
        <OuterP>
          On the other hand, the line below has slope
          {" "}
          <NoBreak>
            <Math>
              $-0.5$
            </Math>
            ,
          </NoBreak>
          {" "} because it goes up by {" "}
          <i>
            minus
          </i>
          {" "} {" "}
          <Math>
            $0.5$
          </Math>
          {" "} units
          with each unit to the right:
        </OuterP>
        <Pause />
        <Image src="/images/slope_0.5_example.svg" />
        <Pause />
        <OuterP>
          (Etc.)
        </OuterP>
      </Section>
      <Rest />
    </Article>
  );
}

const Rest = () => {
  const showMore = useShowMore();
  return <>
    {showMore() && <>
      <Pause />
      <Section id="section-2">
        <OuterP>
          <b>
            Measuring Slope.
          </b>
          {" "}
          The slope of a line is also the ratio of vertical
          change to horizontal change between any two
          distinct points {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $B$
          </Math>
          {" "} on the line:
        </OuterP>
        <Pause />
        <Image src="/images/31.svg" />
        <Pause />
        <MathBlock>
          $$ \te&#123;slope&#125; = &#123;\te&#123;vertical change from A to B&#125; \over \te&#123;horizontal change from A to B&#125;&#125; $$
        </MathBlock>
        <Pause />
        <OuterP>
          Indeed, dividing the vertical change by the
          horizontal change gives the per-horizontal-unit
          vertical change.
        </OuterP>
        <OuterP class="indent-10">
          More precisely, if
        </OuterP>
        <Pause />
        <MathBlock>
          $$ A = (x_1, y_1) $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$ B = (x_2, y_2) $$
        </MathBlock>
        <Pause />
        <OuterP>
          then
        </OuterP>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          are the horizontal {" "}
          <i>
            &amp;
          </i>
          {" "} the vertical change,
          respectively, from {" "}
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "} so
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;y_2 - y_1 \over x_2 - x_1&#125;
          $$
          <ImageRight
            src="/images/32.svg"
            offset_y="-0.7em"
            offset_x="3em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          more succinctly. We call this the {" "}
          <i>
            slope formula
          </i>
          .
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            A line that passes through the points
          </OuterP>
          <Pause />
          <MathBlock>
            $$A = (-2, 5)$$
          </MathBlock>
          <Pause />
          <OuterP>
            and
          </OuterP>
          <Pause />
          <MathBlock>
            $$B = (4, 1)$$
          </MathBlock>
          <Pause />
          <OuterP>
            has slope
          </OuterP>
          <Pause />
          <MathBlock>
            $$&#123;1 - 5 \over 4 - (-2)&#125; = &#123;-4 \over 6&#125; = - &#123;2 \over 3&#125;.$$
          </MathBlock>
        </Example>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          (The main thing to understand about Example 1 is that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - 5
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the vertical change from {" "}
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ,
          </NoBreak>
          {" "} while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          4 - (-2)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the horizontal change from {" "}
          <Math>
            $A$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .)
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Sign Combinations.
          </b>
          {" "}
          Technically, quantities such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          are not distances but {" "}
          <i>
            differences
          </i>
          {" "} (or,
          equivalently, {" "}
          <i>
            changes
          </i>
          ). A distance, by
          definition, is a nonnegative number, while a
          difference carries no such restriction.
        </OuterP>
        <OuterP class="indent-10">
          In particular, since
        </OuterP>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be positive or negative, while
        </OuterP>
        <Pause />
        <MathBlock>
          $$ y_2 - y_1 $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be positive or negative or zero (more on
          zero below), the following sign combinations
          arise (lines of slope zero not included):
        </OuterP>
        <Pause />
        <Table
          class="lines"
          style="margin-top:0.5em;margin-bottom:0.5em;">
          <colgroup>
            <col width={120} />
            <col width={120} />
            <col width={120} />
            <col width={120} />
          </colgroup>
          <tbody>
            <tr>
              <td>
                <Math>
                  $x_2 - x_1$
                </Math>
              </td>
              <td>
                <Math>
                  $y_2 - y_1$
                </Math>
              </td>
              <td>
                <img
                  src="/images/33.svg"
                  width={50}
                  style="padding-top:7px;padding-bottom:7px;" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;y_2-y_1 \over x_2-x_1&#125;
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  src="/images/34.svg"
                  style="margin-top:7px;margin-bottom:7px;width:105px;" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;+ \over +&#125; = \,+
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  src="/images/35.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over -&#125; = \,+
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <img
                  src="/images/36.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;" />
              </td>
              <td>
                <MathBlock>
                  $$
                  &#123;- \over +&#125; = \,-
                  $$
                </MathBlock>
              </td>
            </tr>
            <tr>
              <td>
                <Math>
                  $-$
                </Math>
              </td>
              <td>
                <Math>
                  $+$
                </Math>
              </td>
              <td>
                <img
                  src="/images/37.svg"
                  width={105}
                  style="margin-top:7px;margin-bottom:7px;" />
              </td>
              <td>
                <MathBlock>
                  $$
                  \frac&#123;+&#125;&#123;-&#125; = \,-
                  $$
                </MathBlock>
              </td>
            </tr>
          </tbody>
        </Table>
        <Pause />
        <OuterP>
          In fact, we {" "}
          <i>
            should
          </i>
          {" "} be able to algebraically
          verify that the slope formula gives the same
          answer if {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} and {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "} swap
          places, or, namely, to show that the fractions
          <ImageRight
            src="/images/svg_ch2_ch_swap_cloud.svg"
            line={3}
            offset_x="-0.5em" />
        </OuterP>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <Pause />
        <OuterP>
          are somehow equal. But, indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125; = &#123;-(y_2 - y_1) \over -(x_2 - x_1)&#125; = &#123;y_1 - y_2 \over x_1 - x_2&#125; $$
          <ImageLeft
            src="/images/39.svg"
            offset_x="2.5em"
            offset_y="-60px"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          which verifies this hypothesis. In particular,
        </OuterP>
        <Pause />
        <MathBlock>
          $$ &#123;y_2 - y_1 \over x_2 - x_1&#125;\qquad\,\,\,\,\,\te&#123;and&#125;\,\,\,\,\,\qquad&#123;y_1 - y_2 \over x_1 - x_2&#125; $$
        </MathBlock>
        <Pause />
        <OuterP>
          are equally valid incarnations of the slope
          formula.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Pathological Cases.
          </b>
          {" "}
          If
        </OuterP>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <Pause />
        <OuterP>
          the slope formula “breaks down” in the sense that
          division by 0 is undefined. This occurs, e.g., if
          we attempt to measure the slope of a vertical
          line:
        </OuterP>
        <Pause />
        <Image src="/images/40.svg" />
        <Pause />
        <OuterP>
          Indeed, vertical lines have {" "}
          <i>
            undefined
          </i>
          {" "} slope.
          Moreover the bad case
        </OuterP>
        <Pause />
        <MathBlock>
          $$ x_2 - x_1 = 0 $$
        </MathBlock>
        <Pause />
        <OuterP>
          can also occur another way, namely if the points
          {" "}
          <Math>
            $(x_1, y_1)$
          </Math>
          {" "} and {" "}
          <Math>
            $(x_2, y_2)$
          </Math>
          {" "} coincide. In that
          case, more precisely, the slope formula evaluates
          to
        </OuterP>
        <Pause />
        <MathBlock>
          $$ \frac&#123;y_2 - y_1&#125;&#123;x_2 - x_1&#125; = \frac&#123;0&#125;&#123;0&#125; $$
        </MathBlock>
        <Pause />
        <OuterP>
          which could be anything. (Technically, {" "}
          <NoBreak>
            “
            <Math>
              $0/0$
            </Math>
            ”
          </NoBreak>
          {" "} is
          undefined.) Indeed, infinitely many different
          lines pass through any given point!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            “Rise over Run”.
          </b>
          {" "}
          Some people remember the slope formula as “slope
          equals rise over run” (i.e., {" "}
          <NoBreak>
            “
            <Math>
              $\te&#123;slope&#125; =$
            </Math>
          </NoBreak>
          <span class="nobreak">
            <InlineImage
              src="/images/rise-run.svg"
              width="28px" />
            ”),
          </span>
          {" "} following such a picture:
        </OuterP>
        <Pause />
        <Image src="/images/44.svg" />
        <Pause />
        <OuterP>
          In this context, note that, in physics, a
          one-dimensional displacement is measured as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at arrival&#125;&#125;\right)\,\, - \,\,\left(&#123;\te&#123;coordinate&#125; \atop \te&#123;at start&#125;&#125;\right)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in accordance, namely, with the coordinate
          differences {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1\!$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1\!$
            </Math>
            ”
          </NoBreak>
          {" "}
          that appear in the slope formula.
        </OuterP>
        <OuterP class="indent-10">
          (In order not to discriminate, maybe we should
          also include this picture:
        </OuterP>
        <Pause />
        <Image src="/images/47.svg" />
        <Pause />
        <OuterP>
          Then “rise” and “run” have their signs flipped,
          but the ratio rise-over-run is the same, as
          already mentioned.)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            An Additional Miscellaneous Notation.
          </i>
          {" "}
          The slope formula is occasionally written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = \frac&#123;\Delta y&#125;&#123;\Delta x&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where the foreign-looking symbols {" "}
          <NoBreak>
            <Math>
              $\Delta x$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\Delta y$
          </Math>
          {" "} can be thought of as shorthands for
          {" "}
          <NoBreak>
            “
            <Math>
              $x_2 - x_1$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $y_2 - y_1$
            </Math>
            ”
          </NoBreak>
          {" "} respectively. (Or,
          a little more exactly, as shorthands for the
          phrases “change in {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "} “change in {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            ”.)
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Solving for “rise” and “run”.
          </b>
          {" "}
          Multiplying
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on each side by “run” gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or “rise equals slope times run”. After which,
          dividing each side by “slope”, we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;run&#125; = &#123;\te&#123;rise&#125; \over \te&#123;slope&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or “run equals rise over slope”. Thus:
        </OuterP>
        <Pause />
        <Image src="/images/48.svg" />
        <Pause />
        <OuterP>
          ...as can sometimes be useful to know.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Slopes and Line Equations.
          </b>
          {" "} An equation of the
          form
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
          <Math>
            $a$
          </Math>
          {" "} and {" "}
          <Math>
            $b$
          </Math>
          {" "} are constants defines a line in
          the Cartesian plane. E.g.:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch2_ch_line_equations.svg" />
        <Pause />
        <OuterP>
          Note that, assuming said {" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            ,
          </NoBreak>
          {" "} one has
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = a\cdot 0 + b = b$$
        </MathBlock>
        <Pause />
        <OuterP>
          at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} so {" "}
          <Math>
            $b$
          </Math>
          {" "} is the height of the line at
          {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            .
          </NoBreak>
          {" "} (FYI, this height is called the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of the line, because {" "}
          <Math>
            $x = 0$
          </Math>
          {" "} is where the line
          crosses the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis. But the point
        </OuterP>
        <Pause />
        <MathBlock>
          $$(0, b)$$
        </MathBlock>
        <Pause />
        <OuterP>
          is also sometimes called the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of the line, so the term {" "}
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            -intercept”
          </NoBreak>
          {" "} might
          either refer to the value {" "}
          <Math>
            $b$
          </Math>
          {" "} or to the point
          {" "}
          <NoBreak>
            <Math>
              $(0,b)$
            </Math>
            ,
          </NoBreak>
          {" "} depending.) On the other hand, at
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            ,
          </NoBreak>
          {" "} we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = a\cdot 1 + b = a + b$$
        </MathBlock>
        <Pause />
        <OuterP>
          so {" "}
          <Math>
            $y$
          </Math>
          {" "} increases by {" "}
          <Math>
            $a$
          </Math>
          {" "} between {" "}
          <Math>
            $x = 0$
          </Math>
          {" "} and
          {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            .
          </NoBreak>
          {" "} In fact, {" "}
          <Math>
            $y$
          </Math>
          {" "} increases by {" "}
          <Math>
            $a$
          </Math>
          {" "} each time
          {" "}
          <Math>
            $x$
          </Math>
          {" "} increases by 1, so, by our own definition of
          slope—the increase in {" "}
          <Math>
            $y$
          </Math>
          {" "} per unit increase in
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            —
          </NoBreak>
          <Math>
            $a$
          </Math>
          {" "} is the slope of {" "}
          <NoBreak>
            <Math>
              $y = ax + b$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            The equation
          </OuterP>
          <Pause />
          <MathBlock>
            $$y = 100x - 3$$
          </MathBlock>
          <Pause />
          <OuterP>
            defines a line of slope 100.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          On the other hand, an equation of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = ax + b$$
        </MathBlock>
        <Pause />
        <OuterP>
          cannot describe a vertical line, because {" "}
          <Math>
            $a$
          </Math>
          {" "} is
          the slope, while a vertical line has no slope, so
          what would {" "}
          <Math>
            $a$
          </Math>
          {" "} be equal to? Instead, a vertical
          line is described by an equation of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$x = c$$
        </MathBlock>
        <Pause />
        <OuterP>
          (see Fig. 1) where {" "}
          <Math>
            $c \in \rr$
          </Math>
          {" "} is a constant,
          similarly to the more familiar equation
          <ImageLeft
            src="/images/svg_ch2_ch_vertical_line_equation.svg"
            offset_y="-6em"
            offset_x="1em" />
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = b$$
        </MathBlock>
        <Pause />
        <OuterP>
          for a horizontal line, where {" "}
          <Math>
            $b \in \rr$
          </Math>
          {" "} is a
          constant.
        </OuterP>
        <OuterP class="indent-10">
          One should also bear in mind that an equation can
          define a line without having either of the forms
          {" "}
          <NoBreak>
            “
            <Math>
              $y = ax + b$
            </Math>
            ”
          </NoBreak>
          {" "} or {" "}
          <NoBreak>
            “
            <Math>
              $x = c$
            </Math>
            ”.
          </NoBreak>
          {" "} For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$x + y = 3$$
        </MathBlock>
        <Pause />
        <OuterP>
          is equivalent to
        </OuterP>
        <Pause />
        <MathBlock>
          $$y = 3 - x$$
        </MathBlock>
        <Pause />
        <OuterP>
          and thus describes a line of {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -intercept
          </NoBreak>
          {" "} {" "}
          <Math>
            $3$
          </Math>
          {" "}
          and slope {" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            .
          </NoBreak>
          <ImageRight
            src="/images/svg_3_plus_minus_one_times_x_cloud.svg"
            line={1}
            offset_x="2rem" />
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Slopes and Units.
          </b>
          {" "}
          If the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axes
          </NoBreak>
          {" "} have units then a line's
          slope has units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as should make sense, given that the slope is a
          change in {" "}
          <Math>
            $y$
          </Math>
          {" "} divided by a change in {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For example, if the units on the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis are
          meters (“m”) and the units on the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis are
          seconds (“s”) then the slope has units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units&#125; \over \te&#123;$x$ axis units&#125;&#125; = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          also known as {" "}
          <i>
            meters per second
          </i>
          . This is
          precisely the case, for example, in the following
          graph, that purports to plot the height of a
          balloon, in meters, as a function of time elapsed,
          in seconds:
        </OuterP>
        <Pause />
        <Image src="/images/52.svg" />
        <Pause />
        <OuterP>
          The slope of the graph is {" "}
          <Math>
            $0.75$
          </Math>
          {" "} {" "}
          <i>
            meters per
            second
          </i>
          {" "} because the balloon's height increases by
          three {" "}
          <i>
            meters
          </i>
          {" "} over the first four {" "}
          <i>
            seconds
          </i>
          {" "} (if
          you had noticed):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;slope&#125; \left(\!= &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;\right) = &#123;3\te&#123;m&#125; \over 4\te&#123;s&#125;&#125; = 0.75\te&#123;m&#125;/\te&#123;s&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          In fact, the slope is the balloon's upward
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          velocity
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          since velocity is defined as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          displacement over time
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and this is precisely the form of the ratio “rise
          over run” for the current graph. (More generally,
          we have
        </OuterP>
        <Pause />
        <CentralDisplay>
          “slope = velocity”
        </CentralDisplay>
        <Pause />
        <OuterP>
          whenever the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis has dimensions of length and
          the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis has dimensions of time—whether the
          slope turns out to be {" "}
          <Math>
            $\te&#123;m&#125;/\te&#123;s&#125;$
          </Math>
          {" "} or {" "}
          <Math>
            $\te&#123;km&#125;/\te&#123;s&#125;$
          </Math>
          {" "}
          or km/hour, etc, depends on the exact units involved.)
        </OuterP>
        <OuterP class="indent-10">
          Terminology-wise, slopes are often known as
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          rates of change
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in the presence of units. More particularly, in the
          common case when the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} denotes time, the
          formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$\te&#123;slope&#125; = &#123;\te&#123;rise&#125; \over \te&#123;run&#125;&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          can be rephrased as
        </OuterP>
        <Pause />
        <MathBlock>
          $$\te&#123;“&#125;\rt&#123;0.1&#125;\te&#123;rate of change&#125; \,\,=\,\,
          &#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125; \over \te&#123;amount of time&#125;&#125;\rt&#123;0.1&#125;\te&#123;”&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          where “amount of change” is short for “amount of
          change on the {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -axis”.
          </NoBreak>
          {" "} By extension, taking all
          three permutations of the slope formula into account
          gives us...
        </OuterP>
        <Pause />
        <Image src="/images/53.svg" />
        <Pause />
        <OuterP>
          ...these formulas, commonly useful in “applied”
          problems.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            The increase in height of the above balloon
            over a period of 5 seconds is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            0.75\te&#123;m&#125;/\te&#123;s&#125; \times 5\te&#123;s&#125; = 3.75\te&#123;m&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            following the template
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;array&#125;&#123;c&#125;
            \rt&#123;0.08&#125;
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;\rt&#123;0.05&#125;
            \end&#123;array&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            found in the second line of the table. (Indeed,
            {" "}
            <NoBreak>
              <Math>
                $0.75$
              </Math>
              m
            </NoBreak>
            <NoBreak>
              <Math>
                $/$
              </Math>
              s
            </NoBreak>
            {" "} is the “rate of change” of the
            balloon's height.)
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            The amount of time required
            for the balloon to go up by (say) {" "}
            <NoBreak>
              <Math>
                $4$
              </Math>
              m
            </NoBreak>
            {" "} is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \frac&#123;4\te&#123;m&#125;&#125;&#123;0.75\te&#123;m&#125;/\te&#123;s&#125;&#125;\! = 5.3333...\te&#123;s&#125;
            $$
            <ImageRight
              src="/images/svg_ch2_ch_units_cloud.svg"
              offset_x="-6rem"
              style="width:930px"
              compensate_offset_x_for_large_text_columns={true} />
          </MathBlock>
          <Pause />
          <OuterP>
            following the template
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;“&#125;\rt&#123;0.1&#125;
            \te&#123;amount of time&#125; \,\,=\,\, \frac&#123;\!\rt&#123;0.15&#125;\te&#123;amount of change&#125;\!\rt&#123;0.1&#125;&#125;&#123;\te&#123;rate of change&#125;&#125;
            \rt&#123;0.1&#125;\te&#123;”&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            found in the third line of the table.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section
        divider={false}
        id="section-9">
        <OuterP>
          <b>
            Postscript: Units vs Dimensions.
          </b>
          {" "}
          Comparing
        </OuterP>
        <Pause />
        <CentralDisplay>
          “the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} has dimensions of time”
        </CentralDisplay>
        <Pause />
        <OuterP>
          with
        </OuterP>
        <Pause />
        <CentralDisplay>
          “the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -axis
          </NoBreak>
          {" "} has units of seconds”
        </CentralDisplay>
        <Pause />
        <OuterP>
          one could easily be tricked into thinking that a
          “dimension” is the same thing as a “unit”. In
          fact, dimensions are broader categories, such as,
          namely,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          time
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          length
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          mass
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          each of which covers {" "}
          <i>
            several different
          </i>
          {" "} units.
          For example, in the “time” dimension, one finds
          individual units of the type
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          years, seconds, minutes, hours, days
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (etc), while in
          the “length” dimension one finds
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters, kilometers, millimeters, yards, feet
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (etc), and so on. (You can imagine some of the
          units found in the “mass” dimension, e.g..) On
          the other hand, dimensions can be multiplied and
          divided just like units. For example,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          length over time
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is another dimension, commonly known as...
          velocity!
        </OuterP>
      </Section>
      <Pause />
      <Exercises>
        <Exercise number={1}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              True or false: Lines of slope {" "}
              <Math>
                $-&#123;1 \over 2&#125;$
              </Math>
              {" "}
              are perpendicular to lines of slope {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              This is true, as illustrated by the following
              pair of lines:
            </OuterP>
            <Pause />
            <Image
              src="/images/55.svg"
              class="relative w-fit">
              <ImageRight
                src="/images/56.svg"
                offset_y="5rem"
                offset_x="-1.3rem" />
              <ImageLeft
                src="/images/57.svg"
                offset_x="-8rem"
                offset_y="8rem" />
            </Image>
            <Pause />
            <OuterP>
              In more detail, the two triangles are related
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation and so, likewise,
              are the lines defined by their hypotenuses!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                More generally, a line of slope {" "}
                <Math>
                  $p$
                </Math>
                {" "} is
                perpendicular to a line of slope {" "}
                <NoBreak>
                  <Math>
                    $-1/p$
                  </Math>
                  ,
                </NoBreak>
                {" "} for
                all {" "}
                <NoBreak>
                  <Math>
                    $p \ne 0$
                  </Math>
                  .
                </NoBreak>
                {" "} By a similar drawing:
              </OuterP>
              <Pause />
              <Image
                src="/images/58.svg"
                class="relative w-fit">
                <ImageRight
                  src="/images/59.svg"
                  offset_y="27%"
                  offset_x="-10%" />
                <ImageLeft
                  src="/images/60.svg"
                  offset_x="-24%"
                  offset_y="33%" />
              </Image>
              <Pause />
              <StarDivider />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement id="_6_2862">
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              Find the general equation of a line of slope
              {" "}
              <Math>
                $p$
              </Math>
              {" "} passing through a point {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0)$
                </Math>
                .
              </NoBreak>
              {" "}
              (Hint: Start from the slope formula.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              A point {" "}
              <Math>
                $(x,y) \ne (x_0,y_0)$
              </Math>
              {" "} is on the
              line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "} if and only if
            </OuterP>
            <Pause />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
              <ImageLeft
                src="/images/svg_ch2_ex_x0_y0_line_equation_cloud.svg"
                offset_x="7.5em"
                offset_y="103px"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$ \,\,&#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the slope of the line segment from
              {" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $(x,y)$
                </Math>
                ,
              </NoBreak>
              {" "} and it is necessary
              and sufficient for this segment to have slope
              {" "}
              <Math>
                $p$
              </Math>
              {" "} in order for the point {" "}
              <Math>
                $(x,y)$
              </Math>
              {" "} to be on
              the line!
            </OuterP>
            <OuterP class="indent-10">
              Unfortunately, the equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$ p = &#123;y - y_0 \over x - x_0&#125; $$
            </MathBlock>
            <Pause />
            <OuterP>
              is not an entirely satisfactory answer,
              because the point {" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "} itself
              does not satisfy the equation. (We find
            </OuterP>
            <Pause />
            <MathBlock>
              $$ p = &#123;0 \over 0&#125; $$
            </MathBlock>
            <Pause />
            <OuterP>
              if we plug in {" "}
              <NoBreak>
                <Math>
                  $x = x_0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y = y_0$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              not a valid equality because the right-hand
              side is an undefined quantity.)
            </OuterP>
            <OuterP class="indent-10">
              Instead, multiplying
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p = &#123;y - y_0 \over x - x_0&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on both sides by {" "}
              <NoBreak>
                <Math>
                  $x-x_0$
                </Math>
                ,
              </NoBreak>
              {" "} we find the
              fraction-less equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              p(x-x_0) = y-y_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is satisfied by the point {" "}
              <Math>
                $(x,y) = (x_0,y_0)$
              </Math>
              {" "}
              as well as by every other point on the line.
              This can be a final answer, and, pleasingly,
              has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\te&#123;slope&#125; \times \te&#123;run&#125; = \te&#123;rise&#125;\te&#123;”&#125;
              $$
              <ImageRight
                src="/images/svg_slope_times_run_equals_rise_cloud.svg"
                offset_x="2.5rem"
                offset_y="-0.5rem"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              which can also make it easy to remember!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              The answer we gave is more often written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y - y_0 = p(x - x_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the two sides of the equation swapped, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = p(x - x_0) + y_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <Math>
                $y$
              </Math>
              {" "} isolated on the left-hand side. From
              there one can also distribute {" "}
              <NoBreak>
                <Math>
                  $p(x-x_0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              obtaining (after putting {" "}
              <NoBreak>
                “
                <Math>
                  $-px_0$
                </Math>
                ”
              </NoBreak>
              {" "} last)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = px + y_0 - px_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = ax + b
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <NoBreak>
                <Math>
                  $a = p$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $b = y_0 - px_0$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={3}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 3.
              </b>
              {" "}
              Plot the vertical velocity of
              <del>
                an object
              </del>
              {" "} a mosquito whose height over time is
              given by this graph (use the same time interval
              as the graph):
            </OuterP>
            <Pause />
            <Image src="/images/1.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here is the “official” graph of the (vertical)
              velocity:
            </OuterP>
            <Pause />
            <Image src="/images/64.svg" />
            <Pause />
            <OuterP>
              On each interval, the velocity is rate of
              change of the height, i.e., the {" "}
              <i>
                slope
              </i>
              {" "} of
              the height. For example, the rate of change
              of the height is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\te&#123;m&#125; \over 1\te&#123;s&#125;&#125; = 1\te&#123;m&#125;/\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              between {" "}
              <NoBreak>
                <Math>
                  $-4$
                </Math>
                s
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                s,
              </NoBreak>
              {" "} where the mosquito
              goes up by one meter during a one second
              period, so the vertical velocity is {" "}
              <NoBreak>
                1m
                <Math>
                  $/$
                </Math>
                s
              </NoBreak>
              {" "}
              for that time interval, etc.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              As explained in {" "}
              <a
                href="/article/chapter3?id=_15_8516"
                class="handle-out-chapter-link">
                Chapter 3
              </a>
              , an empty circle of
              this type
            </OuterP>
            <Pause />
            <Image src="/images/svg_empty_circle_alone.svg" />
            <Pause />
            <OuterP>
              indicates a “missing” value. Specifically, in
              our case, the vertical velocity is {" "}
              <i>
                undefined
              </i>
              {" "}
              wherever the graph of the height has a sharp
              corner. (Because the slope of the graph is not
              well-defined at such corners.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              For the time interval from {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                s
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s,
              </NoBreak>
              {" "} the
              slope is
            </OuterP>
            <Pause />
            <MathBlock>
              $$ &#123;-2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = -\rt&#123;0.07&#125;4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <Pause />
            <OuterP>
              and similarly for the time interval from
              {" "}
              <NoBreak>
                <Math>
                  $2.5$
                </Math>
                s
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                s
              </NoBreak>
              {" "} the slope is
            </OuterP>
            <Pause />
            <MathBlock>
              $$ &#123;2\rt&#123;0.05&#125;\te&#123;m&#125; \over 0.5\rt&#123;0.05&#125;\te&#123;s&#125;&#125; = 4\rt&#123;0.1&#125;\te&#123;m&#125;/\te&#123;s&#125; $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $2/0.5 = 4$
                </Math>
                .
              </NoBreak>
              {" "} (Think: {" "}
              <i>
                how many times
              </i>
              {" "}
              does {" "}
              <Math>
                $0.5$
              </Math>
              {" "} go into {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ?)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              Digressing on the second-to-last equation
              in the solution to {" "}
              <InChapterLink
                href="/article/chapter2?id=_6_2862"
                class="handle-in-chapter-link">
                Exercise 2
              </InChapterLink>
              , explain why
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} of the line of slope {" "}
              <Math>
                $p$
              </Math>
              {" "}
              through the point {" "}
              <Math>
                $(x_0,y_0)$
              </Math>
              {" "} by using a drawing
              and “rise equals slope times run”.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              E.g.:
            </OuterP>
            <Pause />
            <Image src="/images/66.svg" />
            <Pause />
            <OuterP>
              The rise from the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} to {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $px_0$
                </Math>
                ,
              </NoBreak>
              {" "} as found by “rise equals slope times
              run”, implying that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 - px_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept.
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "} Our drawing makes some implicit
              assumptions, such as {" "}
              <Math>
                $p &gt; 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x_0 &gt; 0$
                </Math>
                .
              </NoBreak>
              {" "} But
            </OuterP>
            <Pause />
            <MathBlock>
              $$ px_0 $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the rise from the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} to
              {" "}
              <Math>
                $(x_0, y_0)$
              </Math>
              {" "} regardless of the sign of {" "}
              <Math>
                $p$
              </Math>
              {" "} or
              {" "}
              <Math>
                $x_0$
              </Math>
              {" "} (because {" "}
              <Math>
                $x_0$
              </Math>
              {" "} is the run in all cases),
              making
            </OuterP>
            <Pause />
            <MathBlock>
              $$ y_0 - px_0 $$
            </MathBlock>
            <Pause />
            <OuterP>
              the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -intercept
              </NoBreak>
              {" "} in all cases.
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};