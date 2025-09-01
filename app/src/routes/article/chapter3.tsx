import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Item }  from "~/components/List";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { SolutionNote, Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter3__() {
  return (
    <Article
      prevPage="/article/chapter2"
      nextPage="/article/chapter4"
      pageNecessaryMargin={700}
      maxElementWidth={1500}
      id="_15_2720">
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            syntax
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            lambda functions
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            definition by cases
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            on arbitrariness
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            graphs
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            domains
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            “from/to” notation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            the vertical line test
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            a famous discontinuity
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            distinguishing {" "}
            <NoBreak>
              “
              <Math>
                $f$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $f(x)$
              </Math>
              ”
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            distinguishing {" "}
            <NoBreak>
              “
              <Math>
                $x^3$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $x \ra x^3$
              </Math>
              ”
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            polynomials
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-12">
          <InChapterLink href="?id=section-13">
            quadratic, linear, and constant terms
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-13">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 3:">
        Functions
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Syntax.
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is a “rule” for transforming inputs (usually
          numbers) into outputs (usually numbers as well).
          One can think of a function as a box with an
          “input tube” and an “output tube”:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_f_box.svg" />
        <Pause />
        <OuterP>
          An input goes in via the input tube, is
          processed according to the function's rule,
          and the result comes out the other side.
          (Metaphorically speaking.)
        </OuterP>
        <OuterP class="indent-10">
          In the above picture, the name of the function
          is {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Notation-wise, one writes
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(x)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (which is read {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ”,
          </NoBreak>
          {" "} and that's
          important) for the result of passing an input
          {" "}
          <Math>
            $x$
          </Math>
          {" "} to a function {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} For example, if the rule
          according to which {" "}
          <Math>
            $f$
          </Math>
          {" "} processes inputs is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the output is the square of the input
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(2) = 4&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            [“
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $2$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $4$
            </Math>
            ”]
          </NoBreak>
          {" "} because {" "}
          <NoBreak>
            <Math>
              $2^2 = 4$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(3) = 9&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            [“
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $3$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $9$
            </Math>
            ”]
          </NoBreak>
          {" "} because {" "}
          <NoBreak>
            <Math>
              $3^2 = 9$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123; f(0.1) = 0.01&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [...] because {" "}
          <NoBreak>
            <Math>
              $0.1^2 = 0.01$
            </Math>
            ,
          </NoBreak>
          {" "} and so on. Also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;f(x) = x^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          <NoBreak>
            [“
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <Math>
            $x$
          </Math>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $x^2$
            </Math>
            ”]
          </NoBreak>
          {" "} more generally, which
          is actually the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          definition
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            !!
          </NoBreak>
          {" "} (Stated algebraically.)
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
            Lambda functions.
          </b>
          {" "}
          A
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          lambda function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is not a type of function, but a type of
          notation  that enables one to define a function
          without giving it a name, such as {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”.
          </NoBreak>
          {" "} In fact
          there are two different mainstream notations, in
          this instance. One notation writes
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \lambda&#123;&#125;x.x^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to mean “the function that maps {" "}
          <Math>
            $x$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $x^2$
            </Math>
            ”
          </NoBreak>
          {" "}
          (and by the way,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \lambda&#123;&#125;z.z^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is {" "}
          <i>
            the same
          </i>
          {" "} function, because
          it specifies the same in-out mapping—a thing
          goes to its square—also by the way, the symbol
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Huge \lambda
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the Greek letter “lambda”, giving its name
          to the topic) while the other notation writes
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \rightarrow x^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to mean the same thing.
        </OuterP>
        <OuterP class="indent-10">
          Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra x^2)(0.1)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means “the function that maps each number to its
          square, of {" "}
          <NoBreak>
            <Math>
              $0.1$
            </Math>
            ”.
          </NoBreak>
          {" "} So...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra x^2)(0.1) = 0.01
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...the same as an equation of the form
          {" "}
          <NoBreak>
            “
            <Math>
              $f(\dots) = \dots$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For more practice:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\lambda x.x^3)(10) = 1000
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (\lambda u.u^5)(10) = 100000
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (v \ra v^2)(10) = 100
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (z \ra z^3)(10) + (t \ra t^2)(5) = 1025.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (Etc.) (Indeed, to emphasize again, the variable
          denoting the input does not matter: it is just a
          placeholder, and you obtain the same output, and
          the same {" "}
          <i>
            function
          </i>
          , no matter what symbol
          you choose.*) (*As long as you don't collide
          with other existing variable names.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Definition by cases.
          </b>
          {" "}
          Sometimes a function is defined by an expression
          of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra \begin&#123;cases&#125;
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \vdots &amp; \vdots\\
          \ldots &amp; \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where the right-hand side is a list of mutually
          exclusive cases to consider according to the
          value of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "} Equivalently,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          g(x) = \begin&#123;cases&#125;
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \ldots &amp; \te&#123;if $\ldots$&#125;\\
          \vdots &amp; \vdots\\
          \ldots &amp; \te&#123;$\ldots$&#125;
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in the case where the function has a name, such
          as {" "}
          <NoBreak>
            “
            <Math>
              $g$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            If VX-11/78A (don't mind the weird name, chosen
            at random) is the function defined by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(x) = \begin&#123;cases&#125;
            3.5 &amp; \te&#123;if $x = 0$&#125;,\\
            2.5\up&#123;1.1&#125; &amp; \te&#123;if $x = 1$&#125;,\\
            \te&#123;undefined&#125;\up&#123;1.1&#125; &amp; \te&#123;if $x \ne 0, 1$&#125;
            \end&#123;cases&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(0) = 3.5,
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            and
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;VX-11/78A&#125;(1) = 2.5,
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            aaand... and these are the only two values of
            {" "}
            <Math>
              $x$
            </Math>
            {" "} for which {" "}
            <NoBreak>
              VX-11/78A
              <Math>
                $(x)$
              </Math>
            </NoBreak>
            {" "} is defined, as
            specified.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            On arbitrariness.
          </b>
          {" "}
          While a function such as VX-11/78A might seem
          completely arbitrary, one lesson from the former
          example is that functions {" "}
          <i>
            can
          </i>
          {" "} be
          completely arbitrary! In fact, there are only
          two “ground rules” to respect in order for
          something to qualify as a function: {" "}
          <b>
            (i)
          </b>
          {" "} to
          output
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          one
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          output per (accepted) input, and {" "}
          <b>
            (ii)
          </b>
          {" "} to return
          the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          same
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          output each time on the same input. (Sometimes,
          functions are said to be
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          deterministic
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          because of {" "}
          <b>
            (ii)
          </b>
          .)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Graphs.
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          graph
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a function is a visualization device. A point
          on the graph corresponds to an input for which
          the function is defined. The {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of
          the point is the value of the input, while the
          {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
          {" "} is the value of the corresponding
          output.
        </OuterP>
        <OuterP class="indent-10">
          For example, here is a graph of VX-11/78A:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_vx1178A.svg" />
        <Pause />
        <OuterP>
          The graph has only two points, because VX-78/11A
          is defined at only two values. One point is...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_ch_vx1178A_@0_with_cors.svg" />
        <Pause />
        <OuterP>
          <NoBreak>
            ...
            <Math>
              $(0, 3.5)$
            </Math>
            ,
          </NoBreak>
          {" "} because VX-78/11A maps {" "}
          <Math>
            $0$
          </Math>
          {" "} to
          {" "}
          <NoBreak>
            <Math>
              $3.5$
            </Math>
            ,
          </NoBreak>
          {" "} while the other point is...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_ch_vx1178A_@1_with_cors.svg" />
        <Pause />
        <OuterP>
          <NoBreak>
            ...
            <Math>
              $(1, 2.5)$
            </Math>
            ,
          </NoBreak>
          {" "} because VX-78/11A maps {" "}
          <Math>
            $1$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $2.5$
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
            Here is a graph of {" "}
            <Math>
              $x \ra x^2$
            </Math>
            {" "} on the interval
            {" "}
            <Math>
              $[-1, 1]$
            </Math>
            {" "} (meaning: going from {" "}
            <Math>
              $x = -1$
            </Math>
            {" "} to
            {" "}
            <NoBreak>
              <Math>
                $x = 1$
              </Math>
              ):
            </NoBreak>
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch3_ch_x_squared_1.svg" />
          <Pause />
          <OuterP>
            Among all the points on this graph that we
            could discuss, let us name, say, the point
            {" "}
            <NoBreak>
              <Math>
                $(0.75, 0.5625)$
              </Math>
              ...
            </NoBreak>
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch3_ch_x_squared_2.svg" />
          <Pause />
          <OuterP>
            ...which finds itself on the graph, namely,
            because the square of {" "}
            <Math>
              $0.75$
            </Math>
            {" "} is
            {" "}
            <NoBreak>
              <Math>
                $0.5625 = 9/16$
              </Math>
              .
            </NoBreak>
            <ImageLeft
              src="/images/svg_ch3_0.5625_cloud.svg"
              line={-1}
              offset_y="0em" />
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Domains.
          </b>
          {" "}
          The {" "}
          <i>
            domain
          </i>
          {" "} of a function {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            —written
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom\, f
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          —is the set of inputs {" "}
          <Math>
            $x$
          </Math>
          {" "} for which {" "}
          <Math>
            $f(x)$
          </Math>
          {" "} is
          defined.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            We have
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;VX-11/78A&#125; = \left\&#123; 0\rt&#123;0.1&#125;, 1 \right\&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            because {" "}
            <NoBreak>
              VX-11/78A
              <Math>
                $(x)$
              </Math>
            </NoBreak>
            {" "} is only defined at {" "}
            <NoBreak>
              <Math>
                $x = 0$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <NoBreak>
              <Math>
                $1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            If DM-1700 (another weirdly named function) is
            defined by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \te&#123;DM-1700&#125;(x) =
            \begin&#123;cases&#125;
            0             &amp; \te&#123;if $x \leq 0$ or $x \geq 1$&#125;,\\
            1 - x\up&#123;1.1&#125; &amp; \te&#123;if $0 &lt; x &lt; 1$&#125;
            \end&#123;cases&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \dom\,\rt&#123;0.1&#125; \te&#123;DM-1700&#125; = \rr
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            because {" "}
            <Math>
              $\te&#123;DM-1700&#125;(x)$
            </Math>
            {" "} is defined for all
            {" "}
            <NoBreak>
              <Math>
                $x \in \rr$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            If {" "}
            <Math>
              $g : \rr \ra \rr$
            </Math>
            {" "} (we are going to explain
            this notation imminently) is the function given
            by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            g(x) = \sqrt&#123;x - 1&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            then
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;align&#125;
            \dom\, g &amp;\,=\, [1, \infty)
            \end&#123;align&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            because the square root of a number is defined
            if and only if that number is {" "}
            <i>
              nonnegative
            </i>
            {" "}
            (i.e., we need {" "}
            <Math>
              $x - 1 \geq 0$
            </Math>
            {" "} in order for {" "}
            <Math>
              $g(x)$
            </Math>
            {" "}
            to be defined, i.e., we need {" "}
            <NoBreak>
              <Math>
                $x \geq 1$
              </Math>
              ).
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            “From/To” Notation.
          </b>
          {" "}
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means that {" "}
          <Math>
            $f$
          </Math>
          {" "} is a function
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          from {" "}
          <Math>
            $\rr$
          </Math>
          {" "} to {" "}
          <Math>
            $\rr$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or, which is to say, that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom f \subseteq \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [translation: {" "}
          <i>
            the domain of {" "}
            <Math>
              $f$
            </Math>
            {" "} is a subset of
            the set of real numbers
          </i>
          ] and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          [translation: {" "}
          <i>
            the set of values output by {" "}
            <Math>
              $f$
            </Math>
            {" "}
            is a subset of the set of real numbers
          </i>
          ].
        </OuterP>
        <OuterP class="indent-10">
          Generalizing,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : A \ra B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \dom f \subseteq A
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (i.e., that {" "}
          <Math>
            $f$
          </Math>
          {" "} only accepts values from {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            )
          </NoBreak>
          {" "} and
          that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \&#123;f(x) : x \in \dom f\&#125; \subseteq B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (i.e., that {" "}
          <Math>
            $f$
          </Math>
          {" "} only outputs values from {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            ),
          </NoBreak>
          {" "}
          following the pattern above.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            The Vertical Line Test.
          </b>
          {" "}
          As it turns out, the term “graph” just means
          “set of points in the plane”. So a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          function graph
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (as described above) is just one particular
          kind of “graph” among other things that are
          also called “graphs”, but that are not
          function graphs.
        </OuterP>
        <OuterP class="indent-10">
          The so-called
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          vertical line test
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          observes that a graph {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "} {" "}
          <i>
            set of points
            in the plane
          </i>
          ] is a function graph if and
          only if every {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "} (a.k.a., input)
          corresponds to at most one {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -value
          </NoBreak>
          {" "} (a.k.a.,
          output). In other words, every vertical line
          should intersect the graph at most once.
        </OuterP>
        <OuterP class="indent-10">
          For example, this particular graph...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_ch_wiggle_graph.svg" />
        <Pause />
        <OuterP>
          is a function graph (or locally at least, from
          what we can see), because every vertical line
          intersects the graph at most once, but this
          graph...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_ch_circle.svg">
          <ImageRight
            src="/images/svg_ch3_ch_crossing_circle_cloud.svg"
            offset_x="2em" />
        </Image>
        <Pause />
        <OuterP>
          ...is not the graph of any function, because
          some vertical lines intersect the graph more
          than once.
        </OuterP>
        <OuterP class="indent-10">
          (Oops. To backtrack and quickly clarify a small
          matter, an empty circle at the end of a segment,
          in the vein of the previous figure...
        </OuterP>
        <Pause />
        <Image
          src="/images/svg_ch3_ch_empty_circle.svg"
          class="pt-4 mb-3" />
        <Pause />
        <OuterP>
          ...means that the point in question is {" "}
          <i>
            excluded
          </i>
          {" "}
          from the graph. A filled circle, by opposition,
          means that the point is included!)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            This {" "}
            <i>
              upper semicircle
            </i>
            {" "} of unit radius...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch3_ch_upper_semicircle.svg" />
          <Pause />
          <OuterP>
            ...passes the vertical line test, and, hence,
            defines a function.
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 7.
            </b>
            {" "}
            This graph defines a function...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch3_ch_factory_function.svg" />
          <Pause />
          <OuterP>
            ...because it passes the vertical line test,
            while this graph does not define a function...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch3_factory_nonfunction.svg" />
          <Pause />
          <OuterP>
            ...because it does {" "}
            <i>
              not
            </i>
            {" "} pass the vertical
            line test!
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            A Famous Discontinuity.
          </b>
          {" "}
          As already seen, functions can have
          {" "}
          <i>
            discontinuities
          </i>
          : a place where the function
          experiences a sudden “jump” in value.
        </OuterP>
        <OuterP class="indent-10">
          For a famous example of a “naturally” occurring
          discontinuity (that we feel compelled to
          mention, for some reason) we need look no
          further than the function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \ra 0^x
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as it so happens that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          0^x =
          \begin&#123;cases&#125; 0 &amp; \te&#123;if &#125; x &gt; 0\\
          1 &amp; \te&#123;if &#125; x = 0\\
          \te&#123;undefined&#125; &amp; \te&#123;if &#125;x &lt; 0 \end&#123;cases&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which implies a discontinuity in the graph of
          {" "}
          <Math>
            $y = 0^x$
          </Math>
          {" "} at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "} as pictured here:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch3_zero_to_the_x.svg" />
        <Pause />
        <OuterP>
          (Pretty cool, no?)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            Distinguishing {" "}
            <NoBreak>
              “
              <Math>
                $f$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $f(x)$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          The difference between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;VX-11/78A&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;VX-11/78A&#125;(x)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is that the former is a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          while the latter is a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          value.
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (Well, provided {" "}
          <NoBreak>
            <Math>
              $x \in \&#123;0, 1\&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} to make it
          well-defined at all.) Likewise, if {" "}
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          the difference between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is that the former is a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          while the latter is a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          value.
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          Amusingly, though, if we add {" "}
          <NoBreak>
            “
            <Math>
              $x \ra$
            </Math>
            ”
          </NoBreak>
          {" "} in front
          of {" "}
          <NoBreak>
            “
            <Math>
              $f(x)$
            </Math>
            ”
          </NoBreak>
          {" "} then we are back to considering a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and which is namely the function whose rule is:
          apply {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} In fact,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f = (x \ra f(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where the above is {" "}
          <i>
            an equality between functions
          </i>
          .
          (You cannot use this equality to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          define
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          <Math>
            $f$
          </Math>
          {" "} because that would lead to a circular
          definition. But that doesn't make the equality
          any less true. And btw, you can go “one layer
          deeper”:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f = (x \ra f(x)) = (x \ra (t \ra f(t))(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...where we use the fact that {" "}
          <Math>
            $f = (t \ra f(t))$
          </Math>
          {" "}
          in the second equality. You could keep going,
          replacing each time {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
            ”
          </NoBreak>
          {" "} by a self-referential
          expression, but the process is not intrinsically
          useful.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            Distinguishing {" "}
            <NoBreak>
              “
              <Math>
                $x^3$
              </Math>
              ”
            </NoBreak>
            {" "} and {" "}
            <NoBreak>
              “
              <Math>
                $x \ra x^3$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          Technically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^3
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a {" "}
          <i>
            value
          </i>
          {" "} (not a function) and the way
          logicians think of it, philosophically speaking,
          is like so: at inception, every symbol has
          some default value attached, absent any other
          context.
        </OuterP>
        <OuterP class="indent-10">
          By contrast,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra x^3
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is clearly a {" "}
          <i>
            function
          </i>
          , not a {" "}
          <i>
            value
          </i>
          .
          So {" "}
          <NoBreak>
            “
            <Math>
              $x^3$
            </Math>
            ”
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            “
            <Math>
              $x \ra x^3$
            </Math>
            ”
          </NoBreak>
          {" "} are very (VERY)
          different, qualitatively speaking.
        </OuterP>
        <OuterP class="indent-10">
          But including the arrow everywhere is
          impractical and even pedantic, so, in the end,
          you might see us refer to an expression such as,
          e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^3 + x^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as a “function”, arrow or no arrow.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            Polynomials.
          </b>
          {" "}
          A function {" "}
          <Math>
            $f$
          </Math>
          {" "} of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f(x) = a_kx^k + a_&#123;k-1&#125;x^&#123;k-1&#125; + \dots + a_2x^2 + a_1x + a_0
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is called a {" "}
          <i>
            polynomial
          </i>
          . Here
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a_0,\,a_1,\, \ldots,\, a_k \in \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are arbitrary constants, also known as the
          {" "}
          <i>
            coefficients
          </i>
          {" "} of the polynomial. The {" "}
          <i>
            degree
          </i>
          {" "}
          of the polynomial is {" "}
          <NoBreak>
            <Math>
              $k$
            </Math>
            ,
          </NoBreak>
          {" "} if {" "}
          <NoBreak>
            <Math>
              $a_k \ne 0$
            </Math>
            .
          </NoBreak>
          {" "}
          (Otherwise, work your way down until you find
          a nonzero coefficient—if there are none, because
          the polynomial is just the constant {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} then
          the degree is {" "}
          <i>
            minus infinity
          </i>
          .) (We're not
          kidding.)
        </OuterP>
        <OuterP class="indent-10">
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2x + \sqrt&#123;2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a polynomial of degree 1, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 - 10
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a polynomial of degree 2, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^&#123;100&#125; + x^&#123;99&#125; + x^&#123;98&#125; + \dots + x^4 + x^3 + x^2 + x + 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a polynomial of degree 100.
        </OuterP>
        <OuterP class="indent-10">
          Polynomials of low degree have their own
          special names, as inventoried in the following
          table:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;array&#125;&#123;c|c|c&#125;
          \,\,\,\,\te&#123;degree&#125;\,\,\,\, &amp; \te&#123;name&#125; &amp; \,\,\,\,\te&#123;example&#125;\,\,\,\,\Rule&#123;0pt&#125;&#123;0.8em&#125;&#123;0.5em&#125; \\ \hline
          -\infty &amp; \te&#123;zero&#125; &amp; 0\Rule&#123;0pt&#125;&#123;1.1em&#125;&#123;0.0em&#125;\\
          \te&#123;0&#125; &amp; \te&#123;constant&#125; &amp; 1 + \sqrt&#123;5&#125;\\
          \te&#123;1&#125; &amp; \te&#123;affine&#125; &amp; 10x - 1\\
          \te&#123;2&#125; &amp; \,\,\,\,\te&#123;quadratic&#125;\,\,\,\, &amp; x^2 - 1\\
          \te&#123;3&#125; &amp; \te&#123;cubic&#125; &amp; x^3 - 1\\
          \te&#123;4&#125; &amp; \te&#123;quartic&#125; &amp; 1 - x^4\\
          \te&#123;5&#125; &amp; \te&#123;quintic&#125; &amp; x^5
          \end&#123;array&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          There is some confusion about the term
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          affine
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          for which the term
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          linear
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is sometimes substituted. But if we say
          “linear” we mean a function of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra a_1x
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for a constant {" "}
          <NoBreak>
            <Math>
              $a_1 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "} This is more
          restricted than an affine function, because
          there is no constant {" "}
          <NoBreak>
            <Math>
              $a_0$
            </Math>
            !
          </NoBreak>
        </OuterP>
        <Pause />
        <Image
          style="margin-top:-0.6em;margin-bottom:-0.4em"
          src="/images/svg_ch3_ch_affine_linear_cloud.svg" />
      </Section>
      <Pause />
      <Section id="section-13">
        <OuterP>
          <b>
            Quadratic, linear, and constant terms.
          </b>
          {" "}
          To finish up on polynomials: the terms of degree
          {" "}
          <NoBreak>
            <Math>
              $2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $1$
          </Math>
          {" "} and {" "}
          <Math>
            $0$
          </Math>
          {" "} are called the {" "}
          <i>
            quadratic
          </i>
          ,
          {" "}
          <i>
            linear
          </i>
          , and {" "}
          <i>
            constant
          </i>
          {" "} terms of the
          polynomial, respectively. If you see
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a_7x^7 + a_6x^6 + a_5x^5 + a_4x^4 + a_3x^3 - a_2x^2 + a_1x + a_0
          $$
          <ImageRight
            src="/images/svg_ch3_ch_quadratic_linear_constant_cloud.svg"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          then the quadratic term is {" "}
          <NoBreak>
            <Math>
              $-a_2x^2$
            </Math>
            ,
          </NoBreak>
          {" "} not
          {" "}
          <NoBreak>
            <Math>
              $a_2x^2$
            </Math>
            ,
          </NoBreak>
          {" "} fyi.
        </OuterP>
        <OuterP class="indent-10">
          Note that the linear term can also be viewed as
          the {" "}
          <NoBreak>
            “
            <Math>
              $x^1$
            </Math>
          </NoBreak>
          {" "} term” while the constant term can
          also be viewed as the {" "}
          <NoBreak>
            “
            <Math>
              $x^0$
            </Math>
          </NoBreak>
          {" "} term”; because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^1 = x
          $$
          <ImageRight
            src="/images/svg_ch3_ch_a1_x1_cloud.svg"
            offset_y="0.2em"
            offset_x="-0.1em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^0 = 1
          $$
          <ImageRight
            src="/images/svg_ch3_ch_a0_x0_cloud.svg"
            offset_x="0em"
            offset_y="0.2em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <Math>
            $x$
          </Math>
          {" "} (even {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ),
          </NoBreak>
          {" "} namely.
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
              How can you define the absolute value
              function using “definition by cases”?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The absolute value function is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \begin&#123;cases&#125; x &amp; \te&#123;if $x \geq 0$,&#125;\\ -x\!\!\up&#123;1.2&#125; &amp; \te&#123;if $x &lt; 0$&#125;\end&#123;cases&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $-(-1) = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $-(-5) = 5$
                </Math>
                ,
              </NoBreak>
              {" "} etc.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={2}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 2.
              </b>
              {" "}
              How can you define the absolute value
              function using an “ordinary” algebraic formula?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              |x| = \sqrt&#123;x^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;(-1)^2&#125; = 1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;(-5)^2&#125; = 5$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              This definition is less ad-hoc than might seem,
              being a 1-dimensional form of the Pythagorean
              theorem.
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
              Evaluate:
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              sm_cols={1}
              place_items="start"
              with_padding={false}
              column_first={true}>
              <Item>
                i. {" "}
                <Math>
                  $(\lambda u.u^3)(0.5)$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $(u \ra u^2)(x + 1)$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $(\lambda t.t - 1)(100) \cdot (\lambda t.t + 1)(100)$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $(u \ra u^2)(a + b)$
                </Math>
              </Item>
            </Grid>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The answers are:
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              sm_cols={1}
              place_items="start"
              with_padding={false}
              column_first={true}>
              <Item>
                i. {" "}
                <Math>
                  $0.5^3 = 0.125$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $(x + 1)^2 = x^2 + 2x + 1$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $(100 - 1) \cdot (100 + 1) = 9999$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $(a + b)^2 = a^2 + 2ab + b^2$
                </Math>
              </Item>
            </Grid>
          </Solution>
        </Exercise>
        <Exercise number={4}>
          <ExerciseStatement id="_7_715">
            <OuterP>
              <b>
                Exercise 4.
              </b>
              {" "}
              The {" "}
              <i>
                floor
              </i>
              {" "} of a real number {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \lfloor x \rfloor,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the greatest integer less than or equal
              to {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
              {" "} (Start at {" "}
              <Math>
                $x$
              </Math>
              {" "} and travel left on the
              number line until you meet an integer; but if
              {" "}
              <Math>
                $x$
              </Math>
              {" "} is already an integer, stay there; the
              place you land is {" "}
              <NoBreak>
                <Math>
                  $\lfloor x \rfloor$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Sketch the graph {" "}
              <NoBreak>
                <Math>
                  $y = \floor&#123;x&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Secondly, find a formula for a function whose
              graph looks like this, where you are allowed
              to use {" "}
              <NoBreak>
                “
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} in your formula:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_factory_roof_graph.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              As {" "}
              <Math>
                $x$
              </Math>
              {" "} grows, so does {" "}
              <NoBreak>
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} but
              {" "}
              <Math>
                $\floor&#123;x&#125;$
              </Math>
              {" "} only “levels up” each time {" "}
              <Math>
                $x$
              </Math>
              {" "}
              reaches a new integer, and “flatlines”
              otherwise; this gives rise to the following
              staircase-shaped graph:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_factory_roof_floor_graph.svg" />
            <Pause />
            <OuterP>
              (For example, {" "}
              <Math>
                $\floor&#123;1&#125; = 1$
              </Math>
              {" "} because the
              greatest integer less than or equal to {" "}
              <Math>
                $1$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\floor&#123;-0.5&#125; = -1$
              </Math>
              {" "} because the greatest
              integer less than or equal to {" "}
              <Math>
                $-0.5$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                ,
              </NoBreak>
              {" "}
              and so on.)
            </OuterP>
            <OuterP class="indent-10">
              For the second part note that the following
              two displacements, excerpted from the “factory
              roof” graph in the statement, are equal:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_factory_roof_with_displacement_arrows.svg" />
            <Pause />
            <OuterP>
              The red dot to the left of {" "}
              <Math>
                $x$
              </Math>
              {" "} has {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\floor&#123;x&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} so the horizontal displacement is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - \floor&#123;x&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so the equation of the graph is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = x - \floor&#123;x&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} {" "}
              <i>
                is
              </i>
              {" "} the
              vertical displacement, given that the vertical
              displacement starts at {" "}
              <NoBreak>
                <Math>
                  $y = 0$
                </Math>
                ,
              </NoBreak>
              {" "} and because
              the vertical and horizontal displacements are
              equal.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement id="_8_2326">
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Find the formula for a function whose graph
              looks like this, again using the floor function
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $\lfloor \cdot \rfloor$
                </Math>
                ’
              </NoBreak>
              {" "} as a building block:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_factory_roof_stretched.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We would like to argue the correctness of
              the following two-step process (divide the
              input by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} apply the function from {" "}
              <InChapterLink
                href="/article/chapter3?id=_7_715"
                class="handle-in-chapter-link">
                Exercise 4
              </InChapterLink>
              ):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_factory_roof_stretched_solution.svg" />
            <Pause />
            <OuterP>
              Indeed, the two graphs featured above differ
              only by a horizontal dilation; dividing the
              input by {" "}
              <Math>
                $2$
              </Math>
              {" "} “undoes” the dilation, at which
              point it suffices to apply the function pictured
              in the second graph; having declared our method
              correct, the answer is thus...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x/2 - \lfloor x/2 \rfloor&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...as obtained by “sticking” {" "}
              <Math>
                $x/2$
              </Math>
              {" "} (the halved
              input) in place of {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $\,x - \lfloor x \rfloor$
                </Math>
                ”,
              </NoBreak>
              {" "}
              the formula for the function from {" "}
              <InChapterLink
                href="/article/chapter3?id=_7_715"
                class="handle-in-chapter-link">
                Exercise 4
              </InChapterLink>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              One can check the answer by typing “x/2 - floor(x/2)”
              in DESMOS. Viz:
            </OuterP>
            <Pause />
            <Image
              src="/images/png_ch3_desmos_composition_0_c.png"
              width="1400px" />
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              Alternately, enter “f(x) = x - floor(x)” and
              then “f(x/2)”, viz:
            </OuterP>
            <Pause />
            <Image
              src="/images/png_ch3_desmos_composition_1_c.png"
              width="1400px" />
            <Pause />
            <OuterP>
              Or we can be even fancier:
            </OuterP>
            <Pause />
            <Image
              src="/images/png_ch3_desmos_composition_2_b.png"
              width="1400px" />
            <Pause />
            <OuterP>
              What you see above (the graph in orange) is
              the so-called
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              composition
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the functions
              {" "}
              <Math>
                $\f$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ;
              </NoBreak>
              {" "} in more detail, if we switch the
              “input tube” and “output tube” sides of a function...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_f_box_inverted.svg" />
            <Pause />
            <OuterP>
              ...(compared to the drawing at the top of the
              chapter), then the composition of {" "}
              <Math>
                $\f$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ,
              </NoBreak>
              {" "}
              written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\f \circ g&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and read
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} of {" "}
              <NoBreak>
                <Math>
                  $\hlfbk&#123;&#125;g$
                </Math>
                ”
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (mathematicians have to invent a notation for
              everything—that little circle {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”
              </NoBreak>
              {" "} is called
              the {" "}
              <i>
                composition operator
              </i>
              ,
              by the way) is the function that you get by
              gluing {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                's
              </NoBreak>
              {" "} box to the right of {" "}
              <NoBreak>
                <Math>
                  $\f$
                </Math>
                's
              </NoBreak>
              {" "} box,
              like so:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_f_box_g_box.svg" />
            <Pause />
            <OuterP>
              In other words, {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                's
              </NoBreak>
              {" "} output is passed on to {" "}
              <Math>
                $\f$
              </Math>
              {" "}
              for further processing. (A certain movie called
              “The Human Centipede” comes to mind.)
            </OuterP>
            <OuterP class="indent-10">
              (To be perfectly clear,
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_f_circle_g_equals.svg" />
            <Pause />
            <OuterP>
              <Math>
                $f \circ g$
              </Math>
              {" "} is a {" "}
              <i>
                function
              </i>
              , defined as the
              above assemblage of {" "}
              <NoBreak>
                “
                <Math>
                  $g$
                </Math>
              </NoBreak>
              {" "} first, {" "}
              <Math>
                $f$
              </Math>
              {" "} second”.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}
              For a formal definition of {" "}
              <NoBreak>
                “
                <Math>
                  $f \circ g$
                </Math>
                ”—something
              </NoBreak>
              {" "}
              not based on pictures—one need only specify what
              {" "}
              <Math>
                $f \circ g$
              </Math>
              {" "} does to inputs. Specifically:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,&#123;(f \circ g)(x) = f(g(x))&#125;.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (So that equation is a formal definition.) One can
              also clarify that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\dom f \circ g = \&#123;x\, \in\, \dom g:\, g(x)\, \in\, \dom f\&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is to say that the domain of {" "}
              <Math>
                $f \circ g$
              </Math>
              {" "}
              consists of all {" "}
              <Math>
                $x$
              </Math>
              {" "} such that: {" "}
              <b>
                (i)
              </b>
              {" "} {" "}
              <Math>
                $g(x)$
              </Math>
              {" "}
              exists (a.k.a, {" "}
              <NoBreak>
                “
                <Math>
                  $x \in \dom g$
                </Math>
                ”)
              </NoBreak>
              {" "} and,
              {" "}
              <b>
                (ii)
              </b>
              {" "} {" "}
              <Math>
                $f(g(x))$
              </Math>
              {" "} exists (a.k.a., {" "}
              <NoBreak>
                “
                <Math>
                  $g(x) \in \dom f$
                </Math>
                ”).
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 4.
              </i>
              {" "}
              Amusingly—or not—both sides of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(f \circ g)(x) = f(g(x))&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are read
            </OuterP>
            <Pause />
            <CentralDisplay>
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} of {" "}
              <Math>
                $\hlfbk&#123;&#125;g$
              </Math>
              {" "} of {" "}
              <NoBreak>
                <Math>
                  $x\hspace&#123;0.1em&#125;$
                </Math>
                ”
              </NoBreak>
            </CentralDisplay>
            <Pause />
            <OuterP>
              since {" "}
              <NoBreak>
                “
                <Math>
                  $f \circ g$
                </Math>
                ”
              </NoBreak>
              {" "} is read {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} of {" "}
              <NoBreak>
                <Math>
                  $g\rt&#123;0.1&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "}
              and {" "}
              <NoBreak>
                “
                <Math>
                  $f(\dots)$
                </Math>
                ”
              </NoBreak>
              {" "} is read {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} of ...”.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Find formulas for functions whose graphs look
              like these:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_three_factories.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For the first graph,
              <del>
                the
              </del>
              an answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot(x/2 - \fl&#123;x/2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which simplifies to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - 2\fl&#123;x/2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because all we have to do is to multiply
              {" "}
              <InChapterLink
                href="/article/chapter3?id=_8_2326"
                class="handle-in-chapter-link">
                Exercise 5
              </InChapterLink>
              's formula by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              For the second graph, an answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x/3 - \fl&#123;x/3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the problem is similar to {" "}
              <InChapterLink
                href="/article/chapter3?id=_8_2326"
                class="handle-in-chapter-link">
                Exercise 5
              </InChapterLink>
              {" "}
              except with a factor {" "}
              <Math>
                $3$
              </Math>
              {" "} horizontal dilation.
            </OuterP>
            <OuterP class="indent-10">
              For the third graph, we will first stop to
              find a formula  for the function depicted
              here:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_three_factories_sol1.svg" />
            <Pause />
            <OuterP>
              And that formula is...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_three_factories_sol2.svg" />
            <Pause />
            <OuterP>
              ...iiiiiiiS...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x-1)/3 - \fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as obtained by substituting {" "}
              <NoBreak>
                “
                <Math>
                  $x - 1$
                </Math>
                ”
              </NoBreak>
              {" "}
              (the input, minus {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                )
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} in
              {" "}
              <NoBreak>
                “
                <Math>
                  $\,x/3 - \fl&#123;x/3&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "} the formula for the
              second graph. Then we multiply that by {" "}
              <Math>
                $3$
              </Math>
              {" "}
              (to go from {" "}
              <NoBreak>
                “
                <InlineImage
                  src="/images/svg_ch3_3_3_grid_1.svg"
                  width="0.9em"
                  bottom="0.15em" />
                ” {" "}
              </NoBreak>
              to {" "}
              <NoBreak>
                “
                <InlineImage
                  src="/images/svg_ch3_3_3_grid_2.svg"
                  width="0.9em"
                  bottom="0.15em" />
                ”, {" "}
              </NoBreak>
              namely), meaning that the final answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3 \cdot ((x-1)/3 - \fl&#123;(x-1)/3&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x - 1) - 3\fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              after simplification. (Or just
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x - 1 - 3\fl&#123;(x-1)/3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              though we personally prefer the previous
              form, it being more “talkative”.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={7}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 7.
              </b>
              {" "}
              If
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos \dblcol \rr \ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (the “hollow dot colon” means that {" "}
              <NoBreak>
                <Math>
                  $\dom \cos = \rr$
                </Math>
                )
              </NoBreak>
              {" "}
              is a function whose graph looks like so...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_cosine.svg" />
            <Pause />
            <OuterP>
              ...then does the function...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x \ra \cos(1000x)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...have a graph that looks like a bunch of very tight
              bumps, or, instead, very flat {" "}
              <i>
                &amp;
              </i>
              {" "} spaced-out bumps??
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Consider how to “read off” a value of {" "}
              <Math>
                $y = \cos(1000x)$
              </Math>
              {" "}
              from the graph {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_ex_cosine_1000x.svg" />
            <Pause />
            <OuterP>
              By the first step, a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              horizontal dilation by a factor 1000
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              maps the first graph onto the second graph—i.e.,
              a point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is on the first graph if and only the dilated
              point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (1000x, y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is on the second graph. The first graph is
              therefore some very compressed thing, full of
              scrunched bumps!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              One can also reason that a small change in {" "}
              <Math>
                $x$
              </Math>
              {" "}
              results in a large change in {" "}
              <NoBreak>
                <Math>
                  $1000x$
                </Math>
                ,
              </NoBreak>
              {" "} so that
              {" "}
              <Math>
                $\cos(1000x)$
              </Math>
              {" "} must “cycle” much faster through
              values than {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} does.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_9_678">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              Rewrite
            </OuterP>
            <div style="font-size:1.1em;margin:1em 0em;">
              <MathBlock>
                $$
                \tag&#123;A&#125;(f \circ (g \circ h))(x)
                $$
              </MathBlock>
            </div>
            <OuterP>
              without using {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”,
              </NoBreak>
              {" "} using only the
              “definitional equation of function
              composition”, which is namely
            </OuterP>
            <div style="font-size:1.1em;margin:1em 0em;">
              <MathBlock>
                $$
                \tag&#123;AA&#125;(r \circ s)(x) = r(s(x))
                $$
              </MathBlock>
            </div>
            <OuterP>
              (where {" "}
              <Math>
                $r$
              </Math>
              {" "} and {" "}
              <Math>
                $s$
              </Math>
              {" "} are functions); plz
              note that you will have to apply (AA)
              {" "}
              <i>
                twice
              </i>
              , as each application of (AA)
              makes {" "}
              <i>
                one
              </i>
              {" "} copy of the symbol {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”
              </NoBreak>
              {" "}
              disappear, and (A) contains {" "}
              <i>
                two
              </i>
              {" "} copies of
              {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”!!
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Setting {" "}
              <NoBreak>
                “
                <Math>
                  $r$
                </Math>
                ”
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $s$
                </Math>
                ”
              </NoBreak>
              {" "} to {" "}
              <NoBreak>
                “
                <Math>
                  $(g \circ h)$
                </Math>
                ”
              </NoBreak>
              {" "}
              in (AA) yields
              <ImageLeft
                src="/images/svg_ch3_r_s_substitution_1_1.1em_cloud.svg"
                popup={true}
                line={1}
                offset_x="1em" />
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (f \circ (g \circ h))(x) = \f((g \circ h)(x))
                $$
              </MathBlock>
            </div>
            <OuterP>
              ...which already constitutes progress towards
              our goal, since only one copy of {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”
              </NoBreak>
              {" "}
              exists on the right-hand side! But
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (g \circ h)(x) = g(h(x))
                $$
              </MathBlock>
            </div>
            <OuterP>
              by the “definitional equation” again, so
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                f((g \circ h)(x)) = \f(g(h(x)))
                $$
              </MathBlock>
            </div>
            <OuterP>
              ...and this completes the computation!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              We can collect both steps of the computation
              into a single string of equalities:
            </OuterP>
            <Pause />
            <Image src="/images/svg_first_victim_second_victim_1_1em.svg" />
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Same question as {" "}
              <InChapterLink
                href="/article/chapter3?id=_9_678"
                class="handle-in-chapter-link">
                Exercise 8
              </InChapterLink>
              , but for
              {" "}
              <NoBreak>
                “
                <Math>
                  $f \circ (g \circ h)$
                </Math>
                ”
              </NoBreak>
              {" "} instead of
              {" "}
              <NoBreak>
                “
                <Math>
                  $(f \circ g) \circ h$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We will again evaluate the “outer”
              composition operator first and the “inner”
              composition operator second, where the “outer”
              composition operator is the one that is fewer
              pairs of parentheses away from the outside
              world:
            </OuterP>
            <Pause />
            <Image src="/images/svg_inner_outer_1_1em.svg" />
            <Pause />
            <OuterP>
              So the first step is...
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                ((f \circ g) \circ h)(x) = (f \circ g)(h(x))
                $$
              </MathBlock>
            </div>
            <OuterP>
              ...by setting {" "}
              <NoBreak>
                <Math>
                  $r = f \circ g$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $s = h$
              </Math>
              {" "} in
              the definitional equation, and the second step
              is...
            </OuterP>
            <div style="font-size:1.1em;margin:0.8em 0em;">
              <MathBlock>
                $$
                (f \circ g)(h(x)) = \f(g(h(x)))
                $$
              </MathBlock>
            </div>
            <OuterP>
              ...by setting {" "}
              <NoBreak>
                <Math>
                  $r = f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $s = g$
                </Math>
                ,
              </NoBreak>
              {" "} and with
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $h(x)$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’.
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The fact that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (f \circ (g \circ h))(x)
                  $$
                </MathBlock>
              </div>
              <OuterP>
                and
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  ((f \circ g) \circ h)(x)
                  $$
                </MathBlock>
              </div>
              <OuterP>
                both evaluate to
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f(g(h(x)))
                  $$
                </MathBlock>
              </div>
              <OuterP>
                actually implies that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f \circ (g \circ h)
                  $$
                </MathBlock>
              </div>
              <OuterP>
                and
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (f \circ g) \circ h
                  $$
                </MathBlock>
              </div>
              <OuterP>
                are the same function; this function is namely
                the function that maps {" "}
                <Math>
                  $x$
                </Math>
                {" "} to {" "}
                <Math>
                  $f(g(h(x)))$
                </Math>
                {" "} for
                all {" "}
                <Math>
                  $x$
                </Math>
                {" "} (or
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  x \ra f(g(h(x)))
                  $$
                </MathBlock>
              </div>
              <OuterP>
                in lambda notation).
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Because of this, we can write
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  f \circ g \circ h
                  $$
                </MathBlock>
              </div>
              <OuterP>
                without any parentheses. (The point is: either
                way you parenthesize it you obtain the same
                function, so why bother?)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                The fact that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  &#123;(a + b) + c = a + (b + c)&#125;
                  $$
                </MathBlock>
              </div>
              <OuterP>
                for all numbers {" "}
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $c$
                </Math>
                {" "} is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of addition; likewise, the fact that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (ab)c = a(bc)
                  $$
                </MathBlock>
              </div>
              <OuterP>
                for all numbers {" "}
                <NoBreak>
                  <Math>
                    $a$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $c$
                </Math>
                {" "} is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of multiplication; and again likewise,
                the fact that
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  &#123;(f \circ g) \circ h  =  f \circ (g \circ h)&#125;
                  $$
                </MathBlock>
              </div>
              <OuterP>
                for all functions {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $g$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $h$
                </Math>
                {" "} is known
                as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                associativity
                <ImageRight src="/images/svg_ch3_ex_associativity_cloud.svg" />
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of function composition.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                One of the best ways to explain {" "}
                <i>
                  &amp;
                </i>
                {" "} understand
                the associativity of function composition
                uses this picture:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch3_truth_be_said.svg" />
              <Pause />
              <OuterP>
                In the above {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $D$
                </Math>
                {" "} are sets
                while the arrows encode functions {" "}
                <NoBreak>
                  <Math>
                    $f$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $g$
                </Math>
                {" "}
                and {" "}
                <Math>
                  $h$
                </Math>
                {" "} that, respectively in reverse order,
                go from {" "}
                <Math>
                  $D$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $C$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} and {" "}
                <Math>
                  $B$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $A$
                  </Math>
                  .
                </NoBreak>
                {" "}
                For example,
              </OuterP>
              <Pause />
              <CentralDisplay>
                <Math>
                  $\Large h($
                </Math>
                <InlineImage
                  src="/images/svg_ch3_composition_icon_clubs.svg"
                  width="1rem"
                  top="-3px" />
                <Math>
                  $\Large&#123;&#125;) =$
                </Math>
                <InlineImage
                  src="/images/svg_ch3_composition_icon_die_3.svg"
                  width="1.25rem"
                  top="-3px"
                  marginLeft=".5rem"
                  marginRight=".5rem" />
              </CentralDisplay>
              <Pause />
              <OuterP>
                because the arrow that originates at {" "}
                <InlineImage
                  src="/images/svg_ch3_composition_icon_clubs.svg"
                  width="1rem"
                  top="-4px" />
                {" "} in set {" "}
                <Math>
                  $D$
                </Math>
                {" "} lands at {" "}
                <InlineImage
                  src="/images/svg_ch3_composition_icon_die_3.svg"
                  width="1.25rem"
                  top="-4px" />
                {" "} in set {" "}
                <NoBreak>
                  <Math>
                    $C$
                  </Math>
                  ,
                </NoBreak>
                {" "} and
              </OuterP>
              <Pause />
              <CentralDisplay>
                {" "}
                {" "}
                <Math>
                  $\Large g(h($
                </Math>
                <InlineImage
                  src="/images/svg_ch3_composition_icon_clubs.svg"
                  width="1rem"
                  top="-3px" />
                <Math>
                  $\Large&#123;&#125;)) =$
                </Math>
                <InlineImage
                  src="/images/svg_ch3_composition_icon_fence.svg"
                  width="2.3rem"
                  top="-4px"
                  marginLeft=".5rem"
                  marginRight=".5rem" />
              </CentralDisplay>
              <Pause />
              <OuterP>
                because, pursuing that path onwards, the arrow
                that originates at {" "}
                <InlineImage
                  src="/images/svg_ch3_composition_icon_die_3.svg"
                  width="1.25rem"
                  top="-4px" />
                {" "} in set {" "}
                <Math>
                  $C$
                </Math>
                {" "} lands at {" "}
                <InlineImage
                  src="/images/svg_ch3_composition_icon_fence.svg"
                  width="2.3rem"
                  top="-4px" />
                {" "} in set {" "}
                <NoBreak>
                  <Math>
                    $B$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc.
              </OuterP>
              <OuterP class="indent-10">
                Under this representation one can “compute”
                {" "}
                <Math>
                  $f \circ g \circ h$
                </Math>
                {" "} by gluing arrows end-to-end.
                First, say, obliviate set {" "}
                <Math>
                  $C$
                </Math>
                {" "} in the middle
                right, then do the same with set {" "}
                <Math>
                  $B$
                </Math>
                {" "} in the
                middle left:
              </OuterP>
              <Pause />
              <Image
                src="/images/svg_ch3_truth_be_said_right_first.svg"
                width="2000px" />
              <Pause />
              <OuterP>
                We can also get rid of {" "}
                <Math>
                  $B$
                </Math>
                {" "} first, {" "}
                <Math>
                  $C$
                </Math>
                {" "} second:
              </OuterP>
              <Pause />
              <Image
                src="/images/svg_ch3_truth_be_said_left_first.svg"
                width="2000px" />
              <Pause />
              <OuterP>
                The first order of computation corresponds
                to the parenthetization {" "}
                <NoBreak>
                  “
                  <Math>
                    $f \circ (g \circ h)$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                while the second corresponds to the
                parenthetization {" "}
                <NoBreak>
                  “
                  <Math>
                    $(f \circ g) \circ h$
                  </Math>
                  ”.
                </NoBreak>
                {" "}
                Intuitively, the reason they come out the
                same (in “step 6”, bottom left) is because
                each final arrow in the last diagram comes
                from a path-of-arrows in the original
                diagram, and the order in which the
                waypoints along a path are “straightened”
                (or “collapsed”) does not affect the origin
                point or destination point of the final
                arrow. {" "}
                <Math>
                  $x$
                </Math>
                {" "}
                more stuff
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                The last series of diagrams might leave one
                with the impression that the composition of
                two or more functions can be “precomputed”
                by looking ahead along the path of yellow arrows.
                Just so you know, computers do not generically
                do this. For reason, computers are not given
                functions as tables of input-output values to
                know by heart but rather as “recipes” (synonyms:
                algorithms, code, programs) that allow them
                to compute an output for any given input.
                Moreover, there is no general way of flattening
                two recipes into a single, shorter one—when
                composing two functions the computer has, in
                general, no choice but to diligently apply
                each recipe in order—the first function first,
                the second function second.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 6.
                </i>
                {" "}
                We have taken for granted the fact that two
                functions {" "}
                <Math>
                  $f$
                </Math>
                {" "} and {" "}
                <Math>
                  $g$
                </Math>
                {" "} are “equal” if and only
                if they produce the same outupt for every
                input but this is a actually subtle thing
                that has to do with how functions are defined
                “under the hood”. Specifically, mathematicians
                view functions as {" "}
                <del>
                  long
                </del>
                {" "} {" "}
                <del>
                  lists of
                </del>
                {" "} sets of ordered pairs; for example—conceptual
                cold water shock ahead—
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\textrm&#123;VX-11/78A&#125; = \&#123;(0, 3.5), (1, 2.5)\&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because VX-11/78A maps {" "}
                <Math>
                  $0$
                </Math>
                {" "} to {" "}
                <Math>
                  $3.5$
                </Math>
                {" "} and maps
                {" "}
                <Math>
                  $1$
                </Math>
                {" "} to {" "}
                <NoBreak>
                  <Math>
                    $2.5$
                  </Math>
                  .
                </NoBreak>
                {" "} (The presence of an ordered pair
              </OuterP>
              <div style="font-size:1.1em;margin:0.8em 0em;">
                <MathBlock>
                  $$
                  (a, b)
                  $$
                </MathBlock>
              </div>
              <OuterP>
                means that input {" "}
                <Math>
                  $a$
                </Math>
                {" "} produces output {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  .)
                </NoBreak>
                {" "} So
                two functions are equal if and only if they
                are equal
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                as sets of ordered pairs
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                because the set of ordered pairs is the
                underlying “thing” that the function is. In
                particular, there is no notion of a “formula”
                or of a “procedure” being attached to a
                function, that might cause two functions to
                be considered unequal even if they produce the
                same output on every input—producing the same
                output on every input implies that the
                <del>
                  list of
                </del>
                {" "} set of ordered pairs is equal, and, perforce,
                that the two functions are equal!!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_10_6864">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              Show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x + 30
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be written in the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + \dots)^2 + \,\dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some numbers {" "}
              <NoBreak>
                “
                <Math>
                  $\dots$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $\dots$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 + 5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              \,\,\,\,(x + 5)^2
              &amp;= x^2 + (2\cdot 5)x + 5^2 \\
              &amp;= \up&#123;1.4&#125; x^2 + 10x + 25
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and adding {" "}
              <Math>
                $5$
              </Math>
              {" "} gives {" "}
              <NoBreak>
                <Math>
                  $x^2 + 10x + 30$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              Solve {" "}
              <InChapterLink
                href="/article/chapter3?id=_10_6864"
                class="handle-in-chapter-link">
                Exercise 10
              </InChapterLink>
              {" "} using
              algebra {" "}
              <i>
                &amp;
              </i>
              {" "} variables.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Put an unknown {" "}
              <NoBreak>
                “
                <Math>
                  $U$
                </Math>
                ”
              </NoBreak>
              {" "} for the first set
              of dots and an unknown {" "}
              <NoBreak>
                “
                <Math>
                  $V$
                </Math>
                ”
              </NoBreak>
              {" "} for the
              second set of dots. Then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + U)^2 + V = x^2 + 10x + 30
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              becomes the equation to satisfy.
              Expanding the left-hand side, we get:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 2Ux + U^2 + V = x^2 + 10x + 30.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              In order for this equation to hold as an
              equality between polynomials (i.e., for all
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                )
              </NoBreak>
              {" "} the coefficients of {" "}
              <Math>
                $x^2$
              </Math>
              {" "} on both
              sides of the equation must be equal, the
              coefficients of {" "}
              <Math>
                $x$
              </Math>
              {" "} on both sides of the
              equation must be equal, and the constant
              terms on boths of the equation must be
              equal—this gives us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (equating the coefficients of {" "}
              <NoBreak>
                <Math>
                  $x^2$
                </Math>
                ),
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (equating the coefficients of {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ),
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              U^2 + V = 30
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (equating the constant terms). Only the
              latter two equations contain information.
              In particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              implies {" "}
              <NoBreak>
                <Math>
                  $U = 5$
                </Math>
                ,
              </NoBreak>
              {" "} so {" "}
              <Math>
                $U^2 + V = 30$
              </Math>
              {" "} becomes
              {" "}
              <NoBreak>
                <Math>
                  $25 + V = 30$
                </Math>
                ,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $V = 30 - 25 = 5$
                </Math>
                .
              </NoBreak>
              {" "}
              So {" "}
              <NoBreak>
                <Math>
                  $U = V = 5$
                </Math>
                ,
              </NoBreak>
              {" "} as previously found.
              (But now we know that the solution is {" "}
              <i>
                unique
              </i>
              ,
              because the only number {" "}
              <Math>
                $U$
              </Math>
              {" "} that satisfies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2U = 10
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is {" "}
              <NoBreak>
                <Math>
                  $U = 5$
                </Math>
                ,
              </NoBreak>
              {" "} and the only number {" "}
              <Math>
                $V$
              </Math>
              {" "} that
              satisfies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              25 + V = 30
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is {" "}
              <NoBreak>
                <Math>
                  $V = 5$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={12}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 12.
              </b>
              {" "}
              Show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x + 30 = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <NoBreak>
                (cf
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} {" "}
              <InChapterLink
                href="/article/chapter3?id=_10_6864"
                class="handle-in-chapter-link">
                Exercise 10
              </InChapterLink>
              ) has no solutions {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The equation is equivalent to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 + 5 = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by {" "}
              <InChapterLink
                href="/article/chapter3?id=_10_6864"
                class="handle-in-chapter-link">
                Exercise 10
              </InChapterLink>
              , but this implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 = -5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is an equation with no solution over
              the reals because the square of a real number
              is nonnegative.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={13}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 13.
              </b>
              {" "}
              Show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + 10x - 30 = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has two solutions {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The equation can be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 - 55 = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <Math>
                $(x + 5)^2 = x^2 + 10x + 25$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $25 - 55 = -30$
                </Math>
                .
              </NoBreak>
              {" "} Passing {" "}
              <Math>
                $55$
              </Math>
              {" "} to the
              other side, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + 5)^2 = 55
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which holds if and only if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x + 5 = \pm\sqrt&#123;55&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x = -5 \pm\sqrt&#123;55&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              constituting two distinct solutions.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement id="_11_8735">
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              What sequence of geometric transformations
              (rotations, translations, scalings, etc)
              maps the curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = Ax^2 + Bx&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for constants {" "}
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
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\Big(x^2 + &#123;B \over A&#125;x\Big)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and then write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2 + &#123;B \over A&#125;x&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so that, altogether,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;Ax^2 + Bx&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is rewritten
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that can be seen as descending from {" "}
              <Math>
                $y = x^2$
              </Math>
              {" "}
              in three steps:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = x^2&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;\downarrow&#125;
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Three steps, three geometric transformations!
              The third step effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              i.e., vertically stretches the graph by
              a factor {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} because we multiply the
              value of {" "}
              <Math>
                $y$
              </Math>
              {" "} by {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                .
              </NoBreak>
              {" "} The second step
              effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              vertical translation by {" "}
              <Math>
                $&#123;-&#123;B^2 \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              i.e., lowers the height of the entire
              graph by {" "}
              <NoBreak>
                <Math>
                  $&#123;B^2 \over 4A^2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} because we add
              {" "}
              <Math>
                $-&#123;B^2 \over 4A^2&#125;$
              </Math>
              {" "} to the value of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
              {" "}
              The first step, on the other hand, is
              entirely different: it is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              preprocessing
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              step, in that we mess with the input (i.e.,
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ),
              </NoBreak>
              {" "} instead of adding on (or “multiplying
              on”) to the current value of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              To understand how a preprocessing step
              affects the shape of a graph, note that, more
              generally, a graph of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (for some constant {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                )
              </NoBreak>
              {" "} “fetches” values on
              the graph
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by going {" "}
              <Math>
                $a$
              </Math>
              {" "} units to the right. The larger {" "}
              <Math>
                $a$
              </Math>
              {" "}
              is, thus, the further
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + a)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              drifts off to the left. For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;y = f(x + 20)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has value {" "}
              <Math>
                $f(0)$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $x = -20$
                </Math>
                ,
              </NoBreak>
              {" "} and if you replace
              {" "}
              <Math>
                $20$
              </Math>
              {" "} with something larger, that position (i.e.,
              {" "}
              <NoBreak>
                <Math>
                  $x = -20$
                </Math>
                )
              </NoBreak>
              {" "} drifts even further off to the left!
              In any case, the graph {" "}
              <Math>
                $y = f(x + a)$
              </Math>
              {" "} is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              leftward
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              translate by {" "}
              <Math>
                $a$
              </Math>
              {" "} units of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "}
              and, as a consequence, the first step effects a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              leftward translation by {" "}
              <Math>
                $&#123;B\over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the curve {" "}
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "} or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              horizontal translation by {" "}
              <Math>
                $-&#123;B\over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              more elegantly put. (The second formulation
              doesn't assume a particular orientation of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis,
              </NoBreak>
              {" "} that's why it's “more elegantly put”,
              in our opinion.)
            </OuterP>
            <OuterP class="indent-10">
              To recapitulate, the three transformations
              are,in order:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation by {" "}
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. vertical translation by {" "}
              <Math>
                $&#123;-&#123;B^2 \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                You could do the vertical translation
                before the horizontal translation,
                geometrically it comes out the same.
                That order of geometric transformations
                would correspond to the following sequence
                of algebraic transformations:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;y = x^2&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = x^2 - &#123;B^2 \over 4A^2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = \,\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\downarrow&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;y = A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;\right]&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...in which the {" "}
                <i>
                  second
                </i>
                {" "} step is a
                preprocessing step. (I.e., a step that
                replaces {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "} with something else.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement id="_12_3593">
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Let {" "}
              <NoBreak>
                <Math>
                  $x_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y_0 \in \rr$
              </Math>
              {" "} and
              {" "}
              <Math>
                $a \in \rr$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $y_0 \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $a \ne 0.$
              </Math>
              {" "}
              If you apply these transformations...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. vertical translation by {" "}
              <Math>
                $-y_0$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal translation by {" "}
              <Math>
                $x_0$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $a$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...to the curve {" "}
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "} what are the
              roots of the final curve that you obtain?
              (Nb: {" "}
              <i>
                Roots
              </i>
              {" "} are values of {" "}
              <Math>
                $x$
              </Math>
              {" "} such
              that {" "}
              <NoBreak>
                <Math>
                  $y = 0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Start by noting that the point
              {" "}
              <Math>
                $(\sqrt&#123;y_0&#125;, y_0)$
              </Math>
              {" "} is on the curve {" "}
              <NoBreak>
                <Math>
                  $y = x^2$
                </Math>
                ,
              </NoBreak>
              {" "}
              as well as the point {" "}
              <NoBreak>
                <Math>
                  $(-\sqrt&#123;y_0&#125;, y_0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              because
              {" "}
              <Math>
                $(\sqrt&#123;y_0&#125;)^2 = (-\sqrt&#123;y_0&#125;)^2 =$
              </Math>
              {" "} {" "}
              <Math>
                $y_0;$
              </Math>
              {" "}
              here is a sketch of the situation before
              anything happens:
            </OuterP>
            <Pause />
            <Image
              src="/images/svg_ch3_ex_x0_y0_step0.svg"
              width="760px" />
            <Pause />
            <OuterP>
              After vertically translating by {" "}
              <Math>
                $-y_0$
              </Math>
              {" "}
              the roots will therefore be at {" "}
              <NoBreak>
                <Math>
                  $x = \pm\sqrt&#123;y_0&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/images/svg_ch3_ex_x0_y0_step1.svg"
              width="760px" />
            <Pause />
            <OuterP>
              Then after horizontally translating by {" "}
              <Math>
                $x_0$
              </Math>
              {" "}
              the roots mosey over to {" "}
              <NoBreak>
                <Math>
                  $x = x_0\pm\sqrt&#123;y_0&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/images/svg_ch3_ex_x0_y0_step2.svg"
              width="760px" />
            <Pause />
            <OuterP>
              Lastly, vertical scaling does not affect
              the position of the roots, because it
              stretches the graph {" "}
              <i>
                about
              </i>
              {" "} the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis (here {" "}
              <NoBreak>
                <Math>
                  $a \approx 1.7$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              src="/images/svg_ch3_ex_x0_y0_step3.svg"
              width="760px" />
            <Pause />
            <OuterP>
              So the roots are at: {" "}
              <NoBreak>
                <Math>
                  $x = x_0 \pm \sqrt&#123;y_0&#125;$
                </Math>
                .
              </NoBreak>
              {" "}
              (Like we found them after the second step.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              Use the results of the previous two exercises
              to find the value(s) of {" "}
              <Math>
                $x$
              </Math>
              {" "} such that
              {" "}
              <Math>
                $Ax^2 + Bx = 0$
              </Math>
              {" "} for constants {" "}
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
              {" "} such
              that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Well,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              obviously has solution {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} to start
              with, so we {" "}
              <i>
                don't need
              </i>
              {" "} the previous
              exercises for one of the roots at least—actually,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx = x(Ax + B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so the equation is equivalent to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x(Ax + B) = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and so one of the roots is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the other root is the value of {" "}
              <Math>
                $x$
              </Math>
              {" "}
              such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax + B = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is {" "}
              <NoBreak>
                <Math>
                  $x = -B/A$
                </Math>
                .
              </NoBreak>
              {" "} (In order for the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x(Ax + B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be {" "}
              <Math>
                $0$
              </Math>
              {" "} you either need the first term to
              be {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} leading us to {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} or the second
              term to be {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} leading us to {" "}
              <NoBreak>
                <Math>
                  $Ax + B = 0$
                </Math>
                —the
              </NoBreak>
              {" "}
              product of two things is {" "}
              <Math>
                $0$
              </Math>
              {" "} if and only if
              one of the two things is {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              So the roots are {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = -B/A$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              To complete the problem {" "}
              <i>
                as we were asked
              </i>
              ,
              however, we will use the fact that {" "}
              <Math>
                $y = Ax^2 + Bx$
              </Math>
              {" "}
              is obtained from {" "}
              <Math>
                $y = x^2$
              </Math>
              {" "} by the following
              sequence of transformations (cf. {" "}
              <InChapterLink
                href="/article/chapter3?id=_11_8735"
                class="handle-in-chapter-link">
                Exercise 14
              </InChapterLink>
              ):
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. vertical translation by {" "}
              <Math>
                $-&#123;B^2 \over 4A^2&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal translation by {" "}
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (We put the vertical translation first.)
              By {" "}
              <InChapterLink
                href="/article/chapter3?id=_12_3593"
                class="handle-in-chapter-link">
                Exercise 15
              </InChapterLink>
              , the roots of {" "}
              <Math>
                $y = Ax^2 + Bx$
              </Math>
              {" "}
              are thus at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tag&#123;A&#125;
              x = -&#123;B\over 2A&#125; \pm \sqrt&#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which looks a little different than our
              previous result of {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <Math>
                $x = -B/A$
              </Math>
              {" "}
              until you realize that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \pm \sqrt&#123;B^2 \over 4A^2&#125; = \pm &#123;B \over 2A&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;B \over 2A&#125;\right)^&#123;\!2&#125; = &#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and even though {" "}
              <Math>
                $&#123;B\over 2A&#125;$
              </Math>
              {" "} could be
              negative, the {" "}
              <NoBreak>
                “
                <Math>
                  $\pm$
                </Math>
                ”
              </NoBreak>
              {" "} on either side of
              the equation means that the {" "}
              <i>
                set
              </i>
              {" "} of values
              on either side of the equation is the same),
              so that (A) becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -&#123;B\over 2A&#125; \pm &#123;B \over 2A&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and, on the one hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; + &#123;B \over 2A&#125; = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while, on the other hand,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B\over 2A&#125; - &#123;B \over 2A&#125; = -&#123;2B\over 2A&#125; = -&#123;B\over A&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so here too we find that the roots are {" "}
              <Math>
                $x = 0$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $x = -B/A$
                </Math>
                .
              </NoBreak>
              {" "} (It must be the right answer!)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              True or false {" "}
              <NoBreak>
                (
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} are functions):
            </OuterP>
            <Pause />
            <Grid
              cols={2}
              sm_cols={1}
              center_on_overflow={true}
              place_items="start"
              with_padding={false}
              column_first={true}>
              <Item>
                i. {" "}
                <Math>
                  $f \circ g = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                ii. {" "}
                <Math>
                  $g \circ f = (x \ra f(g(x)))$
                </Math>
              </Item>
              <Item>
                iii. {" "}
                <Math>
                  $f \circ g = (x \ra g(f(x)))$
                </Math>
              </Item>
              <Item>
                iv. {" "}
                <Math>
                  $g \circ f = (x \ra g(f(x)))$
                </Math>
              </Item>
            </Grid>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The true statements are i, iv, because
              {" "}
              <Math>
                $f \circ g$
              </Math>
              {" "} is the function that maps an
              input {" "}
              <Math>
                $x$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $f(g(x))$
                </Math>
                ,
              </NoBreak>
              {" "} and symmetrically
              for {" "}
              <NoBreak>
                <Math>
                  $g \circ f$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement id="_13_3260">
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              If {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} are functions then we define
              (and not just us but people in general)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t \ra f(t) + g(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (use {" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’
              </NoBreak>
              {" "} if you like),
              i.e., to be the function that applies {" "}
              <Math>
                $f$
              </Math>
              {" "}
              and {" "}
              <Math>
                $g$
              </Math>
              {" "} separately and then takes the sum,
              and we define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              z \ra f(z)g(z)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (use {" "}
              <NoBreak>
                ‘
                <Math>
                  $t$
                </Math>
                ’
              </NoBreak>
              {" "} if you like, hehe),
              i.e., to be the function that applies {" "}
              <Math>
                $f$
              </Math>
              {" "} and
              {" "}
              <Math>
                $g$
              </Math>
              {" "} separately and then takes the product.
              (These definitions are similar to how we define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              u \ra f(g(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the symbol {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”,
              </NoBreak>
              {" "} except that now we
              are defining the {" "}
              <i>
                sum
              </i>
              {" "} and {" "}
              <i>
                product
              </i>
              {" "} of functions,
              instead of their {" "}
              <i>
                composition
              </i>
              , namely.)
            </OuterP>
            <OuterP class="indent-10">
              Given these definitions, which of the following
              equalities hold, in general for all functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $g$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$f \circ (g + h) = (x \ra f(g(x)) + f(h(x)))$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$f \circ (g + h) = (x \ra f(g(x) + h(x)))$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$(g + h) \circ f = (x \ra h(f(x)) + g(f(x)))$$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$(g + h) \circ f = (x \ra (g + h)(f(x)))$$
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The first equality is false because the
              right-hand side is actually
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g) + (f \circ h)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              not {" "}
              <NoBreak>
                <Math>
                  $f \circ (g + h)$
                </Math>
                ;
              </NoBreak>
              {" "} the second equality is
              true; the third equality is true even though you
              would expect the right-hand side to be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra g(f(x)) + h(f(x)))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <NoBreak>
                “
                <Math>
                  $g$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $h$
                </Math>
                ”
              </NoBreak>
              {" "} switched (but addition is
              commutative, so it doesn't matter); the fourth
              equality is true: it is the definition of {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement id="_14_1240">
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              What sequence of geometric transformations
              of length no more than 3 maps
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = x^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + Bx + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for constants {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\Big(x^2 + &#123;B \over A&#125;x + &#123;C\over A&#125;\Big)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and, similarly to {" "}
              <InChapterLink
                href="/article/chapter3?id=_11_8735"
                class="handle-in-chapter-link">
                Exercise 14
              </InChapterLink>
              , write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^2 + &#123;B \over A&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so that, altogether, {" "}
              <Math>
                $Ax^2 + Bx + C$
              </Math>
              {" "}
              becomes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 \over 4A^2&#125; + &#123;C\over A&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\left[\Big(x + &#123;B \over 2A&#125;\Big)^2 - &#123;B^2 - 4AC\over 4A^2&#125;\right]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by putting things on a common denominator.
              (We have endeavored to keep the minus sign
              out front of the common denominator fraction
              in order to maintain the most similarity with
              the term {" "}
              <NoBreak>
                “
                <Math>
                  $-&#123;B^2\over 4A&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} of {" "}
              <InChapterLink
                href="/article/chapter3?id=_11_8735"
                class="handle-in-chapter-link">
                Exercise 14
              </InChapterLink>
              ,
              that also has a minus sign out front.)
            </OuterP>
            <OuterP class="indent-10">
              By direct analogy with {" "}
              <InChapterLink
                href="/article/chapter3?id=_11_8735"
                class="handle-in-chapter-link">
                Exercise 14
              </InChapterLink>
              , the three
              transformations are thus...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation by {" "}
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. vertical translation by {" "}
              <Math>
                $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. vertical translation by {" "}
              <Math>
                $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal translation by {" "}
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...if we put the vertical translation first.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={20}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 20.
              </b>
              {" "}
              What are the roots (i.e., solutions) {" "}
              <Math>
                $x$
              </Math>
              {" "} of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Ax^2 + Bx + C = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for constants {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $C$
              </Math>
              {" "} such that {" "}
              <NoBreak>
                <Math>
                  $A \ne 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + Bx + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is obtained from the curve {" "}
              <Math>
                $y = x^2$
              </Math>
              {" "} by the following sequence of
              transformations (cf. Exercise 19):
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. vertical translation by {" "}
              <Math>
                $&#123;-&#123;B^2 - 4AC \over 4A^2&#125;&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal translation by {" "}
              <Math>
                $-&#123;B \over 2A&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              3. vertical scaling by {" "}
              <Math>
                $A$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplay>
              ~
            </CentralDisplay>
            <Pause />
            <OuterP>
              On the one hand, if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;B^2 - 4AC \over 4A^2&#125; &gt; 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the vertical translation is {" "}
              <i>
                upward
              </i>
              ,
              the curve detaches from the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis never
              to see it again, and there are no roots!
            </OuterP>
            <OuterP class="indent-10">
              On the other hand, if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B^2 - 4AC \over 4A^2&#125; \geq 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then the roots are given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = -&#123;B \over 2A&#125; \pm \sqrt&#123;B^2 - 4AC \over 4A^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by {" "}
              <InChapterLink
                href="/article/chapter3?id=_12_3593"
                class="handle-in-chapter-link">
                Exercise 15
              </InChapterLink>
              . {" "}
              <Math>
                $\rightarrow$
              </Math>
              {" "} ~The End~ {" "}
              <Math>
                $\leftarrow$
              </Math>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In fact,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm\sqrt&#123;B^2 - 4AC \over 4A^2&#125; = \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (square both sides of the equation—in general,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \pm E = \pm F
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as one set of two values equalling another
                set of two values, if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                |E| = |F|
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                E^2 = F^2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                —so that's why we say “square both sides”),
                so the formula for the roots can also be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = -&#123;B \over 2A&#125; \pm &#123;\sqrt&#123;B^2 - 4AC&#125; \over 2A&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = &#123;&#123;-B \pm \sqrt&#123;B^2 - 4AC&#125;&#125; \over 2A&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as briefly flashed by, e.g., in {" "}
                <a
                  href="/article/chapter1?id=_5_9079"
                  class="handle-out-chapter-link">
                  Chapter 1
                </a>
                .
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                If
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                then
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;B^2 - 4AC \over 4A^2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                does not exist, alerting you to the absence
                of roots, if you try to use the first formula
                we gave. Also
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;B^2 - 4AC \over 4A^2&#125; &lt; 0\iff B^2 - 4AC &lt; 0
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                because {" "}
                <Math>
                  $4A^2 &gt; 0$
                </Math>
                {" "} for all {" "}
                <NoBreak>
                  <Math>
                    $A \ne 0$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                so the second set of formulas would alert you
                to the absence of roots in that case, as well.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}
              Summon your senses of extrapolation {" "}
              <i>
                &amp;
              </i>
              {" "}
              imagination to evaluate this expression:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (Hint: The answer is a specific real number.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              ...in an expression such as...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x^3)(6)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we pair the {" "}
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_6.svg" />
            <Pause />
            <OuterP>
              ...and {" "}
              <Math>
                $6$
              </Math>
              {" "} becomes the value to use for {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in {" "}
              <NoBreak>
                “
                <Math>
                  $x^3$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_6_in_computation.svg" />
            <Pause />
            <OuterP>
              ...; in an expression such as...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we also pair the {" "}
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_6_again.svg" />
            <Pause />
            <OuterP>
              ...and {" "}
              <Math>
                $6$
              </Math>
              {" "} becomes the value to use for {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in {" "}
              <NoBreak>
                “
                <Math>
                  $y \ra x^3y$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_6_again_in_computation.svg" />
            <Pause />
            <OuterP>
              ...(in this case the result is not a number,
              but a function—a function is a mathematical
              object like another, after all); in an
              expression such as...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra y \ra x^3y)(6)(8)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we pair the {" "}
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <Math>
                $6$
              </Math>
              {" "} and the {" "}
              <Math>
                $y$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $8$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_y_6_8.svg" />
            <Pause />
            <OuterP>
              ...and {" "}
              <Math>
                $6$
              </Math>
              {" "} and {" "}
              <Math>
                $8$
              </Math>
              {" "} become respectively the
              values to use for {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $y$
              </Math>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $x^3y$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_x_y_6_8_in_computation.svg" />
            <Pause />
            <OuterP>
              ...; now in an expression such as...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \ra x \ra h \ra &#123;f(x+h) - f(x)\over h&#125;)(x \ra x^2)(5)(0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we pair the {" "}
              <Math>
                $f$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $x \ra x^2$
                </Math>
                ,
              </NoBreak>
              {" "} the
              {" "}
              <Math>
                $x$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $5$
                </Math>
                ,
              </NoBreak>
              {" "} and the {" "}
              <Math>
                $h$
              </Math>
              {" "} with {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_f_x_h.svg" />
            <Pause />
            <OuterP>
              ...and {" "}
              <NoBreak>
                <Math>
                  $x \ra x^2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $5$
              </Math>
              {" "} and {" "}
              <Math>
                $0.1$
              </Math>
              {" "} become
              respectively the values to use for {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x$
              </Math>
              {" "}
              and {" "}
              <Math>
                $h$
              </Math>
              {" "} in {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;f(x + h) - f(x)\over h&#125;$
                </Math>
                ”:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch3_connection_f_x_h_in_computation.svg" />
            <Pause />
            <OuterP>
              ...; evaluating...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5 + 0.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;(x \ra x^2)(5.1) - (x \ra x^2)(5) \over 0.1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...get...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;5.1^2 - 5^2 \over 0.1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...this...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;26.01 - 25 \over 0.1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...
              <i>
                thiiis
              </i>
              ...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1.01 \over 0.1&#125; = 1.01 \times 10 = 10.1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...result! (The answer is: ten point one.)
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};