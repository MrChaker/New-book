import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import InlineImage  from "~/components/InlineImage";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { SolutionNote, Example, NoBreak, Section, Pause }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter4__() {
  return (
    <Article
      prevPage="/article/chapter3"
      nextPage="/article/chapter5"
      pageNecessaryMargin={1450}
      maxElementWidth={700}>
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            definitions
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            vocabulary
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            sketching a derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            derivative of a constant function
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            derivative of an affine function
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            units of the derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            the second derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            geometric interpretation of the second derivative
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            vocabulary #1
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            the second derivative of position
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            the jerk
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 4:">
        Derivatives
      </ArticleTitle>
      <Pause />
      <Image src="/images/svg_ch4_ch_polaroids.svg" />
      <Section id="section-1">
        <OuterP>
          <b>
            Definitions.
          </b>
          {" "}
          The {" "}
          <i>
            derivative
          </i>
          {" "} of a function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a (new) function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f' : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          that gives the slope of {" "}
          <Math>
            $f$
          </Math>
          {" "} at each point.
          In other words
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the slope of the graph {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at
          {" "}
          <NoBreak>
            <Math>
              $x = a$
            </Math>
            .
          </NoBreak>
          {" "} And—surprise!—each pair of graphs
          above is a pair of the form {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "}
          “before”], {" "}
          <Math>
            $y = f'(x)$
          </Math>
          {" "} {" "}
          <NoBreak>
            [
            <Math>
              $=$
            </Math>
          </NoBreak>
          {" "} “after”]. (Meaning,
          the “after” graph records the slope of the
          “before” graph.) E.g.:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_explanation1.svg" />
        <Pause />
        <OuterP>
          Note that {" "}
          <Math>
            $f'\!$
          </Math>
          {" "} (read {" "}
          <NoBreak>
            “
            <Math>
              $f$
            </Math>
          </NoBreak>
          {" "} prime”) remains
          undefined where {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} has a sharp “corner”
          and no well-defined slope. By opposition, if
          there is a well-defined tangent line to
          {" "}
          <Math>
            $y = f(x)$
          </Math>
          {" "} at {" "}
          <Math>
            $x = a$
          </Math>
          {" "} the slope of this
          tangent line supplies the value of {" "}
          <NoBreak>
            <Math>
              $f'(a)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_explanation2.svg" />
        <Pause />
        <OuterP>
          In fact, we can
          succinctly describe the derivative by...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'(a) = \te&#123;[slope of tangent line to $y = f(x)$ at $x = a$]&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...with the understanding that {" "}
          <Math>
            $f'(a)$
          </Math>
          {" "} is
          undefined if a tangent line does not exist
          or if the tangent is vertical.
          Also note that
          the endpoint of a curve does not count
          as having a tangent, and leaves a missing
          value for the derivative:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_one_sided_tangent.svg" />
        <Pause />
        <OuterP>
          (In other words, what one might describe as
          “half-tangents” do not actually count as tangents.)
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
            Vocabulary.
          </b>
          {" "}
          A function {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $\dom\,f' = \dom\,f$
            </Math>
            .
          </NoBreak>
          {" "} Also, if {" "}
          <NoBreak>
            <Math>
              $a, b \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $a &lt; b$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable on {" "}
          <Math>
            $[a,b]$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $[a,b] \subseteq \dom \,f'$
            </Math>
            .
          </NoBreak>
          {" "} Lastly, {" "}
          <Math>
            $f$
          </Math>
          {" "} is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          differentiable at {" "}
          <Math>
            $a$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          if {" "}
          <NoBreak>
            <Math>
              $a \in \dom\,f'$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Sketching a Derivative.
          </b>
          {" "}
          Say that you would like to sketch the derivative
          of the “before” function from the last “before”/“after” pair above
          (the one with the closed endpoints):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_curve_to_sketch.svg" />
        <Pause />
        <OuterP>
          One method is simply to eyeball the slope at
          a few points along the curve, plot these
          values and interpolate:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_curve_to_sketch_sketch.svg">
          <ImageRight
            src="/images/svg_ch4_ch_curve_to_sketch_cloud.svg"
            offset_y="36%"
            offset_x="-15%" />
        </Image>
        <Pause />
        <OuterP>
          ...voilà!
        </OuterP>
        <OuterP class="indent-10">
          An alternate approach is to start by
          determining intervals on which the derivative
          is positive and negative, and then to
          interpolate via the largest (respectively,
          smallest) value of the derivative in each
          interval:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_second_sketch.svg" />
        <Pause />
        <OuterP>
          The result (at bottom right)
          is a charming “robosketch” of the true
          derivative! (Well, charming in our opinion,
          at least.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Derivative of a constant function.
          </b>
          {" "}
          A constant function is a function of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for some {" "}
          <Math>
            $B \in \rr$
          </Math>
          {" "} independent of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of the constant function is the line
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          y = B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          of slope {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            .
          </NoBreak>
          {" "} So
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra B)' = (x \ra 0)
          $$
          <ImageLeft
            src="/images/svg_ch4_ch_constant_derivative_cloud.svg"
            offset_x="8em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          because at each {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -value
          </NoBreak>
          {" "} you find a slope of
          {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} when you look up (down?) at the graph.
        </OuterP>
        <OuterP class="indent-10">
          If we refer to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra 0
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          zero function
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          we can summarize the situation by saying that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant function
          is the zero function ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or, more shortly,
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of a constant is zero ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (the way people usually state it).
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Derivative of an affine function.
          </b>
          {" "}
          An affine function is a function of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra Ax + B
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
              $B \in \rr$
            </Math>
            .
          </NoBreak>
          {" "}
          The graph of {" "}
          <Math>
            $x \ra Ax + B$
          </Math>
          {" "} is a line of
          slope {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} so
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra Ax + B)' = (x \ra A)
          $$
          <ImageLeft
            src="/images/svg_ch4_ch_affine_derivative_cloud.svg"
            offset_x="7em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          because the slope of a line of slope {" "}
          <Math>
            $A$
          </Math>
          {" "} is
          {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} no matter where you put yourself on the
          line. In particular, {" "}
          <Math>
            $B$
          </Math>
          {" "} plays no role in the
          derivative! {" "}
          <NoBreak>
            (
            <Math>
              $\,$
            </Math>
            Just
          </NoBreak>
          {" "} like in the case of a
          constant function, the derivative leaves no
          trace of {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            's
          </NoBreak>
          {" "} value—and for the same reason
          that {" "}
          <Math>
            $B$
          </Math>
          {" "} effects a vertical translation, which
          does not change the slope of anything.)
        </OuterP>
        <OuterP class="indent-10">
          In words:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of the affine function
          {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is the constant function {" "}
          <Math>
            $y = a$
          </Math>
          {" "} ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          Or, flexing our linguistic prowess a tad more:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ the derivative of an affine function is
          the coefficient of its linear term ~
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          (The “linear term” of {" "}
          <Math>
            $y = ax + b$
          </Math>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $ax$
            </Math>
            ,
          </NoBreak>
          {" "}
          of coefficient {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            One has
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)' = (x \ra 3)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as per
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            with {" "}
            <NoBreak>
              <Math>
                $A = 3$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 1$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            One has
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 12 - x)' = (x \ra -1)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as per
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra Ax + B)' = (x \ra A)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            with {" "}
            <NoBreak>
              <Math>
                $A = -1$
              </Math>
              ,
            </NoBreak>
            {" "} {" "}
            <NoBreak>
              <Math>
                $B = 12$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Units of the Derivative.
          </b>
          {" "}
          If units are present, we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$y$ axis units for $f'$&#125; \,= &#123;\te&#123;$y$ axis units for $\f$&#125; \over \te&#123;$x$ axis units for $\f$&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because a value output by {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is the
          {" "}
          <i>
            slope
          </i>
          {" "} of a tangent line attached to the
          graph {" "}
          <NoBreak>
            <Math>
              $y = f(x)$
            </Math>
            ,
          </NoBreak>
          {" "} and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \te&#123;$x$ axis units for $f'$&#125;\, = \rt&#123;0.02&#125;\,\te&#123;$x$ axis units for $f$&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because an input for {" "}
          <Math>
            $\f'$
          </Math>
          {" "} is, originally,
          an input for {" "}
          <NoBreak>
            <Math>
              $\f$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For example, if the “before” graph has units
          of...
        </OuterP>
        <TextParent style="margin-top:1em;margin-bottom:1em;">
          <ul style="list-style-type:disc;">
            <li style="margin:0 60px;">
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </li>
          </ul>
        </TextParent>
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageRight
            src="/images/svg_ch4_ch_units1_cloud.svg"
            offset_y="-0.6em" />
        </OuterP>
        <TextParent style="margin-top:1em;margin-bottom:1em;">
          <ul style="list-style-type:disc;">
            <li style="margin:0 60px;">
              seconds on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, meters per
              second on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </li>
          </ul>
        </TextParent>
        <OuterP>
          ...while if the “before” graph has units of...
        </OuterP>
        <TextParent style="margin-top:1em;margin-bottom:1em;">
          <ul style="list-style-type:disc;">
            <li style="margin:0 60px;">
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </li>
          </ul>
        </TextParent>
        <OuterP>
          ...then the “after” graph will have units of...
          <ImageLeft
            src="/images/svg_ch4_ch_units2_cloud.svg"
            offset_y="0.6em" />
        </OuterP>
        <TextParent style="margin-top:1em;margin-bottom:1em;">
          <ul style="list-style-type:disc;">
            <li style="margin:0 60px;">
              apples on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, oranges per apple
              on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
            </li>
          </ul>
        </TextParent>
        <OuterP>
          ...and so on.
        </OuterP>
        <OuterP class="indent-10">
          Units might additionally prompt us to refer
          to {" "}
          <Math>
            $f'$
          </Math>
          {" "} as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          rate of change
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} or, depending, as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          instantaneous
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          rate of change of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} The latter bit of
          emphasis has to do with the fact that, in a
          general graph, the slope of the tangent
          keeps changing from point to point.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            The second derivative.
          </b>
          {" "}
          The {" "}
          <i>
            second derivative
          </i>
          {" "} of {" "}
          <Math>
            $f$
          </Math>
          {" "} is the derivative
          of the derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} It is written {" "}
          <NoBreak>
            “
            <Math>
              $f''$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\,\,f'' = (f')'.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          Likewise, we have, e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          \up&#123;0.95&#125;f''' &amp;= (f'')'\\
          \up&#123;1.25&#125;f'''' &amp;= (f''')'\\
          \up&#123;1.25&#125;f''''\psa' &amp;= (f'''')'\\
          \end&#123;align&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          these being, namely, the {" "}
          <i>
            third
          </i>
          , {" "}
          <i>
            fourth
          </i>
          {" "}
          and {" "}
          <i>
            fifth
          </i>
          {" "} derivatives of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            .
          </NoBreak>
          {" "} One can also
          write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(n)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for the {" "}
          <NoBreak>
            <Math>
              $n$
            </Math>
            -th
          </NoBreak>
          {" "} derivative of {" "}
          <NoBreak>
            <Math>
              $f$
            </Math>
            ,
          </NoBreak>
          {" "} so that, for
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f^&#123;(7)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means the same as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f'''''''
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          but with the advantage that you don't have to
          squint and start re-counting the apostrophes
          several times over.
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
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
            <ImageRight
              src="/images/svg_ch4_3x_plus_one_and_second_cloud.svg"
              offset_x="6em"
              offset_y="0.1em"
              compensate_offset_x_for_large_text_columns={true} />
          </MathBlock>
        </Example>
        <Pause />
        <OuterP>
          because, firstly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)' = (x \ra 3)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and, secondly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so that, from start to finish,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (x \ra 3x + 1)'' =  ((x \ra 3x + 1)')' = (x \ra 3)' = (x \ra 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where we unpeel the onion starting from the
          inside. (Physically difficult.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            More generally,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \,\,\,(x \ra ax + b)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            for all {" "}
            <NoBreak>
              <Math>
                $a, b \in \rr$
              </Math>
              ,
            </NoBreak>
            {" "} by a similar computation;
            a.k.a.:
          </OuterP>
          <Pause />
          <CentralDisplayItalic>
            ~ the second derivative of an affine function is zero ~
          </CentralDisplayItalic>
        </Example>
        <Pause />
        <StarDivider style="margin-top:1.5em;margin-bottom:0em" />
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Geometric interpretation of the second derivative.
          </b>
          {" "}
          The sign of the second derivative—whether
          it is positive or negative—indicates whether
          a graph is “bending upwards” or “bending
          downwards”. Upward-bending graphs have a positive
          second derivative, whereas downward-bending graphs
          have a negative second derivative:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_bendiness.svg" />
        <Pause />
        <OuterP>
          Reason like this: the second derivative is {" "}
          <del>
            “the rate of change of the rate of change”.
          </del>
          {" "} Sorry: “the rate of change of the slope”.
          (Same difference.) Ergo, if the second derivative
          is positive, the slope is increasing; if the
          second derivative is negative, the slope is
          decreasing. Moreover, an
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          increasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending upwards” shape, while a
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          decreasing
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          slope gives curves a “bending downward” shape!
        </OuterP>
        <OuterP class="indent-10">
          To emphasize, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE POSITIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is increasing at that rate,
          which could result in a sharp bend upwards
          in the graph (unless you are near vertical
          already—you can't see the difference between
          slope {" "}
          <Math>
            $100$
          </Math>
          {" "} and slope {" "}
          <Math>
            $1000$
          </Math>
          {" "} very well, at most
          scales—nor between {" "}
          <Math>
            $-1000$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $-100$
            </Math>
            ,
          </NoBreak>
          {" "} for that
          matter).
        </OuterP>
        <OuterP class="indent-10">
          Likewise, if the second derivative is some
        </OuterP>
        <Pause />
        <CentralDisplay>
          LARGE NEGATIVE NUMBER
        </CentralDisplay>
        <Pause />
        <OuterP>
          then the slope is decreasing at [the absolute
          value of] that rate, which could result in
          a sharp bend downwards in the graph (unless
          you are near vertical already, once again,
          because verticality can disguise the presence
          of a significant change in slope, once again).
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Vocabulary #1.
          </b>
          {" "}
          Curves with increasing (technically:
          {" "}
          <i>
            nondecreasing
          </i>
          ) slope are called {" "}
          <i>
            convex
          </i>
          ,
          while curves with decreasing (technically:
          {" "}
          <i>
            nonincreasing
          </i>
          ) slope are called {" "}
          <i>
            concave
          </i>
          .
          Viz:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_convex_concave.svg" />
        <Pause />
        <OuterP>
          <b>
            Vocabulary #2.
          </b>
          {" "}
          An {" "}
          <i>
            inflection point
          </i>
          {" "} is a point at the
          interface between convex and concave sections
          of a graph:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_inflection_point.svg" />
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            The fact that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (x \ra 3x + 1)'' = (x \ra 0)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            indicates that the graph
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            y = 3x + 1
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is neither “bending upwards” nor “bending
            {" "}
            <NoBreak>
              downwards”—
              <Math>
                $0$
              </Math>
            </NoBreak>
            {" "} is neither positive, nor negative.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            The Second Derivative of Position.
          </b>
          {" "}
          A graph of the form...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_position_by_time.svg" />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            position as a function of time
          </i>
          {" "}
          (look at the units); the derivative...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_position_by_time_der.svg" />
        <Pause />
        <OuterP>
          ...describes {" "}
          <i>
            velocity as a function of time
          </i>
          ;
          finally, the second derivative...
          <ImageLeft src="/images/svg_ch4_ch_position_by_time_der_cloud.svg" />
        </OuterP>
        <OuterP class="indent-10">
          ...describes
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the rate of change of velocity
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          also known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as a function of time.
        </OuterP>
        <OuterP class="indent-10">
          Note that the units on the {" "}
          <Math>
            $y$
          </Math>
          {" "} axis of the
          second derivative are given by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;$y$ axis units for $f'$&#125; \over \te&#123;$x$ axis units for $f'$&#125;&#125; =
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125; =
          &#123;\te&#123;m&#125; \over \rt&#123;0.1&#125;\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because {" "}
          <NoBreak>
            <Math>
              $f'' = (f')'$
            </Math>
            .
          </NoBreak>
          {" "} The point is, a tangent
          to the graph {" "}
          <Math>
            $y = f'(t)$
          </Math>
          {" "} has a “rise” measured
          in meters per second and a “run” measured in
          seconds:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch4_ch_position_by_time_tangent.svg" />
        <Pause />
        <OuterP>
          The ratio “rise over run” has the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125;/\te&#123;s&#125; \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125; \times &#123;1 \over \te&#123;s&#125;&#125;
          = &#123;\te&#123;m&#125; \over \te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which produces the above-mentioned units of
          the second derivative. Also note that a ratio of
          the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;difference in velocity&#125; \over \te&#123;amount of time&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is, indeed, an acceleration, in that acceleration
          is defined as “the increase in velocity per unit
          time”.
        </OuterP>
        <OuterP class="indent-10">
          To summarize:
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          ~ velocity is the derivative of position ~
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          ~ acceleration is the derivative of velocity ~
        </CentralDisplayItalic>
        <Pause />
        <StarDivider />
        <Pause />
        <OuterP>
          <b>
            Note.
          </b>
          {" "}
          The exotic units
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be read
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second squared
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which sounds pretty cryptic, unfortunately, or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is better, or (slight difference!)
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is even better because it “shows” acceleration
          to be a number of {" "}
          <NoBreak>
            m
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "} per second. (Acceleration {" "}
          <i>
            is
          </i>
          {" "}
          a number of {" "}
          <NoBreak>
            m
            <Math>
              $/$
            </Math>
            s
          </NoBreak>
          {" "} per second, no?)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            Over a period of {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              s,
            </NoBreak>
            {" "} an object that is
            accelerating at a constant rate of
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            increases its velocity by
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (2&#123;\te&#123;m&#125;/\te&#123;s&#125;\!&#123;\,&#125;^2&#125;) \times\, (10\te&#123;s&#125;) = 20&#123;\te&#123;m&#125;/\te&#123;s&#125;&#125;
            $$
            <ImageRight
              src="/images/svg_ch4_ch_units_cancellation_cloud.svg"
              offset_x="5em"
              compensate_offset_x_for_large_text_columns={true} />
          </MathBlock>
          <Pause />
          <OuterP>
            according to the template
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\te&#123;rate of change&#125;) \times \te&#123;(amount of time)&#125;\\
            = \te&#123;(amount of change)&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            since acceleration is the rate of change of
            velocity.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            The Jerk.
          </b>
          {" "}
          The rate of change of acceleration has a
          name as well, being known as the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          in physics. The units of jerk (or “the”
          units of jerk, since any units of same
          {" "}
          <i>
            dimension
          </i>
          {" "} would do as well) are
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\te&#123;m&#125; \over \,\te&#123;s&#125;\!&#123;\,&#125;^3&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          meters per second, per second, per second
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is mildly amusing. Basically, the
          jerk specifies how many {" "}
          <i>
            meters per second,
            per second
          </i>
          {" "} (a measure of acceleration!)
          is being gained or lost {" "}
          <i>
            per second
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          The word “jerk” is aptly chosen,
          too, considering that
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          constant acceleration
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          zero jerk
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          are synonymous, insofar as the everyday
          world is concerned. 
          (You don't lose balance under constant
          acceleration, right?) (No! You lose
          balance when some {" "}
          <i>
            jerk
          </i>
          {" "} occurs!!)
          Which is good, because
          these notions are also equivalent in the
          mathematical realm, what with jerk being
          the derivative of acceleration!
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            Postscript: Sums, Products, Quotients,
            and Differences of Functions.
          </b>
          {" "}
          Coming briefly back to Chapter 3-related
          matters, if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f, g : \rr \ra \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          then
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g = (x \ra f(g(x)))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f + g = (x \ra f(x) + g(x))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          fg = (x \ra f(x)g
          (x))
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          &#123;f/g&#125; = (x \ra &#123;f(x)/g(x)&#125;)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          f - g = (x \ra f(x) - g(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with each equation being a {" "}
          <i>
            definition
          </i>
          .
          The notation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f \circ g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          goes back to Exercise 5 of Chapter 3, with
          the little circle {" "}
          <NoBreak>
            “
            <Math>
              $\circ$
            </Math>
            ”
          </NoBreak>
          {" "} being known as
          the {" "}
          <i>
            composition operator
          </i>
          , while the sum
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          f + g
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and product
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          fg
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          of functions already appear in {" "}
          <a
            href="/article/chapter3?id=_10_5607"
            class="handle-out-chapter-link">
            Exercise 18 of Chapter 3
          </a>
          , also. (On the other hand, the
          quotient (i.e. {" "}
          <NoBreak>
            <Math>
              $f/g$
            </Math>
            )
          </NoBreak>
          {" "} and difference (i.e.,
          {" "}
          <NoBreak>
            <Math>
              $f - g$
            </Math>
            )
          </NoBreak>
          {" "} of functions are defined above for
          the first time, even if the definitions might
          {" "}
          <i>
            seem
          </i>
          {" "} familiar!)
        </OuterP>
      </Section>
      <Pause />
      <Exercises>
        <Exercise number={1}>
          <ExerciseStatement id="_13_2417">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              Sketch the derivative of a function with the
              following graph (what {" "}
              <i>
                looks
              </i>
              {" "} like a sharp
              corner {" "}
              <i>
                is
              </i>
              {" "} a sharp corner):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              That would be:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_derivative.svg" />
            <Pause />
            <OuterP>
              (The derivative is {" "}
              <Math>
                $1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $1/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              is {" "}
              <Math>
                $-1/2$
              </Math>
              {" "} when the slope is {" "}
              <NoBreak>
                <Math>
                  $-1/2$
                </Math>
                ,
              </NoBreak>
              {" "} and is
              undefined at the corners.)
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
              Would the derivative of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over x&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              be a very large negative number, or a very
              large positive number, near {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ?
              </NoBreak>
              {" "} Or would
              it depend on which side of 0 you are?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The graph of {" "}
              <Math>
                $y = &#123;1 \over x&#125;$
              </Math>
              {" "} looks like so:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_over_x.svg" />
            <Pause />
            <OuterP>
              As one can see, the slope is very negative
              near {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} on either side. So the answer is:
              “very large negative”.
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
              Sketch the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              second
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              derivative of the graph in {" "}
              <InChapterLink
                href="/article/chapter4?id=_13_2417"
                class="handle-in-chapter-link">
                Exercise 1
              </InChapterLink>
              .
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The second derivative is zero wherever the
              first derivative is flat, and is undefined
              wherever the first derivative is undefined;
              this gives the second derivative the following
              pockmarked appearance:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_second_derivative.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              Taking even further derivatives produces
              the same graph back, over and over again.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              “first derivative” is a synonym of “derivative”.
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
              If we pretend that the graph of {" "}
              <InChapterLink
                href="/article/chapter4?id=_13_2417"
                class="handle-in-chapter-link">
                Exercise 1
              </InChapterLink>
              {" "}
              depicts the
              <del>
                distance that a car has traveled
                as a function of time,
              </del>
              {" "} position of a car as a function of
              time, with hours (hr) on the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "}
              and kilometers (km) on the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis,
              </NoBreak>
              {" "} what
              do the units become on the axes of the first
              and second derivatives?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The units on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become kilometers,
              kilometers per hour, and kilometers per
              hours squared, including the first graph
              (each time
              another derivative is taken, divide the
              units of the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis by the units of the
              {" "}
              <Math>
                $x$
              </Math>
              {" "} axis):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units.svg" />
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_derivative.svg" />
            <Pause />
            <Image src="/images/svg_ch4_slope_one_half_see_saw_with_units_second_derivative.svg" />
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The second and third functions are respectively
                the velocity and the acceleration of the car as
                a function of time.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                In a more physically realistic scenario the corners
                are rounded off a bit while the velocity and
                acceleration remain continuous, albeit with steep
                slopes and sharp peaks. (This...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch4_ex_car_position_rounded.svg" />
              <Pause />
              <OuterP>
                ...idea.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Is the following equation correct, incorrect,
              or nonsensical?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1) \,=\, (t \ra 3t + 2)
              $$
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The equation makes sense and is true.
              Syntactically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              sum of functions
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              because {" "}
              <Math>
                $x \ra x + 1$
              </Math>
              {" "} and {" "}
              <Math>
                $u \ra 2u + 1$
              </Math>
              {" "} are
              both functions. Now by definition, the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of functions {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} is the function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + g(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that maps a number to the sum of the individual
              values of the functions. So—for example—
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(5) \\
              =&amp; \,\,\,(x \ra x + 1)(5) + (u \ra 2u + 1)(5) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(5 + 1) + (2\cdot 5 + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3\cdot 5 + 2 = 17 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and—with a general input {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                —
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(t) \\
              =&amp; \,\,\,(x \ra x + 1)(t) + (u \ra 2u + 1)(t) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(t + 1) + (2t + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3t + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which implies that, indeed,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + 1) \,+\, (u \ra 2u + 1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the function that maps each real number {" "}
              <Math>
                $t$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $3t + 2$
                </Math>
                ,
              </NoBreak>
              {" "}
              i.e., is equal to the function {" "}
              <NoBreak>
                <Math>
                  $t \ra 3t + 2$
                </Math>
                .
              </NoBreak>
              {" "} (!!)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              One can also do the main computation with {" "}
              <Math>
                $x$
              </Math>
              {" "}
              in place of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; \,\,\,((x \ra x + 1) \,+\, (u \ra 2u + 1))(x) \\
              =&amp; \,\,\,(x \ra x + 1)(x) + (u \ra 2u + 1)(x) \up&#123;1.5&#125; \\
              =&amp; \,\,\,(x + 1) + (2x + 1) \up&#123;1.5&#125; \\
              =&amp; \,\,\,3x + 2 \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Here we have two different {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                's:
              </NoBreak>
              {" "} the {" "}
              <Math>
                $x$
              </Math>
              {" "} that
              denotes the input, and the {" "}
              <Math>
                $x$
              </Math>
              {" "} that is used as
              a placeholder to describe how the first function
              acts.
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
              Complete the missing units for each strip
              below, based on those units that are given:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_missing_units.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The pattern to respect is that, each time
              you take a derivative, the units on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis stay the same, while the units on the
              {" "}
              <Math>
                $y$
              </Math>
              {" "} axis become divided by those on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis. This gives the unique solutions:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_missing_units_solution.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              A unit of {" "}
              <NoBreak>
                “
                <Math>
                  $1$
                </Math>
                ”
              </NoBreak>
              {" "} is a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              dimensionless
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              unit. Dimensionless units arise when
              quantities are divided by like quantities.
              Think of dimensionless quantities as “pure
              fractions” or “pure ratios”. (Percentages
              are dimensionless—in fact the term
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              percentage
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is synonymous with
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              dimensionless ratio
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              though if you spoke to people about
              “dimensionless ratios” they would look at
              you funny. Also percentages are a system of
              notation, whereby the symbol “%” means
              “divide the preceding number by 100, in
              order to discover the numerical value of
              the ratio I'm talking about”.) (To drive
              it home: In Chinese, the written expressions
              {" "}
              <NoBreak>
                “
                <Math>
                  $23\%$
                </Math>
                ”
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                “
                <Math>
                  $23/100$
                </Math>
                ”
              </NoBreak>
              {" "} are
              indistinguishable when read out loud; they
              are both  read {" "}
              <NoBreak>
                “
                <Math>
                  $23$
                </Math>
              </NoBreak>
              {" "} over {" "}
              <NoBreak>
                <Math>
                  $100$
                </Math>
                ”;
              </NoBreak>
              {" "} that is
              the simple {" "}
              <i>
                &amp;
              </i>
              {" "} correct way!)
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
              Among the functions below, which is the
              zeroth, first, and second derivative?
              (I.e., which is {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $f'$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f''$
                </Math>
                ,
              </NoBreak>
              {" "}
              assuming that relationship exists.)
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_position_by_time_find_the_order.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The graphs are already in the right order:
              if {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "} is the original function
              then {" "}
              <Math>
                $f$
              </Math>
              {" "} is on the left, {" "}
              <Math>
                $f'$
              </Math>
              {" "} is in the
              middle, and {" "}
              <Math>
                $f''$
              </Math>
              {" "} is on the right:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_position_by_time_find_the_order_answer.svg" />
            <Pause />
            <OuterP>
              For example, the graph on the left
              has a slope that starts at {" "}
              <Math>
                $\sim\!-1$
              </Math>
              {" "} and
              ends at {" "}
              <NoBreak>
                <Math>
                  $\sim\!1$
                </Math>
                ,
              </NoBreak>
              {" "} while those are the
              values at which the graph in the middle
              starts and ends (and not coincidentally,
              since the graph in the middle is the
              derivative of the graph on the left!):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_position_by_time_find_the_order_first_pair.svg" />
            <Pause />
            <OuterP>
              Moreover the middle graph has slope
              close to {" "}
              <Math>
                $0$
              </Math>
              {" "} at either end, and some
              slope near {" "}
              <Math>
                $1.5$
              </Math>
              {" "} or {" "}
              <Math>
                $2$
              </Math>
              {" "} towards the middle,
              matching the {" "}
              <i>
                values
              </i>
              {" "} of the graph
              on the right:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_position_by_time_find_the_order_second_pair.svg" />
            <Pause />
            <OuterP>
              (Taking one more derivative would produce a
              zigzag, by the way.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement id="_14_8863">
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              Given these graphs...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a.svg" />
            <Pause />
            <OuterP>
              ...what can you say about {" "}
              <NoBreak>
                <Math>
                  $g'(x)$
                </Math>
                ?
              </NoBreak>
              {" "}
              (Produce the best sketch of {" "}
              <Math>
                $g'(x)$
              </Math>
              {" "} that
              you can, taking into account all the
              information above.) (Don't get us wrong:
              You don't {" "}
              <i>
                need
              </i>
              {" "} the second derivative
              to sketch the first derivative, but if
              you're a human and not a machine, it can
              help!)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              To start with, the slope of {" "}
              <Math>
                $g$
              </Math>
              {" "} seems to be
              about {" "}
              <NoBreak>
                <Math>
                  $-1.5$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $0$
              </Math>
              {" "} and (a bit greater than) {" "}
              <Math>
                $2$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = -2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <Math>
                $x = 2$
              </Math>
              {" "} respectively:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol1.svg" />
            <Pause />
            <OuterP>
              This already gives us three points from which
              to interpolate a basic approximation to the graph
              {" "}
              <NoBreak>
                <Math>
                  $y = g'(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol2.svg" />
            <Pause />
            <OuterP>
              But the graph of {" "}
              <Math>
                $g''(x)$
              </Math>
              {" "} indicates more,
              namely that {" "}
              <Math>
                $g'(x)$
              </Math>
              {" "} has a slope that rises
              from {" "}
              <Math>
                $\approx 0.2$
              </Math>
              {" "} near the left edge of
              the graph up to {" "}
              <Math>
                $1.3$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $x = 0.5$
                </Math>
                ,
              </NoBreak>
              {" "} before
              falling again to {" "}
              <Math>
                $0.6$
              </Math>
              {" "} past {" "}
              <NoBreak>
                <Math>
                  $x = 2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol3.svg" />
            <Pause />
            <OuterP>
              As a second step, we thus “bend into shape”
              our previous sketch to produce these slopes...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol4.svg" />
            <Pause />
            <OuterP>
              ...achieving our final answer.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "} For reference, the actual
              derivative looks like so:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_a_sol5.svg" />
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              Given these graphs...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b.svg" />
            <Pause />
            <OuterP>
              ...sketch {" "}
              <NoBreak>
                <Math>
                  $y = h'(x)$
                </Math>
                ,
              </NoBreak>
              {" "} analogously to
              {" "}
              <InChapterLink
                href="/article/chapter4?id=_14_8863"
                class="handle-in-chapter-link">
                Exercise 8
              </InChapterLink>
              .
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Firstly, the graph of {" "}
              <Math>
                $h(x)$
              </Math>
              {" "} seems to have
              slope {" "}
              <Math>
                $0$
              </Math>
              {" "} around {" "}
              <NoBreak>
                <Math>
                  $x = 0.6$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol1.svg" />
            <Pause />
            <OuterP>
              ...which gives us one data point on the
              curve {" "}
              <Math>
                $y = h'(x)$
              </Math>
              {" "} to start with...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol2.svg" />
            <Pause />
            <OuterP>
              ...moreover, by the graph of {" "}
              <NoBreak>
                <Math>
                  $h''(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              the slope of {" "}
              <Math>
                $h'(x)$
              </Math>
              {" "} is near {" "}
              <Math>
                $-1/3$
              </Math>
              {" "} on an
              interval that is approximately (say)
              {" "}
              <NoBreak>
                <Math>
                  $[-0.85,0.7]$
                </Math>
                ....
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol3.svg" />
            <Pause />
            <OuterP>
              ...so, as a second step, we can extend
              the graph of {" "}
              <Math>
                $h'(x)$
              </Math>
              {" "} by a segment of slope
              {" "}
              <Math>
                $-1/3$
              </Math>
              {" "} on this interval:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol4.svg">
              <ImageLeft src="/images/svg_ch4_sketch_the_middle_b_cloud.svg" />
            </Image>
            <Pause />
            <OuterP>
              (To achieve a passable slope of {" "}
              <Math>
                $-1/3$
              </Math>
              {" "} we
              modeled ourselves on a nearby grid segment.)
              Next, {" "}
              <Math>
                $h(x)$
              </Math>
              {" "} has slope {" "}
              <Math>
                $\approx 1.2$
              </Math>
              {" "} at
              {" "}
              <NoBreak>
                <Math>
                  $x = -2$
                </Math>
                ,
              </NoBreak>
              {" "} and slope {" "}
              <Math>
                $\approx -0.9$
              </Math>
              {" "} (?) at
              {" "}
              <NoBreak>
                <Math>
                  $x = 2$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol5.svg" />
            <Pause />
            <OuterP>
              This gives us two more points on the graph
              {" "}
              <NoBreak>
                <Math>
                  $y = h'(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol6.svg" />
            <Pause />
            <OuterP>
              Then, because the second derivative has
              value {" "}
              <Math>
                $\approx -1/3$
              </Math>
              {" "} for {" "}
              <Math>
                $x \leq -1.6$
              </Math>
              {" "}
              (about) and for {" "}
              <Math>
                $x \geq 1.5$
              </Math>
              {" "} (about)...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol7.svg" />
            <Pause />
            <OuterP>
              ...we extend these two new data points by
              segments of slope {" "}
              <NoBreak>
                <Math>
                  $-1/3$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol8.svg" />
            <Pause />
            <OuterP>
              ...on the relevant intervals. (I.e., for
              {" "}
              <Math>
                $x \leq -1.6$
              </Math>
              {" "} and for {" "}
              <NoBreak>
                <Math>
                  $x \geq 1.5$
                </Math>
                .)
              </NoBreak>
              {" "} The
              last step is to join the existing segments
              by some kind of “connector curves” of
              yet-to-be-determined shape:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol9.svg" />
            <Pause />
            <OuterP>
              Since {" "}
              <Math>
                $h''(x)$
              </Math>
              {" "} shows that the two
              connectors have slopes of about {" "}
              <Math>
                $-1/3$
              </Math>
              {" "}
              at their edges and slopes of about {" "}
              <Math>
                $-1.4$
              </Math>
              {" "}
              and {" "}
              <Math>
                $-1.6$
              </Math>
              {" "} (respectively) near their
              middles...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol10.svg" />
            <Pause />
            <OuterP>
              ...our final answer, given by the
              following sketch, is obtained by
              “bending into shape” the connector curves...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol11.svg" />
            <Pause />
            <OuterP>
              ...to give them a slope of {" "}
              <Math>
                $-1/3$
              </Math>
              {" "} at
              their endpoints, and slopes of {" "}
              <NoBreak>
                <Math>
                  $-1.4$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $-1.6$
                </Math>
                ,
              </NoBreak>
              {" "} respectively, in their middles.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              Here is the actual graph of {" "}
              <NoBreak>
                <Math>
                  $h'$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_sketch_the_middle_b_sol12.svg" />
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement id="_15_3354">
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              If you scale the graph of a function {" "}
              <Math>
                $f$
              </Math>
              {" "}
              vertically by a factor {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                —i.e.,
              </NoBreak>
              {" "} multiply
              each output by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                —is
              </NoBreak>
              {" "} the derivative
              also scaled by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes, this is the case. For a joke way
              of seeing it, here is a graph of a
              putative function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} before and after
              scaling:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_scaling_figure.svg" />
            <Pause />
            <OuterP>
              The second graph truly is the first
              graph vertically scaled by a factor {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}
              because the scale on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis has
              been doubled. This means that the ratio
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;rise&#125;\over \te&#123;run&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has doubled in the second graph, because
              “rise” has doubled (each {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              is twice as large!), whereas “run” stays
              the same. (So the slope of the tangent has
              doubled, so the derivative is doubled.)
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
              Where is the rate of change of the function
              below, on the part shown, greatest? And
              where is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              greatest?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The rate of change is the slope, which
              is greatest along the right-hand portion
              of the curve:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_steepest.svg" />
            <Pause />
            <OuterP>
              On the other hand,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the rate of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [a.k.a., second derivative] is the rate
              of change  of the slope, and that will
              be greatest at the first bend of the curve,
              where the slope is changing at the fastest
              rate:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_narrow_and_less_narrow_bends_curviest.svg" />
            <Pause />
            <OuterP>
              (Well, believe us or not, but we're right!)
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
              In the following graph, which curve might
              be a derivative of which other curve?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              As it happens—and by the exact method
              that we used to generate these curves—the
              blue is the derivative of the red:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_blue_red_only.svg" />
            <Pause />
            <OuterP>
              Likewise, the derivative of the blue
              is the yellow, the derivative of the yellow
              is the green, and the derivative of the
              green is the red, at which point it starts
              all over again! (For example, the
              {" "}
              <i>
                fifth
              </i>
              {" "} derivative of the red curve
              is the blue, because the {" "}
              <i>
                fourth
              </i>
              {" "}
              derivative of the red curve is itself.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              After all, the slope of these curves
              keeps oscillating between two fixed
              values—the “most slanted up” and the
              “most slanted down”—so their derivatives
              were always going to have an oscillatory
              pattern, as well.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              Because “most slanted up” occurs when
              the curve has not yet crested, but when
              the derivative {" "}
              <i>
                is already
              </i>
              {" "} in the
              process of cresting (that's why it's
              “most slanted up”), the derivative is
              ahead of the original curve by half a
              bump, not the other way around:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}
              When we examine the velocity of a
              particle moving in the plane, we examine
              the velocities of its shadow on the
              {" "}
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
                -axes:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_two_dimensional_vel.svg" />
            <Pause />
            <OuterP>
              The velocities of the two shadows
              encode the overall “two-dimensional”
              velocity of the particle. (No need for
              quotes, really: the velocity {" "}
              <i>
                is
              </i>
              {" "}
              two-dimensional.)
            </OuterP>
            <OuterP class="indent-10">
              Here's another point of view: just like
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is encoded by a pair of numbers—sometimes
              known as the {" "}
              <i>
                position vector
              </i>
              {" "} by
              the way, where “vector” is a term of art
              for “pair of numbers”—so the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is encoded by a pair of numbers—equally
              known as the {" "}
              <i>
                velocity vector
              </i>
              —which
              is no coincidence, because the first
              coordinate of the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is the derivative of the first coordinate
              of the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              and likewise for the second coordinate—two
              coordinates, two rates of change!
            </OuterP>
            <OuterP class="indent-10">
              Geometrically, if we use the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -components
              </NoBreak>
              {" "} {" "}
              <Math>
                $v_x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} of the
              velocity to draw an arrow emanating
              from a point on the curve, this arrow
              is tangent to the curve, and the
              <ImageRight src="/images/svg_ch4_cosine_curves_tangent_velocity_cloud.svg" />
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the arrow is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the particle at that moment in time.
              More precisely, if you let the particle
              drift at the exact same {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -velocities
              </NoBreak>
              {" "} {" "}
              <Math>
                $v_x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} that you
              measured at the root of the arrow for
              one unit of time, the particle would
              cover exactly the length of the arrow
              in that one unit of time, no more no less,
              because the particle would cover {" "}
              <Math>
                $v_x$
              </Math>
              {" "}
              units in {" "}
              <Math>
                $x$
              </Math>
              {" "} and {" "}
              <Math>
                $v_y$
              </Math>
              {" "} units in {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                .
              </NoBreak>
              {" "}
              And speed being
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the length of the arrow is, therefore,
              the speed!
            </OuterP>
            <OuterP class="indent-10">
              Now consider not one but four particles,
              going around a unit circle in clockwise
              fashion, 90° apart in phase, at unit
              speed (“unit speed” = speed 1, “unit
              circle” = radius 1) (ps: We center the
              circle at the origin):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle.svg" />
            <Pause />
            <OuterP>
              The
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vectors
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the particles are as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_position_vectors.svg" />
            <Pause />
            <OuterP>
              (You can't really see it so well, but
              each arrow originates at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                .)
              </NoBreak>
              {" "} While
              the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vectors
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              are as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_velocity_vectors.svg" />
            <Pause />
            <OuterP>
              (Like the position vectors, the
              velocity vectors keep changing instant by
              instant—this is the subtlety of calculus!)
              The velocity vectors have length {" "}
              <Math>
                $1$
              </Math>
              {" "} because
              the speed is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <i>
                &amp;
              </i>
              {" "} are brushed
              in the direction of travel.
            </OuterP>
            <OuterP class="indent-10">
              (Nb: When we draw a vector as an arrow
              we mean that the first coordinate of the
              vector is equal to the horizontal
              displacement from the tail of the arrow
              to the head of the arrow, and likewise
              that the second coordinate is equal to the
              vertical displacement from the tail of the
              arrow to the head of the arrow.)
              <ImageRight src="/images/svg_ch4_cosine_curves_vector_illustration_cloud.svg" />
            </OuterP>
            <OuterP class="indent-10">
              Due to the 90° rotations and uniform
              lengths of {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} one particle's velocity
              vector is another particle's position
              vector; as one example, the red particle's
              velocity vector is the blue particle's
              position vector:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_unit_circle_equality.svg" />
            <Pause />
            <OuterP>
              From the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates,
              </NoBreak>
              {" "} for example,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the velocity in {" "}
              <Math>
                $x$
              </Math>
              {" "} of the red particle
              is the position in {" "}
              <Math>
                $x$
              </Math>
              {" "} of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              at any given moment in time. This also
              means:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the red particle is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              ...because “velocity in {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} is the same
              as “rate of change of the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate”.
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Concretely, if you graph the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the red and blue
              particles on the same graph, the rate of
              change of the red particle's {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              will equal the value of the blue particle's
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate.
              </NoBreak>
              {" "} These are the reds and blue
              curves from the problem statement, if we
              start the red particle at position
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (1, 0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_verified.svg" />
            <Pause />
            <OuterP>
              If we add the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the green
              and yellow particles, we find the graph
              from the problem statement!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 4.
              </i>
              {" "}
              If needed, here is an illustration of
              one {" "}
              <Math>
                $360^\circ$
              </Math>
              {" "} rotation of the particles
              of Note 3,  with each curve being an
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_rolling_wheel.svg" />
            <Pause />
            <OuterP>
              (If the above just looks like a
              confusing mess then don't sweat it—it's
              not that important.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "}
              To reiterate, take a look at this
              figure again:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_curves_cresting.svg" />
            <Pause />
            <OuterP>
              The derivative is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the red particle, so that
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} you see {" "}
              <i>
                now
              </i>
              {" "} on the
              blue particle will be seen {" "}
              <i>
                a little later
              </i>
              {" "}
              on the red particle! (In particular, if you
              wanted to generate the same curves with a
              counterclockwise rotation, you could do that,
              but you would have to reverse the order of
              the particles around the circle to keep the
              blue particle ahead of the red particle,
              the yellow particle ahead of the blue
              particle, etc.)
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
              Apply the definition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (u \ra f(u)g(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of function multiplication
              in order to show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)h = f(gh)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all functions {" "}
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              or, namely, to show that
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <NoBreak>
                (
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                )
              </NoBreak>
              {" "} times {" "}
              <Math>
                $h$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $f$
              </Math>
              {" "} times {" "}
              <NoBreak>
                (
                <Math>
                  $g$
                </Math>
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                )
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              for all functions {" "}
              <NoBreak>
                <Math>
                  $f, g, h : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is necessary and sufficient to show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the same as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for an arbitrary input {" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} in order to
              show that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)h
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(gh)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the same function. (Function equality is
              based on input-output behavior: two functions are
              equal if and only if every input is mapped to the
              same output under either function. See Note 6,
              Exercise 9, Chapter 3.)
            </OuterP>
            <OuterP class="indent-10">
              Starting up,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (fg)(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the definition of function multiplication,
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (gh)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              likewise. Moreover,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)(u) = f(u) \cdot g(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (gh)(u) = g(u) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the same definition again. Therefore,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u) = (f(u) \cdot g(u)) \cdot h(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the one hand, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the other hand. But
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(u) \cdot g(u)) \cdot h(u) = f(u) \cdot (g(u) \cdot h(u))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the associativity of ordinary real number
              multiplication. (Not function multiplication:
              {" "}
              <i>
                real number multiplication
              </i>
              .) So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ((fg)h)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f(gh))(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for arbitrary {" "}
              <NoBreak>
                <Math>
                  $u$
                </Math>
                ,
              </NoBreak>
              {" "} which completes the proof.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In words, we have just established the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              associativity of function multiplication
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              while we had previously established the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              associativity of function composition
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (if you recall that one) in Exercise 9 of Chapter
              3.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              By this result, we can write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fgh
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              without any parentheses at all:
              it doesn't matter whether we think of this
              product as {" "}
              <Math>
                $(fg)h$
              </Math>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $f(gh)$
                </Math>
                ,
              </NoBreak>
              {" "} the result
              is the same.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              Prove that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = g + f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = gf
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $f, g : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "} using the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a + b = b + a
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ab = ba
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $a, b \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              (Prove something for functions by using the
              corresponding fact for numbers, namely.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Given an arbitrary {" "}
              <Math>
                $u \in \rr$
              </Math>
              {" "} we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)(u) = f(u) + g(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (g + f)(u) = g(u) + f(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the definition of function addition. But
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(u) + g(u) = g(u) + f(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the commutativity of real number addition
              {" "}
              <NoBreak>
                [
                <Math>
                  $f(u)$
                </Math>
              </NoBreak>
              {" "} and {" "}
              <Math>
                $g(u)$
              </Math>
              {" "} are both real numbers—the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              commutativity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of real number addition is the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a + b = b + a
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all real numbers {" "}
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
              {" "} mentioned in the
              statement—so we can use this here]; thus
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)(u) = (g + f)(u)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $u \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} which implies
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = g + f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by definition of function equality.
            </OuterP>
            <OuterP class="indent-10">
              For the second half we have, similarly,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              (fg)(u) &amp;= f(u) \cdot g(u) \\
              &amp;= g(u) \cdot f(u) \up&#123;1.5&#125;\\
              &amp;= (gf)(u) \up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for arbitrary {" "}
              <NoBreak>
                <Math>
                  $u\in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} where the first and
              last equality are by the definition of a
              product of functions and where
              the middle equality is by commutativity of real
              number multiplication. [That would be the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              ab = ba
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $a, b \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} as mentioned in the statement.] Hence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              gf
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              agree on an arbitrary input, hence {" "}
              <Math>
                $fg = gf$
              </Math>
              {" "} by
              definition of function equality.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              A rat is running a fundraising race. The function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large f : \rr \ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              gives the amount raised as a function of position;
              specifically, {" "}
              <Math>
                $&#123;f(x)&#125;$
              </Math>
              {" "} is the total number of
              $'s earned by virtue of running
              {" "}
              <Math>
                $x$
              </Math>
              {" "} meters from the start of the race;
              a second function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large g : \rr \ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              gives the position of the rat as a function of time;
              specifically, {" "}
              <Math>
                $&#123;g(t)&#125;$
              </Math>
              {" "} is the position from the start,
              in meters, reached by the rat at {" "}
              <Math>
                $t$
              </Math>
              {" "} seconds after the
              start of the race.
            </OuterP>
            <OuterP class="indent-10">
              In this case, what does {" "}
              <Math>
                $f \circ g$
              </Math>
              {" "} compute?
            </OuterP>
          </ExerciseStatement>
          <Solution id="_16_7040">
            <OuterP>
              It computes
              the amount earned by the rat as a function of time. In
              more detail, {" "}
              <Math>
                $(f \circ g)(t)$
              </Math>
              {" "}
              is the number of $'s earned by the rat at {" "}
              <Math>
                $t$
              </Math>
              {" "}
              seconds after the start of the race.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In even more detail,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the position in meters of the rat {" "}
              <Math>
                $t$
              </Math>
              {" "}
              seconds after start, by definition
              of {" "}
              <NoBreak>
                <Math>
                  $g$
                </Math>
                ,
              </NoBreak>
              {" "} at which position the rat has
              earned
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(g(t))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              $'s in total, by definition of {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
              {" "}
              And
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(g(t))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by definition of {" "}
              <NoBreak>
                “
                <Math>
                  $\circ$
                </Math>
                ”.
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              If it helps,
              here is a pictorialization of the
              “units transformation pipeline” that
              occurs inside {" "}
              <NoBreak>
                <Math>
                  $f \circ g$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_composition_units.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}
              To emphasize, {" "}
              <Math>
                $f(x)$
              </Math>
              {" "} is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ~ total ~
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              amount earned when position {" "}
              <Math>
                $x$
              </Math>
              {" "} is reached.
              In real life {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                's
              </NoBreak>
              {" "}
              graph might therefore look something like this,
              while inventing some numbers:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_first_example_of_f.svg" />
            <Pause />
            <OuterP>
              In the above the rat earns {" "}
              <NoBreak>
                <Math>
                  $\te&#123;\$&#125;$
                </Math>
                3
              </NoBreak>
              {" "} for the
              first 50m, after which the dollar-per-meter
              rate is reduced.
              Or {" "}
              <Math>
                $f$
              </Math>
              {" "} could look like this, with discrete
              “unlocks”:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_second_example_of_f.svg" />
            <Pause />
            <OuterP>
              In our mathematicians' imaginations, however, {" "}
              <Math>
                $f$
              </Math>
              {" "}
              might also look like this, nice and differentiable,
              with periods of negative slope (corresponding to
              parts of the course that momentarily lose you money):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_third_example_of_f.svg" />
            <Pause />
            <OuterP>
              (Etc.)
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
              What does {" "}
              <Math>
                $(f \circ g)'$
              </Math>
              {" "} compute,
              keeping the same setup as in Exercise 34?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It computes the dollars-per-second earnings rate
              as a function of time. In full detail,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)'(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the dollars-per-second rate which the rat is
              fundraising at {" "}
              <Math>
                $t$
              </Math>
              {" "} seconds after the start of the race.
            </OuterP>
            <OuterP class="indent-10">
              <i>
                Note 1.
              </i>
              {" "}
              You don't need to know anything about {" "}
              <NoBreak>
                “
                <Math>
                  $f$
                </Math>
                ”
              </NoBreak>
              {" "}
              or {" "}
              <NoBreak>
                “
                <Math>
                  $g$
                </Math>
                ”
              </NoBreak>
              {" "} to answer this question. You only need to
              know what {" "}
              <NoBreak>
                “
                <Math>
                  $f \circ g$
                </Math>
                ”
              </NoBreak>
              {" "} is.
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
              Continuing with the fundraising rat as in the
              previous two exercises, assume that the functions
              {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} have these graphs:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_f.svg" />
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_g.svg" />
            <Pause />
            <OuterP>
              In this case what is {" "}
              <NoBreak>
                <Math>
                  $(f \circ g)'(2)$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "} the rat is running at a velocity of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;5\over 3\up&#123;1&#125;&#125;[&#123;\te&#123;m/s&#125;&#125;]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the slope of this line segment on {" "}
              <NoBreak>
                <Math>
                  $y = g(t)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_g_with_slope.svg" />
            <Pause />
            <OuterP>
              Moreover at {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "} the rat
              has reached
              {" "}
              <NoBreak>
                <Math>
                  $2 \cdot (5/3) = 10/3 = 3.\overline&#123;33&#125;$
                </Math>
                m,
              </NoBreak>
              {" "}
              where the dollars-per-meter earnings
              rate is one-tenth of a dollar per meter, by
              the slope of this segment on the graph {" "}
              <NoBreak>
                <Math>
                  $y = f(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_f_g_actual_exercise_f_with_slope.svg" />
            <Pause />
            <OuterP>
              Multiplying the {" "}
              <Math>
                $5/3$
              </Math>
              {" "} meters-per-second velocity
              by the {" "}
              <Math>
                $1/10$
              </Math>
              {" "} dollars-per-meter rate gives
              us the dollars-per-second rate at {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s
              </NoBreak>
              {" "} (our
              final answer—recall that {" "}
              <Math>
                $(f \circ g)'(2)$
              </Math>
              {" "} is
              the dollars-per-second rate at {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                s,
              </NoBreak>
              {" "} by Exercise 35):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;5\over 3\up&#123;1&#125;&#125;\left[&#123;\te&#123;m&#125; \over \te&#123;s&#125;&#125;\right]\right) \times \left(&#123;1 \over 10\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;m&#125;&#125;\right]\right) = &#123;5\over 30\up&#123;1&#125;&#125;\left[&#123;\te&#123;\$&#125; \over \te&#123;s&#125;&#125;\right].
              $$
              <ImageRight
                src="/images/svg_ch4_f_g_actual_exercise_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              Or since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;5 \over 3&#125; = 1.6666...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.1666...&#125;[\te&#123;\$/s&#125;]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in decimal, i.e.,
              <span style="font-family:Clicker Script;font-size:1.3em;">
                ~sixteen~
              </span>
              point {" "}
              <Math>
                $666...$
              </Math>
              {" "} cents per second.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Postscript.
              </i>
              {" "}
              It turns out that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;5 \over 30&#125; = &#123;1 \over 6&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as we weren't really paying attention to the
              possibility of simplifying the fraction. In
              particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 6&#125; = 0.1666...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as, indeed, {" "}
              <Math>
                $0.1666...$
              </Math>
              {" "} is half of {" "}
              <NoBreak>
                <Math>
                  $0.333...$
                </Math>
                !
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              Conjecture a general formula for
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)'(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for arbitrary (differentiable, say) functions
              {" "}
              <NoBreak>
                <Math>
                  $f, g : \rr \ra \rr$
                </Math>
                .
              </NoBreak>
              {" "} (If it helps, interpret {" "}
              <Math>
                $f$
              </Math>
              {" "}
              and {" "}
              <Math>
                $g$
              </Math>
              {" "} exactly as in the scenario of the fundraising
              race, {" "}
              <NoBreak>
                cf
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} Exercises 34-37.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The sought-for formula is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g'(t)\cdot f'(g(t))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because—to come back to the example of the
              fundraising race—one must multiply the meters-per-second
              velocity at time {" "}
              <Math>
                $t$
              </Math>
              {" "} (that is, {" "}
              <NoBreak>
                <Math>
                  $g'(t)$
                </Math>
                )
              </NoBreak>
              {" "} by the dollars-per-meter
              earnings rate at position {" "}
              <Math>
                $g(t)$
              </Math>
              {" "} (that is, {" "}
              <NoBreak>
                <Math>
                  $f'(g(t))$
                </Math>
                )
              </NoBreak>
              {" "} to obtain
              the final dollars-per-second earning rate at time {" "}
              <Math>
                $t$
              </Math>
              {" "}
              (that is, {" "}
              <NoBreak>
                <Math>
                  $(f \circ g)'(t)$
                </Math>
                ).
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              (For example, the solution to Exercise 36 can actually
              be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g'(2) \cdot f'(g(2))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since, indeed, {" "}
              <NoBreak>
                <Math>
                  $g(2) = 3.333...$
                </Math>
                .
              </NoBreak>
              {" "} [Remember that we ended
              up multiplying {" "}
              <Math>
                $g'(2) = &#123;5\over 3&#125;\te&#123;m/s&#125;$
              </Math>
              {" "} by
              {" "}
              <NoBreak>
                <Math>
                  $f'(3.333...) = &#123;1\over 10&#125;\te&#123;\$/s&#125;$
                </Math>
                —the
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                “
                <Math>
                  $3.333...$
                </Math>
                ”
              </NoBreak>
              {" "} is
              {" "}
              <NoBreak>
                <Math>
                  $g(2)$
                </Math>
                .])
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Nb: This result is known as the {" "}
              <i>
                chain rule
              </i>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "} Said {" "}
              <i>
                chain rule
              </i>
              {" "}
              is more commonly written...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)'(x) = f'(g(x))g'(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...with {" "}
              <NoBreak>
                “
                <Math>
                  $g'(x)$
                </Math>
                ”
              </NoBreak>
              {" "} last. (And {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} instead of {" "}
              <NoBreak>
                “
                <Math>
                  $t$
                </Math>
                ”.)
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "} One can also write the chain rule very succinctly like so...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)' = (f' \circ g)g'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...where the right-hand-side is the product of {" "}
              <Math>
                $g'$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f' \circ g$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              Sketch the velocity vector of a particle
              going at three times unit speed (“speed {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                ”
              </NoBreak>
              {" "} in common
              parlance) clockwise around a circle of radius {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "}
              What path does the velocity vector describe
              over time? (I.e., if you cut-paste the velocity
              vector back to the origin, so that its “tail”
              is at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} what curve does the far end of the
              vector describe?) Over how much time?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The velocity vector is an arrow of length {" "}
              <Math>
                $3$
              </Math>
              {" "}
              tangent to a circle of radius {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} brushed
              clockwise:
            </OuterP>
            <Pause />
            <Image src="/images/svg_velocity_vector_radius_2_speed_3_sketch_1.svg" />
            <Pause />
            <OuterP>
              If we bring the tail of the vector back to
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} we find an arrow of length {" "}
              <Math>
                $3$
              </Math>
              {" "}
              tracing a circle of radius {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_velocity_vector_radius_2_speed_3_centered.svg" />
            <Pause />
            <OuterP>
              Lastly, the velocity vector does a full revolution
              of the red circle in the same amount of time that
              the particle does a full revolution of the blue circle,
              which is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;2\cdot (\te&#123;circumference of a unit circle&#125;) \over \te&#123;3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the circumference of the blue circle
              is twice the circumference of a unit circle,
              and the particle is going at speed {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In such diagrams we recycle the axes
              to plot quantities of several different
              dimensions: positions (in blue, in this
              case) have dimensions of length ([L]) while
              velocities (in red, in this case) have
              dimensions of length over time ([L/T]).
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
              What is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              acceleration vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (velocity vector of the velocity vector)
              of the particle from Exercise 39?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The velocity vector of Exercise 39 travels
              in a circle of radius {" "}
              <Math>
                $3$
              </Math>
              {" "} in the same amount
              of time that the position vector
              travels around a circle of radius {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "}
              The speed of the velocity vector is therefore
              {" "}
              <Math>
                $1.5$
              </Math>
              {" "} times the speed of the position vector,
              or {" "}
              <NoBreak>
                <Math>
                  $1.5 \times 3 = 4.5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              As the derivative of the velocity vector,
              the acceleration vector is therefore
              a vector of length {" "}
              <Math>
                $4.5$
              </Math>
              {" "} (= the speed of the
              velocity vector) brushed clockwise along
              the path of the velocity vector:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_what_is_the_acceleration_vector_uncentered.svg" />
            <Pause />
            <OuterP>
              Or, if we translate the acceleration vector back
              to the origin and trace out its path over time
              (either way is fine):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_what_is_the_acceleration_vector_centered.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              You truly have to think of the acceleration
              vector as “the velocity of the velocity
              vector”—if the velocity vector is changing, the
              acceleration vector is nonzero!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}
              Sketch the velocity vector, acceleration vector,
              and jerk vector of a particle going around a circle
              of radius {" "}
              <Math>
                $3$
              </Math>
              {" "} at speed {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "} (Clockwise, say.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The velocity vector has length {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} because the
              particle has speed {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "} So the velocity vector
              looks like so, while attached to the particle path
              (top) or brought back to the origin (bottom):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_centered.svg" />
            <Pause />
            <OuterP>
              Moreover (!) the speed of the velocity vector is
              {" "}
              <Math>
                $2/3$
              </Math>
              {" "} the speed of the particle, because the
              velocity vector goes around a circle of {" "}
              <Math>
                $2/3$
              </Math>
              {" "} the
              radius in the same amount of time. So the velocity
              vector has speed
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 2 \cdot &#123;2\over 3&#125; = &#123;4\over 3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which the acceleration vector—that can be
              described as “the velocity vector of the velocity
              vector”—has length {" "}
              <Math>
                $&#123;4\over 3&#125;$
              </Math>
              {" "} (the speed of the
              velocity vector), and looks like so (in either representation):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_acceleration_centered.svg" />
            <Pause />
            <OuterP>
              Lastly the acceleration vector has speed
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;4\over 3&#125;\cdot &#123;2\over 3&#125; = &#123;8 \over 9&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by virtue of circling a circle of radius {" "}
              <Math>
                $2/3$
              </Math>
              {" "}
              that of the velocity vector, that has speed {" "}
              <NoBreak>
                <Math>
                  $4/3$
                </Math>
                ,
              </NoBreak>
              {" "}
              in the same amount of time. Since the jerk is the
              derivative of the acceleration, this becomes the
              length of the jerk vector, that is exactly opposite
              to the velocity vector, being twice {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} away:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_uncentered.svg" />
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_jerk_centered.svg" />
            <Pause />
            <StarDivider />
            <Pause />
            <OuterP>
              <i>
                Note CircleRadiiPattern&lt;&lt;NoteCounter.
              </i>
              {" "}
              If the particle's original path is centered at
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} then that path constitutes a fourth
              circle obeying the same pattern
              of {" "}
              <NoBreak>
                <Math>
                  $2/3$
                </Math>
                -ratios
              </NoBreak>
              {" "} between the successive radii:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_velocity_vector_radius_3_speed_2_with_position.svg" />
          </Solution>
        </Exercise>
        <Exercise number={22}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 22.
              </b>
              {" "}
              Sketch the velocity vector, acceleration vector,
              and jerk vector of a particle going around a circle
              of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} at speed {" "}
              <NoBreak>
                <Math>
                  $v$
                </Math>
                .
              </NoBreak>
              {" "}
              (You can assume say {" "}
              <Math>
                $v/r \approx 1.2$
              </Math>
              {" "} for the sake
              of your sketch.) Give algebraic expressions for the
              lengths of the various vectors.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              While the particle goes around a circle of
              radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} the velocity vector goes around a
              circle of radius {" "}
              <NoBreak>
                <Math>
                  $v$
                </Math>
                .
              </NoBreak>
              {" "} (Indeed {" "}
              <NoBreak>
                <Math>
                  $v$
                </Math>
                ,
              </NoBreak>
              {" "}
              being the speed, is the length of the velocity
              vector, and the length of the velocity vector
              is the radius of the circle traced by the
              velocity vector.) So the circle traced by the
              velocity vector is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;v \over r&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times as large as the circle traced by the
              position vector. Therefore, the  velocity vector
              goes
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;v \over r&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times as fast as the position vector! (The two
              vectors trace their respective circles in the
              same amount of time, so the only difference
              in speed is caused by differences in the
              radii—and this is the ratio of the radii.)
              Therefore, the velocity vector has speed
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large v \cdot &#123;v \over r&#125; = &#123;v^2 \over r&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...as obtained by multiplying the speed of the
              position vector {" "}
              <NoBreak>
                (
                <Math>
                  $v$
                </Math>
                )
              </NoBreak>
              {" "} by the ratio of the speeds
              {" "}
              <NoBreak>
                (
                <Math>
                  $v/r$
                </Math>
                ).
              </NoBreak>
              {" "} This is also the length of the acceleration
              vector. (Speed of velocity vector = length of
              acceleration vector.)
            </OuterP>
            <OuterP class="indent-10">
              Next, the ratio
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the same for the velocity vector as it is for
              the position vector, because both “speed” and
              “radius” are scaled up by a factor
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;v \over r&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              compared to the position vector.
              So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125; = &#123;v \over r&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the velocity vector as well as for the position
              vector. But we can also write this ratio as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;\te&#123;length of acceleration vector&#125;\over \te&#123;radius&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since the speed of the velocity vector is the
              length of the acceleration vector, or as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;\te&#123;length of acceleration vector&#125;\over \te&#123;radius of velocity vector circle&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be more exact, or as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;\te&#123;radius of acceleration vector circle&#125;\over \te&#123;radius of velocity vector circle&#125;&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in yet another way! Therefore, the circle traced by
              the acceleration vector is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v \over r&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times as large as the circle traced by the velocity
              vector, and the same pattern starts all over again!
            </OuterP>
            <OuterP class="indent-10">
              (In other words, each time we take a derivative we
              find that the vector whose derivative we are taking
              has speed
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v \over r&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times the speed of the previous vector whose
              derivative we took, resulting in a circle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v \over r&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              times as large as the current circle, resulting in
              a future speed {" "}
              <Math>
                $v/r$
              </Math>
              {" "} times as large for the next
              derivative, etc, etc.)
            </OuterP>
            <OuterP class="indent-10">
              Concretely, the length of the jerk vector will be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v^2 \over r&#125; \cdot &#123;v \over r&#125; = &#123;v^3 \over r^2&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the length of the acceleration is {" "}
              <NoBreak>
                <Math>
                  $v^2/r$
                </Math>
                ,
              </NoBreak>
              {" "}
              and the length of the derivative of the jerk would
              be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v^3 \over r^2&#125; \cdot &#123;v \over r&#125; = &#123;v^4 \over r^3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the length of the jerk is {" "}
              <NoBreak>
                <Math>
                  $v^3/r^2$
                </Math>
                ,
              </NoBreak>
              {" "} etc.
              (Not that we needed to go beyond the jerk.)
            </OuterP>
            <OuterP class="indent-10">
              Coming back to a sketch of all this, if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;v \over r&#125; \approx 1.2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the sketch will involve concentric circles
              of successive ratio {" "}
              <Math>
                $\approx 1.2$
              </Math>
              {" "} with the
              successive vectors being off by {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                .
              </NoBreak>
              {" "}
              The position circle might not be centered at
              {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} so we didn't include it in this sketch
              (this sketch presumes clockwise motion, but
              it's unimportant):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_general_circular_motion_uncentered.svg">
              <p>
                But if the position circle is centered at {" "}
                <NoBreak>
                  <Math>
                    $(0, 0)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                it becomes the first circle in the sequence:
              </p>
            </Image>
            <Pause />
            <Image src="/images/svg_ch4_ex_general_circular_motion_centered.svg" />
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote id="_17_6441">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The ratio
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;v \over r&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is known as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                angular velocity
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the particle. You can think of the angular velocity
                as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;\te&#123;speed&#125;\over \te&#123;radius&#125;&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                directly per the expression above, or as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large &#123;\te&#123;distance per unit time&#125;\over \te&#123;radius&#125;&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                since that is just the definition of “speed”, but which also
                means that you can think of the angular velocity as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;number of radii per unit time&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or, say, just as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\te&#123;radii per unit time&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                in other words.
                (The “number or radii” covered by an arc is
                also known as the {" "}
                <i>
                  radian measure
                </i>
                {" "} of the arc—an
                alternate measure of angle—so this can also be
                phrased {" "}
                <i>
                  radians per unit time
                </i>
                , in that sense.)
                What is noteworthy is that the angular velocity
                of the position vector is the same as the
                angular velocity of the velocity vector, of the
                acceleration vector, etc, and it also constitutes
                the ratio between the successive lengths of all
                these vectors!
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                A common notation for the angular velocity of a
                particle is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large \omega&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                which means that the velocity vector, acceleration
                vector, and jerk vector have lengths
                have lengths
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large \omega&#123;&#125;^1r&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large \omega&#123;&#125;^2r&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                &#123;\Large \omega&#123;&#125;^3r&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                respectively, where {" "}
                <Math>
                  $r$
                </Math>
                {" "} is the radius of the circle,
                as the angular velocity is the ratio of the lengths
                of the successive vectors, as noted. (PS: As the
                length of the velocity vector is also known as the
                speed, {" "}
                <Math>
                  $\omega^1r = \omega&#123;&#125;r$
                </Math>
                {" "} is also the speed,
                by another name.) (PPS: We couldn't resist writing
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $\omega^1r$
                  </Math>
                  ”
                </NoBreak>
                {" "} instead of {" "}
                <NoBreak>
                  “
                  <Math>
                    $\omega&#123;&#125;r$
                  </Math>
                  ”,
                </NoBreak>
                {" "} to keep things
                extra symmetric {" "}
                <i>
                  &amp;
                </i>
                {" "} typographically aligned.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={23}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}
              Four particles are moving at speed {" "}
              <Math>
                $3$
              </Math>
              {" "}
              around a circle of radius {" "}
              <Math>
                $3$
              </Math>
              {" "} centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              spaced out by {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_four_particles_radius_3.svg" />
            <Pause />
            <OuterP>
              Sketch the position vector, velocity vector,
              acceleration vector, and jerk vector of each
              particle. What is the angular velocity of each
              particle?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Starting with the second part of the
              question, because the particles are going around
              a circle of radius {" "}
              <Math>
                $3$
              </Math>
              {" "} at speed {" "}
              <Math>
                $3$
              </Math>
              {" "} the
              angular velocity (cf. Exercise 37) is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;3\over 3&#125; = 1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which means that the ratio of the lengths of
              all the vectors will be {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., all vectors
              (velocity, acceleration, jerk) will have the
              same length as the radius, which is {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Keeping in mind that the jerk is
              {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} ahead of the acceleration is {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}
              ahead of the velocity, etc, in the direction of
              rotation, the sixteen vectors—four for each
              particle—are therefore as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_four_particles_radius_3_four_minis.svg" />
            <Pause />
            <OuterP>
              (In particular, the purple particle's position
              ends up being the velocity of the red particle,
              and many other identities of the sort.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}
              What are the dimensions of angular velocity?
              (For example, the dimensions of velocity are
              “length over time”, ([L/T]).)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <i>
                Solution 1.
              </i>
              {" "}
              Angular velocity is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed over radius
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              which has dimensions
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large &#123;\te&#123;L/T&#125; \over \te&#123;L&#125;&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because speed has dimensions of length over time,
              L/T, while the radius has dimensions of length, L;
              this simplifies...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_1_over_L_times_L_over_T_simplification.svg" />
            <Pause />
            <OuterP>
              ...down to dimensions of “one over time”.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Solution 2.
              </i>
              {" "}
              Angular velocity is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              radians per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              number of radii per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (if you prefer),
              which is a “one over time” quantity, because
              radians are dimensionless.
            </OuterP>
            <OuterP class="indent-10">
              Indeed, “radian” is
              short for “number of radii that fit inside the
              arc length”, which is one length
              divided by another length,
              which is, therefore,
              dimensionless.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={25}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 25.
              </b>
              {" "}
              Imagine a single particle in a one-dimensional
              world, whose velocity equals its position; at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              the particle is sitting at {" "}
              <NoBreak>
                <Math>
                  $x = 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_one_particle_at_1.svg" />
            <Pause />
            <OuterP>
              If we play time backward, will the particle
              ever reach {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Going back in time,
              examine how long it would take
              the particle to cross each of the intervals defined by
              the following geometric progression* (*see {" "}
              <InChapterLink
                href="/article/chapter4?id=_18_8928"
                class="handle-in-chapter-link">
                Note 1
              </InChapterLink>
              ):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_one_particle_interval_subdivision.svg" />
            <Pause />
            <OuterP>
              The interval from {" "}
              <Math>
                $0.5$
              </Math>
              {" "} to {" "}
              <Math>
                $1$
              </Math>
              {" "}
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.5 \over 1&#125; = 0.5
              $$
              <ImageLeft
                src="/images/svg_ch4_one_particle_speed_equals_time_cloud.svg"
                offset_x="6em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                .
              </NoBreak>
              {" "}
              Similarly, the interval from
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.25 \over 0.5&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                !
              </NoBreak>
              {" "}
              And, again, the interval from
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.125
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0.25
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              takes at least
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;0.125 \over 0.25&#125; = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              time to cross, because the maximum speed of the particle
              inside of that interval is {" "}
              <NoBreak>
                <Math>
                  $0.25$
                </Math>
                .
              </NoBreak>
              {" "} Etc—each interval
              takes {" "}
              <i>
                at least
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              units of time to cross, because the length of each
              interval is half of the maximum speed within the interval!
              But there are infinitely many intervals, and, therefore,
              it takes
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              at least
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              infinitely much time to make it to {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} where the
              “infinitely” comes from adding infinitely many {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                's
              </NoBreak>
              {" "}
              together! (In other words, the particle never makes it to
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} no matter how far back in time you look.)
            </OuterP>
            <Pause />
            <SolutionNote id="_18_8928">
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                A so-called
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric progression
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                is a sequence of numbers in which each number
                is a fixed multiple of the previous number.
                For example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                100,\, 300,\, 900,\, 2700
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a (finite) geometric progression, because each number
                is the previous number multiplied by {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                1,\, 0.5,\, 0.25,\, 0.125,\, 0.0625,\, \ldots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an (infinite) geometric progression, because each number
                is the previous multiplied by {" "}
                <NoBreak>
                  <Math>
                    $0.5$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={26}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 26.
              </b>
              {" "}
              Take a system of two particles on the real
              line; at time {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} the first particle (yellow)
              is at {" "}
              <NoBreak>
                <Math>
                  $x = -1$
                </Math>
                ,
              </NoBreak>
              {" "} while the second one (blue)
              is at {" "}
              <NoBreak>
                <Math>
                  $x = 1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles.svg" />
            <Pause />
            <OuterP>
              If the velocity of the yellow particle is set to track
              the position of the blue particle and vice-versa,
              give a qualitative sketch of the
              position-as-a-function-of-time (time on the {" "}
              <Math>
                $x$
              </Math>
              {" "}
              axis, position on the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis) of the two
              particles. If we add also the graph of the position
              of the red particle from Exercise 41 to this set of
              graphs, what symmetries
              exist altogether between the three graphs?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For {" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "} the yellow and blue particles
              approach {" "}
              <Math>
                $0$
              </Math>
              {" "} in a kind of “radioactive decay”
              pattern; for {" "}
              <NoBreak>
                <Math>
                  $t &lt; 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              they spin
              off to {" "}
              <Math>
                $-\infty$
              </Math>
              {" "} and {" "}
              <Math>
                $\infty$
              </Math>
              {" "} respectively at an
              accelerating rate:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow.svg" />
            <Pause />
            <OuterP>
              If we add the graph of the red particle to the
              mix, it is simply the mirror image of the
              blue particle's position through the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
              {" "}
              <NoBreak>
                (
                <Math>
                  $y$
                </Math>
              </NoBreak>
              {" "} axis that is ironically labeled {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_blue_yellow_red.svg" />
            <Pause />
            <OuterP>
              Indeed, for the red graph,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the slope equals the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -value
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (velocity = position), while
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the slope equals minus the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -value
              </NoBreak>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              for the blue graph (velocity = position
              of yellow = minus own position).
              (We forgot to mention that the blue and
              yellow graphs are mirror images of one another
              through the horizontal axis—this is one of the
              “symmetries” that the problem statement asks about, though.)
              As taking a mirror image through the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis
              negates slopes without affecting {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates,
              </NoBreak>
              {" "}
              while both the blue and red graphs have the same
              value at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} this explains why the mirror
              image of one graph fits the constraints of the other
              and vice-versa:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_three_one_dimensional_particles_red_and_blue_symmetry.svg" />
            <Pause />
            <OuterP>
              Also note that all graphs have slopes of
              {" "}
              <Math>
                $
                \pm 1
                $
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} as we tried to reflect in the sketches,
              because each corresponding particle position
              is either {" "}
              <Math>
                $1$
              </Math>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={27}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 27.
              </b>
              {" "}
              Four particles are placed
              at intervals of {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "}
              around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "}
              centered at {" "}
              <Math>
                $(2, 4)$
              </Math>
              {" "} in the plane:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4.svg" />
            <Pause />
            <OuterP>
              The velocity of each particle is set to
              the position of the next particle clockwise
              around the circle, with this relationship
              maintained at all points in time.
              If the configuration above shows time
              {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "} how will the positions of the
              particles evolve? Discuss both positive and
              negative values of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the particles have position
              vectors that are up and the right,
              so the velocity vectors will be
              up and to the right, so the particles
              will move more up and to the right,
              and the velocity vectors will become
              more “up and to the right”, and so
              on—broadly speaking, for {" "}
              <Math>
                $t &gt; 0$
              </Math>
              {" "} there
              will ensue a kind of  four-particle
              explosion that goes up and to the right,
              off to {" "}
              <NoBreak>
                <Math>
                  $(+\infty, +\infty)$
                </Math>
                .
              </NoBreak>
              <ImageRight
                src="/images/svg_ch4_circle_at_2_4_with_some_vectors_cloud.svg"
                offset_y="150px"
                offset_x="-0.5em" />
            </OuterP>
            <OuterP class="indent-10">
              For {" "}
              <Math>
                $t &lt; 0$
              </Math>
              {" "} motion will be
              down and to the left, at least initially—it
              is hard to forecast off the top of one's
              head (unless you have a sudden flash of insight)
              what will happen for larger negative
              values of {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              HOWEVER.
            </OuterP>
            <OuterP class="indent-10">
              It is possible to say much more.
            </OuterP>
            <OuterP class="indent-10">
              To go deeper, we introduce eight new
              particles, comprising the original colors but
              in white and black flavors:
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
            </CentralDisplay>
            <Pause />
            <OuterP>
              At {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} the white particles are just a
              translate of the original particles, such
              that the circle on which they lie is
              centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_white_version.svg" />
            <Pause />
            <OuterP>
              The black particles, for their part, are
              piled on top of one another at {" "}
              <Math>
                $(x, y) = (2, 4)$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                ,
              </NoBreak>
              {" "}
              that we draw as four quarter-pies
              of different colors, like a UNO card:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_black_version.svg" />
            <Pause />
            <OuterP>
              Within each group we set the velocity of
              the purple particle to the position of the
              yellow particle,
              the velocity of the yellow particle to the
              position of the green particle, etc.
            </OuterP>
            <OuterP class="indent-10">
              In this case the white particles will
              rotate at unit speed around their circle of
              radius {" "}
              <Math>
                $1$
              </Math>
              {" "} centered at the origin, just like
              the particles discussed in the solution to
              Exercise 12, that obey a similar set of
              constraints
              (albeit with a different set of colors).
            </OuterP>
            <OuterP class="indent-10">
              The black particles, for their part,
              behave as a single fused-together particle
              whose velocity is equal to its position,
              and will
              see their motion confined to an infinite
              half-line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "} as their velocity—being
              equal to their position—stays parallel to the
              line between them and the origin, meaning
              they are “stuck” to that line.
            </OuterP>
            <OuterP class="indent-10">
              Also note that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the black particles, being equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              length of the position vector
              <ImageRight
                src="/images/svg_ch4_ex_circle_at_2_4_position_equals_velocity_cloud.svg"
                offset_x="-4em" />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles, is equal to the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance to the origin
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of said particles,
              since the length of the position vector is
              the distance to the origin.
            </OuterP>
            <OuterP class="indent-10">
              This means that if we introduce gradations
              to the afore-mentioned half-line through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_UNO_with_gradated_line.svg" />
            <Pause />
            <OuterP>
              ...indicating the distance to the origin,
              the black particles behave like a
              one-dimensional system comprising a single
              particle on a half-line (or entire line,
              it doesn't hurt) whose velocity is equal to
              its position on this line:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_UNO_flat_half_line.svg" />
            <Pause />
            <OuterP>
              The behavior of such a particle is
              identical to the behavior of the red
              particle from Exercise 41,
              except that the current
              “UNO particle” has a slight head-start over the
              red particle from Exercise 41, being
              at position {" "}
              <Math>
                $x = 2\sqrt&#123;5&#125;$
              </Math>
              {" "}
              instead of at position {" "}
              <Math>
                $x = 1$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                .
              </NoBreak>
              {" "}
              (!!)
              <ImageLeft
                src="/images/svg_ch4_ex_circle_at_2_4_sqrt_20_cloud.svg"
                line={-1} />
            </OuterP>
            <OuterP class="indent-10">
              This describes an “understandable”
              behavior of the black and white particles.
            </OuterP>
            <OuterP class="indent-10">
              Next we write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white particle
              as a function of time (in more detail,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x : \rr \ra \rr$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              to emphasize that WE ARE TALKING ABOUT A FUNCTION, e.g.,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x(2)$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of
              the purple-white particle at
              {" "}
              <NoBreak>
                <Math>
                  $t = 2$
                </Math>
                ,
              </NoBreak>
              {" "} etc), and write
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              for the function that gives
              the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white
              particle as a function of time, and so on
              for all the other particles.
            </OuterP>
            <OuterP class="indent-10">
              For example,
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              because the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple-white particle
              is the value of the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the yellow-white particle; we also have
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x\,\!\!\!' \,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x +$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by adding two such equations together; this can also be
              written
            </OuterP>
            <Pause />
            <CentralDisplay>
              <Math>
                $($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x \,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x + $
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              by the sum rule; but this gives us an idea!; we can
              try to {" "}
              <i>
                define
              </i>
              {" "} the original particles
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              {" "} by setting...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_y$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...and see if these definitions satisfy the constraints
              of the problem! (We momentarily have two different
              purple particles: the one from the problem statement,
              and the one that we have just defined; but that's ok,
              as long as we are aware of this small semantic
              transgression, it is not such a big deal,
              and we shall soon prove that these two
              particles are one and the same.)
              For starters...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_y\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_y\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_x\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_y\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_x\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y\,\!\!\!' = ($
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_y\!\rt&#123;0.05&#125;)' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_y =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y\,\!\!\!' =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, so the constraints
              relating particle velocities to particle positions are
              satisfied (e.g., the velocity vector of the purple particle
              is the position vector of the yellow particle);
              for seconders, evaluating these definitions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} gives...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1black_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2black_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3black_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y(0) =$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y(0) \,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4black_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_x(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_x(0)$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              <Math>
                $_y(0) = 2\,\,+$
              </Math>
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4white_inline.svg" />
              <Math>
                $_y(0)$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              ...cutting out the middle computation, which is to
              say that the positions at time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} of our
              newly-defined particles
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              {" "} are the translate of the white particle
              positions at {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} back up and to the right
              by the vector {" "}
              <NoBreak>
                <Math>
                  $(2, 4)$
                </Math>
                ,
              </NoBreak>
              {" "} which brings those
              positions back to the original positions of
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              {" "} as they appear in the problem statement! I.e.,
              our newly-defined
              particles
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              {" "} are in the desired place at {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                !
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              In other words, the proposed definitions of
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p1_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p2_inline.svg" />
              ,
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p3_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_inline_blackwhite_particles"
                src="/images/svg_ch4_circle_at_2_4_p4_inline.svg" />
              {" "} “work” in the sense of satisfying all the conditions
              of the problem statement, and are, indeed, the
              solution we seek.
            </OuterP>
            <OuterP class="indent-10">
              Qualitatively, this implies that the particles
              can be understood as four particles rotating at
              unit speed around a circle of radius {" "}
              <Math>
                $1$
              </Math>
              {" "} (the
              white particles) where the center of circle (the
              UNO particle) is moving at exponential rate along
              a half-line. In particular, the particles remain
              at constant distance from one another for all {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "}
              whether that seems intuitive or not.
            </OuterP>
            <OuterP class="indent-10">
              Concretely,
              the particle trajectories
              end up like so, locally around {" "}
              <NoBreak>
                <Math>
                  $t = 0$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_circle_at_2_4_solution_curves.svg" />
            <Pause />
            <OuterP>
              The above plot goes from {" "}
              <Math>
                $t = -5$
              </Math>
              {" "} to
              {" "}
              <NoBreak>
                <Math>
                  $t \approx 1$
                </Math>
                —winding
              </NoBreak>
              {" "} further back in time would produce
              near-perfect counterclockwise circular motion,
              as the black particles rush up to {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              and come to a near-halt rather fast,
              leaving only the residual motion of the white
              particles!
            </OuterP>
            <OuterP class="indent-10">
              <i>
                Note 1.
              </i>
              {" "}
              When we said that, for {" "}
              <NoBreak>
                <Math>
                  $t &gt; 0$
                </Math>
                ,
              </NoBreak>
              {" "} there ensues
            </OuterP>
            <Pause />
            <CentralDisplay>
              “a [kind of] four-particle explosion”
            </CentralDisplay>
            <Pause />
            <OuterP>
              in the first paragraph of the solution, the word
              “explosion” might be misleading, implying increased
              distances between the particles over time. This is
              not the case! (But we didn't know any better, back
              then.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              As you might already have caught on, but is
              maybe worth emphasizing,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is not the same thing as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              because, specifically, speed is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              distance per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              —a nonnegative number—whereas velocity is
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              displacement per unit time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              —a vector-valued quantity, or {" "}
              <NoBreak>
                <Math>
                  $\pm$
                </Math>
                -valued
              </NoBreak>
              {" "} quantity,
              in 1 dimension!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={28}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 28.
              </b>
              {" "}
              Find a nonzero function {" "}
              <Math>
                $f$
              </Math>
              {" "} and a nonzero
              constant {" "}
              <Math>
                $a \in \rr$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'(x) = f(x + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Recall the curves from Exercise 12:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_ex_cosine_recall.svg" />
            <Pause />
            <OuterP>
              The blue curve is the derivative of the red curve
              but is also the horizontal translate of the red curve by
              {" "}
              <Math>
                $a$
              </Math>
              {" "} units to the left, where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              a
              $$
              <ImageLeft
                src="/images/svg_ch4_ex_cosine_recall_cloud.svg"
                offset_x="200px"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              is the distance between adjacent bumps. Thus if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the function that generates the red curve, then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'(x) = f(x + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = f(x + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the horizontal translate of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} by {" "}
              <Math>
                $a$
              </Math>
              {" "}
              units to the left, in general for any function
              {" "}
              <Math>
                $f$
              </Math>
              {" "} and constant {" "}
              <NoBreak>
                <Math>
                  $a \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} as discussed
              in Exercise 14 of Chapter 3. (Well, this shows
              one solution, at least.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 29.
              </b>
              {" "}
              Express the...
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;">
                <li>
                  associativity of function composition
                </li>
                <li>
                  associativity of function multiplication
                </li>
                <li>
                  associativity of function addition
                </li>
                <li>
                  commutativity of function multiplication
                </li>
                <li>
                  commutativity of function addition
                </li>
              </ul>
              <p>
                ...as well as the...
              </p>
            </TextParent>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;">
                <li>
                  associativity of real number multiplication
                </li>
                <li>
                  associativity of real number addition
                </li>
                <li>
                  commutativity of real number multiplication
                </li>
                <li>
                  commutativity of real number addition
                </li>
              </ul>
            </TextParent>
            <OuterP>
              ...in the form of self-contained, formal statements.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For the functions:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;">
                <li style="position:relative;">
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $(f \circ g) \circ h = f \circ (g \circ h)$
                    </Math>
                    {" "}
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
                    {" "} such that
                    {" "}
                    <NoBreak>
                      <Math>
                        $h : D \ra C$
                      </Math>
                      ,
                    </NoBreak>
                    {" "} {" "}
                    <NoBreak>
                      <Math>
                        $g : C \ra B$
                      </Math>
                      ,
                    </NoBreak>
                    {" "} {" "}
                    <Math>
                      $f : B \ra A$
                    </Math>
                    {" "}
                    [for arbitrary sets {" "}
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
                    <NoBreak>
                      <Math>
                        $D$
                      </Math>
                      ]
                    </NoBreak>
                  </i>
                  <ImageLeft
                    src="/images/svg_ch4_ex_f_g_h_A_B_C_D_cloud.svg"
                    offset_x="4em" />
                </li>
                <li>
                  <i>
                    the associativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $f(gh) = (fg)h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the associativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + (g + h) = (f + g) + h$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g, h : \rr \ra \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the commutativity of function multiplication is
                    the fact that {" "}
                    <Math>
                      $fg = gf$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the commutativity of function addition is
                    the fact that {" "}
                    <Math>
                      $f + g = g + f$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $f, g : \rr \ra \rr$
                    </Math>
                  </i>
                </li>
              </ul>
            </TextParent>
            <OuterP>
              For the real numbers:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;">
                <li>
                  <i>
                    the associativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $a(bc) = (ab)c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the associativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + (b + c) = (a + b) + c$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b, c \in \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the commutativity of [real number] multiplication is
                    the fact that {" "}
                    <Math>
                      $ab = ba$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </li>
                <li>
                  <i>
                    the commutativity of [real number] addition is
                    the fact that {" "}
                    <Math>
                      $a + b = b + a$
                    </Math>
                    {" "} for all {" "}
                    <Math>
                      $a, b \in \rr$
                    </Math>
                  </i>
                </li>
              </ul>
            </TextParent>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              We never took the time to prove the associativity
              of function addition, but it is easy to prove!
              (For other proofs see Exercise 32, Exercise 33, as
              well as Exercise 9, Chapter 3.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={30}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 30.
              </b>
              {" "}
              How can we generate the following set of
              curves by rotating points around a circle,
              and tracking their {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates?
              </NoBreak>
              {" "} (This
              graph is an exact {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                &amp;#x200b;
              </NoBreak>
              <Math>
                $\times$
              </Math>
              {" "} [“two
              x”] vertical dilation of the graph in Exercise
              12.) Should we use a circle of radius {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "}
              or make the points go twice as fast? Or both?
              Or something else yet?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_scaled_cosine_curves.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The values oscillate between {" "}
              <Math>
                $+2$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $-2$
                </Math>
                ,
              </NoBreak>
              {" "} so we need a circle of radius {" "}
              <Math>
                $2$
              </Math>
              {" "}
              to generate these curves. Also the
              values go through one cycle in the same
              amount of time as the particles of
              Exercise 12, but the circle has twice the
              circumference (having twice the radius),
              so the particles are going twice as fast!
              (I.e.: speed 2, since the particles of
              Exercise 12 have unit speed.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In this and in the previous exercise the
                units of time and distance are “anonymous”:
                distance could be meters, kilometers, or
                anything, and time could be seconds, hours,
                etc—it doesn't matter. Either way,
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                unit speed
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                means that one unit of distance is traveled
                per unit of time, whatever the units are.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={31}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 31.
              </b>
              {" "}
              Exercise 12 exhibits a function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                —in
              </NoBreak>
              {" "} fact,
              four different functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                —such
              </NoBreak>
              {" "} that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f''' \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(4)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              surprise, surprise! Can you do the same with
              {" "}
              <NoBreak>
                “
                <Math>
                  $5$
                </Math>
                ”
              </NoBreak>
              {" "} instead of {" "}
              <NoBreak>
                “
                <Math>
                  $4$
                </Math>
                ”?
              </NoBreak>
              {" "} I.e., find a function
              {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(n)&#125; \ne f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <Math>
                $n = 1, 2, 3, 4$
              </Math>
              {" "} but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(5)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
          </ExerciseStatement>
          <Solution id="_19_4924">
            <OuterP>
              We can naïvely try to imitiate how the
              curves of Exercise 16 are generated by
              placing five equally spaced particles
              around the unit circle (“the” unit circle
              is the one centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} by
              convention), instead of 4:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_position_vectors.svg" />
            <Pause />
            <OuterP>
              The idea would be that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the red particle is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the blue particle,
              likewise for the blue and yellow particles,
              and so on. (Position vectors shown above.)
              For example, at the instant above, the
              velocity vectors would be as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_velocity_vectors.svg" />
            <Pause />
            <OuterP>
              The velocity vectors are
            </OuterP>
            <Pause />
            <CentralDisplay>
              NOT
            </CentralDisplay>
            <Pause />
            <OuterP>
              tangent to the unit circle, and so the
              particles will leave the circle!
              (But that's OK.) In one-tenth a unit
              of time, for example, the particles would
              travel approximately one-tenth their
              velocity vectors, that would bring them
              to approximately these new positions:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_1_10th.svg" />
            <Pause />
            <OuterP>
              In the next one-tenth unit of time we
              can apply a similar approximation again,
              advancing the particles by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 10&#125;$
                </Math>
                th
              </NoBreak>
              {" "}
              of [the current approximation to] their
              velocity vectors. Skipping the construction
              lines:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_2_10th.svg" />
            <Pause />
            <OuterP>
              Applying the same process for {" "}
              <Math>
                $8$
              </Math>
              {" "} more
              steps:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_10_10th.svg" />
            <Pause />
            <OuterP>
              To be clear, in the above figure, the
              position of the red particle at, say, the
              fifth step...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_5_10th.svg" />
            <Pause />
            <OuterP>
              ...is obtained by starting from the red
              particle's position at the fourth step...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_4_10th.svg" />
            <Pause />
            <OuterP>
              ...and adding one-tenth of the approximation
              that we have to the red particle's velocity
              vector at that moment, that approximation
              being namely the blue particle's position
              vector at the fourth step {" "}
              <NoBreak>
                (
                <Math>
                  $t = &#123;4\over 10&#125;$
                </Math>
                )...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_4_10th_b.svg" />
            <Pause />
            <OuterP>
              ...and we do the same for each particle,
              to advance to the next step.
            </OuterP>
            <OuterP class="indent-10">
              If we stop {" "}
              <Math>
                $10$
              </Math>
              {" "} times as often,
              advancing the clock by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th
              </NoBreak>
              {" "} of
              a unit of time at each step, the same figure
              becomes just a blur (still going from
              {" "}
              <Math>
                $t = 0$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $t = 1$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_blur.svg" />
            <Pause />
            <OuterP>
              To visualize such a fine-grained
              approximation we need to revert to drawing
              the particles as points. In the following
              figure the colored paths are points that
              come from a {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th”
              </NoBreak>
              {" "} approximation,
              while the orange dots are the old positions
              obtained from a {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 10&#125;$
                </Math>
                th”
              </NoBreak>
              {" "}
              approximation:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_points.svg" />
            <Pause />
            <OuterP>
              Zooming in a bit (or else we still can't
              see anything):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_after_100_100th_zoomed.svg" />
            <Pause />
            <OuterP>
              In any case, even the {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 100&#125;$
                </Math>
                th”
              </NoBreak>
              {" "}
              approximation is just an approximation,
              but the point is that such approximations
              do converge to a set of “true” particle
              paths, as pictured in {" "}
              <NoBreak>
                Fig
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} 1, that can
              be computed by some wizards; as time can
              be played forward or backward, these paths
              form doubly-infinite spirals—in to infinity,
              out to infinity.
              <ImageLeft
                offset_x="1.5em"
                src="/images/svg_ch4_5_euler_spiral_figure.svg"
                children_x="50%"
                children_y="2em">
                <p>
                  <span style="font-size:1.4em">
                    Fig. 1
                  </span>
                </p>
              </ImageLeft>
            </OuterP>
            <OuterP class="indent-10">
              In any case [take two] the point is that
              whether or not you are one of the wizards,
              you can
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              guess
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the existence of these five paths—sort
              of “feel” that they exist! (This is a
              moral consolation prize, at least.)
            </OuterP>
            <OuterP class="indent-10">
              We can also convert the paths into a
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that satisfies the problem requirements.
            </OuterP>
            <OuterP class="indent-10">
              For example let {" "}
              <Math>
                $f$
              </Math>
              {" "} be the function that,
              given a time {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "} outputs the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              of the red particle at {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ;
              </NoBreak>
              {" "} then, to spell
              it all out, since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the red particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the blue particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'$
              </Math>
              {" "} is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the blue
              particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the blue particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the yellow particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''$
              </Math>
              {" "} is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the
              yellow particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the yellow particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the green particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f'''$
              </Math>
              {" "} is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the
              green particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the green particle
              is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple
              particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''''$
              </Math>
              {" "} is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the
              purple particle; and since
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the purple particle is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the red particle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $f''''' = f^&#123;(5)&#125;$
              </Math>
              {" "} equals {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 4.
              </i>
              {" "}
              If you graph the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of the
              5 particles over time, each in their
              color, you get a graph like so, in which
              blue is the derivative of red, yellow is
              the derivative of blue, etc; the function
              {" "}
              <Math>
                $f$
              </Math>
              {" "} can be taken to be any one of these
              curves:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_final_graph.svg" />
            <Pause />
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "}
              There is nothing special about
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} vis-à-vis {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates.
              </NoBreak>
              {" "}
              You can also define {" "}
              <Math>
                $f(t)$
              </Math>
              {" "} to be, e.g.,
              the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of the red particle
              at time {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 6.
              </i>
              {" "}
              It is worth noting that, in fact, the
              {" "}
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
                -coordinates
              </NoBreak>
              {" "} live separate
              lives. The rate of change of each
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} is some other {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate,
              </NoBreak>
              {" "}
              and the rate of change of each {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "}
              is some other {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate.
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 4.
              </i>
              {" "}
              Adding to this observation, we don't
              {" "}
              <i>
                need
              </i>
              {" "} to start the particles in
              a symmetric configuration. Symmetry only
              helps to picture how the positions of the
              particles will evolve without making any
              computations. We also don't {" "}
              <i>
                need
              </i>
              {" "}
              to work in two dimensions. We can place
              the particles in a one-dimensional world,
              e.g., ...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_5_euler_one_dimensional.svg" />
            <Pause />
            <OuterP>
              ...(the initial positions really don't
              matter much, as long as you don't give
              all the particles the {" "}
              <i>
                same
              </i>
              {" "} initial
              position, or else you won't have {" "}
              <Math>
                $f \ne f'$
              </Math>
              {" "}
              etc) and stipulate the same rules, namely
              that the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              velocity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (now {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                -dimensional)
              </NoBreak>
              {" "} of the red particle
              be the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              position
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (now {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                -dimensional)
              </NoBreak>
              {" "} of the blue particle
              and so on—you can “release” the particles
              from their initial configuration and
              simulate (or compute exactly, if you have
              the know-how) their motion by the same
              methods as above. The five position
              functions obtained are each a solution
              {" "}
              <Math>
                $f$
              </Math>
              {" "} to the problem. (But this solution will
              typically look more chaotic than the curves
              from Note 1.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "}
              In fact, our symmetric two-dimensional
              solution is an instance in which you can say
              that
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the whole is simpler than the parts
              <ImageLeft src="/images/svg_ch4_5_euler_hearts_left.svg" />
              <ImageRight src="/images/svg_ch4_5_euler_hearts_right.svg" />
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              in that you would never spot the symmetry
              at play, or have a chance of eyeballing
              the long-term evolution of the system, if
              you were shown just the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates,
              </NoBreak>
              {" "}
              or just the {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates,
              </NoBreak>
              {" "} on their own!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={32}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 32.
              </b>
              {" "}
              If we seek a function {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "}
              such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and such that {" "}
              <Math>
                $f \ne 0$
              </Math>
              {" "} (or: {" "}
              <NoBreak>
                <Math>
                  $f \ne (x \ra 0)$
                </Math>
                ,
              </NoBreak>
              {" "}
              pedantically) and such that {" "}
              <Math>
                $f$
              </Math>
              {" "} grows relatively
              slowly in either the positive or negative direction
              of the number line, insofar as such things are
              concerned, what would our options be?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Take {" "}
              <Math>
                $17$
              </Math>
              {" "} particles equally spaced out along
              the unit circle, such as these (shown here
              with position vectors):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_position_vectors.svg" />
            <Pause />
            <OuterP>
              Set the velocity of particle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equal to the position of particle
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\Large 5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and keep going by this pattern, making the
              velocity of each particle equal to the
              position of the particle that is {" "}
              <Math>
                $4$
              </Math>
              {" "} later;
              in the configuration above, the velocity
              vectors end up looking like so, for example:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_velocity_vector_1.svg">
              <ImageRight src="/images/svg_ch4_17_velocity_vector_1_cloud.svg" />
            </Image>
            <Pause />
            <OuterP>
              Maintaining this relationship at all
              points in time, and given that the velocity
              vectors point very slightly outward from
              the unit circle, and because all the
              symmetry and all the angles are maintained
              as we play time forward or backward, the
              particles spiral gently outward/inward from
              the circle for time forward/backward,
              respectively. Taking {" "}
              <Math>
                $f(t)$
              </Math>
              {" "} to be the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "}
              or {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of any one of the particles
              (e.g., particle {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                )
              </NoBreak>
              {" "} at time {" "}
              <Math>
                $t$
              </Math>
              {" "} gives an
              oscillating function whose {" "}
              <NoBreak>
                <Math>
                  $17$
                </Math>
                th
              </NoBreak>
              {" "} derivative
              is itself (because the rate of change of
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of particle {" "}
              <Math>
                $1$
              </Math>
              {" "} is the
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of particle {" "}
              <NoBreak>
                <Math>
                  $5$
                </Math>
                ,
              </NoBreak>
              {" "} etc, until
              we make it all the way back to particle {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ),
              </NoBreak>
              {" "}
              and that grows comparatively slowly over
              time. ~The End~
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              In case you're curious, the actual spiral paths
              of the particles look like so:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_paths.svg" />
            <Pause />
            <OuterP>
              ...and if you take the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} of
              the particles over time, with time {" "}
              <Math>
                $t = 0$
              </Math>
              {" "}
              corresponding to the original configuration
              depicted where particle 1 is at {" "}
              <NoBreak>
                <Math>
                  $(1, 0)$
                </Math>
                ,
              </NoBreak>
              {" "} you
              find
              <del>
                paths
              </del>
              {" "} functions that look like so:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_actual_functions.svg" />
            <Pause />
            <OuterP>
              For example, the derivative of curve
              <InlineImage src="/images/svg_ch4_17_particle1_inline.svg" />
              , highlighted below in red, is curve
              <InlineImage src="/images/svg_ch4_17_particle5_inline.svg" />
              , highlighted in blue:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_actual_functions_with_highlights.svg" />
            <Pause />
            <OuterP>
              ...and taking sixteen more derivatives
              starting from curve
              <InlineImage
                src="/images/svg_ch4_17_particle5_inline.svg"
                style="margin-right:0.8em" />
              we would go through curves
              <InlineImage src="/images/svg_ch4_17_particle9_inline.svg" />
              ,
              <InlineImage src="/images/svg_ch4_17_particle13_inline.svg" />
              ,
              <InlineImage src="/images/svg_ch4_17_particle17_inline.svg" />
              ,
              <InlineImage src="/images/svg_ch4_17_particle4_inline.svg" />
              , ...,
              <InlineImage src="/images/svg_ch4_17_particle14_inline.svg" />
              before finally coming back to curve
              <InlineImage
                src="/images/svg_ch4_17_particle1_inline.svg"
                style="margin-right:0.1em" />
              !
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              It can be interesting to examine what
              goes wrong if we attempt to make the
              velocity vectors even more tangent to the
              unit circle. For example, if we start the
              particles so that particle 5 is at
              {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from particle 1,
              particle 9 is at {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} exactly from
              particle 5, and so on, until we reach
              particle 14, the last particle in this
              order; then we have the following starting
              configuration:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_other_start.svg" />
            <Pause />
            <OuterP>
              To parse the above figure, understand
              that:
            </OuterP>
            <TextParent>
              <ul style="margin:20px 20px 20px 50px;list-style-type:disc;">
                <li style="margin-bottom:10px;">
                  the red arrows indicate which particle
                  takes its velocity from the position
                  of which other particle; for example,
                  particle 1 has velocity equal to the
                  position of particle 5
                </li>
                <li>
                  particles that occupy the same starting
                  position on the unit circle appear
                  stacked together, as a representation
                  device; for example, particle 2 has the
                  same starting position as particle 5
                </li>
              </ul>
            </TextParent>
            <OuterP>
              (Note that the red arrows have to form
              a cycle of length 17 in order for us to
              later extract a function {" "}
              <Math>
                $f$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f^&#123;(17)&#125; = f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but this is the case: the red arrows only
              “close the loop” after going through all
              17 particles!)
            </OuterP>
            <OuterP class="indent-10">
              In this starting configuration, all
              velocity vectors are exactly tangent to
              the unit circle
            </OuterP>
            <Pause />
            <CentralDisplay>
              EXCEPT
            </CentralDisplay>
            <Pause />
            <OuterP>
              for particle 14, whose velocity vector,
              being the position of particle 1, is straight
              out from the circle! So, as we “start time”,
              particle 14 will push out from the circle,
              that will in turn affect particle 10, and
              so on, until all particles end up being
              “peeled off” from the circle, in due time;
              if you are so curious, the particle
              trajectories end up like so (shown only for
              {" "}
              <NoBreak>
                <Math>
                  $t \geq 0$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_17_other_start_paths.svg" />
            <Pause />
            <OuterP>
              The particles shoot of to infinity in short
              order—the solution is much worse—for fun we
              have also highlighted two particle trajectories
              in this figure:
            </OuterP>
            <TextParent>
              <ul style="margin:20px 20px 20px 50px;list-style-type:disc;">
                <li style="margin-bottom:10px;">
                  in {" "}
                  <span style="border:1px solid blue">
                    blue
                  </span>
                  , particle 1, the last particle
                  to be (noticeably*) “peeled off” from
                  the circle (*all particles are
                  instantaneously peeled off from the
                  circle to {" "}
                  <i>
                    some
                  </i>
                  {" "} degree, as one
                  particle's slight deviation affects
                  the next, that affects the next, etc)
                </li>
                <li>
                  in {" "}
                  <span style="border:1px solid red">
                    red
                  </span>
                  , particle 14, the {" "}
                  <i>
                    first
                  </i>
                  {" "} particle
                  to leave the circle—but because its
                  velocity vector is given by particle 1,
                  which itself starts by going around in
                  a circle, it, too, starts out by going
                  around in a circle!
                </li>
              </ul>
            </TextParent>
            <OuterP>
              (The point is: if your velocity vector
              is tracing a circle centered at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                —at
              </NoBreak>
              {" "}
              a uniform rate—then you, too, are going
              around in a circle—it's just that your
              circle could be centered anywhere, not
              necessarily at {" "}
              <NoBreak>
                <Math>
                  $(0, 0)$
                </Math>
                !)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={33}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 33.
              </b>
              {" "}
              Add elements to the following drawing...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_newton_quotient_unfinished.svg" />
            <Pause />
            <OuterP>
              ...such that it becomes a “complete”
              illustration of this here algebraic
              expression...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x+h) - f(x) \over h&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...and reveal the “geometric meaning” of
              the expression, if any.
            </OuterP>
          </ExerciseStatement>
          <Solution id="_20_7755">
            <OuterP>
              This version pictures all the elements
              that appear in the fraction:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_newton_quotient_finished.svg" />
            <Pause />
            <OuterP>
              The point is: the fraction
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + h) - f(x)\over h&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is seen to have the form {" "}
              <i>
                rise over run
              </i>
              ,
              and is more precisely equal to the slope
              of the pale brown line going through the
              point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, f(x))
              $$
              <ImageLeft
                src="/images/svg_ch4_new_quatient_x_fx_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              at one end, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x + h, f(x + h))
              $$
              <ImageRight
                offset_y="-0.5em"
                src="/images/svg_ch4_new_quatient_x_fxplush_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              at the other end. (This is also the case
              if {" "}
              <Math>
                $h$
              </Math>
              {" "} is negative, by the way.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 7.
              </i>
              {" "}
              A fraction of this form is called a {" "}
              <i>
                Newton
                quotient
              </i>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 8.
              </i>
              {" "}
              The pale brown line is sometimes known as
              the {" "}
              <i>
                secant
              </i>
              {" "} [through {" "}
              <NoBreak>
                <Math>
                  $(x, f(x))$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $(x+h, f(x+h))$
                </Math>
                ].
              </NoBreak>
              {" "}
              “Secant” is a general term for “line passing
              through two specified points on another
              curve”.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 9.
              </i>
              {" "}
              If we let {" "}
              <Math>
                $h$
              </Math>
              {" "} drop to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} and if {" "}
              <Math>
                $f$
              </Math>
              {" "} is
              differentiable at {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                ,
              </NoBreak>
              {" "} the
              Newton-quotient-a.k.a.-slope-of-the-secant
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the secant approaches the tangent,
              in that case, and the slope of the secant
              is also, perforce, approaching the slope
              of the tangent, which is {" "}
              <NoBreak>
                <Math>
                  $f'(x)$
                </Math>
                .
              </NoBreak>
              {" "} (But you
              cannot directly set {" "}
              <NoBreak>
                <Math>
                  $h = 0$
                </Math>
                ,
              </NoBreak>
              {" "} because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x+0)-f(x)\over 0&#125; = &#123;0 \over 0&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is undefined.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={34}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 34.
              </b>
              {" "}
              In this exercise we consider two points
              in time {" "}
              <Math>
                $t_0$
              </Math>
              {" "} and {" "}
              <Math>
                $t_0 + \Delta&#123;&#125;t$
              </Math>
              {" "} (here
              {" "}
              <NoBreak>
                “
                <Math>
                  $\Delta&#123;&#125;t$
                </Math>
                ”,
              </NoBreak>
              {" "} read “delta {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ”,
              </NoBreak>
              {" "} is a
              standard notation for a small amount of
              time):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_timeline.svg" />
            <Pause />
            <OuterP>
              We also consider quantities {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              that are changing with time; {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "}
              have some value at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} and, say, grow
              to be larger at {" "}
              <NoBreak>
                <Math>
                  $t_0 + \Delta&#123;&#125;t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_timeline_with_A_B.svg" />
            <Pause />
            <OuterP>
              More specifically, we are interested in
              the change in the value of the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over said course of time.
            </OuterP>
            <OuterP class="indent-10">
              To introduce an unsolicited metaphor,
              imagine {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} as
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_rats.svg" />
            <Pause />
            <OuterP>
              that are crossing a hallway surveyed by
              a cat. One side of the hallway is time
              {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} the other side of the hallway is
              time {" "}
              <NoBreak>
                <Math>
                  $t_0 + \Delta&#123;&#125;t$
                </Math>
                .
              </NoBreak>
              {" "} So great is their
              terror that {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} have decided to
              scurry across the hallway one at a time.
              First {" "}
              <Math>
                $A$
              </Math>
              {" "} will go, then {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                .
              </NoBreak>
              {" "} In so, we
              can separate the following moments of
              interest (“moments” that exist inside the
              metaphorical timeline of the story, not
              on the {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                -number
              </NoBreak>
              {" "} line, to be clear):
              <ImageLeft
                offset_x="0.5em"
                offset_y="-0.5em"
                src="/images/svg_ch4_RATS_corridor_cloud.svg" />
            </OuterP>
            <TextParent>
              <ol style="margin:0 1.5em 0.5em 2em;list-style:auto;list-style-position:outside;">
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} are both still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} has made it to {" "}
                  <NoBreak>
                    <Math>
                      $t_0 + \Delta&#123;&#125;t$
                    </Math>
                    ,
                  </NoBreak>
                  {" "}
                  and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} is still at {" "}
                  <Math>
                    $t_0$
                  </Math>
                </li>
                <li style="margin-top:0.5em">
                  <del>
                    when {" "}
                    <NoBreak>
                      <Math>
                        $B$
                      </Math>
                      's
                    </NoBreak>
                    {" "} tail is sticking out of the
                    cat's mouth, and
                  </del>
                  {" "} when {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} and {" "}
                  <Math>
                    $B$
                  </Math>
                  {" "} have both made it
                  to {" "}
                  <Math>
                    $t_0 + \Delta&#123;&#125;t$
                  </Math>
                </li>
              </ol>
            </TextParent>
            <OuterP>
              Correspondingly, the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large AB
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              changes in two increments: first as {" "}
              <Math>
                $A$
              </Math>
              {" "}
              makes it to the other side of the hallway
              (and {" "}
              <Math>
                $A$
              </Math>
              {" "} grows bigger); then as {" "}
              <Math>
                $B$
              </Math>
              {" "} joins
              him/her (and {" "}
              <Math>
                $B$
              </Math>
              {" "} grows bigger). In an
              equation:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_equation.svg" />
            <Pause />
            <OuterP>
              If we divide the above equation by {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "}
              and let {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} drop to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} what does
              each term become?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Dividing by {" "}
              <NoBreak>
                <Math>
                  $\Delta&#123;&#125;t$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_equation_over_Dt.svg" />
            <Pause />
            <OuterP>
              As {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} the term
              on the left-hand side approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where we view {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} as functions
              of time with, therefore, the product {" "}
              <Math>
                $AB$
              </Math>
              {" "}
              also becoming a function of time. (By
              definition, {" "}
              <Math>
                $AB$
              </Math>
              {" "} is the function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t \rightarrow A(t)B(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where {" "}
              <Math>
                $A(t)$
              </Math>
              {" "} is the value of {" "}
              <Math>
                $A$
              </Math>
              {" "} at time
              {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $B(t)$
              </Math>
              {" "} is the value of {" "}
              <Math>
                $B$
              </Math>
              {" "} at time
              {" "}
              <NoBreak>
                <Math>
                  $t$
                </Math>
                .)
              </NoBreak>
              {" "} Indeed, a ratio of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a Newton quotient (cf. Exercise 16),
              that approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} assuming
              {" "}
              <Math>
                $f$
              </Math>
              {" "} is differentiable at {" "}
              <Math>
                $t_0$
              </Math>
              {" "} (cf.
              Exercise 16 {" "}
              <InChapterLink
                href="/article/chapter4?id=_16_7040"
                class="handle-in-chapter-link">
                Note 3
              </InChapterLink>
              ), and
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_RATS_over_Dt_first_term.svg" />
            <Pause />
            <OuterP>
              has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0)\over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $f = AB$
                </Math>
                .
              </NoBreak>
              <ImageLeft src="/images/svg_ch4_RATS_for_f_equals_AB_cloud.svg" />
            </OuterP>
            <OuterP class="indent-10">
              The first term on the right-hand side, for
              its part, approaches
              <ImageRight src="/images/svg_ch4_RATS_first_term_cloud.svg" />
            </OuterP>
            <OuterP class="indent-10">
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} Indeed,
              when you write it out, that term becomes
              the algebraic expression
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0) - A(t_0)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where every term on top contains a
              {" "}
              <NoBreak>
                “
                <Math>
                  $B(t_0)$
                </Math>
                ”,
              </NoBreak>
              {" "} that can therefore be factored
              out, giving us the equivalent expression
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;A(t_0 + \Delta&#123;&#125;t) - A(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that, you will notice, has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B(t_0)\cdot&#123;f(t_0 + \Delta&#123;&#125;t) - f(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $f = A$
                </Math>
                ,
              </NoBreak>
              {" "} and thus approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B(t_0) \cdot A'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} by the property
              of the Newton quotient.
            </OuterP>
            <OuterP class="indent-10">
              Lastly the most interesting term is the
              second term on the right-hand side!
              Symmetrically to the first term on the
              right-hand side, the second term approaches
              <ImageRight src="/images/svg_ch4_RATS_second_term_cloud.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} but the
              reasons are slightly different! (Slightly.)
              Indeed, this term, written out, is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A(t_0 + \Delta&#123;&#125;t)B(t_0+\Delta&#123;&#125;t) - A(t_0+ \Delta&#123;&#125;t)B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is equal to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)\cdot&#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by factoring out the common term {" "}
              <NoBreak>
                <Math>
                  $A(t_0 + \Delta&#123;&#125;t)$
                </Math>
                ;
              </NoBreak>
              {" "}
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;B(t_0+\Delta&#123;&#125;t) - B(t_0) \over \Delta&#123;&#125;t&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} like before
              (when we had {" "}
              <Math>
                $AB$
              </Math>
              {" "} or {" "}
              <Math>
                $A$
              </Math>
              {" "} instead of {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                )
              </NoBreak>
              {" "}
              whereas
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0 + \Delta&#123;&#125;t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              —which is a bit different from before—approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                —so
              </NoBreak>
              {" "} that makes up
              {" "}
              <NoBreak>
                <Math>
                  $A(t_0)B'(t_0)$
                </Math>
                .
              </NoBreak>
              {" "} (The
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <Math>
                $B$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                —that
              </NoBreak>
              {" "} we are tacitly
              assuming—implies
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              as well, which implies that {" "}
              <Math>
                $A(t_0 + \Delta&#123;&#125;t)$
              </Math>
              {" "}
              approaches {" "}
              <Math>
                $A(t_0)$
              </Math>
              {" "} as {" "}
              <Math>
                $\Delta t$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Summarizing, the three terms separately
              approach
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              B(t_0)A'(t_0)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $\Delta&#123;&#125;t$
              </Math>
              {" "} approaches {" "}
              <Math>
                $0$
              </Math>
              {" "} and, in fact,
              because the equation holds no matter how
              close we make each term to its respective limit
              above, one can conclude that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0) = B(t_0)A'(t_0) + A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for functions {" "}
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
              {" "} differentiable at
              a point {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Nb: This result is known as the {" "}
              <i>
                product rule
              </i>
              .
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              Keeping things alphabetical everywhere, the
              same equation is more often written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (AB)'(t_0) = A'(t_0)B(t_0) + A(t_0)B'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <NoBreak>
                “
                <Math>
                  $A'(t_0)B(t_0)$
                </Math>
                ”
              </NoBreak>
              {" "} in the middle. (But
              which is the same, of course, as {" "}
              <NoBreak>
                <Math>
                  $B(t_0)A'(t_0)$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={35}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 35.
              </b>
              {" "}
              The identity
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              happens to be true for differentiable
              functions {" "}
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
                .
              </NoBreak>
              {" "} What English-language
              aphorism can summarize it? (This identity
              is known as the {" "}
              <i>
                sum rule
              </i>
              , by the way.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              One can say
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the derivative of the sum is the sum of the
              derivatives
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the sum is the sum of
              the rates of change
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or (we made this one up)
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the rate of change of the aggregate is the sum
              of the rates of change of the components
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (etc).
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={36}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 36.
              </b>
              {" "}
              If we rewrite the “product rule” of Exercise
              17 in the same terse style as the “sum rule”
              of Exercise 19, what do we obtain?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The form of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...that follows the style of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...is...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...this. (Valid for differentiable functions
              {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $g:$
              </Math>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\rr \ra \rr$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              Whereas
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an equality between real numbers,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an equality between functions. So there is
              a more-than-skin-deep difference between the
              two forms. Also note that each form has its
              own “qualitatively distinct” qualifying conditions.
            </OuterP>
            <OuterP class="indent-10">
              (To wit,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)'(t_0) = f'(t_0)g(t_0) + f(t_0)g'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              holds “for {" "}
              <Math>
                $t_0$
              </Math>
              {" "} at which {" "}
              <Math>
                $f$
              </Math>
              {" "} and {" "}
              <Math>
                $g$
              </Math>
              {" "} are
              differentiable”, while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              holds “for differentiable functions {" "}
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
                ”.)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={37}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 37.
              </b>
              {" "}
              If the identities
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)' = f' + g'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (fg)' = f'g + fg'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for differentiable {" "}
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
              {" "} are deemed
              “differentiation formulas”, then what is a
              third “differentiation formula” {" "}
              <i>
                already
                encountered
              </i>
              {" "} (in possibly disguised form) prior
              to this point?
            </OuterP>
          </ExerciseStatement>
          <Solution id="_21_2242">
            <OuterP>
              That would be the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (cf)' = cf'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all differentiable functions {" "}
              <NoBreak>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              for all {" "}
              <NoBreak>
                <Math>
                  $c \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} mentioned in Exercise 10
              for {" "}
              <NoBreak>
                <Math>
                  $c = 2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 10.
              </i>
              {" "}
              You can also write
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (cf)' = c \cdot f'
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              if it helps clarify the difference between the
              left- and right-hand sides. (The difference being
              namely {" "}
              <NoBreak>
                “(
                <Math>
                  $c$
                </Math>
              </NoBreak>
              {" "} times {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                )
              </NoBreak>
              {" "} prime” on the left vs. “c
              times {" "}
              <NoBreak>
                (
                <Math>
                  $f$
                </Math>
              </NoBreak>
              {" "} prime)” on the right.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={38}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 38.
              </b>
              {" "}
              The solution to the previous exercise
              erroneously assumes that the product of a
              constant and a function has been defined. It
              has not! Keeping in mind that the {" "}
              <i>
                sum
              </i>
              {" "}
              of two functions {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $g: \rr \ra \rr$
              </Math>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is defined by the equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + g(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while their composition is defined by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g = (x \ra f(g(x)))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and so on, what is the similar, most logical
              definition for
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where {" "}
              <Math>
                $c \in \rr$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $f : \rr \ra \rr$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The “logical” definition is:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra cf(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where the product {" "}
              <NoBreak>
                “
                <Math>
                  $cf(x)$
                </Math>
                ”
              </NoBreak>
              {" "} is an ordinary
              multiplication between two real numbers,
              because {" "}
              <Math>
                $c$
              </Math>
              {" "} is a real number and {" "}
              <Math>
                $f(x)$
              </Math>
              {" "} is
              a real number! (In this way, the product of
              a function by a real number “bootstraps”
              off of the ordinary product of real numbers—this
              is already similar to what happens for the
              definition...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of the product of two functions from {" "}
              <Math>
                $\rr$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $\rr$
                </Math>
                ,
              </NoBreak>
              {" "}
              or with the case of function addition, that
              relies on real number addition.) BUT. There
              is a MORE CLEVER way of doing the definition.
              Which is to define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              cf = (x \ra c)f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where the right-hand-side is {" "}
              <i>
                one function
                times another
              </i>
              , i.e., {" "}
              <i>
                a product of functions
              </i>
              ,
              which is something that has ITSELF ALREADY BEEN
              DEFINED. (!) (To wit, the definition of
              function multiplication is that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              fg = (x \ra f(x)g(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of course.) (Wait we just mentioned that
              already.) Mathematicians LOVE to bootstrap off
              an intermediate step, instead of going back to
              the beginning, so the second way is clearly the
              superior definition!!
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={39}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 39.
              </b>
              {" "}
              The definition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + f(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for a sum of functions {" "}
              <Math>
                $f, g : \rr \ra \rr$
              </Math>
              {" "}
              can also be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f + g)(x) = f(x) + g(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in the sense that either of these equations tells
              you how {" "}
              <Math>
                $f + g$
              </Math>
              {" "} acts on an arbitrary input. (Which
              is what you need to do, to define a function. A
              slight subtlety is that the definition
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f + g = (x \ra f(x) + f(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              announces more clearly via its notation that
              {" "}
              <NoBreak>
                “
                <Math>
                  $f + g$
                </Math>
                ”
              </NoBreak>
              {" "} {" "}
              <i>
                is a function
              </i>
              {" "} and not some other
              object, like a number, but this is a minor point.)
              Rewrite the definitions of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f \circ g
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              fg
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f/g
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f - g
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in the style of the second equation. For extra
              credit: use a different symbol each time to denote
              the input.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              E.g.:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (f \circ g)(x) = f(g(x))
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (fg)(u) = f(u)g(u)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (f/g)(z) = f(z)/g(z)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (f - g)(t) = f(t) - g(t)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (Looking at these definitions we must really admit that
              we prefer the first form, with the arrow, found at the
              end of the chapter—it's more explicit!)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={40}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 40.
              </b>
              {" "}
              What does...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h) \,\times\, &#123;A_i(t_0 + h) - A_i(t_0)\over h&#125; \,\times\, A_&#123;i + 1&#125;(t_0) \,\times\, \cdots  \,\times\, A_n(t_0)
              $$
              <ImageRight
                src="/images/svg_ch4_big_product_parchment_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              ...approach as {" "}
              <Math>
                $h$
              </Math>
              {" "} goes to {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <Math>
                $A_1, \dots, A_n$
              </Math>
              {" "}
              {" "}
              <Math>
                $: \rr \ra \rr$
              </Math>
              {" "} are differentiable at the point {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We can start with the fraction in the
              middle of the product:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_big_product_fraction_outline.svg" />
            <Pause />
            <OuterP>
              This is seen to be a Newton quotient
              (cf. Exercise 16)
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x + h) - f(x)\over h
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <NoBreak>
                <Math>
                  $f = A_i$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x = t_0$
                </Math>
                ,
              </NoBreak>
              {" "} per which
              (Exercise 16 Note 3), the fraction approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_i'(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} given also the assumption
              that each of the functions {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} ..., {" "}
              <Math>
                $A_n$
              </Math>
              {" "}
              (including {" "}
              <NoBreak>
                <Math>
                  $A_i$
                </Math>
                )
              </NoBreak>
              {" "} is differentiable at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Next down in order of interesting-ness we presumably
              have the terms {" "}
              <Math>
                $A_1(t_0 + h)$
              </Math>
              {" "} through {" "}
              <Math>
                $A_&#123;i-1&#125;(t_0 + h)$
              </Math>
              {" "}
              at the beginning of the product...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_big_product_prefix_outline.svg" />
            <Pause />
            <OuterP>
              ...; here the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              differentiability
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <Math>
                $t_0$
              </Math>
              {" "} implies the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              continuity
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <Math>
                $A_1$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t_0$
                </Math>
                ,
              </NoBreak>
              {" "} which implies that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} (These various
              technicalities concerning a generic function
              {" "}
              <Math>
                $f : \rr \ra \rr$
              </Math>
              {" "} are mentioned in the solution
              to Exercise 17.) Similarly for {" "}
              <NoBreak>
                <Math>
                  $A_2(t_0 + h)$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc, up to {" "}
              <NoBreak>
                <Math>
                  $A_&#123;i-1&#125;(t_0 + h)$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0 + h) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0 + h)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              approaches
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1(t_0) \,\times\, \dots \,\times\, A_&#123;i-1&#125;(t_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as {" "}
              <Math>
                $h$
              </Math>
              {" "} approaches {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} (If some quantities are
              each approaching a different value, then the
              product-of-the-quantities will approach the
              product-of-the-values—something not mentioned
              in the solution to Exercise 17, but that might
              have been.)
            </OuterP>
            <OuterP class="indent-10">
              Lastly one has the tail end of the product,
              where {" "}
              <Math>
                $h$
              </Math>
              {" "} does not even appear:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_big_product_suffix_outline.svg" />
            <Pause />
            <OuterP>
              Because {" "}
              <Math>
                $h$
              </Math>
              {" "} does not appear here, the tail end
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              stays put
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              where it is, irrespective of the value of {" "}
              <NoBreak>
                <Math>
                  $h$
                </Math>
                .
              </NoBreak>
              {" "}
              So that was easy! Altogether, the answer is
              therefore:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_big_product_final_answer.svg" />
            <Pause />
            <OuterP>
              ...with a lone {" "}
              <NoBreak>
                “
                <Math>
                  $A_i'$
                </Math>
                ”
              </NoBreak>
              {" "} in the middle.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={41}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 41.
              </b>
              {" "}
              The function below is also the red
              curve from Exercise 12, known as the
              {" "}
              <i>
                cosine function
              </i>
              {" "} (already encountered
              in Chapter 3, Exercise 7). Knowing that
              this function is the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a
              point rotating at unit speed around a unit
              circle, find, by inspection of the graph,
              a rational approximation to the circumference
              of a unit circle.
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Because the particle is going at unit speed the
              circumference of the unit circle is equal to the
              amount of time it takes the particle to complete one
              revolution of the circle. That is, for example, the
              length of this yellow interval:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_with_yellow.svg" />
            <Pause />
            <OuterP>
              One revolution around the circle is also
              made up of four quarter-revolutions, where
              each quarter-revolution of the circle is “half a bump”,
              on the graph:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_with_two_yellows.svg" />
            <Pause />
            <OuterP>
              Going a bit further, {" "}
              <i>
                seven
              </i>
              {" "} of these
              quarter-revolutions appear to take up exactly
              {" "}
              <Math>
                $t = 11$
              </Math>
              {" "} units of time (!!!!!!!!!!!) (or maybe
              just a {" "}
              <i>
                little
              </i>
              {" "} less than {" "}
              <Math>
                $11$
              </Math>
              {" "} units, if
              you zoom in):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_revealed.svg" />
            <Pause />
            <OuterP>
              Therefore
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;11 \over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an approximation to the quarter-circumference of
              the circle, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 4 \cdot &#123;11 \over 7&#125; = &#123;44 \over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an approximation to the circumference of a unit
              circle.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              This approximation ends up being about
              half-a-part-in-a-thousand too large
              {" "}
              <NoBreak>
                (
                <Math>
                  $0.040249943...\%$
                </Math>
              </NoBreak>
              {" "} too large) (or just:
              {" "}
              <NoBreak>
                “
                <Math>
                  $0.00040249943...$
                </Math>
              </NoBreak>
              {" "}
              too large”), which is strikingly good, all things
              considered.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              Numerically, note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;44 \over 7&#125; = 6.285714\dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a bit larger than {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ,
              </NoBreak>
              {" "} which agrees with
              what we see here for the length of a full
              revolution...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_tau_verification.svg" />
            <Pause />
            <OuterP>
              ...whereas
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large &#123;11 \over 7&#125; = 1.571428\dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is about {" "}
              <NoBreak>
                <Math>
                  $1.6$
                </Math>
                ,
              </NoBreak>
              {" "} which also appears to agree
              with what we can see on the graph about the
              length of a quarter-revolution:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_cosine_for_eta_eta_verification.svg" />
            <Pause />
            <OuterP>
              (So, we have some secondary “visual confirmation”
              of our approximations.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={42}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 42.
              </b>
              {" "}
              The graphs below are the horizontal and
              vertical velocities...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor0.svg">
              <ImageLeft
                offset_y="1em"
                src="/images/svg_ch4_pacman1_x_prime_t_scloud.svg" />
            </Image>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver0.svg" />
            <Pause />
            <OuterP>
              ...of PACMAN, with unit of
              distance of one “cell”, or “c”—the distance
              between two food pellets—and units of velocity
              of “cells per second”, or “c/s”—also,
              {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinates
              </NoBreak>
              {" "} increase towards the right,
              and {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinates
              </NoBreak>
              {" "} increase towards the top:
            </OuterP>
            <Pause />
            <Image
              height="590px"
              src="/images/svg_ch4_pacman1_maze.svg" />
            <Pause />
            <OuterP>
              Where is Pacman at {" "}
              <NoBreak>
                <Math>
                  $t = 49$
                </Math>
                s?
              </NoBreak>
              {" "} (Note: Pacman
              is NOT assumed to be anywhere in particular at
              {" "}
              <NoBreak>
                <Math>
                  $t = 40$
                </Math>
                s—you
              </NoBreak>
              {" "} have to figure that out from the
              data!)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Let's start by examining Pacman's first six displacements,
              appearing here in blue (positive displacements, going to the right
              or up) and red (negative displacements, going to the left or down):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor1.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver1.svg" />
            <Pause />
            <OuterP>
              We can estimate the duration of each
              displacement to the closest 10th of a second
              (mistakes of estimation can be made, we shall recover):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor2.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver2.svg" />
            <Pause />
            <OuterP>
              We can also estimate the velocity to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \pm 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              when it is nonzero (for displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet5_inline.svg" />
              the velocity might seem more like {" "}
              <Math>
                $-6.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              at the least, but we've already made more
              significant errors while eyeballing the durations, so
              nevermind). Using
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\te&#123;velocity&#125;) \times (\te&#123;amount of time&#125;) = (\te&#123;displacement&#125;)
              $$
              <ImageRight
                src="/images/svg_ch4_pacman1_velocity_times_amt_time_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              then gives us the following estimates for the
              <del>
                amount of travel
              </del>
              {" "} {" "}
              <del>
                during the
              </del>
              {" "} six displacements:
            </OuterP>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet1_inline.svg"
                style="margin-right:1em" />
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.5\te&#123;s&#125;\,\,=\,\,-3.375\,\te&#123;cells&#125;$
              </Math>
              <ImageRight src="/images/svg_ch4_pacman1_cells_per_second_times_seconds_cloud.svg" />
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet2_inline.svg"
                style="margin-right:1em" />
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
              </Math>
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet3_inline.svg"
                style="margin-right:1em" />
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
              </Math>
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet4_inline.svg"
                style="margin-right:1em" />
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,2.7\,\te&#123;cells&#125;$
              </Math>
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet5_inline.svg"
                style="margin-right:1em" />
              <Math>
                $-6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.4\te&#123;s&#125;\,\,=\,\,-2.7\,\te&#123;cells&#125;$
              </Math>
            </CentralDisplay>
            <Pause />
            <CentralDisplay>
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet6_inline.svg"
                style="margin-right:1em" />
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\,\times\,\,0.9\te&#123;s&#125;\,\,=\,\,6.075\,\te&#123;cells&#125;$
              </Math>
            </CentralDisplay>
            <Pause />
            <OuterP>
              Given the horizontal/vertical alternation
              of displacements, this would nominally
              imply the following set of initial motions:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_initial_displacements_before_rounding.svg" />
            <Pause />
            <OuterP>
              But these are approximate numbers and the
              true values must be integers, except for
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet1_inline.svg" />
              . (Because we don't know where Pacman started
              out. For
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet6_inline.svg" />
              {" "} the next displacement, if you look back at
              the graphs, is horizontal, so yes.) In fact,
              if you look at the maze,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells is the smallest amount that Pacman
              can travel vertically when changing {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -coordinate,
              </NoBreak>
              {" "}
              between two moments of horizontal motion.
              The next smallest possible amounts are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4
              $$
              <ImageLeft
                width="700px"
                src="/images/svg_ch4_pacman1_disp_4_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6
              $$
              <ImageLeft
                width="1400px"
                src="/images/svg_ch4_pacman1_disp_6_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              7
              $$
              <ImageLeft
                width="700px"
                src="/images/svg_ch4_pacman1_disp_7_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              cells, with {" "}
              <Math>
                $5$
              </Math>
              {" "} not being a possibility.
              In the horizontal direction,
              the smallest amounts are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              3, 6, \te&#123; and &#125; 9
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (and {" "}
              <Math>
                $12$
              </Math>
              {" "} and ...) which is even more restrictive.
              Now if each of our duration
              measurements carries an error of no more than
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \pm&#123;&#125;0.2\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              each computed displacement is at most
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,\pm&#123;&#125;0.2\te&#123;s&#125;\,=\,\pm1.35\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from the truth, give or take the small
              difference between {" "}
              <Math>
                $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              and the actual velocity. So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2.7\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              must be either
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -3\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -4\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              these being the only two posssible integer
              vertical displacements within {" "}
              <NoBreak>
                <Math>
                  $\pm1.35$
                </Math>
                c
              </NoBreak>
              {" "} of {" "}
              <NoBreak>
                <Math>
                  $-2.7$
                </Math>
                c.
              </NoBreak>
              {" "}
              Then, applying similar logic to each
              measurement, the initial motions must be:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_initial_motions.svg" />
            <Pause />
            <OuterP>
              The maze fits these constraints in only two places
              (note that
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet2_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet4_inline.svg" />
              {" "} equal {" "}
              <Math>
                $-3\te&#123;c&#125;$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $3\te&#123;c&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} in each
              case):
            </OuterP>
            <Pause />
            <Image
              height="590px"
              src="/images/svg_ch4_pacman1_maze_two_possibilities.svg" />
            <Pause />
            <OuterP>
              Looking into the future,
              the next three displacements are
              right/down/right and last
              {" "}
              <NoBreak>
                ~
                <Math>
                  $3.2$
                </Math>
                s/~
              </NoBreak>
              <NoBreak>
                <Math>
                  $0.4$
                </Math>
                s/~
              </NoBreak>
              <NoBreak>
                <Math>
                  $1.3$
                </Math>
                s
              </NoBreak>
              {" "}
              respectively:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman1_hor3.svg" />
            <Pause />
            <Image src="/images/svg_ch4_pacman1_ver3.svg" />
            <Pause />
            <OuterP>
              (Nb: Imagine translating these intervals to the left or right until
              the start of the interval is at an integer value: this is a good
              way to estimate the length.)
            </OuterP>
            <OuterP class="indent-10">
              Because displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet7_inline.svg" />
              {" "} is horizontal to the right the only possible
              remaining solution is the right-hand one,
              or else Pacman would collide with the ghost cage,
              with displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet6_inline.svg" />
              {" "} equal to 6c not 7c, or else Pacman would
              collide with a wall:
            </OuterP>
            <Pause />
            <Image
              height="590px"
              src="/images/svg_ch4_pacman1_maze_would_collide.svg" />
            <Pause />
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,3.2\te&#123;s&#125;\,=\,21.6\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              it seems that displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet7_inline.svg" />
              {" "} brings Pacman all the way around the maze to
              the left edge of the ghost cage, like so...
            </OuterP>
            <Pause />
            <Image
              height="590px"
              src="/images/svg_ch4_pacman1_maze_bring_around.svg" />
            <Pause />
            <OuterP>
              ...though it is hard to measure that distance;
              but this is confirmed by the fact that the next
              two displacements are “down by {" "}
              <Math>
                $3$
              </Math>
              {" "} and to the right”;
              specifically, since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;\,\times\,0.4\te&#123;s&#125;\,=\,-2.7\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet8_inline.svg" />
              {" "} must be {" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                c
              </NoBreak>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $-4$
                </Math>
                c;
              </NoBreak>
              {" "}
              must actually be {" "}
              <NoBreak>
                <Math>
                  $-3$
                </Math>
                c
              </NoBreak>
              {" "} since displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet9_inline.svg" />
              is to the right; so, notwithstanding the exact
              length of displacement
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet9_inline.svg" />
              , there is only one possibility for displacements
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet1_inline.svg" />
              through
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet8_inline.svg" />
              :
            </OuterP>
            <Pause />
            <Image
              height="590px"
              src="/images/svg_ch4_pacman1_maze_final_solution.svg" />
            <Pause />
            <OuterP>
              So at {" "}
              <NoBreak>
                <Math>
                  $t = 49$
                </Math>
                s,
              </NoBreak>
              {" "} between displacements
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet7_inline.svg" />
              {" "} and
              <InlineImage
                class="ch4_pacman1_inline_number_pellet"
                src="/images/svg_ch4_pacman1_pellet8_inline.svg" />
              , Pacman is immediately to the left of the ghost cage.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={43}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 43.
              </b>
              {" "}
              Same question, but for the following maze...
            </OuterP>
            <Pause />
            <Image
              height="551px"
              src="/images/svg_ch4_pacman2_maze.svg" />
            <Pause />
            <OuterP>
              ...and for the following velocity data, with the
              horizontal and vertical velocities
              superimposed on one graph (just a cosmetic
              change—note that green is the vertical velocity)...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein.svg" />
            <Pause />
            <OuterP>
              ...and asking for Pacman's position at {" "}
              <NoBreak>
                <Math>
                  $t = 34$
                </Math>
                s.
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It seems well-advised to start by heuristically verifying
              that Pacman's speed remains
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              no matter the direction that Pacman is headed, as long as Pacman is
              in motion.
            </OuterP>
            <OuterP class="indent-10">
              For example, take the instant {" "}
              <NoBreak>
                <Math>
                  $t \approx 23.7$
                </Math>
                s,
              </NoBreak>
              {" "} when the
              {" "}
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
                -velocities
              </NoBreak>
              {" "} are
              both about (?) {" "}
              <NoBreak>
                <Math>
                  $4.8\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_23_7.svg" />
            <Pause />
            <OuterP>
              The velocity vector (cf. Exercise 12) is therefore about
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (4.8, 4.8)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in units of {" "}
              <Math>
                $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "} at {" "}
              <NoBreak>
                <Math>
                  $t \approx 23.7$
                </Math>
                s,
              </NoBreak>
              {" "}
              and the speed, being the length of the velocity
              vector (cf. Exercise 12), is about
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;4.8^2 + 4.8^2&#125; = \sqrt&#123;2&#125; \times 4.8 = 6.788...
              $$
              <ImageLeft
                src="/images/svg_ch4_pacman2_4_point_8_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              (Pythagoras!)
              in units of {" "}
              <Math>
                $\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "} as well,
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6.788... \approx 6.75
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which supports, in this case, the hypothesis that
              Pacman's speed is {" "}
              <Math>
                $\approx 6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
              </Math>
              {" "}
              regardless of the direction of travel.
            </OuterP>
            <OuterP class="indent-10">
              For more verification, take {" "}
              <NoBreak>
                <Math>
                  $t = 26\te&#123;s&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              at which point the velocity vector is roughly
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (6.5, -2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells per second:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_26.svg" />
            <Pause />
            <OuterP>
              This gives a speed of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;6.5^2 + 2^2&#125; = \sqrt&#123;46.25&#125; = 6.800...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells per second, Again close to {" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                .
              </NoBreak>
              {" "} (!)
            </OuterP>
            <OuterP class="indent-10">
              For two more verifications take {" "}
              <Math>
                $t = 27\te&#123;s&#125;$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $t = 30\te&#123;s&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_27_and_30.svg" />
            <Pause />
            <OuterP>
              The speed at {" "}
              <Math>
                $t = 27\te&#123;s&#125;$
              </Math>
              {" "} is approximately
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;3^2 + 6.2^2&#125; = \sqrt&#123;47.44&#125; = 6.888
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells per second, while the speed at {" "}
              <Math>
                $t = 30\te&#123;s&#125;$
              </Math>
              {" "}
              is approximately
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;5.6^2 + 3.6^2&#125; = \sqrt&#123;44.32&#125; = 6.657
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells per second. Both close-ish to
              {" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                !
              </NoBreak>
              {" "} For one last
              verification (truly the last, we promise)
              consider {" "}
              <NoBreak>
                <Math>
                  $t = 31\te&#123;s&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_at_31.svg" />
            <Pause />
            <OuterP>
              This yields a speed of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sqrt&#123;2.6^2 + 6.2^2&#125; = \sqrt&#123;45.2&#125; = 6.723...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              cells per second, again close to {" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                !
              </NoBreak>
              {" "}
              (Closest so far, in fact.)
            </OuterP>
            <OuterP class="indent-10">
              We now admit, after this “heuristic verification”,
              that Pacman goes approximately the same speed
              regardless of direction, namely something in
              the vicinity of {" "}
              <NoBreak>
                <Math>
                  $6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Now consider the time interval from {" "}
              <Math>
                $t = 22.7\te&#123;s&#125;$
              </Math>
              {" "} to {" "}
              <NoBreak>
                <Math>
                  $t = 24.7\te&#123;s&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple.svg" />
            <Pause />
            <OuterP>
              Both the {" "}
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
                -velocities
              </NoBreak>
              {" "} are nonzero
              during this interval, which indicates the presence
              of a curve. The curve starts with vertical motion
              and ends with horizontal motion:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_big_purple_annotations.svg" />
            <Pause />
            <OuterP>
              Thus Pacman starts the curve going up, and ends the curve
              going right. Moreover, it takes Pacman
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to complete the curve (we know the curve is fully
              completed from the purely horizontal motion at
              either end), from which the curve must be
              approximately
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 3\te&#123;s&#125; = 20.25\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in length! In turn, using the approximation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx &#123;11 \over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the quarter-circumference of a unit circle
              {" "}
              <NoBreak>
                (cf
                <Math>
                  $.$
                </Math>
              </NoBreak>
              {" "} Exercise 24), this would indicate that
              the curve (which is a quarter-circle, as
              all curves in this maze) has radius
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \approx &#123;20.25\te&#123;c&#125; \over 11/7&#125; = &#123;7 \times 20.25\te&#123;c&#125; \over 11&#125; = &#123;141.75\te&#123;c&#125; \over 11&#125; = 12.886...\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where we give up and use a calculator at the
              last step. But the possible radii are {" "}
              <NoBreak>
                <Math>
                  $3$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $6$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $9$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $12$
                </Math>
                .
              </NoBreak>
              {" "} This all but rules out all of the
              maze curves except the one that has radius {" "}
              <NoBreak>
                <Math>
                  $12$
                </Math>
                ,
              </NoBreak>
              {" "}
              and that allows a traversal that starts upward
              and ends rightward; we mean the upper left
              curve of the maze:
            </OuterP>
            <Pause />
            <Image
              height="551px"
              src="/images/svg_ch4_pacman2_upper_left_highlight.svg" />
            <Pause />
            <OuterP>
              From there, Pacman goes right for a bit, then
              takes another curve 3 seconds long, that starts
              rightward and ends downward:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_second_big_purple.svg" />
            <Pause />
            <OuterP>
              ...this second curve must, of course, be the
              upper right-hand corner of the maze, that has the
              appropriate length, position, and orientation:
            </OuterP>
            <Pause />
            <Image
              height="551px"
              src="/images/svg_ch4_pacman2_upper_right_highlight.svg" />
            <Pause />
            <OuterP>
              What is extremely strange, however, is that
              Pacman immediately follows the end of this curve
              with rightward motion:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_first_warning_purple.svg" />
            <Pause />
            <OuterP>
              In fact, it is also strange that Pacman {" "}
              <i>
                preceded
              </i>
              {" "}
              the first curve with rightward motion (when that curve
              starts at the leftmost edge of the maze):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_second_warning_purple.svg" />
            <Pause />
            <OuterP>
              Looking back over our work,
              we find that we made a mistake when we wrote
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 3\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the corrected version of that being of course
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              24.7\te&#123;s&#125; - 22.7\te&#123;s&#125; = 2\te&#123;s&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (the second curve likewise lasted {" "}
              <NoBreak>
                <Math>
                  $2\te&#123;s&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              not {" "}
              <NoBreak>
                <Math>
                  $3\te&#123;s&#125;$
                </Math>
                )
              </NoBreak>
              {" "} making the length and radius of
              the first curve two-thirds of whatever we previously
              computed (because {" "}
              <Math>
                $2\te&#123;s&#125;$
              </Math>
              {" "} is two-thirds of
              {" "}
              <NoBreak>
                <Math>
                  $3\te&#123;s&#125;$
                </Math>
                ),
              </NoBreak>
              {" "} i.e.,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;2 \over 3&#125; \times 12.886...\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the {" "}
              <i>
                radius
              </i>
              {" "} of the first (and second)
              curve, which means that the first and second curves
              actually had radii {" "}
              <NoBreak>
                <Math>
                  $9$
                </Math>
                ,
              </NoBreak>
              {" "} undoubtedly,
              and that Pacman's initial motion followed the
              one-inside track (the two rightward motions are
              easily seen to be {" "}
              <NoBreak>
                ~
                <Math>
                  $3\te&#123;c&#125;$
                </Math>
              </NoBreak>
              {" "} each):
            </OuterP>
            <Pause />
            <Image
              height="551px"
              src="/images/svg_ch4_pacman2_corrected_highlights.svg" />
            <Pause />
            <OuterP>
              Next, after some downward motion we are faced
              with a long, juicy, down-and-then-left curve,
              which must surely be the bottom-right curve of
              radius {" "}
              <NoBreak>
                <Math>
                  $12$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_third_big_purple.svg" />
            <Pause />
            <OuterP>
              Indeed, the curve lasts {" "}
              <NoBreak>
                ~
                <Math>
                  $2.7$
                </Math>
                s,
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              6.75\te&#123;c&#125;\hlfbk/\hlfbk\te&#123;s&#125; \times 2.7\te&#123;s&#125; = 18.225\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is approximately the same as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;11 \over 7&#125; \cdot 12\te&#123;c&#125; = 18.85...\te&#123;c&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              confirming the radius of {" "}
              <Math>
                $12\te&#123;c&#125;$
              </Math>
              {" "} and the location
              of the curve.
              Pacman's trajectory so far is then:
            </OuterP>
            <Pause />
            <Image
              height="551px"
              src="/images/svg_ch4_pacman2_continued_highlights.svg" />
            <Pause />
            <OuterP>
              Next Pacman seems to reverse course, and briefly
              re-enters the curve (going right and up a tiny bit):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_in_purple.svg" />
            <Pause />
            <OuterP>
              But then changes again, and re-exits the curve
              (going left and down a tiny bit):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <Pause />
            <OuterP>
              Then Pacman goes left-and-then-right-again by
              some small amount:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_pacman2_frankenstein_back_out_purple.svg" />
            <Pause />
            <OuterP>
              At this point—and in particular at
              {" "}
              <NoBreak>
                <Math>
                  $t = 34\te&#123;s&#125;$
                </Math>
                —Pacman
              </NoBreak>
              {" "} is between a moment
              of purely horizontal motion and purely vertical
              motion; since the left-and-then-right-again
              motion did obviously not bring Pacman {" "}
              <Math>
                $3$
              </Math>
              {" "} cells
              over to the left (which is the next place
              after the curve exit that is connected to both
              horizontal and vertical paths),
              Pacman must
              be at the bottom-left exit of the bottom-right
              maze corner, still.
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "}
              Feel free to follow Pacman all the way
              to the end of the timeseries. He ends up somewhere
              near...
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={44}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 44.
              </b>
              {" "}
              Describe what a function might look like
              if its second derivative has this graph (broadly):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              As the second derivative is the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              rate of change of the slope
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              places where the second derivative is zero are
              places where the slope of the function is constant.
              So the function will have a constant slope over
              each of these purple intervals (we're going to
              assume that what looks like {" "}
              <Math>
                $0$
              </Math>
              {" "} is {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                ,
              </NoBreak>
              {" "} and eyeball
              where that starts and ends, the statement
              does say “broadly” anyway):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_with_purple.svg" />
            <Pause />
            <OuterP>
              As
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              constant slope
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              means
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              line segment
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              the function will therefore be a
              line segment, over each of the purple intervals!
            </OuterP>
            <OuterP class="indent-10">
              Between these line segments, however, things
              happen, and there is a change in slope! The
              change in slope is given by the “amount of bump”
              in the second derivative between the intervals.
              As it turns out, the area enclosed by the bump
              gives the total change in slope:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_positive_area.svg" />
            <Pause />
            <OuterP>
              (We won't argue this right now, but it's
              sort-of-intuitive.)
              For bumps lying below the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -axis
              </NoBreak>
              {" "} the area
              counts as negative; that negative area is, again,
              the total change in slope from one end of the bump
              to the other:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_negative_area.svg" />
            <Pause />
            <OuterP>
              In any case the areas are all the same {" "}
              <i>
                in absolute
                value
              </i>
              , meaning that whatever slope is gained as
              we pass over a positive bump, the same amount
              is lost again as we pass over a negative bump!
              Thus, the line segments of the original function
              will alternate between “low” and “high”
              slopes—as we pass over a positive bump we switch
              from a “low slope” line segment to a “high slope”
              line segment, and vice-versa when we pass over a
              negative bump.
            </OuterP>
            <OuterP class="indent-10">
              Put
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large a
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the area of a positive bump (per appearances,
              {" "}
              <NoBreak>
                <Math>
                  $a \approx 1$
                </Math>
                ),
              </NoBreak>
              {" "} and
              <ImageRight src="/images/svg_ch4_one_long_line_a_is_about_1_cloud.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the slope of a “low slope” line segment. Then a
              “high slope” line segment has slope
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c + a
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since we add {" "}
              <Math>
                $a$
              </Math>
              {" "} to the slope each time we go over
              a positive bump.
              (And the slope goes back down to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large (c + a) + (-a) = c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              when we pass over a negative bump, with {" "}
              <Math>
                $-a$
              </Math>
              {" "} being
              the (negative) area of a negative bump.)
            </OuterP>
            <OuterP class="indent-10">
              With these variables in place, here is a generic
              illustration of a graph (in black) whose second
              derivative is the one from the statement (faded in
              the background):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_1.svg">
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_0_point_2_cloud.svg" />
            </Image>
            <Pause />
            <OuterP>
              In this example {" "}
              <NoBreak>
                <Math>
                  $c \approx 0.2$
                </Math>
                ,
              </NoBreak>
              {" "} but {" "}
              <Math>
                $c$
              </Math>
              {" "} can be any
              value—this is not constrained by the second derivative.
              Moreover any amount of vertical translation can
              also be introduced to the graph. (Vertical
              translation does not affect the derivative,
              much less the second derivative.)
            </OuterP>
            <OuterP class="indent-10">
              For another example, if {" "}
              <NoBreak>
                <Math>
                  $c = -a/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              meaning {" "}
              <NoBreak>
                <Math>
                  $c \approx -1/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              the graph ends up a perfectly balanced see-saw that
              stays confined to a bounded range of {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -values:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_2.svg">
              <ImageLeft src="/images/svg_ch4_one_long_line_c_is_approx_minus_a_over_2_cloud.svg" />
            </Image>
            <Pause />
            <OuterP>
              Moreover, like the previous graph, this solution
              can also be vertically translated by any amount!
              (And same for any solution.)
            </OuterP>
            <OuterP class="indent-10">
              For yet another example, here is a graph in which
              {" "}
              <NoBreak>
                <Math>
                  $c + a = 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $c = -a \approx -1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_solution_sketch_3.svg" />
            <Pause />
            <OuterP>
              Again, any of these graphs are
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              equally valid
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              solutions, and, for the last time,
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              any amount of vertical translation can be introduced
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (you can move the graphs up and down). So in
              other words we have a “two-parameter family of
              solutions”: one parameter of the solution—free
              to choose—is {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                —while
              </NoBreak>
              {" "} another parameter—independently
              free to choose—is the amount of vertical
              translation.
            </OuterP>
            <OuterP class="indent-10">
              To claim a truly good “theoretical” understanding
              of the solution, however, we should also determine
              this rise here, if we can, as a function of {" "}
              <Math>
                $c$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $a$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., the amount of rise between the end
              of one line segment and the start of the next:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_1.svg" />
            <Pause />
            <OuterP>
              In fact, is not entirely clear that there aren't
              possibly {" "}
              <i>
                two different
              </i>
              {" "} values of this rise,
              for the two different kinds of “connector curves”
              that exist (the concave ones and the convex ones):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_2.svg" />
            <Pause />
            <OuterP>
              (It will turn out that
              the rises are all the same
              but we're just pointing out.)
              Focusing on the case
              of a convex connector curve, note
              that the rise is lower bounded by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where {" "}
              <Math>
                $1.6 = 0.8 + 0.8$
              </Math>
              {" "} is the length (run) of
              the connector curve, because {" "}
              <Math>
                $c$
              </Math>
              {" "} is the {" "}
              <i>
                lowest
                slope
              </i>
              {" "} found anywhere inside the connector
              curve:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound.svg" />
            <Pause />
            <OuterP>
              Symmetrically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6(c + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an upper bound on the rise, because {" "}
              <Math>
                $c + a$
              </Math>
              {" "} is the
              {" "}
              <i>
                greatest slope
              </i>
              {" "} anywhere inside the
              connector curve:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound.svg" />
            <Pause />
            <OuterP>
              To go any further we must add the first
              derivative to this sketch—the first derivative
              has value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where the function has slope {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                ,
              </NoBreak>
              {" "} has value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c + a
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where the function has slope {" "}
              <NoBreak>
                <Math>
                  $c + a$
                </Math>
                ,
              </NoBreak>
              {" "} and
              climbs up/down along an S-shaped curve outside
              of those intervals, adhering
              to a slope that is given by the value of the
              second derivative:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_what_are_the_rises_3.svg" />
            <Pause />
            <OuterP>
              The afore-mentioned lower bound of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6c
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              coincides with the area of a rectangle that {" "}
              <i>
                lies
                below
              </i>
              {" "} the graph of the derivative:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_lower_bound_area.svg" />
            <Pause />
            <OuterP>
              Whereas the afore-mentioned upper bound of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6(a + c)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              coincides with the area of a rectangle that
              {" "}
              <i>
                lies above
              </i>
              {" "} the graph of the derivative:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_connector_curve_upper_bound_area.svg" />
            <Pause />
            <OuterP>
              In other words, the rise of the convex connector
              curve is lower and upper bounded by these
              two areas. It will be helpful to write this
              as a pictorial inequality:
            </OuterP>
            <Pause />
            <Image
              width="800px"
              src="/images/svg_ch4_one_long_line_inequality_1.svg" />
            <Pause />
            <OuterP>
              But we can tighten the inequality by dividing the
              areas halfway (we'll let you think about this
              one—if you don't get it, don't worry, because we'll
              revisit the same topic in detail at some point):
            </OuterP>
            <Pause />
            <Image
              width="800px"
              src="/images/svg_ch4_one_long_line_inequality_2.svg" />
            <Pause />
            <OuterP>
              Or even:
            </OuterP>
            <Pause />
            <Image
              width="800px"
              src="/images/svg_ch4_one_long_line_inequality_3.svg" />
            <Pause />
            <OuterP>
              If we take this logic to its bitter conclusion, we
              find the {" "}
              <i>
                e
              </i>
              quality:
            </OuterP>
            <Pause />
            <Image
              width="800px"
              src="/images/svg_ch4_one_long_line_equality.svg" />
            <Pause />
            <OuterP>
              And because the S-curve is centrally symmetric
              (the slopes at equal distance from the center are
              the same because those slopes can be read off the
              second derivative, and the second derivative bump
              is left-right symmetric) we can compute the area
              that the curve encloses exactly, by a geometric
              surgery:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_area_surgery.svg" />
            <Pause />
            <OuterP>
              Long story short, the area enclosed, which is
              also the rise of the connector curve, is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6\cdot (c + &#123;a\over 2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...that can be read as “run times average slope”
              (because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the run while the slope (first derivative)
              spends equal amounts of time, in equal measure,
              above and below the value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large c + &#123;a \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that is, indeed, the average of {" "}
              <Math>
                $c$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $c + a$
                </Math>
                ).
              </NoBreak>
              {" "}
              For concave connector curves the
              S-curve of the derivative is...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_concave_connector.svg" />
            <Pause />
            <OuterP>
              ...flipped around from before, going from
              high to low, but the area enclosed by the S-curve
              is the same. This area is also the rise of the
              connector curve. Hence, long story short—for the
              second time—all connector curves have rise
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large 1.6\cdot (c + &#123;a\over 2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and we can annotate our sketch of the
              “generic” solution with this additional piece of
              information, if we want. (Well...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch4_one_long_line_with_rises_shown.svg" />
            <Pause />
            <OuterP>
              ...there, no one can accuse us of not doing the
              homework ourselves.)
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};