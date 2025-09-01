import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplay, CentralDisplayItalic }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Image  from "~/components/Image";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight, ImageLeft }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { StarDivider }  from "~/components/StarDivider";
import TextParent  from "~/components/TextParent";
import { SolutionNote, Example, Pause, Section, NoBreak }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter5__() {
  return (
    <Article
      prevPage="/article/chapter4"
      nextPage=""
      pageNecessaryMargin={950}
      maxElementWidth={1000}>
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            cos and sin. (“cosine” and “sine”.)
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            derivatives
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            even/odd identities, and identities with {" "}
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            relation to derivatives
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            the pythagorean identity
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            inputs as radians
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            auto-converting degrees to radians
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            sines and cosines of {" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;30^\circ&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <Math>
              $\mathbf&#123;45^\circ&#125;$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;60^\circ&#125;$
              </Math>
            </NoBreak>
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-8">
          <InChapterLink href="?id=section-9">
            scaling the circle
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-9">
          <InChapterLink href="?id=section-10">
            polar coordinates
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-10">
          <InChapterLink href="?id=section-11">
            change-of-coordinate formulas
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-11">
          <InChapterLink href="?id=section-12">
            right triangles
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-12">
          <InChapterLink href="?id=section-13">
            a famous diagram
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-13">
          <InChapterLink href="?id=section-14">
            the abercrombie inequality
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-14">
          <InChapterLink href="?id=section-15">
            the gregorinovich sandwich
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-15">
          <InChapterLink href="?id=section-16">
            the angle-sum formulas
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-16">
          <InChapterLink href="?id=section-17">
            the missing arrows
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-17">
          <InChapterLink href="?id=section-18">
            secant: a second view
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-18">
          <InChapterLink href="?id=section-19">
            note on calculators
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-19">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 5:">
        The Trigonometric Functions
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Cos and Sin. (“Cosine” and “sine”.)
          </b>
          {" "}
          We've already encountered the ‘cos’
          function in Exercise 7 of Chapter 3, e.g..
          It is the one that has this graph:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_cosine.svg" />
        <Pause />
        <OuterP>
          It has a close cousin named ‘sin’.
          While {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} “tops off” at {" "}
          <NoBreak>
            <Math>
              $x = 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} goes diagonally through the point
          {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_cosine_and_sine.svg" />
        <Pause />
        <OuterP>
          As far as standard definitions go,
          {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a point {" "}
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from
          {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit circle. (Nb: “a”
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          unit circle
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          is a circle of radius {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} while “the” unit
          circle is the circle of radius {" "}
          <Math>
            $1$
          </Math>
          {" "} centered
          at {" "}
          <NoBreak>
            <Math>
              $(0, 0)$
            </Math>
            .)
          </NoBreak>
          {" "} For example, if we look at {" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 2&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}
          we see {" "}
          <NoBreak>
            <Math>
              $\cos(&#123;1\over 2&#125;) \approx 0.9$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\sin(&#123;1\over 2&#125;) \approx 0.5$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_cosine_and_sine_@0.5.svg" />
        <Pause />
        <OuterP>
          Per the definitions,
          the point half a unit
          counterclockwise from {" "}
          <Math>
            $(1, 0)$
          </Math>
          {" "} on the unit
          circle has coordinates {" "}
          <Math>
            $\approx 0.9$
          </Math>
          {" "} in {" "}
          <Math>
            $x$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx 0.5$
          </Math>
          {" "} in {" "}
          <Math>
            $y$
          </Math>
          {" "} (or actually {" "}
          <Math>
            $0.87758...$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $0.47942...$
            </Math>
            ,
          </NoBreak>
          {" "} it turns out, as we can know by
          a calculator equipped with ‘sin’ and ‘cos’):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_@0.5_smaller.svg" />
        <Pause />
        <OuterP>
          As a second example, the graphs indicate that
          {" "}
          <NoBreak>
            <Math>
              $\sin(-3) \approx -0.2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $\cos(-3) \approx -0.99$
          </Math>
          {" "}
          (or something very close to {" "}
          <NoBreak>
            <Math>
              $-1$
            </Math>
            ,
          </NoBreak>
          {" "} in any case):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_cosine_and_sine_@-3.svg" />
        <Pause />
        <OuterP>
          Indeed, going {" "}
          <Math>
            $-3$
          </Math>
          {" "} units counterclockwise—which
          means, going {" "}
          <Math>
            $3$
          </Math>
          {" "} units clockwise—on the unit
          circle, starting from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            ,
          </NoBreak>
          {" "} brings us to a point
          with {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -
          </NoBreak>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of {" "}
          <Math>
            $\approx -0.2$
          </Math>
          {" "}
          and {" "}
          <Math>
            $\approx -0.99$
          </Math>
          {" "} respectively (or {" "}
          <Math>
            $-0.1411...$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $-0.989992...$
            </Math>
            ,
          </NoBreak>
          {" "} to be exact, it turns out):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_@-3_smaller.svg" />
        <Pause />
        <OuterP>
          For a last example,
          note that there appears
          to be a value of {" "}
          <Math>
            $x$
          </Math>
          {" "} near {" "}
          <NoBreak>
            <Math>
              $-1.6$
            </Math>
            ,
          </NoBreak>
          {" "} where {" "}
          <NoBreak>
            <Math>
              $\cos(x) = 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\sin(x) = -1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_cosine_and_sine_@minus_eta.svg" />
        <Pause />
        <OuterP>
          Some thought reveals that this value of {" "}
          <Math>
            $x$
          </Math>
          {" "}
          would be {" "}
          <i>
            minus one-quarter the circumference
            of a unit circle
          </i>
          , because {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} is
          one-quarter of the unit circle clockwise from {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          Note that one-quarter the circumference of a unit
          circle was estimated to be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \approx &#123;11\over 7&#125; = 1.\overline&#123;571428&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in Exercise 24 of Chapter 3 (by direct inspection
          of the graph {" "}
          <NoBreak>
            <Math>
              $y = \cos(x)$
            </Math>
            ,
          </NoBreak>
          {" "} for that matter,
          which may or may not be cheating), which agrees
          with the visual estimate {" "}
          <NoBreak>
            <Math>
              $x \approx -1.6$
            </Math>
            .
          </NoBreak>
          {" "} (But
          that value would be namely {" "}
          <NoBreak>
            <Math>
              $x = -1.57...$
            </Math>
            ,
          </NoBreak>
          {" "} not
          {" "}
          <NoBreak>
            <Math>
              $x = -1.6$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          In another possible definition,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is defined as the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of a point that
          is {" "}
          <Math>
            $x$
          </Math>
          {" "} units counterclockwise from {" "}
          <Math>
            $(0, -1)$
          </Math>
          {" "} on
          the unit circle. In this case, {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} are both defined by {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_with_new_definition.svg" />
        <Pause />
        <OuterP>
          In more detail, if you tilt your head  sideways,
          you will see that the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis looks, from the
          vantage point of {" "}
          <NoBreak>
            <Math>
              $(0, -1)$
            </Math>
            ,
          </NoBreak>
          {" "} the same as the {" "}
          <Math>
            $y$
          </Math>
          {" "}
          axis looks from the vantage point of {" "}
          <NoBreak>
            <Math>
              $(1, 0)$
            </Math>
            .
          </NoBreak>
          {" "}
          So the old and new definitions of {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} are
          equivalent! (👍👍)
        </OuterP>
        <OuterP class="indent-10">
          In particular, {" "}
          <Math>
            $\sin(x)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(x)$
          </Math>
          {" "} can also
          be understood as the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates
          </NoBreak>
          {" "} of two
          particles on the unit circle such that the ‘sin’
          particle is one-quarter-turn behind the {" "}
          <NoBreak>
            ‘
            <Math>
              $\cos$
            </Math>
            ’
          </NoBreak>
          {" "}
          particle:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_with_sin_and_cos_particles.svg" />
        <Pause />
        <OuterP>
          ...to be contrasted with our first definition,
          employing a single point projected onto
          two different axes:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_with_sincos_particle.svg" />
        <Pause />
        <OuterP>
          The second definition (former diagram) explains
          why values of {" "}
          <Math>
            $\sin$
          </Math>
          {" "} lag a fixed amount behind
          values of {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            .
          </NoBreak>
          {" "} (“Lagging” when you read the
          graphs from left to right.) It's because the ‘sin’
          particle follows in the trail blazed by the ‘cos’
          particle!
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
            Derivatives.
          </b>
          {" "}
          Continuing the last “chapter” in the
          definitions of {" "}
          <Math>
            $\sin$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "} we can
          add two more particles to the diagram that
          defines ‘sin’ and ‘cos’ via {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinates.
          </NoBreak>
          {" "}
          The two new particles are labeled {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          and {" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”:
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_unit_circle_with_four_particles.svg" />
        <Pause />
        <OuterP>
          These labels are chosen
          because
          the {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of the
          {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          particle is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by symmetry with the {" "}
          <Math>
            $\sin$
          </Math>
          {" "} particle,
          meaning that the
          {" "}
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
          {" "}
          particle
          defines the function
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x \ra -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          also known simply as
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            “
            <Math>
              $-\!\sin$
            </Math>
            ”
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          by the general definition that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -f = (x \ra -f(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $f : \rr \ra \rr$
            </Math>
            ,
          </NoBreak>
          {" "}
          and similarly for {" "}
          <NoBreak>
            “
            <Math>
              $-\!\cos$
            </Math>
            ”.
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Adding the curves for {" "}
          <Math>
            $-\!\sin$
          </Math>
          {" "} and {" "}
          <Math>
            $-\!\cos$
          </Math>
          {" "}
          to the graphs fills the “gap” between {" "}
          <Math>
            $y = \sin(x)$
          </Math>
          {" "}
          and {" "}
          <Math>
            $y = \cos(x)$
          </Math>
          {" "} with two new equally-spaced curves;
          note that
          {" "}
          <Math>
            $\cos$
          </Math>
          {" "} lags behind {" "}
          <Math>
            $-\!\sin$
          </Math>
          {" "}
          (reading the graphs from left to right)
          by the same amount that {" "}
          <Math>
            $\sin$
          </Math>
          {" "} lags behind
          {" "}
          <NoBreak>
            <Math>
              $\cos$
            </Math>
            ,
          </NoBreak>
          {" "} etc:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_four_curves.svg" />
        <Pause />
        <OuterP>
          These are the same four curves that
          appear in Exercise 12 of Chapter 4.
          In particular,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin' = \cos
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos' = -\!\sin
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\cos
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = \sin
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because the rate of change of each
          particle's {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} is the
          {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "} of the next particle
          in the order of rotation, as explained
          in the solution to that problem.
          (Clockwise vs. counterclockwise rotation
          notwithstanding.)
        </OuterP>
        <OuterP class="indent-10">
          One can also note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-f)' = ((-1)\cdot f)' = (-1) \cdot f' = -f'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in general for any {" "}
          <Math>
            $f : \rr \ra \rr$
          </Math>
          {" "}
          (cf. Exercise 20 and Exercise 10 of Chapter 4),
          which implies that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\sin)' = -\!\sin' = -\!\cos
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to finish the computation),
          and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos'
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-\!\cos)' = -\!\cos' = -(-\!\sin) = \sin
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          to finish the computation),
          which means that one only needs to
          remember the first two equations. Though,
          in fact, one really just needs to remember
          the four-particle diagram!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Even/odd identities, and identities with {" "}
            <NoBreak>
              “
              <Math>
                $\eta$
              </Math>
              ”.
            </NoBreak>
          </b>
          {" "}
          One has
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;
          \up&#123;1.0&#125;\cos(-x) = \cos(x) \\
          \up&#123;1.7&#125;\sin(-x) = -\sin(x) \\
          \up&#123;1.7&#125;\sin(x + \eta) = \cos(x) \\
          \up&#123;1.7&#125;\cos(x - \eta) = \sin(x) \\
          \up&#123;1.7&#125;\dn&#123;0.5&#125;\cos(\eta/2 + x) = \sin(\eta/2 - x)
          &#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} where
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \eta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (“aye-tah”, Greek letter “eta”) is a
          constant that denotes the quarter-circumference
          of a unit circle, or about {" "}
          <NoBreak>
            <Math>
              $&#123;11\over 7&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          (Cf. Exercise 24, Chapter 4.) You should
          be able to verify each of these identities
          just by looking at them and thinking of the
          definitions of {" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\cos(x)$
            </Math>
            —possibly
          </NoBreak>
          {" "}
          the “second” definition of {" "}
          <NoBreak>
            <Math>
              $\sin(x)$
            </Math>
            ,
          </NoBreak>
          {" "} in some
          cases—but in case something goes wrong, here
          is a cheat sheet that does some of the thinking
          for you (or, help you compare your way of seeing
          things to the author's way of seeing things):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_identity_explanations.svg" />
        <Pause />
        <OuterP>
          Two more identities
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta - x) = \cos(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta - x) = \sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are related to the last identity above, in that they
          involve symmetry about the line {" "}
          <Math>
            $x = y$
          </Math>
          {" "} in the Cartesian
          plane:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_identity_explanations_more.svg" />
        <Pause />
        <OuterP>
          We also have these identities...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;
          \up&#123;1.2&#125;\cos(x + 4\eta) = \cos(x)\\
          \up&#123;1.7&#125;\sin(x + 4\eta) = \rt&#123;0.15&#125;\sin(x)\rt&#123;0.15&#125;\\
          \up&#123;1.7&#125;\cos(x + 2\eta) = \rt&#123;0.15&#125;-\!\cos(x)\rt&#123;0.15&#125;\\
          \up&#123;1.7&#125;\sin(x + 2\eta) = \rt&#123;0.15&#125;-\!\sin(x)\rt&#123;0.15&#125;
          &#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...that follow because one full turn
          around the circle brings you back to the
          same position, whereas a half-turn brings
          you around  to your {" "}
          <i>
            antipode
          </i>
          {" "} (where
          both coordinates are negated), and these
          two more...
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;\up&#123;1.0&#125;\cos(x + \eta) = -\!\sin(x) \\
          \up&#123;1.7&#125;\sin(x - \eta) = -\!\cos(x)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...that follow from the four-particle
          diagram, e.g..
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Relation to derivatives.
          </b>
          {" "}
          Note that the derivatives of
          sin and cos can also be expressed by
          the [possibly more “logical”] formulas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin'(x) = \sin(x + \eta)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos'(x) = \cos(x + \eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          given that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(x + \eta) = \cos(x)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos(x + \eta) = -\!\sin(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as seen in the previous section.
        </OuterP>
        <OuterP class="indent-10">
          In fact, one can make the further observation that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^&#123;(\ell)&#125;(x) = \sin(x + \ell\eta)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cos^&#123;(\ell)&#125;(x) = \cos(x + \ell\eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where {" "}
          <NoBreak>
            “
            <Math>
              $^&#123;(\ell)&#125;$
            </Math>
            ”
          </NoBreak>
          {" "} denotes the {" "}
          <NoBreak>
            <Math>
              $\ell$
            </Math>
            -th
          </NoBreak>
          {" "}
          derivative, for all {" "}
          <NoBreak>
            <Math>
              $\ell \in \nn$
            </Math>
            .
          </NoBreak>
          {" "}
          Since each
          derivative is obtained by moving to the next
          particle in the order of rotation, each
          derivative is obtained by adding {" "}
          <Math>
            $+\eta$
          </Math>
          {" "} to the
          input!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            The pythagorean identity.
          </b>
          {" "}
          Because
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 + y^2 = 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the equation of the unit circle, and
          points of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\cos(x), \sin(x))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are points on the unit circle, we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2(x) + \sin^2(x) = 1 \tag&#123;*&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} surprise or not.
          We refer to (*) as the {" "}
          <i>
            pythagorean identity
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          Various “tricks” are associated to the
          pythagorean identity. For example, the
          number
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is forevermore suspect, because it might
          just be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2(x) + \cos^2(x)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or for some other variable) in disguise,
          depending on the situation. Also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (variable not important) might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          just as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (also
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \cos^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - \sin^2(y)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might end up respectively rewritten
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \cos(y))\cdot (1 + \cos(y))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (1 - \sin(y))\cdot (1 + \sin(y))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the difference-of-squares factorization),
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin^2(\theta) - \cos^2(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might be
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          1 - 2\cos^2(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or otherwise
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          2\sin^2(\theta) - 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and symmetrically for the opposite difference. (I.e.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\cos^2(\theta) - \sin^2(\theta),
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          this one.) Etc.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Inputs as radians.
          </b>
          {" "}
          The
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          radian measure
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of an angle was briefly touched upon in
          {" "}
          <a
            href="/article/chapter4?id=_24_113"
            class="handle-out-chapter-link">
            Note 10
          </a>
          {" "} of Exercise 37, Chapter 4.
          In short, it is a “scientific” measure
          of angles in which the value of an angle
          is the length of a circular arc subtended
          by the angle, divided by the radius of
          that arc:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition.svg" />
        <Pause />
        <OuterP>
          The definition implies that the radian
          measure of an angle is the length subtended
          by the angle on a unit circle:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_radius_1.svg" />
        <Pause />
        <OuterP>
          In particular, {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} is {" "}
          <Math>
            $\eta$
          </Math>
          {" "} radians:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_90_degrees_is.svg" />
        <Pause />
        <OuterP>
          To imprint this fact in our memories:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_90_imprint.svg" />
        <Pause />
        <OuterP>
          (We will often leave out the “rad”—in fact,
          if you don't see a degree symbol {" "}
          <NoBreak>
            “
            <Math>
              $^\circ$
            </Math>
            ”
          </NoBreak>
          {" "}
          next to an angle measure, that means the angle
          measure is a radian.) From there, other radian
          measures can be proportionally deduced; for
          example, {" "}
          <Math>
            $45^\circ$
          </Math>
          {" "} is {" "}
          <Math>
            $\eta/2$
          </Math>
          {" "} radians:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_radian_definition_45_imprint.svg" />
        <Pause />
        <OuterP>
          aaaand... and so on.
        </OuterP>
        <OuterP class="indent-10">
          As a consequence of the definition, a
          displacement of {" "}
          <Math>
            $x$
          </Math>
          {" "} units on the unit circle
          subtends an angle—or technically: {" "}
          <i>
            rotation
          </i>
          ,
          because there is a “positive” direction—and
          you can also say {" "}
          <i>
            signed angle
          </i>
          {" "} instead of
          {" "}
          <i>
            rotation
          </i>
          , by the way—whose (signed) radian
          measure is {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_x_displacement_and_x_radians.svg" />
        <Pause />
        <OuterP>
          In particular,
          instead of positing the definitions of
          sin and cos like this...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_x_displacement_and_x_radians_displacement_definition.svg" />
        <Pause />
        <OuterP>
          ...with the input appearing as a
          displacement, we can posit the definitions
          like this...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch_ch_x_displacement_and_x_radians_radian_definition.svg" />
        <Pause />
        <OuterP>
          ...with the input appearing as a radian.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 1.
            </b>
            {" "}
            We can conceptualize {" "}
            <NoBreak>
              <Math>
                $\cos(\eta/2)$
              </Math>
              ...
            </NoBreak>
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch_5_ch_etaOver2_example_displacement_version.svg" />
          <Pause />
          <OuterP>
            ...like this, with the input appearing as a displacement,
            or else like this...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver2_example_angle_version.svg" />
          <Pause />
          <OuterP>
            ...with the input appearing as a radian.
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 2.
            </b>
            {" "}
            We can conceptualize {" "}
            <NoBreak>
              <Math>
                $\sin(\eta/3)$
              </Math>
              ...
            </NoBreak>
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver3_example_displacement_version.svg" />
          <Pause />
          <OuterP>
            ...like this, with the input appearing as a displacement,
            or else like this...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch5_ch_etaOver3_example_angle_version.svg" />
          <Pause />
          <OuterP>
            ...with the input appearing as a radian.
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Auto-converting degrees to radians.
          </b>
          {" "}
          We will consider the degree notation
          {" "}
          <NoBreak>
            “
            <Math>
              $^\circ$
            </Math>
            ”
          </NoBreak>
          {" "} to be pig lipstick on top of
          radians by defining
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^\circ = x \cdot &#123;\eta\over 90&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $x \in \rr$
            </Math>
            ,
          </NoBreak>
          {" "} where the multiplication
          by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \eta\over 90
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          converts from degrees to radians.
        </OuterP>
        <OuterP class="indent-10">
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          90^\circ = 90 \cdot &#123;\eta\over 90&#125; = \eta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          45^\circ = 45 \cdot &#123;\eta\over 90&#125; = \eta/2,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          per this definition.
        </OuterP>
        <OuterP class="indent-10">
          In this way, in particular, we can write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(90^\circ\hlfbk)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as a stand-in for
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...without committing any informality.
        </OuterP>
        <OuterP class="indent-10">
          (Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta) = 0
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in case you had any doubt, by the way—an
          angle of {" "}
          <Math>
            $\eta$
          </Math>
          {" "} puts you at the tippy-top
          of the circle!)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Sines and cosines of {" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;30^\circ&#125;$
              </Math>
              ,
            </NoBreak>
            {" "}
            {" "}
            <Math>
              $\mathbf&#123;45^\circ&#125;$
            </Math>
            {" "} and {" "}
            <NoBreak>
              <Math>
                $\mathbf&#123;60^\circ&#125;$
              </Math>
              .
            </NoBreak>
          </b>
          {" "}
          Note that every point of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\pm\sqrt&#123;x&#125;, \pm\sqrt&#123;1 - x&#125;),\,\,\,0 \leq x \leq 1 \tag&#123;*&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is on the unit circle, because the
          sum-of-the-squares-of-the-two-coordinates is {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "}
          (The equation of the unit circle is {" "}
          <NoBreak>
            <Math>
              $x^2 + y^2 = 1$
            </Math>
            .)
          </NoBreak>
          {" "}
          E.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.2&#125;, \sqrt&#123;0.8&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is on the unit circle, as is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.1&#125;, \sqrt&#123;0.9&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and so on. (If you're curious, points of this
          family...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_that_family.svg" />
        <Pause />
        <OuterP>
          ...look like this.) Vice-versa, every point
          on the unit circle has the form (*) for some
          {" "}
          <Math>
            $0 \leq x \leq 1$
          </Math>
          {" "} and some choice of the {" "}
          <NoBreak>
            ‘
            <Math>
              $\pm$
            </Math>
            ’
          </NoBreak>
          {" "}
          signs.
        </OuterP>
        <OuterP class="indent-10">
          In particular, the unit circle contains the
          following points:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_first.svg" />
        <Pause />
        <OuterP>
          Here
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.5&#125;,\, \sqrt&#123;0.5&#125;\rt&#123;0.2&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is obviously at {" "}
          <Math>
            $45^\circ\hlfbk$
          </Math>
          {" "} from the {" "}
          <Math>
            $x$
          </Math>
          {" "}
          axis, which implies
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(45^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(45^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/2) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/2) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians. Symmetrically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(135^\circ\hlfbk) = -\sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(135^\circ\hlfbk) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.5\eta) = -\sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(1.5\eta) = \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians) in the second quadrant, and so on.
        </OuterP>
        <OuterP class="indent-10">
          For the remaining values we rely on the
          existence of the following two equilateral
          triangles:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_two_equilateral_triangles.svg" />
        <Pause />
        <OuterP>
          The first triangle implies that the the unique
          point on the unit circle with {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            -coordinate
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $0.5$
          </Math>
          {" "} in the first quadrant is at {" "}
          <Math>
            $60^\circ\hlfbk$
          </Math>
          {" "}
          from the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis, while the second triangle implies that the unique point
          on the unit circle with {" "}
          <NoBreak>
            <Math>
              $y$
            </Math>
            -coordinate
          </NoBreak>
          {" "} {" "}
          <Math>
            $0.5$
          </Math>
          {" "}
          in the first quadrant is at {" "}
          <Math>
            $30^\circ\hlfbk$
          </Math>
          {" "}
          from the {" "}
          <Math>
            $x$
          </Math>
          {" "} axis; but since
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.25&#125; = 0.5
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (surprise!), the two points in question must be
          the afore-shown
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.25&#125;, \,\sqrt&#123;0.75&#125;) = (0.5, \,\sqrt&#123;0.75&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          at the upper tip of the first triangle, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (\sqrt&#123;0.75&#125;, \,\sqrt&#123;0.25&#125;) = (\sqrt&#123;0.75&#125;, \,0.5)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          at the rightward tip of the second triangle,
          and we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(60^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(60^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(30^\circ\hlfbk) = \sqrt&#123;0.75&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(30^\circ\hlfbk) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by conclusion; or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(2\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(2\eta/3) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\eta/3) = \sqrt&#123;0.75&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(\eta/3) = 0.5 \,\,(= \sqrt&#123;0.25&#125;)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians!
        </OuterP>
        <OuterP class="indent-10">
          (And symmetrically in other quadrants, e.g.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(120^\circ\hlfbk) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(120^\circ\hlfbk) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          a.k.a.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(4\eta/3) = -0.5 \,\,(= -\sqrt&#123;0.25&#125;),
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \sin(4\eta/3) = \sqrt&#123;0.75&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in radians, etc.)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Postscript 1.
          </i>
          {" "} We have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so the above “wheel of special values” can also be
          drawn as follows (adding the angles in, as well):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_second.svg" />
        <Pause />
        <OuterP>
          <i>
            Postscript 2.
          </i>
          {" "}
          Some teachers also like to so-call
          “rationalize the denominator”; they will write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sqrt&#123;2&#125;\over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;$
            </Math>
            .
          </NoBreak>
          {" "} In this case:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_main_angles_third.svg" />
      </Section>
      <Pause />
      <Section id="section-9">
        <OuterP>
          <b>
            Scaling the circle.
          </b>
          {" "}
          In the following diagram, the coordinates
          of the point {" "}
          <Math>
            $P$
          </Math>
          {" "} are obviously {" "}
          <NoBreak>
            <Math>
              $(\cos(\theta), \sin(\theta))$
            </Math>
            ,
          </NoBreak>
          {" "}
          because that is the definition of sin and cos:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_scaling_circle_1.svg" />
        <Pause />
        <OuterP>
          But say now that
          we re-scale the circle to have some arbitrary
          radius {" "}
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "} while maintaining the angle {" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_scaling_circle_r.svg" />
        <Pause />
        <OuterP>
          ...what are the coordinates of {" "}
          <NoBreak>
            <Math>
              $Q$
            </Math>
            ?
          </NoBreak>
          {" "}
          The coordinates are obviously the old coordinates
          scaled up/down by {" "}
          <NoBreak>
            <Math>
              $r$
            </Math>
            ,
          </NoBreak>
          {" "} i.e.,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          Q = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or, in individual formulas,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          Q_x = r\cdot\cos(\theta)
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          Q_y = r\cdot\sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...where {" "}
          <NoBreak>
            <Math>
              $Q_x$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $Q_y$
          </Math>
          {" "} are the {" "}
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
            -
          </NoBreak>
          {" "} coordinates of {" "}
          <NoBreak>
            <Math>
              $Q$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-10">
        <OuterP>
          <b>
            Polar coordinates.
          </b>
          {" "}
          The so-called
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          polar coordinates
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of a point {" "}
          <Math>
            $P$
          </Math>
          {" "} in the plane are a pair of
          numbers
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (r, \theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with {" "}
          <Math>
            $r \geq 0$
          </Math>
          {" "} such that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (r\cos(\theta), r\sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or namely with the property that:
        </OuterP>
        <TextParent>
          <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;">
            <li style="margin:0 60px;">
              <Math>
                $r$
              </Math>
              {" "} is the distance from {" "}
              <Math>
                $P$
              </Math>
              {" "} to the origin;
            </li>
            <li style="margin:0 60px;">
              <Math>
                $\theta$
              </Math>
              {" "} is “the” counterclockwise angle
              from the positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis to the segment
              {" "}
              <NoBreak>
                <Math>
                  $OP$
                </Math>
                ,
              </NoBreak>
              {" "} where {" "}
              <Math>
                $O$
              </Math>
              {" "} is the origin;
            </li>
          </ul>
        </TextParent>
        <OuterP>
          ...even though {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is not unique,
          because any multiple of {" "}
          <Math>
            $4\eta$
          </Math>
          {" "} may be
          added to {" "}
          <Math>
            $\theta$
          </Math>
          {" "} without altering the
          values of {" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "} or {" "}
          <NoBreak>
            <Math>
              $\cos(\theta)$
            </Math>
            ;
          </NoBreak>
          {" "}
          slightly worse even: if {" "}
          <NoBreak>
            <Math>
              $r = 0$
            </Math>
            ,
          </NoBreak>
          {" "} then
          {" "}
          <Math>
            $\theta$
          </Math>
          {" "} may be anything. (Because in that
          case
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0, 0)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and any value of {" "}
          <Math>
            $\theta$
          </Math>
          {" "} will satisfy
          the equation
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          P = (0\cdot \cos(\theta), 0\cdot \sin(\theta))
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          namely.)
        </OuterP>
        <OuterP class="indent-10">
          NONETHELESS—even though the polar coordinates
          of a point are not (not ever!) uniquely
          determined, we say “the” polar coordinates of
          a point, out of expediency!
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            The pairs
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -3.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 0.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 4.5\eta)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(1, 1) \in \rr^2$
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
            The pairs
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, -2.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 1.5\eta)
            $$
          </MathBlock>
          <Pause />
          <MathBlock>
            $$
            (\sqrt&#123;2&#125;,\, 101.5\eta)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            count among the polar coordinates of the point
            {" "}
            <NoBreak>
              <Math>
                $(-1, 1) \in \rr^2$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-11">
        <OuterP>
          <b>
            Change-of-coordinate formulas.
          </b>
          {" "}
          Definitionally, the equations
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \displaylines&#123;x = r \cos(\theta)\\
          \up&#123;1.3&#125;y = r \sin(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          give the change-of-coordinate formulas
          from a polar coordinate {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "}
          to a cartesian coordinate {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            .
          </NoBreak>
          {" "}
          (It's right there in the promise of what
          it means to be a valid polar coordinate
          {" "}
          <NoBreak>
            <Math>
              $(r, \theta)$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Conversely, to recover the polar
          coordinates {" "}
          <Math>
            $(r, \theta)$
          </Math>
          {" "} from the cartesian
          coordinates {" "}
          <NoBreak>
            <Math>
              $(x, y)$
            </Math>
            ,
          </NoBreak>
          {" "} one has at least
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          r = \sqrt&#123;x^2 + y^2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the Pythagorean theorem, but the
          formula for {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is not so cheerful—out
          of completeness, we can jot it down
          anyway, for your entertainment:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta = \begin&#123;cases&#125;
          \arctan(y/x)&amp;\te&#123;if &#125;\, x \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\te&#123;arccot&#125;(x/y) &amp;\te&#123;if &#125;\, y \ne 0, \,\te&#123;else&#125; \\
          \up&#123;1.2&#125;\rm&#123;?&#125; &amp;\te&#123;if &#125;\, x = 0, y = 0
          \end&#123;cases&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...where “arctan”, “arccot” are
          some-functions-or-other-to-be-discussed-later.
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Note.
          </i>
          {" "}
          Popular programming languages such as
          python offer a function named
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2
          </span>
          that will compute the {" "}
          <i>
            argument
          </i>
          {" "} (see
          Vocabulary below) {" "}
          <Math>
            $\theta$
          </Math>
          {" "} of a given pair
          {" "}
          <Math>
            $(x, y)$
          </Math>
          {" "} out of the box, without you having to
          worry about which of {" "}
          <Math>
            $x$
          </Math>
          {" "} or {" "}
          <Math>
            $y$
          </Math>
          {" "} is {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} etc.
        </OuterP>
        <OuterP class="indent-10">
          But the call goes {" "}
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(y, x)
          </span>
          {" "} not {" "}
          <span style="font-family:monaco;background-color:beige;font-size:0.8em;border-radius:0.4em;padding:0.1em 0.3em;">
            atan2(x, y)
          </span>
          {" "} by some bizareness. (Well, actually a
          throwback to the fact that in this expression...
        </OuterP>
        <Pause />
        <CentralDisplay>
          <NoBreak>
            “
            <Math>
              $\arctan(y/x)$
            </Math>
            ”
          </NoBreak>
        </CentralDisplay>
        <Pause />
        <OuterP>
          ...you hit {" "}
          <NoBreak>
            “
            <Math>
              $y$
            </Math>
            ”
          </NoBreak>
          {" "} before {" "}
          <NoBreak>
            “
            <Math>
              $x$
            </Math>
            ”.)
          </NoBreak>
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Vocabulary.
          </i>
          {" "}
          The first coordinate of a polar
          coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $r$
            </Math>
            ”—is
          </NoBreak>
          {" "} called the
          {" "}
          <i>
            radius
          </i>
          {" "} or the {" "}
          <i>
            norm
          </i>
          . The second coordinate
          of a polar coordinate—colloquially, {" "}
          <NoBreak>
            “
            <Math>
              $\theta$
            </Math>
            ”—is
          </NoBreak>
          {" "}
          called the {" "}
          <i>
            angle
          </i>
          {" "} or the {" "}
          <i>
            argument
          </i>
          .
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-12">
        <OuterP>
          <b>
            Right triangles.
          </b>
          {" "}
          Hopefully, the following figure should seem
          believable-and/or-familiar, at this point
          (it's a scaled-up/down unit circle):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_1.svg" />
        <Pause />
        <OuterP>
          If we assume {" "}
          <Math>
            $0 \leq \theta \leq \eta$
          </Math>
          {" "} then both
          {" "}
          <Math>
            $r\cos(\theta)$
          </Math>
          {" "} and {" "}
          <Math>
            $r\sin(\theta)$
          </Math>
          {" "} are nonnegative,
          and we can redraw the figure as a relationship between
          the sidelengths of a right triangle:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_2.svg" />
        <Pause />
        <OuterP>
          If we rebrand the three legs of the triangle
          as “hypotenuse”, “opposite”, and “adjacent” according
          to their relationship to the angle {" "}
          <NoBreak>
            <Math>
              $\theta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_triangle_sequence_rebranded.svg" />
        <Pause />
        <OuterP>
          ...the relationship can be written:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_relationships_of_note.svg" />
        <Pause />
        <OuterP>
          To be paired with this figure:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_relationships_of_note_triangle_version.svg" />
        <Pause />
        <OuterP>
          The arrows are meant to indicate that {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} is the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that takes one from “hypotenuse” to “adjacent”,
          while {" "}
          <Math>
            $\sin(\theta)$
          </Math>
          {" "} is (again) the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          multiplicative factor
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          that takes one from “hypotenuse” to “opposite”.
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch5_ch_example_multiplications_1.svg" />
          <Pause />
          <OuterP>
            ...the length of the side marked ‘?’ is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \cos(20^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            by following two ‘cos’ arrows (i.e.,
            two hypotenuse-to-adjacent arrows) starting
            from the sidelength of {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            In the following diagram...
          </OuterP>
          <Pause />
          <Image src="/images/svg_ch5_ch_example_multiplications_2.svg" />
          <Pause />
          <OuterP>
            ...the length of the side marked ‘?’ is
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            10\cdot \cos(43^\circ\hlfbk)\cdot \sin(60^\circ\hlfbk)\cdot \sin(50^\circ\hlfbk)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            by following one ‘cos’ and then two ‘sin’
            arrows, starting from the sidelength of
            {" "}
            <NoBreak>
              <Math>
                $10$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section id="section-13">
        <OuterP>
          <b>
            A famous diagram.
          </b>
          {" "}
          There is a somewhat infamous diagram similar
          to the diagrams of examples 5 and 6; to draw the
          diagram, start with a “snail shell” stack of
          two right triangles:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_1.svg" />
        <Pause />
        <OuterP>
          Rotate a copy of the smaller
          triangle by {" "}
          <Math>
            $90^\circ$
          </Math>
          {" "} towards the bigger one;
          we end up with two pairs of parallel sides:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_2.svg" />
        <Pause />
        <OuterP>
          Therefore, if we snap a scaled copy of the
          smaller triangle onto the remaining non-hypotenuse
          side of the bigger triangle, we end up with a
          flush side consisting of a single straight
          segment (you can also think in terms of
          angles that add up to {" "}
          <NoBreak>
            <Math>
              $180^\circ$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_3.svg" />
        <Pause />
        <OuterP>
          We finish off the diagram by setting the
          hypotenuse of the original big triangle to
          have length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_4.svg" />
        <Pause />
        <OuterP>
          This completes the diagram. Note that it is
          possible for the sum of {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "}
          to be greater than {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_snail_stack_greater_eta.svg" />
        <Pause />
        <OuterP>
          ...but, by construction, {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and
          {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} are individually in the range from
          {" "}
          <Math>
            $0$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            .
          </NoBreak>
          {" "} (Being “proper angles” of right
          triangles.) (You can now contemplate what the
          “utility” of the diagram might be!)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-14">
        <OuterP>
          <b>
            The Abercrombie inequality.
          </b>
          {" "}
          Take an ordinary angle of aperture less than
          {" "}
          <Math>
            $180^\circ\hlfbk$
          </Math>
          {" "} with a circular arc drawn
          inside and a line segment spanning the two
          sides of the angle that clears the arc:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_statement.svg" />
        <Pause />
        <OuterP>
          The eponymous
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          Abercrombie inequality
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          states that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A\leq S
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in the language of the above figure, i.e.,
          that the length of the segment is
          at least
          the length of the arc.
        </OuterP>
        <OuterP class="indent-10">
          The proof is that, if this were not the case,
          the
          length
          {" "}
          <Math>
            $S$
          </Math>
          {" "} of the segment would lie to left of the
          length {" "}
          <Math>
            $A$
          </Math>
          {" "} of the arc on the number line, as
          pictured in this stylized view of the number line:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_to_the_left.svg" />
        <Pause />
        <OuterP>
          In the space between {" "}
          <Math>
            $S$
          </Math>
          {" "} and {" "}
          <NoBreak>
            <Math>
              $A$
            </Math>
            ,
          </NoBreak>
          {" "} we could then
          find the length {" "}
          <Math>
            $P$
          </Math>
          {" "} of a polygonal line
          approximating the arc...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_with_P.svg" />
        <Pause />
        <OuterP>
          ...because such polygonal lines can
          approximate the arc arbitrarily closely, i.e.,
          have lengths that come arbitrarily close to
          {" "}
          <NoBreak>
            “
            <Math>
              $A$
            </Math>
            ”
          </NoBreak>
          {" "} on the number line from the left.
          (This constitutes our “axiomatic” belief
          about the  nature of curved length.) But this
          will be a contradiction, because we claim
          that each segment of the polygonal line has
          length less than its corresponding “shadow”
          on the segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_shadows.svg" />
        <Pause />
        <OuterP>
          ...this last claim follows from the following
          diagram:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_s1s2p1p2.svg" />
        <Pause />
        <OuterP>
          The point is that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \overline&#123;s_1s_2&#125;\, &gt; \,\overline&#123;p_1p_2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because {" "}
          <Math>
            $s_1$
          </Math>
          {" "} and {" "}
          <Math>
            $s_2$
          </Math>
          {" "} are separated by a
          pair of parallel lines that are at distance
          {" "}
          <Math>
            $\overline&#123;p_1p_2&#125;$
          </Math>
          {" "} from one another, and
          because at least one of {" "}
          <NoBreak>
            <Math>
              $s_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $s_2$
          </Math>
          {" "} is
          not on either of the parallel lines (or else
          we would have {" "}
          <NoBreak>
            <Math>
              $s_1 = p_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $s_2 = p_2$
            </Math>
            ,
          </NoBreak>
          {" "} and
          the segment {" "}
          <Math>
            $s_1s_2$
          </Math>
          {" "} would not clear the arc).
        </OuterP>
        <OuterP class="indent-10">
          Therefore, each segment of {" "}
          <Math>
            $P$
          </Math>
          {" "} has length
          less than its corresponding “shadow segment”
          on the crossover segment of length {" "}
          <NoBreak>
            <Math>
              $S$
            </Math>
            ,
          </NoBreak>
          {" "} from
          which {" "}
          <NoBreak>
            <Math>
              $S &gt; P$
            </Math>
            ,
          </NoBreak>
          {" "} from which this arrangement
          of values...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_abercrombie_to_the_left_second.svg" />
        <Pause />
        <OuterP>
          ...on the number line is an impossibility,
          i.e., {" "}
          <NoBreak>
            <Math>
              $S \geq A$
            </Math>
            .
          </NoBreak>
          {" "}
          This constitutes the proof of the Abercrombie
          inequality.
        </OuterP>
        <OuterP class="indent-10">
          One can polish a few more details by noting that:
        </OuterP>
        <TextParent>
          <p style="text-indent:-1.3em;padding-top:1em;padding-bottom:0.5em;padding-left:3em;padding-right:1.5em;">
            <b>
              (i)
            </b>
            {" "} the segment can be tangent to the
            arc at one point, the proof will still go
            through (so the segment does not need to
            {" "}
            <i>
              strictly
            </i>
            {" "} clear the arc);
          </p>
          <p style="text-indent:-1.6em;padding-top:0em;padding-bottom:1em;padding-left:3em;padding-right:1.5em;">
            <b>
              (ii)
            </b>
            {" "} as long as the angle is nonzero,
            and the arc has nonzero radius, the
            length of the segment will be STRICTLY
            GREATER than the length of the arc,
            not just greater-or-equal-to
          </p>
        </TextParent>
        <OuterP>
          (Point {" "}
          <b>
            (ii)
          </b>
          {" "} can be seen by
          comparing the segment to a two-segment
          assemblage that is shorter than the segment
          itself, but still-as-long-as-the-arc, by virtue
          of the original inequality.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-15">
        <OuterP>
          <b>
            The Gregorinovich sandwich.
          </b>
          {" "}
          The “Gregorinovich sandwich”—sometimes
          Gr
          <i>
            i
          </i>
          gorinovich—states that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \,&lt;\, \theta \,&lt;\, &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for all {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .
          </NoBreak>
          {" "}
          The Gregorinovich sandwich is so-called because
          it “sandwiches” {" "}
          <Math>
            $\theta$
          </Math>
          {" "}
          between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          below, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          above. (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over\cos(\theta)&#125; &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          in the range {" "}
          <Math>
            $0 &lt; \theta &lt; \eta$
          </Math>
          {" "}
          because dividing by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          makes you
        </OuterP>
        <Pause />
        <CentralDisplay>
          BIGGER
        </CentralDisplay>
        <Pause />
        <OuterP>
          when {" "}
          <NoBreak>
            <Math>
              $0 &lt; \cos(\theta) &lt; 1$
            </Math>
            ,
          </NoBreak>
          {" "} which is the case
          for {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            —in
          </NoBreak>
          {" "} fact, dividing by
          {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} will make you
        </OuterP>
        <Pause />
        <CentralDisplay>
          DRAMATICALLY BIGGER
        </CentralDisplay>
        <Pause />
        <OuterP>
          when {" "}
          <Math>
            $\cos(\theta)$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} which is the
          case when {" "}
          <Math>
            $\theta$
          </Math>
          {" "} is close to {" "}
          <NoBreak>
            <Math>
              $\eta$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          The first inequality
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta) \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; \theta
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          follows by this illustration (using {" "}
          <NoBreak>
            <Math>
              $0 &lt; \theta &lt; \eta$
            </Math>
            ):
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_fisher_first_ineq.svg" />
        <Pause />
        <OuterP>
          Namely, per the one slightly pedantic logic,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \theta &gt; L
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on the one hand, where {" "}
          <Math>
            $L$
          </Math>
          {" "} is the length of
          the dotted chord, and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          L &gt; \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          on the other hand. Together, this implies
          {" "}
          <NoBreak>
            <Math>
              $\theta \rt&#123;0.1&#125;&gt;\rt&#123;0.1&#125; \sin(\theta)$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          For the second inequality, we have to start
          by noting that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\sin(\theta)\over \cos(\theta)&#125; = &#123;1\over \cos(\theta)&#125;\cdot \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the length that {" "}
          <Math>
            $\theta$
          </Math>
          {" "} projects onto
          the line {" "}
          <NoBreak>
            <Math>
              $x = 1$
            </Math>
            :
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_fisher_second_ineq.svg" />
        <Pause />
        <OuterP>
          Specifically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          turns the bottom segment of length {" "}
          <Math>
            $1$
          </Math>
          {" "}
          into the pink hypotenuse, because just as ‘cos’
          is the hypotenuse-to-adjacent multiplicative
          factor, so is {" "}
          <NoBreak>
            ‘
            <Math>
              $1/\!\cos$
            </Math>
            ’
          </NoBreak>
          {" "} the adjacent-to-hypotenuse
          multiplicative factor (don't be confused by the
          presence of two possible triangles to which
          this can be applied); then,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sin(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          brings one over to the right-hand segment
          from the pink hypotenuse, being the
          hypotenuse-to-opposite multiplicative
          factor.
        </OuterP>
        <OuterP class="indent-10">
          The fact that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;\theta&#125; \rt&#123;0.1&#125;&lt;\rt&#123;0.1&#125; &#123;\sin(\theta)\over \cos(\theta)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          then follows from the “polished” version
          of the Abercrombie inequality. (The version
          that allows the segment to be tangent to the
          arc, and that claims a strict inequality.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-16">
        <OuterP>
          <b>
            The angle-sum formulas.
          </b>
          {" "}
          In the “famous diagram” from above there
          are a total of four different ways to
          reach an outer edge by means of ‘cos’
          and ‘sin’ arrows while starting from the
          edge of length {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} reaching each of the
          four other outer edges precisely once:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_1.svg" />
        <Pause />
        <OuterP>
          (Note by the way that {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1 \leq \eta$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $0 \leq \theta_2 \leq \eta$
          </Math>
          {" "} because of
          the way the figure is constructed, which
          implies that {" "}
          <NoBreak>
            <Math>
              $\sin(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\cos(\theta_1\!\rt&#123;0.1&#125;)$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sin(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "} and {" "}
          <Math>
            $\cos(\theta_2\!\rt&#123;0.1&#125;)$
          </Math>
          {" "}
          are all nonnegative, and that all their
          products are nonnegative, as well.)
        </OuterP>
        <OuterP class="indent-10">
          On the other hand, if we inscribe the
          figure in the unit circle with the joint angle
          {" "}
          <Math>
            $\theta_1 + \theta_2$
          </Math>
          {" "} at the center, we find that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\sin(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\cos(\theta_1 + \theta_2)\,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          make an appearance as coordinates, and
          that these coordinates can be expressed as
          sums or differences of the four outer edges:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_2.svg" />
        <Pause />
        <OuterP>
          (Or with {" "}
          <NoBreak>
            <Math>
              $\theta_1 + \theta_2 &gt; \eta$
            </Math>
            ...
          </NoBreak>
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_3.svg" />
        <Pause />
        <OuterP>
          ...works as well!)
        </OuterP>
        <OuterP class="indent-10">
          In other words, we find...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_formulas_flowers.svg" />
        <Pause />
        <OuterP>
          ...for {" "}
          <Math>
            $\theta_1$
          </Math>
          {" "} and {" "}
          <Math>
            $\theta_2$
          </Math>
          {" "} as may
          appear in such a figure, i.e., for
          {" "}
          <NoBreak>
            <Math>
              $0 \leq \theta_1, \theta_2 \leq \eta$
            </Math>
            .
          </NoBreak>
          {" "} In
          fact, these two formulas hold for {" "}
          <i>
            all
          </i>
          {" "}
          {" "}
          <NoBreak>
            <Math>
              $\theta_1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $\theta_2 \in \rr$
            </Math>
            .
          </NoBreak>
          {" "} They are
          known as the {" "}
          <i>
            angle-sum formulas
          </i>
          . Also
          note the “pattern” of the angle-sum formulas:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_angle_sum_formulas_by_heart.svg" />
        <Pause />
        <OuterP>
          The point of remembering these patterns
          is that, on their own, these patterns are
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          enough
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to reconstruct the full formulas from scratch!
          (Well, a lot of students remember the formulas
          that way, at least.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-17">
        <OuterP>
          <b>
            The missing arrows.
          </b>
          {" "}
          ‘sin’ and ‘cos’ only constitute two out
          of six ratios that exist among the sides
          of a right triangle. The four “missing ratios”
          are hereby drawn:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_missing_arrows_veiled.svg" />
        <Pause />
        <OuterP>
          In fact, there is a dedicated, named function
          that computes each of the six ratios. We shall
          now reveal the names of the four missing
          functions (!!):
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_missing_arrows_unveiled.svg" />
        <Pause />
        <OuterP>
          Here
          “sec” is short for {" "}
          <i>
            secant
          </i>
          ,
          “tan” is short for {" "}
          <i>
            tangent
          </i>
          ,
          “cot” is short for {" "}
          <i>
            cotangent
          </i>
          , and
          “csc” is short for {" "}
          <i>
            cosecant
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          To be clear, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘adjacent’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘opposite’ to ‘hypotenuse’, multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘adjacent’ to ‘opposite’,
          and multiplying by
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cot(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          takes you from ‘opposite’ to ‘adjacent’. (!)
        </OuterP>
        <OuterP class="indent-10">
          You may observe that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec = &#123;1\over \cos&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc = &#123;1\over \sin&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as multiplying by ‘cos’ undoes the work
          of multiplying by ‘sec’, and likewise for
          ‘sin’ and ‘csc’; also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \,\tan = &#123;1\over \cot&#125;,
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot = &#123;1\over \tan&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          modulo a very small technicality (to do
          with the fact that {" "}
          <NoBreak>
            <Math>
              $&#123;1\over \infty&#125; \ne 0$
            </Math>
            ,
          </NoBreak>
          {" "}
          or to do with the fact that
          what people think of as {" "}
          <NoBreak>
            “
            <Math>
              $\pm\infty$
            </Math>
            ”
          </NoBreak>
          {" "}
          is, in fact, an {" "}
          <i>
            undefined
          </i>
          {" "} value of the function),
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \tan \,=\, \sec \cdot \sin \,\,=\,\, &#123;\sin\!\!\!\!\phantom&#123;1&#125;\over \cos&#125;
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          \cot \,=\, \csc \cdot \cos \,\,=\,\, &#123;\cos\!\!\!\!\phantom&#123;1&#125;\over \sin&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since one way to reach ‘opposite’ from
          ‘adjacent’ is to go via ‘hypotenuse’, and
          vice-versa for reaching ‘adjacent’ from
          ‘opposite’. (In fact, the next-to-last
          identity played a role in our proof of the
          Gregorinovich sandwich.) (Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          %\sin(\theta) &lt; \theta &lt; \tan(\theta)\rt&#123;0.1&#125;
          \sin(\theta) &lt; \theta &lt; \tan(\theta)\rt&#123;0.1&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is another way of writing the Grigorinovich
          sandwich.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-18">
        <OuterP>
          <b>
            Secant: a second view.
          </b>
          {" "}
          We will point out that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is also the multiplicative factor that takes 
          you from the {" "}
          <span style="background-color:#ff82d7;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            PURPLE
          </span>
          {" "} to the {" "}
          <span style="white-space:nowrap;background-color:#ccffaa;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            LIME GREEN
          </span>
          {" "} triangle (hard to draw, because it is
          behind the purple triangle!) in the following
          figure:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_1.svg" />
        <Pause />
        <OuterP>
          Indeed, the scaling factor that is needed
          to turn the purple into the lime green
          triangle is the solution {" "}
          <Math>
            $A$
          </Math>
          {" "} to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A\cdot \cos(\theta) = 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          A = &#123;1\over \cos(\theta)&#125; = \sec(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          using {" "}
          <NoBreak>
            <Math>
              $\sec = 1/\cos$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          (After all, this multiplicative factor...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_2.svg" />
        <Pause />
        <OuterP>
          ...was always going to equal
          this multiplicative factor...
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_3.svg" />
        <Pause />
        <OuterP>
          ...given that the target segment has length {" "}
          <Math>
            $1$
          </Math>
          {" "} each time!)
        </OuterP>
        <Pause />
        <OuterP>
          <i>
            Postscript.
          </i>
          {" "}
          Similarly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \csc(\theta)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is the multiplicative factor that takes you 
          from the {" "}
          <span style="white-space:nowrap;background-color:#ff6600;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            BURNT ORANGE
          </span>
          {" "} to the {" "}
          <span style="white-space:nowrap;background-color:#e9afaf;border-radius:0.3em;font-size:0.7em;padding-left:0.5em;padding-right:0.5em;padding-top:0.3em;padding-bottom:0.3em;border:1px solid black;font-family:arial;">
            FAUX BORDEAUX
          </span>
          {" "} triangle below:
        </OuterP>
        <Pause />
        <Image src="/images/svg_ch5_ch_secant_reinterpretation_4.svg" />
        <Pause />
        <OuterP>
          (But this fact is not used as often.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-19">
        <OuterP>
          <b>
            Note on calculators.
          </b>
          {" "}
          Your calculator has “degree mode” and
          “radian mode”. If your calculator tells
          you that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \cos(1.57)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a number close to {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} instead of being
          a number close to {" "}
          <NoBreak>
            <Math>
              $0$
            </Math>
            ,
          </NoBreak>
          {" "} it means that your
          calculator is in “degree mode”—it has treated
          as {" "}
          <Math>
            $1.57$
          </Math>
          {" "} as a number of degrees, instead of
          as a number of radians! (Be sure, in any
          case, that you're in the mode that you want.)
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
              Is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y =  \cos(x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the shift of {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "} to the left by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "}
              or to the right by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The function {" "}
              <Math>
                $x \ra \cos(x + 0.1)$
              </Math>
              {" "} fetches its values
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              in the future
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ,
              </NoBreak>
              {" "} compared to {" "}
              <NoBreak>
                <Math>
                  $\cos(x)$
                </Math>
                .
              </NoBreak>
              {" "} It is therefore
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              ahead
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or its graph
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              to the left
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                .
              </NoBreak>
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
              Guesstimate a function with this graph:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It appears that the function is “a line plus
              something”, in the sense of the following
              diagram:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_equation.svg" />
            <Pause />
            <OuterP>
              (Or in the technical sense of taking the sum
              of two functions, to be more exact—that is what
              the sum of two functions looks like, pictorialized!)
            </OuterP>
            <OuterP class="indent-10">
              The line appears to be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = &#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              making it a true {" "}
              <i>
                linear
              </i>
              {" "} function (as opposed
              to {" "}
              <i>
                affine
              </i>
              , cf. Chapter 3).
            </OuterP>
            <OuterP class="indent-10">
              As for the “something”—the bumpy one—it appears
              to just be a “sped up cosine”, and note that
              the graph goes through approximately {" "}
              <Math>
                $10$
              </Math>
              {" "}
              cycles between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = 6.28 \approx 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              as we can count on the graph of the original
              function:
              <ImageLeft
                line={-2}
                src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_4eta_cloud.svg" />
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cosine_10x_plus_x_over_4_bump_count.svg" />
            <Pause />
            <OuterP>
              As cos goes through {" "}
              <i>
                one
              </i>
              {" "} cycle from {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} to
              {" "}
              <NoBreak>
                <Math>
                  $x = 4\eta$
                </Math>
                ,
              </NoBreak>
              {" "} the “bumpy function” is therefore
              (roughly, from what we can see) a {" "}
              <NoBreak>
                “
                <Math>
                  $10$
                </Math>
                &amp;#x200b;
              </NoBreak>
              <NoBreak>
                <Math>
                  $\times$
                </Math>
                ”
              </NoBreak>
              {" "}
              sped-up version of cosine, i.e.,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which the guesstimate for the initial function
              would be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(10x) + &#123;1\over 4&#125; x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              adding our two separate guesstimates together.
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
              Guesstimate a function with this graph (we can
              tell you that the large-scale curve is a
              parabola):
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Having intimated that the answer is the sum of
              a parabola and of some cosine deviant, let us
              focus on the parabolic portion first, that would
              namely be roughly this purple curve:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_parabola.svg" />
            <Pause />
            <OuterP>
              [Nb:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              parabolic
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is a synonym of
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              quadratic
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              degree {" "}
              <Math>
                $\mathit&#123;2&#125;$
              </Math>
              {" "} polynomial
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              i.e., a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra a_2x^2 + a_1x + a_0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for constants {" "}
              <NoBreak>
                <Math>
                  $a_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $a_0 \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} cf. Chapter 3.]
            </OuterP>
            <OuterP class="indent-10">
              As the parabola is symmetric about the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis it will
              be of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = Ax^2 + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some constants {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                .
              </NoBreak>
              {" "}
              (And specifically
              without a
              {" "}
              <NoBreak>
                “
                <Math>
                  $Bx$
                </Math>
                ”
              </NoBreak>
              {" "}
              term, that would break symmetry.)
            </OuterP>
            <OuterP class="indent-10">
              The value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is easy because it is the value of the parabola at
              {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ,
              </NoBreak>
              {" "} which in this case appears to be {" "}
              <NoBreak>
                <Math>
                  $y = -3$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_C_estimate.svg" />
            <Pause />
            <OuterP>
              ...so...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              C = -3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (we say). For {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "}
              note that the parabola appears to have value {" "}
              <Math>
                $y \approx 3$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                ,
              </NoBreak>
              {" "} resulting in an increase of {" "}
              <Math>
                $\approx 6$
              </Math>
              {" "}
              between {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $x = \pm 12$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_A_estimate.svg" />
            <Pause />
            <OuterP>
              That increase being entirely due to the term
              {" "}
              <NoBreak>
                <Math>
                  $Ax^2$
                </Math>
                ,
              </NoBreak>
              {" "} we get
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \cdot 12^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (in more detail,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              %(A\cdot 12^2) - (A\cdot 0^2) \approx 6
              A\cdot 12^2 - A\cdot 0^2 \approx 6
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              but {" "}
              <Math>
                $A\cdot 0^2$
              </Math>
              {" "} goes away), meaning
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \approx &#123;6\over 12^2&#125; = &#123;1\over 24&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              meaning that the quadratic portion of the function is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per this estimate.
            </OuterP>
            <OuterP class="indent-10">
              The other portion of the answer—what is left
              after the parabola is subtracted—is a cosine-like
              function (or {" "}
              <i>
                sinusoid
              </i>
              ) whose amplitude (the
              height of a bump) is roughly {" "}
              <NoBreak>
                <Math>
                  $0.5$
                </Math>
                ,
              </NoBreak>
              {" "} which is half the
              amplitude of
              sine/cosine:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_with_inset.svg" />
            <Pause />
            <OuterP>
              Moreover at {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} we find
              more or less exactly
              the {" "}
              <i>
                bottom
              </i>
              {" "} of a
              bump,
              so altogether
              we can use a function of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(Bx)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to model this sinusoid,
              where the multiplication by {" "}
              <Math>
                $0.5$
              </Math>
              {" "} gives us
              the desired amplitude and where the {" "}
              <NoBreak>
                ‘
                <Math>
                  $-$
                </Math>
                ’
              </NoBreak>
              {" "} gives
              us an anti-bump (“trough”?) instead of a bump at {" "}
              <NoBreak>
                <Math>
                  $x = 0$
                </Math>
                ;
              </NoBreak>
              {" "}
              on the other hand the value {" "}
              <Math>
                $B$
              </Math>
              {" "} will control the amount of
              horizontal compression inside the curve; specifically,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              will give a curve that goes through one full cycle
              per interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              while, in general, an arbitrary value of {" "}
              <Math>
                $B$
              </Math>
              {" "} will give a
              curve that goes {" "}
              <Math>
                $B$
              </Math>
              {" "} full cycles
              per interval of length {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} (the larger {" "}
              <Math>
                $B$
              </Math>
              {" "} is,
              the more “frenzied” the curve);
              in our case, it seems that {" "}
              <NoBreak>
                <Math>
                  $B \approx 20$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_cosine_minus_cos_20x_plus_quadratic_B_estimate.svg" />
            <Pause />
            <OuterP>
              So an estimate for the
              second function
              would be...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...giving us...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -0.5\cos(20x) + &#123;x^2\over 24&#125; - 3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...for our final answer, after adding the parabola back.
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
              Guesstimate a function with this graph:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              First we estimate a function for the large-scale
              curve in purple:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple.svg" />
            <Pause />
            <OuterP>
              It appears to be a linear function (line through
              {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} sloping down) plus a sinusoid. To
              estimate the slope of the linear function we can
              take two points in like relation to the sinusoid,
              draw a line between them and estimate the slope:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_1_4.svg" />
            <Pause />
            <OuterP>
              This makes the linear function portion of the purple
              curve
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or thereabouts.
            </OuterP>
            <OuterP class="indent-10">
              To model the sinusoid portion of the large-scale
              purple curve we need more measurements, such as
              the total height of the sinusoid from top of
              bump to bottom of trough; we can add a third “bottom
              of trough” dot, in same relation to the top of
              bumps (but we won't actually draw this dot or else
              we won't be able to see where we're measuring):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_height.svg" />
            <Pause />
            <OuterP>
              So it appears that the sinusoid has a total height
              of {" "}
              <Math>
                $\approx 4$
              </Math>
              {" "} from top of bump to bottom of trough.
            </OuterP>
            <OuterP class="indent-10">
              (And in case you're confused by what we're trying
              to do,
              let us re-explain that we are trying
              to measure the vertical width of this blue band...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_with_band.svg" />
            <Pause />
            <OuterP>
              ...that, indeed, seems near {" "}
              <NoBreak>
                <Math>
                  $4$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              What this means is that if we remove the linear
              portion
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from the purple curve, what we will find is a
              sinusoid whose individual bumps have height {" "}
              <NoBreak>
                <Math>
                  $\approx 2$
                </Math>
                ;
              </NoBreak>
              {" "}
              something like this (we switch the color to aquamarine, so
              that “purple curve” retains its unique meaning):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_sinusoid_only.svg" />
            <Pause />
            <OuterP>
              This graph has the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(Bx)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some value of {" "}
              <Math>
                $B \in \rr$
              </Math>
              {" "} that, chosen correctly,
              will give us the desired “wavelength”. (Note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has graph...
            </OuterP>
            <Pause />
            <Image
              style="margin-top:0.8em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_big_wave_minus_sin_x.svg" />
            <Pause />
            <OuterP>
              ...and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has graph...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_minus_2sin_x.svg" />
            <Pause />
            <OuterP>
              ...and, from there, all that remains is to
              “slow down” the oscillation to match the
              aquamarine graph—the “slowing down” is what
              {" "}
              <Math>
                $B$
              </Math>
              {" "} is for.)
            </OuterP>
            <OuterP class="indent-10">
              To know how much {" "}
              <Math>
                $B$
              </Math>
              {" "} must be, we must measure
              the cycle length (it is, admittedly, hard to
              accurately determine the position of the top
              of each large-scale bump, but we do our best by
              basing ourselves off of what appear to be identical
              patterns in the small-scale oscillations at
              the top of each large-scale bump):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_blue_period_measurement.svg" />
            <Pause />
            <OuterP>
              As
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              12.6 \approx 12.56 = 2\times 6.28 \approx 2\cdot 4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the period of the large-scale sinusoid is near
              twice the period of sin or cos; i.e., we need to
              “slow down”
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -2\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by a factor {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} i.e., put
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              B = 0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              i.e., use
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the large-scale sinusoid. (Aquamarine graph.)
            </OuterP>
            <OuterP class="indent-10">
              (So far we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              -&#123;1\over 4&#125;x - 2\sin(0.5x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for our approximation to the purple curve, putting
              the linear and sinusoidal parts together. Now we
              move on from the purple curve.)
            </OuterP>
            <OuterP class="indent-10">
              It remains to add in the small-scale oscillation
              from the original curve; we can do the tedious
              part first, and count the number cycles in an
              interval of length {" "}
              <NoBreak>
                <Math>
                  $4\eta \approx 6.28$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_wave_purple_small_scale_bump_count.svg" />
            <Pause />
            <OuterP>
              So the small-scale oscillation is running
              at {" "}
              <Math>
                $\approx 19$
              </Math>
              {" "} times the frequency of an ordinary
              sine or cosine, and we can model the small-scale
              oscillation by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra -0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since, like the large-scale oscillation from the
              purple curve, it shares the same phase as {" "}
              <NoBreak>
                <Math>
                  $-\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              and since, like the small-scale oscillation from
              Exercise 3, it has an amplitude of {" "}
              <NoBreak>
                <Math>
                  $\approx 0.5$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Altogether, we get
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = -&#123;1\over 4&#125;x - 2\sin(0.5x) - 0.5\sin(19x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as our “guesstimate”, while adding the linear
              function, the large-scale sinusoid, and the small-scale
              sinusoid together.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={5}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 5.
              </b>
              {" "}
              Which function is most plausibly associated to
              which graph?
            </OuterP>
            <Pause />
            <table
              class="slice"
              style="border-collapse:collapse;font-size:100%;text-align:center;margin:auto;margin-top:1em;margin-bottom:1.5em;">
              <colgroup>
                <col width={200} />
                <col width={200} />
              </colgroup>
              <tbody>
                <tr style="border-bottom:1px solid black;">
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin x \cdot \cos x$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \cos^2(x)$
                    </Math>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0.5em 0;border-right:1px solid black">
                    <Math>
                      $x \ra \sin^2(x)$
                    </Math>
                  </td>
                  <td style="padding:0.5em 0;">
                    <Math>
                      $x \ra \sin x + \cos x$
                    </Math>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The culprits are:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_labeled.svg" />
            <Pause />
            <OuterP>
              For reference (if you need help checking), the
              graphs of {" "}
              <Math>
                $\sin$
              </Math>
              {" "} and {" "}
              <Math>
                $\cos$
              </Math>
              {" "} are as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_cos.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_four_graphs_sin.svg" />
            <Pause />
            <OuterP>
              (Then imagine summing together, squaring, etc.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                It is, indeed, intriguing that all of these
                functions appear to be
                <i>
                  sinusoids
                </i>
                . (Formally defined
                as a function of the form {" "}
                <Math>
                  $x \ra A\cdot \sin(Bx + C) + D$
                </Math>
                {" "}
                for some constants {" "}
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
                    $D \in \rr$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={6}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 6.
              </b>
              {" "}
              Is the pythagorean identity apparent in the
              graphs of the previous exercise?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Yes.
              Imagine two wooden cutouts made
              from the graphs of {" "}
              <NoBreak>
                <Math>
                  $y = \sin^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/images/svg_ch5_ex_pythagorean_graphs_sin2.svg" />
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/images/svg_ch5_ex_pythagorean_graphs_cos2.svg" />
            <Pause />
            <OuterP>
              After vertically flipping the cutout
              of {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "} the cutouts
              fit together to make
              the constant function {" "}
              <Math>
                $y = 1$
              </Math>
              {" "} (like a parquet):
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1.1em;margin-bottom:1.1em;"
              src="/images/svg_ch5_ex_pythagorean_graphs_compounded.svg" />
            <Pause />
            <OuterP>
              And this occurs because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos^2(x) + \sin^2(x) = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} which is the pythagorean identity.
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
              Compute the ratio {" "}
              <Math>
                $A/B$
              </Math>
              {" "} assuming all same-colored
              triangles are similar, with the help of a calculator:
            </OuterP>
            <Pause />
            <Image
              style="width:500px;margin-top:1em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_big_snail.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              What we want is the multiplicative ratio that
              would take us from the bottom to the top side of
              this quadrilateral, so that we can multiply by that
              ratio over and over again:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_snail_quad.svg" />
            <Pause />
            <OuterP>
              But the two triangles involved are
            </OuterP>
            <Pause />
            <CentralDisplay>
              NOT RIGHT TRIANGLES
            </CentralDisplay>
            <Pause />
            <OuterP>
              and we must break them into smaller parts that
              {" "}
              <i>
                are
              </i>
              {" "} right triangles in order to use trigonometric
              functions. Specifically, as per this drawing:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_snail_quad_four_parts.svg" />
            <Pause />
            <OuterP>
              The multiplicative ratios that correspond to the
              first and third arrows (in arrow-order from bottom
              to top) are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(59^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because these are “hypotenuse-to-opposite” arrows,
              while the multiplicative ratios that correspond to the
              second and fourth arrows are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \csc(71^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \csc(60^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because these are the opposite (no pun intended),
              i.e.,“opposite-to-hypotenuse” arrows. The “big grey
              arrow” ratio from two diagrams ago is obtained by multiplying
              these four small-arrow ratios together, or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(68^\circ\hlfbk)\times\csc(71^\circ\hlfbk)\times\sin(59^\circ\hlfbk)\times\csc(60^\circ\hlfbk)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (that can also be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sin(68^\circ\hlfbk)\times\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\times\sin(60^\circ\hlfbk)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $\csc = &#123;1\over \sin&#125;$
                </Math>
                )
              </NoBreak>
              {" "} which, numerically, comes out to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.97057870529467...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              meaning that the top side of the quadrilateral tile is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              97\%
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and some the length of the bottom side; taking
              the {" "}
              <NoBreak>
                <Math>
                  $36$
                </Math>
                -th
              </NoBreak>
              {" "} power of {" "}
              <NoBreak>
                <Math>
                  $0.9705\dots$
                </Math>
                ,
              </NoBreak>
              {" "} because {" "}
              <Math>
                $36$
              </Math>
              {" "} is the
              number of times that the quadrilateral
              repeats within the spiral, we find
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.34127722635785...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is the desired ratio {" "}
              <NoBreak>
                <Math>
                  $A/B$
                </Math>
                ,
              </NoBreak>
              {" "} and which agrees with the
              drawing, as {" "}
              <Math>
                $A$
              </Math>
              {" "} seems plausibly to be about one-third of
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} from the drawing!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                While the final answer can be written
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\sin(68^\circ\hlfbk)\cdot\csc(71^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk)\cdot\csc(60^\circ\hlfbk))^&#123;36&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \left(&#123;\sin(68^\circ\hlfbk)\cdot\sin(59^\circ\hlfbk) \over \sin(71^\circ\hlfbk)\cdot\sin(60^\circ\hlfbk)&#125;\right)^&#123;\!36&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                teachers typically want to see such expressions
                evualuated out, to make sure that you and your
                calculator form a good team. (And, to be fair,
                catching one's own calculator mistakes by virtue
                of spotting a nonsensical number is a skill in
                itself.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Instead of counting the number of times that the
                quadrilateral appears in the double spiral by hand
                one can
                calculate the amount of rotation between one
                quadrilateral and the next, which is this purple angle:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1em;"
                src="/images/svg_ch5_ex_big_snail_quad_purple_angle_1.svg" />
              <Pause />
              <OuterP>
                The key to measuring this
                angle is the concept of an “alternating angle”,
                whereby {" "}
                <Math>
                  $68^\circ$
                </Math>
                {" "} reappears to the left of {" "}
                <NoBreak>
                  <Math>
                    $71^\circ$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1em;"
                src="/images/svg_ch5_ex_big_snail_quad_purple_angle_2.svg" />
              <Pause />
              <OuterP>
                Then we can calculate the purple angle as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                68^\circ + 71^\circ + 61^\circ - 180^\circ = 20^\circ
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                meaning that each quadrilateral is rotated by {" "}
                <Math>
                  $20^\circ$
                </Math>
                {" "} from the
                previous, and in one turn of the spiral there are
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;360^\circ\over 20^\circ&#125; = 18
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                quadrilaterals, or
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                2 \times 18 = 36
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                quadrilaterals for two turns!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={8}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 8.
              </b>
              {" "}
              In the drawing below the oval is a circle of
              radius {" "}
              <Math>
                $r$
              </Math>
              {" "} and the angle {" "}
              <Math>
                $\phi$
              </Math>
              {" "} is in “standard
              position”, meaning that it opens counterclockwise
              for a positive angle from the direction of the
              positive {" "}
              <Math>
                $x$
              </Math>
              {" "} axis. What are the coordinates
              of {" "}
              <Math>
                $P$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $x_0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y_0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\phi$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1em;margin-bottom:0.5em;"
              src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_v2.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The {" "}
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
              {" "} are
              respectively
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x_0 + r\cdot \cos(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y_0 + r\cdot \sin(\phi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\phi)
              $$
              <ImageRight
                src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaX_v2_cloud.svg"
                offset_x="5.5em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              is the difference from the center of the
              circle to {" "}
              <Math>
                $P$
              </Math>
              {" "} in {" "}
              <Math>
                $x$
              </Math>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(\phi)
              $$
              <ImageLeft
                src="/images/svg_ch5_ex_P_in_terms_of_ADEphi_DeltaY_v2_cloud.svg"
                offset_x="7.5em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              is the difference from the center of the circle to {" "}
              <Math>
                $P$
              </Math>
              {" "} in {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                ,
              </NoBreak>
              {" "}
              as per scaling a unit circle to radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={9}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 9.
              </b>
              {" "}
              If a
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              vector
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              is {" "}
              <i>
                a pair of numbers
              </i>
              {" "} (in 2D), suggest a
              definition for the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              sum
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of two vectors. (The most logical definition wins.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The standard definition is that the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; + \vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of a vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (u_x, u_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and of a vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (v_x, v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the vector
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (u_x + v_x, u_y + v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              whose first coordinate is the sum of the first
              coordinates of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "} and whose
              second coordinate is the sum of the second coordinates
              of {" "}
              <Math>
                $\vec&#123;u&#125;$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;u&#125; = (100, 100)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \vec&#123;v&#125; = (1, -1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\vec&#123;u&#125; + \vec&#123;v&#125; = (101, 99)
              $$
              <ImageRight
                src="/images/svg_ch5_ex_vector_sum_101_cloud.svg"
                offset_x="1em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              because
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 + 1 = 101
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the one hand, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              100 - 1 = 99
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on the other hand.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                The little arrow {" "}
                <NoBreak>
                  “
                  <Math>
                    $\vec&#123;\phantom&#123;x&#125;&#125;$
                  </Math>
                  ”
                </NoBreak>
                {" "}
                is a notation used to denote vectors. (Feel free
                to choose your own notation.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Represent the vectors {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                by arrows whose components are displacements {" "}
                <NoBreak>
                  <Math>
                    $u_x$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $u_y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $v_y$
                </Math>
                {" "} in {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $x$
                </Math>
                {" "} and {" "}
                <Math>
                  $y$
                </Math>
                {" "} again
                respectively:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_vectors.svg" />
              <Pause />
              <OuterP>
                Then
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_x + v_x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                may be geometrically realized as the concatenation
                of the {" "}
                <Math>
                  $u_x$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_x$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_ux_plus_vx.svg" />
              <Pause />
              <OuterP>
                ...component displacements, while
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                u_y + v_y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                may be geometrically realized as the concatenation
                of the {" "}
                <Math>
                  $u_y$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $v_y$
                  </Math>
                  ...
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_uy_plus_vy.svg" />
              <Pause />
              <OuterP>
                ...component displacements; moreover, both
                concatenations may be simultaneously obtained by
                concatenating the original {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} and {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "}
                arrows...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_u_concat_v.svg" />
              <Pause />
              <OuterP>
                ...which actually implies that {" "}
                <Math>
                  $\vec&#123;u&#125; + \vec&#123;v&#125;$
                </Math>
                {" "}
                is the vector going from the head of {" "}
                <Math>
                  $\vec&#123;u&#125;$
                </Math>
                {" "} to
                the tail of {" "}
                <Math>
                  $\vec&#123;v&#125;$
                </Math>
                {" "} in the afore-mentioned
                concatenation, because of how we defined
                {" "}
                <NoBreak>
                  <Math>
                    $\vec&#123;u&#125; + \vec&#123;v&#125;$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_vector_sum_u_plus_v.svg" />
              <Pause />
              <OuterP>
                This makes a mess, but the point is that this
                gives us a
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric interpretation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric representation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                geometric method of evaluation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                for the sum of two vectors: concatenate the arrows
                of the vectors you're summing, and take the final
                displacement from the head of the first arrow to the
                tail of the last arrow.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                The solution to Exercise 7 can be cast in terms of
                vector addition, with, specifically, the position
                vector of the point being equal to the sum of the
                position vector of the circle's center with the “radial
                vector” from the center to the point:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:0.8em;"
                src="/images/svg_ch5_ex_vector_sum_previous_example.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={10}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 10.
              </b>
              {" "}
              If a particle in {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} (= “in the plane”)
              has {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A\cdot\cos(Bt + C) + D
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at time {" "}
              <Math>
                $t$
              </Math>
              {" "} what is the most likely motion
              that the particle is undergoing? In that
              case, what is the geometric meaning of the
              constants {" "}
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
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The simplest motion that would produce such
              an {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} (according to subjective human
              standards of simplicity, admittedly) is circular
              motion at uniform speed. In this case:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $A$
                  </Math>
                  {" "} is the radius of the circle
                </li>
                <li>
                  <Math>
                    $D$
                  </Math>
                  {" "} is the {" "}
                  <NoBreak>
                    <Math>
                      $x$
                    </Math>
                    -coordinate
                  </NoBreak>
                  {" "} of the circle's center
                </li>
              </ul>
            </TextParent>
            <OuterP>
              And either:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $B$
                  </Math>
                  {" "} is the counterclockwise
                  {" "}
                  <i>
                    angular speed
                  </i>
                  /
                  <i>
                    angular frequency
                  </i>
                  {" "} (radians per
                  unit time) and {" "}
                  <Math>
                    $C$
                  </Math>
                  {" "} is the counterclockwise
                  starting angle {" "}
                  <NoBreak>
                    (
                    <Math>
                      $t = 0$
                    </Math>
                    )
                  </NoBreak>
                  {" "} of the particle, as
                  measured from a translate of the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "}
                  axis going through the center of the circle
                </li>
              </ul>
            </TextParent>
            <OuterP>
              Or:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  <Math>
                    $-B$
                  </Math>
                  {" "} is the counterclockwise
                  angular speed/angular frequency of the particle
                  and {" "}
                  <Math>
                    $-C$
                  </Math>
                  {" "} is the counterclockwise starting angle
                  of the particle, as measured from a translate of
                  the positive {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis going through the center
                  of the circle
                </li>
              </ul>
            </TextParent>
            <OuterP>
              In more detail, every time
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              t
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              increases by {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              increases by {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} but
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of radians, because anything
              fed to ‘cos’ is an amount of radians; and so
              {" "}
              <Math>
                $B$
              </Math>
              {" "} ends up being the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              radian increase per unit time,
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or angular speed, of the particle.
            </OuterP>
            <OuterP class="indent-10">
              However, said “increase” in radians can be
              associated to either clockwise or a
              counterclockwise motion, there is no telling.
              (Quite aside from the fact that {" "}
              <Math>
                $B$
              </Math>
              {" "} might be
              negative.) Indeed, while we have a tendency to
              think of {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a point {" "}
              <Math>
                $x$
              </Math>
              {" "} units
              <br />
              counterclockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              <Math>
                $\cos(x)$
              </Math>
              {" "} is also
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -coordinate
              </NoBreak>
              {" "} of a point {" "}
              <Math>
                $x$
              </Math>
              {" "} units
              <br />
              clockwise from {" "}
              <Math>
                $(1, 0)$
              </Math>
              {" "} on the unit circle
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              [“counterclockwise” {" "}
              <Math>
                $\ra$
              </Math>
              {" "} “clockwise”].
              Per the one interpretation of ‘cos’,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of counterclockwise radians; per
              the other,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              Bt + C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is an amount of {" "}
              <i>
                clockwise
              </i>
              {" "} radians. The following
              diagram illustrates the two possibilities:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_Bt_plus_C_OccamsRazor_combined_clockwise_version.svg" />
            <Pause />
            <OuterP>
              (Or... ~ ~ ~ ~ ~ ~ ~ ~ ~
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_Bt_plus_C_OccamsRazor_combined_counterclockwise_version.svg" />
            <Pause />
            <OuterP>
              ...to put everything in terms of
              counterclockwise-ness.) This accounts for
              the two solutions listed above. (But it can
              only be one of those two solutions, having made
              the “Occam's razor” assumption that the
              particle is traveling at uniform speed around
              a circle.) (Nb: In particular, “uniform speed”
              precludes sudden reversals of direction at either
              end of the circle, if you were at all thinking
              of that, for speed would be undefined at
              those points where direction is reversed.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If you harbor any doubts about there being no more
                than two solutions, picture this diagram...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_Bt_plus_C_black_on_white.svg" />
              <Pause />
              <OuterP>
                ...and imagine the vertical line scanning
                to the left and to the right again as it
                tracks the {" "}
                <NoBreak>
                  <Math>
                    $x$
                  </Math>
                  -coordinate
                </NoBreak>
                {" "} of a particle going
                around the circle, unseen. Then there is one
                clockwise particle that tracks with the line,
                and one counterclockwise particle that tracks
                with the line, but no more, insofar as
                non-direction-reversing particles are
                concerned!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={11}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 11.
              </b>
              {" "}
              Take a particle traveling around a
              circle at constant speed. What is the
              number of cycles [full revolutions] per
              {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} units of time equal to, by
              another name?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Let
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              be the number of cycles per {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} units
              of time.
            </OuterP>
            <OuterP class="indent-10">
              Since one cycle is {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} radians, we can,
              instead of saying that the particle travels
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $x$
              </Math>
              {" "} cycles per {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} units of time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              say that the particle travels
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $x\cdot 4\eta&#123;&#125;$
              </Math>
              {" "} radians per {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} units of time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or that the particle travels
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              <Math>
                $x$
              </Math>
              {" "} radians per {" "}
              <Math>
                $1$
              </Math>
              {" "} unit of time
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              dividing by {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                .
              </NoBreak>
              {" "} In other words, {" "}
              <Math>
                $x$
              </Math>
              {" "} is the so-called
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              angular speed
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              angular frequency
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the particle. (That's the answer: “angular
              speed”, or, equivalently, “angular frequency”.)
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
              Which of these angles is {" "}
              <Math>
                $0.2$
              </Math>
              {" "} radians?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_0_2_radians_guess.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              An angle is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              radians if the length of the subtended arc is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20\%
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the length of the radius;
              proceeding by elimination—many things are obviously
              not {" "}
              <Math>
                $20\%$
              </Math>
              {" "} of the radius—that's this one:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_0_2_radians_guess_answer.svg" />
            <Pause />
            <OuterP>
              If you zoom in
              a little bit
              you can actually see
              {" "}
              <NoBreak>
                “
                <Math>
                  $100\%$
                </Math>
                ”,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                “
                <Math>
                  $20\%$
                </Math>
                ”
              </NoBreak>
              {" "}
              written in fine print:
            </OuterP>
            <Pause />
            <Image
              style="margin-top:1em;margin-bottom:1em;"
              src="/images/svg_ch5_ex_0_2_radians_guess_joke.svg" />
            <Pause />
            <OuterP>
              (Joking.)
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
              What geometric ratios do
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              represent?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              While {" "}
              <Math>
                $\eta$
              </Math>
              {" "} was defined
              as the quarter-circumference of a unit circle,
              more generally,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the quarter-circumference of a circle (any
              circle) divided by its radius, and, correspondingly,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the circumference of a circle (any circle)
              divided by its radius.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As one consequence, it follows that the circumference
                of a circle is
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                4\eta\cdot r
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where {" "}
                <Math>
                  $r$
                </Math>
                {" "} is the radius.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                These “ratio descriptions” of {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} and
                {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "} also follow by viewing {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} and {" "}
                <Math>
                  $4\eta$
                </Math>
                {" "}
                as the radian values of a right angle and a full angle,
                respectively.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={14}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 14.
              </b>
              {" "}
              Compute
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;11\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand using long division.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here is the division in American notation
              overlayed on top of a “Plaza” wallpaper to
              help demarcate the different columns of
              digits (in American notation each column
              of digits is associated to a power of {" "}
              <NoBreak>
                <Math>
                  $10$
                </Math>
                ,
              </NoBreak>
              {" "}
              with both the numerator and the quotient
              [the result] living inside the same set of
              columns, and only the denominator living
              outside, in a time-space porthole of its own):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_11_over_7_longhand_eloise.svg" />
            <Pause />
            <OuterP>
              The division stops when we see the same
              remainder twice—here {" "}
              <NoBreak>
                ‘
                <Math>
                  $40$
                </Math>
                ’
              </NoBreak>
              {" "} reappears, which
              means that the next digit of the quotient
              will be {" "}
              <Math>
                $5$
              </Math>
              {" "} (like the second digit of the
              quotient, that we obtained back when we had
              a remainder of {" "}
              <NoBreak>
                <Math>
                  $40$
                </Math>
                ),
              </NoBreak>
              {" "} the next one {" "}
              <Math>
                $7$
              </Math>
              {" "} (the
              third digit of the quotient), etc—digits will
              repeat and the “final” quotient when we let
              the division unravel infinitely far to the right
              will be
            </OuterP>
            <div style="font-size:1.65em;margin:1em 0;">
              <MathBlock>
                $$
                1.\overline&#123;571428&#125;
                $$
              </MathBlock>
            </div>
            <OuterP>
              ...where the decimal point is after the
              first {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} because the first {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} is in the
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $10^0$
                </Math>
                ’
              </NoBreak>
              {" "} column.
            </OuterP>
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                If you've never done this kind of thing before, the
                division starts in this blank state:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.4em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_1.svg" />
              <Pause />
              <OuterP>
                We take the first digit of the numerator,
                which is {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’,
                </NoBreak>
                {" "} ask “how many times does
                {" "}
                <Math>
                  $7$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} we will write the answer
                here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_2a.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $0$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_2b.svg" />
              <Pause />
              <OuterP>
                We next add a digit from the numerator, giving
                us {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "} we ask “how many times does {" "}
                <Math>
                  $7$
                </Math>
                {" "} go into
                {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} we will write the answer here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_3a.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $1$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $1$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_3b.svg" />
              <Pause />
              <OuterP>
                We subtract
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  1 \times 7
                  $$
                </MathBlock>
              </div>
              <OuterP>
                from {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder
                of {" "}
                <Math>
                  $4$
                </Math>
                {" "} (the very first “remainder” is actually {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                before anything starts) (before anything started we
                had {" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 0 + 11$
                  </Math>
                  ,
                </NoBreak>
                {" "} and now we have
                {" "}
                <NoBreak>
                  <Math>
                    $11 = 7 \times 1 + 4$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_4.svg" />
              <Pause />
              <OuterP>
                Because {" "}
                <Math>
                  $7$
                </Math>
                {" "} does not fit into {" "}
                <Math>
                  $4$
                </Math>
                {" "} (and if it did,
                we would have done something wrong)
                we “bring down a {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ”
                </NoBreak>
                {" "} that is actually part of
                a hidden sequence of {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's
                </NoBreak>
                {" "} sitting to the right
                of {" "}
                <NoBreak>
                  <Math>
                    $11$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_5.svg" />
              <Pause />
              <OuterP>
                We ask “how many times does {" "}
                <Math>
                  $7$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ?”,
                </NoBreak>
                {" "}
                we will write the answer here:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_6a.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  (
                  <Math>
                    $7$
                  </Math>
                </NoBreak>
                {" "} goes {" "}
                <Math>
                  $5$
                </Math>
                {" "} times into {" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_6b.svg" />
              <Pause />
              <OuterP>
                We subtract
              </OuterP>
              <div style="font-size:1.65em;margin:1em 0;">
                <MathBlock>
                  $$
                  5\times 7
                  $$
                </MathBlock>
              </div>
              <OuterP>
                from {" "}
                <NoBreak>
                  <Math>
                    $40$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder
                of {" "}
                <Math>
                  $5$
                </Math>
                {" "}
                (well, to be technical, the remainder is actually
                {" "}
                <NoBreak>
                  <Math>
                    $5 \times 10^&#123;-1&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} not {" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "} but
                the teacher at the board will often say {" "}
                <NoBreak>
                  “
                  <Math>
                    $5$
                  </Math>
                  ”):
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_7.svg" />
              <Pause />
              <OuterP>
                Because {" "}
                <Math>
                  $7$
                </Math>
                {" "} does not fit into {" "}
                <NoBreak>
                  <Math>
                    $5$
                  </Math>
                  ,
                </NoBreak>
                {" "} we bring
                another {" "}
                <Math>
                  $0$
                </Math>
                {" "} down from our infinite reserve of
                {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  's:
                </NoBreak>
              </OuterP>
              <Pause />
              <Image
                style="margin-top:0.8em;margin-bottom:1.5em;"
                src="/images/svg_ch5_ex_11_over_7_longhand_eloise_start_8.svg" />
              <Pause />
              <OuterP>
                (Etc.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={15}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 15.
              </b>
              {" "}
              Compute
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;22\over 7&#125;, \,\,\,\,\, &#123;33\over 7&#125;, \,\,\,\,\,\rm&#123;and&#125;\,\,\,\,\,&#123;44\over 7&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand using long division.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The divisions, pursued up to the point where
              remainders repeat, look as follows:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_22_and_33_and_44_over_7_combined_longhands.svg" />
            <Pause />
            <OuterP>
              From which...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \displaylines&#123;
              \Large \up&#123;1.5&#125;&#123;22\over 7&#125; = 3.\overline&#123;142857&#125;\\
              \Large \up&#123;1.7&#125;&#123;33\over 7&#125; = 4.\overline&#123;714285&#125;\\
              \Large \up&#123;1.7&#125;&#123;44\over 7&#125; = 6.\overline&#123;285714&#125;
              &#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...because the digits of the quotient are,
              in each case, about to
              restart from the first digit
              after the decimal point.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Because...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta  \approx&#123;11\over 7&#125;\\
                \Large \up&#123;1.7&#125;2\eta \approx&#123;22\over 7&#125;\\
                \Large \up&#123;1.7&#125;3\eta \approx&#123;33\over 7&#125;\\
                \Large \up&#123;1.7&#125;4\eta \approx&#123;44\over 7&#125;
                &#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...we thus have...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta \approx  1.\overline&#123;571428&#125;\\
                \Large \up&#123;1.7&#125;2\eta \approx 3.\overline&#123;142857&#125;\\
                \Large \up&#123;1.7&#125;3\eta \approx 4.\overline&#123;714285&#125;\\
                \Large \up&#123;1.7&#125;4\eta \approx 6.\overline&#123;285714&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...though none of these estimates are actually
                accurate to more than two decimal places. (While all
                are accurate up to {" "}
                <i>
                  at least
                </i>
                {" "} two decimal places.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                As mentioned in Note 1 of Exercise 24,
                Chapter 3, these approximations are about
                half-a-part-in-a-thousand too large, or to
                be more exact,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 0.0004
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                too large in relative terms. I.e., you can subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125; \cdot 0.0004 \approx 0.0006
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 1.\overline&#123;571428&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125; \cdot 0.0004 \approx 0.0012
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 3.\overline&#123;142857&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $2\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125; \cdot 0.0004 \approx 0.0019
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 4.\overline&#123;714285&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $3\eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} subtract
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125; \cdot 0.0004 \approx 0.0025
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \approx 6.\overline&#123;285714&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                to get a better approximation for {" "}
                <NoBreak>
                  <Math>
                    $4\eta$
                  </Math>
                  .
                </NoBreak>
                {" "} The resulting
                approximations end up being...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \displaylines&#123;
                \Large         \eta \approx  1.5708\\
                \Large \up&#123;1.7&#125;2\eta \approx 3.1416\\
                \Large \up&#123;1.7&#125;3\eta \approx 4.7123\\
                \Large \up&#123;1.7&#125;4\eta \approx 6.2832&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...that are correct approximations up to
                the fourth digit, it turns out, modulo
                rounding off of the fifth digit. (But these
                are not worth learning by heart, by any means.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={16}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 16.
              </b>
              {" "}
              To close our division skills: use the
              table below to compute the integer part and
              the first three digits past the decimal point
              (no rounding based on the fourth digit) of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949/777
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by hand, using long division. What is the
              new (last) remainder when the quotient reaches
              the 3rd digit after the decimal point, and what
              equation is implied from the quotient and the
              new (last) remainder at that point?
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;array&#125;&#123;c|cc&#125;
              \up&#123;1&#125;\dn&#123;0.5&#125; n            &amp;\,1&amp;2&amp;3&amp;4&amp;5&amp;6&amp;7&amp;8&amp;9 \\ \hline
              \up&#123;1&#125;\dn&#123;0.5&#125; n \cdot 777\,&amp;\,777&amp;1554&amp;2331&amp;3108&amp;3885&amp;4662&amp;5439&amp;6216&amp;6993
              \\
              \end&#123;array&#125;
              $$
            </MathBlock>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here is the long division, pursued up to
              the {" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} column of the quotient,
              including one last remainder computation
              that occurs pursuant to adding the digit in
              the {" "}
              <NoBreak>
                “
                <Math>
                  $10^&#123;-3&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} column of the quotient (this
              is what the problem statement refers to as
              the “last remainder”):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_big_division.svg" />
            <Pause />
            <OuterP>
              Said quotient is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              20003200099.033
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while the new (last) remainder is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.359
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the equation linking the two is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              15542486476949 = 777 \times 20003200099.033 + 0.359
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              per properties of the long division algorithm.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Lest anyone get left behind, we can go
                over the division “on the board”
                for a bit.
              </OuterP>
              <OuterP class="indent-10">
                We start by asking “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_1.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <Math>
                  $0$
                </Math>
                {" "} (that we need not write
                down, but we can), we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $15$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_2.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $155$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_3.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ,
                </NoBreak>
                {" "} we move to asking
                “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} we subtract {" "}
                <Math>
                  $2 \times 777$
                </Math>
                {" "}
                from {" "}
                <NoBreak>
                  <Math>
                    $1554$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new “prefix” for
                the remainder:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4b.svg" />
              <Pause />
              <OuterP>
                (FYI, the remainder now consists of these yellow
                digits:)
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_4remainder.svg" />
              <Pause />
              <OuterP>
                Continuing, we bring down a {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many times does {" "}
                <Math>
                  $777$
                </Math>
                {" "}
                go into {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_5b_v2.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down a {" "}
                <NoBreak>
                  <Math>
                    $4$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $24$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_6b_v2.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down an {" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $248$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_7b_v2.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $0$
                  </Math>
                  ;
                </NoBreak>
                {" "} we bring down a {" "}
                <NoBreak>
                  <Math>
                    $6$
                  </Math>
                  ,
                </NoBreak>
                {" "} ask “how many
                times does {" "}
                <Math>
                  $777$
                </Math>
                {" "} go into {" "}
                <NoBreak>
                  <Math>
                    $2486$
                  </Math>
                  ?”,
                </NoBreak>
                {" "} the answer will go
                here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8b_v2.svg" />
              <Pause />
              <OuterP>
                The answer is {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ,
                </NoBreak>
                {" "} we subtract {" "}
                <Math>
                  $3 \times 777$
                </Math>
                {" "}
                from {" "}
                <NoBreak>
                  <Math>
                    $2648$
                  </Math>
                  ,
                </NoBreak>
                {" "} giving us a new remainder:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8c.svg" />
              <Pause />
              <OuterP>
                (And to be specific, the remainder is now formed
                by...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_inside_8remainder.svg" />
              <Pause />
              <OuterP>
                ...these yellow digits.) Etc.
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                If you need help brushing up on your
                long-form subtraction, say your subtraction is this:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_a.svg" />
              <Pause />
              <OuterP>
                You can either treat the top or bottom number as an
                odometer, and count how much a car with this
                odometer must be driven back/forth to reach the other
                number.
              </OuterP>
              <OuterP class="indent-10">
                Viewing the top number as an odometer, the odometer
                would be as follows:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_odometer_1.svg" />
              <Pause />
              <OuterP>
                Starting from the right end of the subtraction, we ask
                “by how much (or how little) does a car need to be
                driven backwards, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $2$
                  </Math>
                  ’
                </NoBreak>
                {" "} into an {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $8$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_c.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
                <Math>
                  $4$
                </Math>
                {" "} [miles*] (*say):
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_d.svg" />
              <Pause />
              <OuterP>
                But the odometer will pass
                from {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} to {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} on its way down to {" "}
                <NoBreak>
                  <Math>
                    $8$
                  </Math>
                  ,
                </NoBreak>
                {" "} so we also
                turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $6$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} (or “borrow a {" "}
                <NoBreak>
                  <Math>
                    $10$
                  </Math>
                  ”
                </NoBreak>
                {" "} to do
                {" "}
                <NoBreak>
                  <Math>
                    $12 - 8 = 4$
                  </Math>
                  ,
                </NoBreak>
                {" "} as some teachers put it):
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_e.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_f.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
                <Math>
                  $6$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $10$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_g.svg" />
              <Pause />
              <OuterP>
                But here too the odometer will pass
                from {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} to {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} as we reduce it, so the wheel to its
                left must be turned back a notch as well; and because that
                wheel is a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’
                </NoBreak>
                {" "} already, the wheel to {" "}
                <i>
                  its
                </i>
                left
                must be turned back a notch; and so on, resulting in a small cascade
                effect:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_h.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $0$
                  </Math>
                  ’?”,
                </NoBreak>
                {" "} we
                will write the answer below:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_i.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
                <Math>
                  $9$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $100$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_j.svg" />
              <Pause />
              <OuterP>
                Next we ask “by how many {" "}
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles] does the car need
                to be driven back, to turn the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $9$
                  </Math>
                  ’
                </NoBreak>
                {" "} into a {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $5$
                  </Math>
                  ’?”:
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_k.svg" />
              <Pause />
              <OuterP>
                The answer is: {" "}
                <Math>
                  $4$
                </Math>
                {" "} {" "}
                <NoBreak>
                  [
                  <Math>
                    $1000$
                  </Math>
                  s
                </NoBreak>
                {" "} of miles]:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_big_subtraction_l.svg" />
              <Pause />
              <OuterP>
                Etc—we finally obtain:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/images/svg_ch5_ex_big_division_big_subtraction_final.svg" />
              <Pause />
              <OuterP>
                (And like we alluded to above, one can also
                consider the bottom number to be the odometer,
                and “count up” towards the top number, leading
                to a symmetric algorithm, but one method is not
                better than the other.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                Generally,
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_big_division_remainder_equation.svg" />
              <Pause />
              <OuterP>
                at any point in a long division after the
                remainder is updated to account for a new term
                added to the quotient. That's what the remainder
                is for: to satisfy this equation!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={17}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 17.
              </b>
              {" "}
              What is the angle marked ‘?’, as a function
              of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is {" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                .
              </NoBreak>
              {" "} (Since...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \theta + (\eta - \theta) + \eta = 2\eta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...you know that's the right answer!) (Nb: {" "}
              <NoBreak>
                <Math>
                  $2\eta = 180^\circ$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Two angles that sum to {" "}
                <Math>
                  $\eta$
                </Math>
                {" "} are
                called {" "}
                <i>
                  complementary
                </i>
                , with each angle being
                the {" "}
                <i>
                  complement
                </i>
                {" "} of the other.
                The two
                non-right angles of a right triangle are,
                therefore, complementary!
                (Not
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                complimentary
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                which would indicate that the angles are
                given to you for free—everything in math is
                free, not just those angles!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={18}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 18.
              </b>
              {" "}
              The graph {" "}
              <Math>
                $y = \cos(x) + \sin(x)$
              </Math>
              {" "} from
              Exercise 5 has a maximum value greater than
              {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_maximum_of_sin_plus_cos.svg" />
            <Pause />
            <OuterP>
              What is this maximum value, and for which
              value(s) of {" "}
              <Math>
                $x$
              </Math>
              {" "} is it achieved?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a point in {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} can be understood as a
              certain vertical displacement added to a
              certain horizontal displacement, but where
              the sum is numerical. (Not vectorial.)
              To realize the sum geometrically we must
              either align the vertical displacement to be
              horizontal, or else align the horizontal
              displacement to be vertical:
            </OuterP>
            <Pause />
            <Image
              src="/images/svg_ch5_ex_x_plus_y_options.svg"
              style="background-color:#fdfdfd" />
            <Pause />
            <OuterP>
              Either way, the upshot is that the sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be found as the intersection of a line of
              angle {" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "} through the point {" "}
              <Math>
                $(x, y)$
              </Math>
              {" "}
              with either the {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                -
              </NoBreak>
              {" "} or {" "}
              <NoBreak>
                <Math>
                  $y$
                </Math>
                -axis:
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_intersections.svg" />
            <Pause />
            <OuterP>
              (By the way: when we say “line of angle
              {" "}
              <NoBreak>
                <Math>
                  $-45^\circ$
                </Math>
                ”
              </NoBreak>
              {" "} we refer to the standard position
              of {" "}
              <Math>
                $-45^\circ$
              </Math>
              {" "} on the unit circle, and, more
              specifically, to a line that is parallel
              to a line going through {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "} and that standard
              position.)
            </OuterP>
            <OuterP class="indent-10">
              To add a little imagery, if we make a heatmap
              of {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} according to the value of the coordinate
              sum...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...over all points {" "}
              <Math>
                $(x, y)$
              </Math>
              {" "} we will obtain diagonal
              bands of slope {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_rainbow.svg" />
            <Pause />
            <OuterP>
              If we are confined to some region of the plane
              and we need to find a point that maximizes the
              coordinate sum we must go as far up and to the
              right as possible, towards brown—whereas
              to minimize the sum we must go as far down and
              to the left as possible, towards purple!
            </OuterP>
            <OuterP class="indent-10">
              Having said this,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x) + \sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be interpreted as the sum of the {" "}
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
                -coordinates
              </NoBreak>
              {" "} of the point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\cos(x), \sin(x))
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that is a point on the unit circle. In other words,
              the unit circle is “the region of the plane” (cf.
              previous paragraph) to which we are confined—we
              must choose a value of {" "}
              <Math>
                $x$
              </Math>
              {" "} that puts us as far
              “up and to the right” as possible on the circle.
              That value is... {" "}
              <Math>
                $x = \eta/2$
              </Math>
              {" "} (!!!!):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_x_plus_y_eta_over_2.svg" />
            <Pause />
            <OuterP>
              ...or with any multiple of {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} added,
              making the set of solutions {" "}
              <Math>
                $x$
              </Math>
              {" "} actually equal to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;\eta/2 + 4\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (to be read {" "}
              <NoBreak>
                “
                <Math>
                  $\eta/2$
                </Math>
              </NoBreak>
              {" "} plus any multiple of {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”)
              </NoBreak>
              {" "}
              (*or: “the {" "}
              <i>
                set of
              </i>
              {" "} values of the form {" "}
              <NoBreak>
                <Math>
                  $\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              plus any multiple of {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ”).
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              The actual value of {" "}
              <Math>
                $\cos(x) + \sin(x)$
              </Math>
              {" "} achieved
              at this point is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large
              \begin&#123;align&#125;
              &amp;\,\, \cos(\eta/2) + \sin(\eta/2)\\ =&amp;\,\,\up&#123;1.5&#125;  \sqrt&#123;0.5&#125; + \sqrt&#123;0.5&#125;\\ =&amp;\,\,\up&#123;1.5&#125; \sqrt&#123;2&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the fact that
            </OuterP>
            <div>
              <MathBlock>
                $$
                \Large \cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;
                $$
              </MathBlock>
            </div>
            <OuterP>
              and that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (cf. Exercise 1, Chapter 1).
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
              <Pause />
              <MathBlock>
                $$
                \Large \cos(\eta/2) + \sin(\eta/2) = \sqrt&#123;2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can also be seen from this diagram...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_x_plus_y_pythagoras.svg" />
              <Pause />
              <OuterP>
                ...which is an application of the Pythagorean
                theorem. (In the above, {" "}
                <NoBreak>
                  <Math>
                    $x_0 = \cos(\eta/2)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $y_0 = \sin(\eta/2)$
                  </Math>
                  ,
                </NoBreak>
                {" "} and the sum is seen to be
                {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;1^2 + 1^2&#125; = \sqrt&#123;2&#125;$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                On the original graph from the statement, the
                {" "}
                <NoBreak>
                  <Math>
                    $y$
                  </Math>
                  -value
                </NoBreak>
                {" "} of the maximum is therefore
                {" "}
                <NoBreak>
                  <Math>
                    $y = \sqrt&#123;2&#125;$
                  </Math>
                  ,
                </NoBreak>
                {" "} attained at {" "}
                <NoBreak>
                  <Math>
                    $x = \eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                {" "}
                <NoBreak>
                  <Math>
                    $x = 9\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <NoBreak>
                  <Math>
                    $x = -7\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} etc:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_maximum_of_sin_plus_cos_with_answer.svg" />
              <Pause />
              <OuterP>
                (Note that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large &#123;\eta\over 2&#125; + 4\eta = &#123;\eta\over 2&#125; + &#123;8\eta\over 2&#125; = &#123;9\eta\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \Large
                &#123;\eta\over 2&#125; - 4\eta = &#123;\eta\over 2&#125; - &#123;8\eta\over 2&#125; = -&#123;7\eta\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and, in general, the numerators of these fractions
                will be some multiple of {" "}
                <Math>
                  $8\eta$
                </Math>
                {" "} apart.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={19}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 19.
              </b>
              {" "}
              What is the angle marked ‘?’, as a function of
              {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              It is {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} as well. One method of
              deduction uses the fact that “the complement
              of my complement is myself”:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup_explanation.svg" />
            <Pause />
            <OuterP>
              Another method of deduction uses the fact that,
              together with the angle immediately to its left
              (which happens to be {" "}
              <NoBreak>
                <Math>
                  $\eta - \theta$
                </Math>
                ,
              </NoBreak>
              {" "} because
              it is the complement of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} via the smallest
              right triangle present), the sought-for angle
              makes up {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_angle_sum_180_followup_explanation_2.svg" />
            <Pause />
            <OuterP>
              (In one case we use the fact that the
              medium-sized triangle is a right triangle,
              in another case that the smallest-size
              triangle is a right triangle—and in both cases
              that the original, largest triangle is a
              right triangle.)
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
              Argue that, in the following figure, the
              angle marked ‘?’ equals {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} the angle at
              the center of the circle:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tangent_angle_v2.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The ending and starting half-lines of the
              angle marked ‘?’ are both {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} counterclockwise
              from the ending and starting half-lines,
              respectively, of the central angle:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tangent_angle_explanation_v2.svg" />
            <Pause />
            <OuterP>
              The angle marked ‘?’ is therefore obtained
              by a {" "}
              <Math>
                $90^\circ$
              </Math>
              {" "} rotation (and then translation)
              of the central angle, and is, therefore, equal
              to the central angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds no matter which quadrant we
                push {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} to:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_tangent_angle_explanation_other_quadrants.svg" />
              <Pause />
              <OuterP>
                Verbalized: {" "}
                <i>
                  the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $x$
                  </Math>
                  {" "} axis to
                  the radial vector
                  equals the counterclockwise angle from the positive
                  {" "}
                  <Math>
                    $y$
                  </Math>
                  {" "} axis to the counterclockwise tangent.
                </i>
              </OuterP>
              <OuterP class="indent-10">
                (Nb: When we say the “radial vector” and
                “counterclockwise tangent” we mean those objects that
                are illustrated here:)
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_tangent_angle_explanation_radian_vector.svg" />
            </SolutionNote>
            <Pause />
            <StarDivider />
          </Solution>
        </Exercise>
        <Exercise number={21}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 21.
              </b>
              {" "}
              If each of these dotted lines...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_x_plus_y_isosets.svg" />
            <Pause />
            <OuterP>
              ...is a so-called
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isoset
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (also: {" "}
              <i>
                isoline
              </i>
              , {" "}
              <i>
                contour line
              </i>
              , {" "}
              <i>
                isoquant
              </i>
              ,
              {" "}
              <i>
                isosurface
              </i>
              , {" "}
              <i>
                isovalue line
              </i>
              , or {" "}
              <i>
                isovalue set
              </i>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\rt&#123;0.1&#125;$
                </Math>
                )
              </NoBreak>
              {" "} of the two-variable function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f(x, y) = x + y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then what are similar
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (man, we like this word! of the two-variable
              function
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g : \rr^2\ra \rr
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              given by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              g(x, y) = xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
            <OuterP class="indent-10">
              [In human terms: draw solutions of the equation
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = C
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in {" "}
              <Math>
                $\rr^2$
              </Math>
              {" "} for some different values of
              {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                .]
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Next: Use any geometric insights gleaned from
              these
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              isosets
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (😍😍😍) to find the maximum value of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin\theta&#123;&#125;\cos\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} and specify the set of
              values of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} for which the maximum is
              attained.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The isosets of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (x, y) \ra xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (lambda-notation for a two-variable function)
              have this general appearance (it depends on
              the window and on the exact isosets that
              you choose to  draw—we chose a few
              different random ones):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_xy_isosets.svg" />
            <Pause />
            <OuterP>
              Note that each isoset consists of the union of TWO
              disjoint curves, except for the isoset
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (or: “the isoset
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \&#123;(x, y) \in \rr^2 : xy = 0 \&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...” to pedantically indicate that we are
              talking about {" "}
              <i>
                a set of points in the plane
              </i>
              ),
              that, for its part, cannot be said to consist
              of two {" "}
              <i>
                ~
              </i>
              ~
              <i>
                disjoint
              </i>
              ~
              <i>
                ~
              </i>
              {" "} curves, because it
              is the union of the {" "}
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
                -
              </NoBreak>
              {" "} axes, that
              intersect.
            </OuterP>
            <OuterP class="indent-10">
              (For a throwback, the solution of Exercise
              16 of Chapter 3 mentions that the product of
              two numbers is {" "}
              <Math>
                $0$
              </Math>
              {" "} if and only if one of the
              numbers is {" "}
              <NoBreak>
                <Math>
                  $0$
                </Math>
                .
              </NoBreak>
              {" "} In our case,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              if and only
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,x = 0\,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                or
              </i>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,y = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              where
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              happens to be the equation of the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis, and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              happens to be the equation of the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, which
              explains the shape of the isoset.)
            </OuterP>
            <OuterP class="indent-10">
              If we draw a “heatmap” of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              xy
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in some region of the plane, similarly to
              Exercise 18, the larger (more positive)
              values show up in the first and third
              quadrants, while the smaller (more negative)
              values show up in the second and fourth
              quadrants:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_rainbow.svg" />
            <Pause />
            <OuterP>
              Of particular interest to us: at a given
              distance from the origin, the line
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x = y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be seen seen to hold the largest of values of {" "}
              <NoBreak>
                <Math>
                  $xy$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_fixed_distance.svg" />
            <Pause />
            <OuterP>
              In particular,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              will reach its maximum at those values of
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} that put the point {" "}
              <Math>
                $(\cos \theta, \sin \theta)$
              </Math>
              {" "}
              at either {" "}
              <Math>
                $(\sqrt&#123;0.5&#125;, \sqrt&#123;0.5&#125;)$
              </Math>
              {" "} or
              {" "}
              <Math>
                $(-\sqrt&#123;0.5&#125;, -\sqrt&#123;0.5&#125;)$
              </Math>
              {" "} on the unit circle;
              these values of {" "}
              <Math>
                $\theta$
              </Math>
              {" "} are
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\
              \Large \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125;\up&#123;1.5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as per this illustration...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_max_xy_angles.svg" />
            <Pause />
            <OuterP>
              ...and the maximum value of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \cos\theta\,\sin\theta
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              itself will be
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \sqrt&#123;0.5&#125; \cdot \sqrt&#123;0.5&#125; = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large (-\sqrt&#123;0.5&#125;) \cdot (-\sqrt&#123;0.5&#125;) = &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equivalently; though one should also note
              that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large \&#123;0.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \cup \&#123;2.5\eta + 4\eta&#123;&#125;k : k \in \zz\&#125; \\ \Large \up&#123;1.5&#125;= \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is the “clever” way of writing the set
              of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                's
              </NoBreak>
              {" "} for which the maximum is achieved.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                As a consequence, the function
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x \ra \sin x&#123;&#125;\cos x
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                discussed in Exercise 4 has maximum value
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                achieved for inputs in the set
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large \&#123;0.5\eta + 2\eta&#123;&#125;k : k \in \zz\&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                comprising the sequence of values...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, -&#123;7\eta\over 2&#125;,\,\, -&#123;3\eta\over 2&#125;,\,\, &#123;\dn&#123;0.25&#125;\eta \over 2&#125;,\,\, &#123;5\eta \over 2&#125;,\,\, &#123;9\eta \over 2&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...or...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large \dots,\,\, &#123;-3.5\eta&#125;,\,\, &#123;-1.5\eta&#125;,\,\, &#123;0.5\eta&#125;,\,\, &#123;2.5\eta&#125;,\,\, &#123;4.5\eta&#125;,\,\, \dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...(maybe more legibly); annotating the graph
                given in Exercise 4:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_graph.svg" />
              <Pause />
              <StarDivider />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                For completeness, here is a closer look at
                the isoset {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} including some labeled points:
              </OuterP>
              <Pause />
              <Image
                style="margin-top:1em;margin-bottom:1em;"
                src="/images/svg_ch5_ex_max_xy_example_isoset.svg" />
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 3.
                </i>
                {" "}
                Because a point {" "}
                <Math>
                  $(x, y)$
                </Math>
                {" "} satisfies
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if the point {" "}
                <Math>
                  $(2x, y)$
                </Math>
                {" "} satisfies
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (one has
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x_0y_0 = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (2x_0)y_0 = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                surprise or not) the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 2
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the horizontal dilation of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by a factor {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "} likewise, it is also the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                vertical dilation
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                by a factor {" "}
                <NoBreak>
                  <Math>
                    $2$
                  </Math>
                  ;
                </NoBreak>
                {" "} the two dilations are
                illustrated here:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_2x_scaling_v2.svg" />
              <Pause />
              <OuterP>
                More generally, the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for {" "}
                <Math>
                  $C \ne 0$
                </Math>
                {" "} is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(a, b)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [meaning: a horizontal dilation by a factor
                {" "}
                <Math>
                  $a$
                </Math>
                {" "} followed by a vertical dilation by a
                factor {" "}
                <NoBreak>
                  <Math>
                    $b$
                  </Math>
                  ,
                </NoBreak>
                {" "} or vice-versa, the order doesn't
                matter] of the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                for all pairs {" "}
                <Math>
                  $(a, b)$
                </Math>
                {" "} such that {" "}
                <NoBreak>
                  <Math>
                    $ab = C$
                  </Math>
                  ;
                </NoBreak>
                {" "} for
                example,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 3
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(3, 1)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [horizontal dilation by factor {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "} of
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} as it is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(1, 3)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                [vertical dilation by factor {" "}
                <NoBreak>
                  <Math>
                    $3$
                  </Math>
                  ]
                </NoBreak>
                {" "} of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                but is also the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(\sqrt&#123;3&#125;, \sqrt&#123;3&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} since {" "}
                <NoBreak>
                  <Math>
                    $\sqrt&#123;3&#125;\cdot\sqrt&#123;3&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "} and the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(12, &#123;1\over 4&#125;)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} since {" "}
                <NoBreak>
                  <Math>
                    $12 \cdot &#123;1\over 4&#125; = 3$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                etc.
              </OuterP>
              <OuterP class="indent-10">
                For another specifically noteworthy instance
                of this phenomenon,
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of itself, since {" "}
                <NoBreak>
                  <Math>
                    $(-1)\cdot(-1) = 1$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                a fact that is also known as the “central
                symmetry” of {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .
                </NoBreak>
                {" "} (You can take this
                last statement as the definition of “centrally
                symmetric”. I.e., a set {" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                is centrally symmetric if and only if {" "}
                <Math>
                  $S$
                </Math>
                {" "}
                is equal to the {" "}
                <NoBreak>
                  <Math>
                    $(-1, -1)$
                  </Math>
                  -dilation
                </NoBreak>
                {" "} of
                itself.)
              </OuterP>
              <OuterP class="indent-10">
                (Indeed, since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (-x)(-y) = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                each of the isosets is centrally symmetric, not only
                {" "}
                <NoBreak>
                  <Math>
                    $xy = 1$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 4.
                </i>
                {" "}
                Among other additional symmetries, the line
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x = y
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is an axis of symmetry of each isoset, meaning
                that each isoset equals its mirror reflection
                about that line:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image.svg" />
              <Pause />
              <OuterP>
                Note that, technically, a set {" "}
                <Math>
                  $S \subseteq \rr^2$
                </Math>
                {" "}
                [meaning: {" "}
                <Math>
                  $S$
                </Math>
                {" "} is a set of points in the plane] is
                symmetric about {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} if and only if
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \Large (x_0, y_0) \in S \iff (y_0, x_0) \in S
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                [read {" "}
                <NoBreak>
                  “
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                </NoBreak>
                {" "} is in {" "}
                <Math>
                  $S$
                </Math>
                {" "} if and only if
                {" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "} is in {" "}
                <NoBreak>
                  <Math>
                    $S$
                  </Math>
                  ”]
                </NoBreak>
                {" "} for all {" "}
                <NoBreak>
                  <Math>
                    $(x_0, y_0)$
                  </Math>
                  .
                </NoBreak>
                {" "}
                Illustrated:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_with_x0_y0.svg" />
              <Pause />
              <OuterP>
                In our case, a point {" "}
                <Math>
                  $(x_0, y_0)$
                </Math>
                {" "} is on the curve
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                xy = C
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                if and only if the point {" "}
                <Math>
                  $(y_0, x_0)$
                </Math>
                {" "} is on
                the curve, because {" "}
                <NoBreak>
                  <Math>
                    $x_0y_0 = y_0x_0$
                  </Math>
                  ,
                </NoBreak>
                {" "} by
                commutativity of multiplication. This observation
                constitutes the “proof” that each isoset is
                mirror symmetric through {" "}
                <NoBreak>
                  <Math>
                    $x = y$
                  </Math>
                  .
                </NoBreak>
              </OuterP>
              <OuterP class="indent-10">
                (Or...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \large
                \begin&#123;align&#125;
                \large     &amp; (x_0, y_0) \in \&#123;(x,y)\in \rr^2: xy = C\&#125; \\
                \large\up&#123;1.4&#125; \iff&amp; \,x_0y_0 = C \\
                \large\up&#123;1.4&#125; \iff&amp; \,y_0x_0 = C \\
                \large\up&#123;1.4&#125; \iff&amp; (y_0, x_0) \in \&#123;(x,y)\in \rr^2: xy = C\&#125;
                \end&#123;align&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...to put it over-the-top formally.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 5.
                </i>
                {" "}
                Lastly, each isoset is symmetric
                through the line {" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_other_way.svg" />
              <Pause />
              <OuterP>
                Indeed, this symmetry can be obtained as the
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                composition
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                of a symmetry through {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} and a central
                symmetry:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_max_xy_mirror_image_other_way_explanation.svg" />
              <Pause />
              <OuterP>
                In other words, any set that is symmetric through
                {" "}
                <Math>
                  $x = y$
                </Math>
                {" "} and that is centrally symmetric is also
                symmetric through {" "}
                <NoBreak>
                  <Math>
                    $x = -y$
                  </Math>
                  ,
                </NoBreak>
                {" "} so there is nothing “new”
                to prove here, except to make this observation
                about composition!
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={22}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 22.
              </b>
              {" "}
              Express {" "}
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We shall use the height {" "}
              <Math>
                $C$
              </Math>
              {" "} of the triangle
              as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_height_C.svg" />
            <Pause />
            <OuterP>
              On the one hand, {" "}
              <NoBreak>
                <Math>
                  $C/B = \tan(\theta)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_left_part.svg" />
            <Pause />
            <OuterP>
              On the other hand, {" "}
              <Math>
                $A/C = \tan(\theta)$
              </Math>
              {" "}
              also, by the result of Exercise 19 (whereby
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} reappears as the top left angle of
              the middle-sized right triangle):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_right_part.svg" />
            <Pause />
            <OuterP>
              The answer is therefore:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(\theta)\cdot\tan(\theta) = \tan^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (As per the fact that {" "}
              <NoBreak>
                <Math>
                  $(A/B) = (C/B)\cdot(A/C)$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={23}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 23.
              </b>
              {" "}
              Express {" "}
              <Math>
                $A/B$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Here are two solutions:
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Solution 1.
              </i>
              {" "} We use the small leg {" "}
              <Math>
                $D$
              </Math>
              {" "}
              of the triangle as a stopover between {" "}
              <Math>
                $A$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_D.svg" />
            <Pause />
            <OuterP>
              On the one hand, {" "}
              <NoBreak>
                <Math>
                  $D/B = \sec(\theta)\,\, (= 1/\cos(\theta))$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_left_part.svg" />
            <Pause />
            <OuterP>
              On the other hand, {" "}
              <NoBreak>
                <Math>
                  $A/D = \sec(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} also (!?):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_right_part_shrunk.svg" />
            <Pause />
            <OuterP>
              Thus:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;D\over B&#125;\times &#123;A\over D&#125; = \sec(\theta)\cdot \sec(\theta) = \sec^2(\theta).
              $$
            </MathBlock>
            <Pause />
            <StarDivider style="margin-top:0.5em;" />
            <Pause />
            <OuterP>
              <i>
                Solution 2.
              </i>
              {" "}
              We decompose {" "}
              <Math>
                $A$
              </Math>
              {" "} as {" "}
              <Math>
                $B + A'$
              </Math>
              {" "}
              where {" "}
              <Math>
                $A' = B - A$
              </Math>
              {" "} is the “old {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ”
              </NoBreak>
              {" "} from
              Exercise 22:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_tan_sq_AB_ratio_big_A_with_Aprime.svg" />
            <Pause />
            <OuterP>
              We find:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A\over B&#125; = &#123;&#123;B + A'&#125;\over B&#125; = &#123;B\over B&#125; + &#123;A'\over B&#125; = 1 + \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;A'\over B&#125; = \tan^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by Exercise 22. (The End.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Since the two solutions compute
                answers to the same question,
                one can in particular deduce that
              </OuterP>
              <center style="margin-top:1.5em;margin-bottom:1.5em;">
                <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                  <MathBlock>
                    $$
                    \sec^2(\theta) = 1 + \tan^2(\theta)
                    $$
                  </MathBlock>
                </div>
              </center>
              <OuterP>
                for all {" "}
                <NoBreak>
                  <Math>
                    $0 &lt; \theta &lt; \eta$
                  </Math>
                  ,
                </NoBreak>
                {" "} which is
                the range of {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} covered by these
                diagrams. (The same identity holds more
                generally than just those {" "}
                <NoBreak>
                  <Math>
                    $\theta$
                  </Math>
                  's,
                </NoBreak>
                {" "}
                however.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={24}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 24.
              </b>
              {" "}
              In general, {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "} and {" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "}
              are defined for all {" "}
              <Math>
                $\theta$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the definitions being...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \,\tan(\theta) = &#123;\sin(\theta)\over \cos(\theta)&#125;\,
                  $$
                </MathBlock>
                <Pause />
                <MathBlock>
                  $$
                  \,\sec(\theta) = &#123;1\over \cos(\theta)&#125;\,
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...for all {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} (I.e., if the fraction is undefined,
              then the function is undefined.)
              Use these definitions
              to prove that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 + \tan^2(\theta) = \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all
              {" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Let {" "}
              <NoBreak>
                <Math>
                  $\theta \in \dom \tan = \dom \sec$
                </Math>
                .
              </NoBreak>
              {" "} Then
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta) \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 = &#123;\cos(\theta)\over \cos(\theta)&#125; = &#123;\cos^2(\theta)\over \cos^2(\theta)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and, by the definitions,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              1 + \tan^2(\theta)
              \,\,&amp;=\,\, 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; &#123;1\over \cos^2(\theta)&#125; \\
              &amp;=\,\, \up&#123;2&#125; \left(&#123;1\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
              &amp;=\,\, \up&#123;2&#125; \sec^2(\theta)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the pythagorean identity in the fourth step.
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
              Run the computation of the
              previous exercise backwards, starting with
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec^2(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              at the near end, and ending with
            </OuterP>
            <Pause />
            <MathBlock>
              $$1 + \tan^2(\theta)$$
            </MathBlock>
            <Pause />
            <OuterP>
              at the far end. (No peeking back at the solution of
              that exercise.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Viz:
            </OuterP>
            <center style="margin:1em 0em;">
              <div style="display:inline-block;border:1px solid red;padding:1.2em 1.4em;">
                <MathBlock>
                  $$
                  \begin&#123;align&#125;
                  \sec^2(\theta)
                  \,\,&amp;=\,\, &#123;1\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta) + \sin^2(\theta)\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; &#123;\cos^2(\theta)\over \cos^2(\theta)&#125; + &#123;\sin^2(\theta)\over \cos^2(\theta)&#125; \\
                  &amp;=\,\, \up&#123;2&#125; 1 + \left(&#123;\sin(\theta)\over \cos(\theta)&#125;\right)^&#123;\!2&#125; \\
                  &amp;=\,\, \up&#123;2&#125;1 + \tan^2(\theta).
                  \end&#123;align&#125;
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              (Ta-daa!) (It's slightly harder in this
              direction, when you have to think of
              turning the {" "}
              <NoBreak>
                “
                <Math>
                  $1$
                </Math>
                ”
              </NoBreak>
              {" "} into {" "}
              <NoBreak>
                “
                <Math>
                  $\cos^2(\theta) + \sin^2(\theta)$
                </Math>
                ”,
              </NoBreak>
              {" "}
              instead of the other way around.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={26}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 26.
              </b>
              {" "}
              Here are four function compositions
              depicted as “function box” diagrams, with
              inputs coming in the right and outputs
              going out the left (with {" "}
              <Math>
                $f$
              </Math>
              {" "} being some generic
              function):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_four_compositions.svg" />
            <Pause />
            <OuterP>
              Rewrite each case:
            </OuterP>
            <TextParent>
              <ol
                class="l1"
                style="margin-top:0.5em;">
                <li>
                  using the composition {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\circ$
                    </Math>
                    ”
                  </NoBreak>
                  {" "} operator;
                </li>
                <li>
                  as an expression of the form
                  <Pause />
                  <MathBlock>
                    $$x \ra \dots$$
                  </MathBlock>
                  <Pause />
                  for some value of {" "}
                  <NoBreak>
                    “
                    <Math>
                      $\dots$
                    </Math>
                    ”.
                  </NoBreak>
                </li>
              </ol>
            </TextParent>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              <b>
                (a)
              </b>
              {" "}
              The expressions are respectively...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (u \ra u + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (z \ra Bz)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (u \ra u + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (z \ra Bz)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...but where the dummy variables don't matter,
              so we might as well write...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra t + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (t \ra Bt)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra t + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (t \ra Bt)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...or...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              f  \circ (x \ra Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra x + A)\circ f
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              (x \ra Bx)\circ f
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...etc. (All are correct.)
            </OuterP>
            <Pause />
            <OuterP>
              <b>
                (b)
              </b>
              {" "}
              The expressions are respectively:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x) + A
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              x \ra Bf(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...where we use {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} as the dummy variable
              because we were {" "}
              <i>
                told
              </i>
              {" "} to use {" "}
              <NoBreak>
                <Math>
                  $x$
                </Math>
                .
              </NoBreak>
              {" "} (By the statement.)
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
              How would the graph of each of the compositions
              from Exercise 26 compare to the graph of the
              generic function {" "}
              <NoBreak>
                <Math>
                  $f$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For reference, the four functions are:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;1.&#125;\,\, x \ra f(x + A)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;2.&#125;\,\, x \ra f(Bx)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;3.&#125;\,\, x \ra f(x) + A
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \te&#123;4.&#125;\,\, x \ra Bf(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              For which the graphs are respectively obtained by:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:decimal;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.5em;">
                <li>
                  horizontally translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units to the left;
                </li>
                <li>
                  horizontally compressing the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by a factor {" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    ;
                  </NoBreak>
                </li>
                <li>
                  vertically translating the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by {" "}
                  <Math>
                    $A$
                  </Math>
                  {" "} units upward;
                </li>
                <li>
                  vertically dilating (scaling) the graph of {" "}
                  <Math>
                    $f$
                  </Math>
                  {" "} by a factor {" "}
                  <NoBreak>
                    <Math>
                      $B$
                    </Math>
                    .
                  </NoBreak>
                </li>
              </ul>
            </TextParent>
            <OuterP>
              (Cf. Exercise 7 of Chapter 3, Exercise 14 of
              Chapter 3.)
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
              Prove that {" "}
              <NoBreak>
                <Math>
                  $\cos\cdot\sin$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $\cos^2$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $\sin^2$
              </Math>
              {" "}
              are periodic mod {" "}
              <NoBreak>
                <Math>
                  $2\eta$
                </Math>
                ,
              </NoBreak>
              {" "} where a function {" "}
              <Math>
                $f$
              </Math>
              {" "} is
              “periodic mod {" "}
              <NoBreak>
                <Math>
                  $T$
                </Math>
                ”
              </NoBreak>
              {" "} if
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;f(x + T) = f(x)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
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
              We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, (\cos\cdot\sin)(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\sin(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\sin(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(\cos\cdot\sin)(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} using the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + 2\eta) = -\cos(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x + 2\eta) = -\sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} and, likewise,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \cos^2(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x + 2\eta)\cdot\cos(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\cos(x))\cdot(-\cos(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos(x)\cdot\cos(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\cos^2(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\,\, \sin^2(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin(x + 2\eta)\cdot\sin(x + 2\eta)\\
              =&amp;\,\,\, \up&#123;1.2&#125;(-\sin(x))\cdot(-\sin(x))\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin(x)\cdot\sin(x)\\
              =&amp;\,\,\, \up&#123;1.2&#125;\sin^2(x)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Note that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\cos\cdot\sin\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a shorthand for
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \te&#123;“&#125;\rt&#123;0.1&#125;x \ra \cos(x)\sin(x)\rt&#123;0.1&#125;\te&#123;”&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                (“the function that maps ...”), just as
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                fg
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                is a shorthand for [or really: “defined as”]
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                x\ra f(x)g(x)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                more generally for all functions {" "}
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
                {" "} So when we plug
                in an input to {" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos\cdot\sin$
                  </Math>
                  ”,
                </NoBreak>
                {" "} as in...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                (\cos\cdot\sin)(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...it unfolds to...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(x + 2\eta)\cdot\sin(x+2\eta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...per the definition of function multiplication. (Etc.)
                (We mean: likewise for {" "}
                <NoBreak>
                  “
                  <Math>
                    $\sin^2$
                  </Math>
                  ”
                </NoBreak>
                {" "} and {" "}
                <NoBreak>
                  “
                  <Math>
                    $\cos^2$
                  </Math>
                  ”.)
                </NoBreak>
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={29}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 29.
              </b>
              {" "}
              Given the graphs {" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                ...
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison.svg" />
            <Pause />
            <OuterP>
              ...it {" "}
              <i>
                appears
              </i>
              {" "} that one graph is a
              translate of the other; if this were
              really so, what would the exact amounts
              of translation be? (Vertical {" "}
              <i>
                &amp;
              </i>
              {" "} horizontal.)
              What algebraic identity would this imply? How to
              prove this identity?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We know from Exercise 21 that the
              bump immediately to the right of {" "}
              <Math>
                $(0, 0)$
              </Math>
              {" "}
              on the graph {" "}
              <Math>
                $y = \cos(x)\sin(x)$
              </Math>
              {" "} has
              coordinates {" "}
              <NoBreak>
                <Math>
                  $(\eta/2, 0.5)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_sinxcosx_max.svg" />
            <Pause />
            <OuterP>
              It might therefore be that a translation
              of {" "}
              <Math>
                $-\eta/2$
              </Math>
              {" "} units horizontally and
              {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} units vertically maps the graph
              {" "}
              <Math>
                $y = \sin(x)\cos(x)$
              </Math>
              {" "} onto the graph
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sinxcosx_and_cos2_comparison_zoomed_in.svg" />
            <Pause />
            <OuterP>
              If true, this would indicate that
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                <MathBlock>
                  $$
                  \cos^2(x) = &#123;1\over 2&#125; + \cos(x + \eta/2)\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              since replacing {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                “
                <Math>
                  $x + \eta/2$
                </Math>
                ”
              </NoBreak>
              {" "}
              in {" "}
              <Math>
                $\sin(x)\cos(x)$
              </Math>
              {" "} effects horizontal
              translation of the graph by {" "}
              <NoBreak>
                <Math>
                  $-\eta/2$
                </Math>
                ,
              </NoBreak>
              {" "}
              while adding {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} to the result
              effects a vertical translation by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              To prove formula we use the angle-sum formulas;
              specifically...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \sin(A + B) = \cos(A)\sin(B) + \sin(A)\cos(B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...(in case you had forgotten those); since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \,\cos(\eta/2) = \sin(\eta/2) = \sqrt&#123;0.5&#125;,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we find:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(x + \eta/2) &amp;= \cos(x)\cos(\eta/2) - \sin(x)\sin(\eta/2) \\
              &amp;= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) - \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(x + \eta/2) &amp;= \cos(x)\sin(\eta/2) + \sin(x)\cos(\eta/2) \\
              &amp;= \up&#123;1.6&#125;\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x))
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...from which the product...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \eta/2)\sin(x + \eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...becomes...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\sqrt&#123;0.5&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2(x) - \sin^2(x)) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2(x) - (1 - \cos^2(x))) \\
              \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(2\cos^2(x) - 1) \\
              \up&#123;1.6&#125; =\,\,&amp;\cos^2(x) - &#123;1\over 2&#125; \\
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...by the difference-of-squares formula and
              the pythagorean identity (often used together),
              and adding {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} gives {" "}
              <NoBreak>
                <Math>
                  $\cos^2(x)$
                </Math>
                ,
              </NoBreak>
              {" "} Q.E.D.!
              (So {" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "} truly is the translate of
              {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <i>
                &amp;
              </i>
              {" "} vice-versa.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                We can turn the identity around, mapping
                {" "}
                <Math>
                  $y = \cos^2(x)$
                </Math>
                {" "} onto {" "}
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                {" "} via a
                translation, instead of the other way around; this gives:
              </OuterP>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="border:1px solid red;padding:1em 1em;width:fit-content;">
                  <MathBlock>
                    $$
                    \,- &#123;1\over 2&#125; + \cos^2(x - \eta/2) = \cos(x)\sin(x).
                    $$
                  </MathBlock>
                </div>
              </center>
              <OuterP>
                In more detail: replacing
                {" "}
                <NoBreak>
                  “
                  <Math>
                    $x$
                  </Math>
                  ”
                </NoBreak>
                {" "} by {" "}
                <NoBreak>
                  “
                  <Math>
                    $x - \eta/2$
                  </Math>
                  ”
                </NoBreak>
                {" "} in {" "}
                <Math>
                  $\cos^2(x)$
                </Math>
                {" "} effects
                horizontal translation by {" "}
                <NoBreak>
                  <Math>
                    $+\eta/2$
                  </Math>
                  ,
                </NoBreak>
                {" "} and adding
                {" "}
                <Math>
                  $-&#123;1\over 2&#125;$
                </Math>
                {" "}
                to the result effects a vertical translation by {" "}
                <NoBreak>
                  <Math>
                    $-&#123;1\over 2&#125;$
                  </Math>
                  .
                </NoBreak>
                {" "}
                (I.e., we are using the
                inverse amounts of translation that we used to map
                {" "}
                <Math>
                  $y = \cos(x)\sin(x)$
                </Math>
                {" "} onto {" "}
                <NoBreak>
                  <Math>
                    $y = \cos^2(x)$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The identity from the previous note can also
                be proved via the angle-sum formulas; since
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(-\eta/2) = -\sqrt&#123;0.5&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                we have
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                \cos(x - \eta/2) &amp;= \cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2) \\
                \up&#123;1.6&#125; &amp;=\,\, \cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;) \\
                \up&#123;1.6&#125; &amp;=\,\, \sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                from which
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos^2(x - \eta/2)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                becomes
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &amp;\left(\sqrt&#123;0.5&#125;\cdot(\cos x + \sin x)\right)^2 \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(\cos^2 x + 2\cos x\sin x +  \sin^2 x) \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125;\cdot(1 + 2\cos x\sin x) \\
                \up&#123;1.6&#125; =\,\,&amp;&#123;1\over 2&#125; + \cos(x)\sin(x) \\
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                using the pythagorean identity in the third equality,
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \begin&#123;align*&#125;
                &amp; -&#123;1\over 2&#125; + \cos^2(x - \eta/2) \\
                \up&#123;1.7&#125; =\,\,&amp;-&#123;1\over 2&#125; + \left(&#123;1\over 2&#125; + \cos(x)\sin(x)\right) \\
                \up&#123;1.7&#125; =\,\,&amp;\cos(x)\sin(x)
                \end&#123;align*&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                as claimed.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={30}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 30.
              </b>
              {" "}
              It also seems from the graphs that {" "}
              <Math>
                $y = \cos^2(x)$
              </Math>
              {" "}
              is a {" "}
              <i>
                sinusoid
              </i>
              , i.e., some combination of a
              scaling and translation of {" "}
              <NoBreak>
                <Math>
                  $y = \cos(x)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_and_cos2_comparison.svg" />
            <Pause />
            <OuterP>
              If so, what scaling and translation operations,
              more exactly, can be conjectured to relate the
              two graphs? Can you prove this geometric relationship
              by algebra?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since {" "}
              <Math>
                $\cos^2$
              </Math>
              {" "} is periodic mod {" "}
              <Math>
                $2\eta$
              </Math>
              {" "} while
              {" "}
              <Math>
                $\cos$
              </Math>
              {" "} is periodic mod {" "}
              <NoBreak>
                <Math>
                  $4\eta$
                </Math>
                ,
              </NoBreak>
              {" "}
              we need, at the very least, a horizontal compression by
              a factor {" "}
              <Math>
                $2$
              </Math>
              {" "} in order to map the bumps of {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              onto those of {" "}
              <NoBreak>
                <Math>
                  $y = \cos^2(x)$
                </Math>
                .
              </NoBreak>
              {" "} From there we have to
              readjust the range and amplitude of the curve, such as,
              e.g., by translating up by {" "}
              <Math>
                $1$
              </Math>
              {" "} and scaling vertically
              by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} (or scaling vertically by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "}
              and translating up by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} either way):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_and_cos2_comparison_transformations_1.svg" />
            <Pause />
            <OuterP>
              Algebraically, the three steps above turn
              {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} into {" "}
              <NoBreak>
                <Math>
                  $\cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "} into {" "}
              <NoBreak>
                <Math>
                  $1 + \cos(2x)$
                </Math>
                ,
              </NoBreak>
              {" "}
              into {" "}
              <NoBreak>
                <Math>
                  $&#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step1_cloud.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step2_cloud.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large 1 + \cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
              <ImageRight
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_step3_cloud.svg"
                offset_x="4em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1 + \cos(2x)\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as substituting {" "}
              <NoBreak>
                “
                <Math>
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "} for {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} effects a horizontal
              compression by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                .
              </NoBreak>
              {" "}
              (See
              the second case
              of Exercise 27, in particular.)
            </OuterP>
            <OuterP class="indent-10">
              (NB: If we do it the other way around,
              putting the vertical scaling before the vertical
              translation, we obtain {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the third function and {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x)$
                </Math>
                ”
              </NoBreak>
              {" "}
              as the fourth function:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1\over 2&#125;\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large\downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \Large&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...which is same-same since
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125; + &#123;1\over 2&#125;\cos(2x) = &#123;1 + \cos(2x)\over 2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              The issue for the second part of the problem is
              therefore to prove that...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  &#123;1 + \cos(2x)\over 2&#125; = \cos^2(x)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...by algebraic means.
            </OuterP>
            <OuterP class="indent-10">
              For this we again use the angle-sum formula
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos(A)\cos(B) - \sin(A)\sin(B)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "} but with {" "}
              <NoBreak>
                <Math>
                  $A = B = x$
                </Math>
                ,
              </NoBreak>
              {" "} namely
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \cos(2x)
              &amp;= \cos(x + x) \\
              &amp;= \up&#123;1.6&#125; \cos(x)\cos(x) - \sin(x)\sin(x) \\
              &amp;= \up&#123;1.6&#125; \cos^2(x) - \sin^2(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which gives us
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &#123;1 + \cos(2x)\over 2&#125;
              &amp;= \up&#123;2.0&#125; &#123;1 + \cos^2(x) - \sin^2(x) \over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;(1 - \sin^2(x)) + \cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;\cos^2(x) + \cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; &#123;2\cos^2(x)\over 2&#125; \\
              &amp;= \up&#123;2.0&#125; \cos^2(x)
              \end&#123;align*&#125;
              $$
              <ImageLeft
                src="/images/svg_ch5_ex_cos_and_cos2_comparison_pythagorean_cloud.svg"
                offset_x="3.4em"
                offset_y="3%"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              ...as conjectured!
              (In particular, {" "}
              <Math>
                $\cos^2(x)$
              </Math>
              {" "} truly {" "}
              <i>
                is
              </i>
              {" "} a
              sinusoid, as a result of all this, surprisingly
              enough.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={31}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 31.
              </b>
              {" "}
              Relate
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x)\cos(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the help of the angle-sum formulas.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The angle-sum formula for sin is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(A+B) = \cos A\sin B + \sin A\cos B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              from which
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              \sin(2x) =&amp;\,\, \sin(x + x) \\
              \up&#123;1.6&#125; =&amp;\,\, \cos x\sin x + \sin x\cos x \\
              \up&#123;1.6&#125; =&amp;\,\, 2\sin x\cos x
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...solving for {" "}
              <NoBreak>
                <Math>
                  $\sin x\cos x$
                </Math>
                .
              </NoBreak>
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
              What sequence of geometric transformations
              can turn [the graph] {" "}
              <Math>
                $y = \sin(x)$
              </Math>
              {" "}
              into [the graph] {" "}
              <NoBreak>
                <Math>
                  $y = \sin(x)\cos(x)$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin x\cos x = &#123;1\over 2&#125;\sin(2x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by Exercise 30 and since the substitution
              of {" "}
              <NoBreak>
                “
                <Math>
                  $x$
                </Math>
                ”
              </NoBreak>
              {" "} by {" "}
              <NoBreak>
                “
                <Math>
                  $2x$
                </Math>
                ”
              </NoBreak>
              {" "} effects a horizontal
              compression by {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                ,
              </NoBreak>
              {" "} the answer is:
              “a horizontal scaling by {" "}
              <Math>
                $&#123;1\over 2&#125;$
              </Math>
              {" "} followed by a vertical scaling by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”,
              </NoBreak>
              {" "}
              though order doesn't matter, and we might also
              say “uniform scaling by {" "}
              <NoBreak>
                <Math>
                  $&#123;1\over 2&#125;$
                </Math>
                ”.
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
              What sequence of geometric transformations
              maps the graph
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto the graph
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \sin x + \cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
              (Study Exercise 18, if you have no inspiration.)
              (PS: Prove your answer.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Note that {" "}
              <Math>
                $\sin + \cos$
              </Math>
              {" "}
              has period {" "}
              <Math>
                $4\eta$
              </Math>
              {" "} just like {" "}
              <Math>
                $\sin$
              </Math>
              {" "} or
              {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "} but, unlike {" "}
              <Math>
                $\sin$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <Math>
                $\sin + \cos$
              </Math>
              {" "} reaches a maximum of {" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
              {" "}
              at {" "}
              <NoBreak>
                <Math>
                  $x = \eta/2$
                </Math>
                ,
              </NoBreak>
              {" "} as uncovered in Exercise 18,
              from which the following graphic is recovered:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_cos_to_sin_plus_cos_reminder.svg" />
            <Pause />
            <OuterP>
              (We have added the minimum at {" "}
              <NoBreak>
                <Math>
                  $y = -\sqrt&#123;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is no harder to prove than the
              maximum at {" "}
              <NoBreak>
                <Math>
                  $y = \sqrt&#123;2&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Note that while the above graph may
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              seem
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              like a sinusoid, we have
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              not yet proved
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              that it is a sinusoid, which is indeed the goal
              of the current exercise! But we can conjecture
              that the
              following two steps would take us from {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "}
              to {" "}
              <NoBreak>
                <Math>
                  $y = \sin(x) + \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} given the structure above:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation to the right by {" "}
              <Math>
                $\eta/2$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. vertical scaling by {" "}
              <Math>
                $\sqrt&#123;2&#125;$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              Now you might recall from previous discussions
              (cf. Exercise 7 of Chapter 3, part 1 of Exercise 27
              in this chapter) that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x + a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has a graph that is the translate of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} to
              left by {" "}
              <Math>
                $a$
              </Math>
              {" "} units, whence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra f(x - a)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              has a graph that is the translate of {" "}
              <Math>
                $y = f(x)$
              </Math>
              {" "} to
              the {" "}
              <i>
                right
              </i>
              {" "} by {" "}
              <Math>
                $a$
              </Math>
              {" "} units; whence, we can
              conjecture that...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sqrt&#123;2&#125;\cdot \cos(x - \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              <NoBreak>
                ...[
                <Math>
                  $\cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} translated, scaled] actually coincides
              with {" "}
              <NoBreak>
                <Math>
                  $\cos(x) + \sin(x)$
                </Math>
                !!!
              </NoBreak>
              {" "} (!!!)
            </OuterP>
            <OuterP class="indent-10">
              For the proof, we resort to the angle-sum formula...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(A + B) = \cos A\cos B - \sin A\sin B
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...again, giving us...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\, \sqrt&#123;2&#125;\cdot \cos(x - \eta/2) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\cos(-\eta/2) - \sin(x)\sin(-\eta/2)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot(\cos(x)\sqrt&#123;0.5&#125; - \sin(x)(-\sqrt&#123;0.5&#125;)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2&#125;\cdot\sqrt&#123;0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;2 \cdot 0.5&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \sqrt&#123;1&#125;\cdot(\cos(x) + \sin(x)) \\
              \up&#123;1.6&#125; =&amp;\,\, \cos(x) + \sin(x)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...victory!!!!
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
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;2&#125;\cdot \sqrt&#123;0.5&#125; = 1
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                can also be seen from the fact that
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sqrt&#123;0.5&#125; = &#123;1\over \sqrt&#123;2&#125;&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                that some might prefer.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={34}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 34.
              </b>
              {" "}
              Prove that for every {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2 \in \rr$
                </Math>
                ,
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equals
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra W\cdot \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some appropriate constants {" "}
              <Math>
                $W$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\psi$
                </Math>
                .
              </NoBreak>
              {" "} (That shall
              be functions of {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .)
              </NoBreak>
              {" "} Also: draw a deep analogy
              to polar coordinates, regarding the transform that gives
              {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} as a function of {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              One approach is to expand
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              using the angle-sum formula, which gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x)\cos(\psi) - \sin(x)\sin(\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              after which multiplying by {" "}
              <Math>
                $W$
              </Math>
              {" "} and collecting coefficients of
              {" "}
              <NoBreak>
                <Math>
                  $\cos x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\sin x$
              </Math>
              {" "} gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \up&#123;1.4&#125;(W \cdot \cos \psi)\cdot\cos(x) - (W \cdot \sin \psi) \cdot \sin(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              comparing to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\cos x + A_2\sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              we see that
              {" "}
              <Math>
                $W \cos(x + \psi)$
              </Math>
              {" "}
              would equal
              {" "}
              <Math>
                $A_1\cos x + A_2\sin x$
              </Math>
              {" "}
              if we could find {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \phantom&#123;-&#125;W\cdot\cos(\psi) = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              -W\cdot\sin(\psi) = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...that we can actually rewrite
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\cos(-\psi) = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin(-\psi) = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because {" "}
              <NoBreak>
                <Math>
                  $\cos(-x) = \cos(x)$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $-\sin(x) = \sin(-x)$
              </Math>
              {" "}
              for all {" "}
              <NoBreak>
                <Math>
                  $x \in \rr$
                </Math>
                .
              </NoBreak>
              {" "} But the above
              two
              equations are very similar to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              r\cdot\cos(\theta) = x
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              r\cdot\sin(\theta) = y
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              that give the transformation
              from polar coordinates {" "}
              <Math>
                $(r, \theta)$
              </Math>
              {" "}
              to Cartesian coordinates {" "}
              <NoBreak>
                <Math>
                  $(x, y)$
                </Math>
                ;
              </NoBreak>
              {" "} in fact these are the
              exact same equations, except that we have
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $W$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $r$
                </Math>
                ’,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $-\psi$
                </Math>
                ’
              </NoBreak>
              {" "}
              in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $\theta$
                </Math>
                ’,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $A_1$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $x$
                </Math>
                ’,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $A_2$
                </Math>
                ’
              </NoBreak>
              {" "} in place of {" "}
              <NoBreak>
                ‘
                <Math>
                  $y$
                </Math>
                ’;
              </NoBreak>
              {" "}
              so in other words,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W, -\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              polar coordinates
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              of the Cartesian point
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (A_1, A_2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <Math>
                $W$
              </Math>
              {" "} being the “radius”, or distance to the origin,
              and {" "}
              <Math>
                $-\psi$
              </Math>
              {" "} being the angle from the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis (or {" "}
              <i>
                argument
              </i>
              ):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_polar_discovery.svg" />
            <Pause />
            <OuterP>
              In particular,
              since every pair of Cartesian coordinates
              has a corresponding pair of polar coordinates
              (in fact, many corresponding pairs!),
              we will
              always be able to find {" "}
              <NoBreak>
                <Math>
                  $W$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\psi$
              </Math>
              {" "} such as to
              match the equations above,
              which concludes the problem.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                To explicitly give formulas,
                one can set
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W = \sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                -\psi = \begin&#123;cases&#125;
                \arctan(A_2/A_1) &amp; \te&#123;if &#125;\, A_1 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\te&#123;arccot&#125;(A_1/A_2) &amp; \te&#123;if &#125;\, A_2 \ne 0, \,\te&#123;else&#125; \\
                \up&#123;1.2&#125;\rm&#123;?&#125;       &amp; \te&#123;if &#125;\, A_1 = 0, A_2 = 0
                \end&#123;cases&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                where we are copy-pasting the formula that appears
                in the chapter for going from cartesian to polar
                coordinates (no need to remember this formula, though,
                really); though, IN TRUTH, setting
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                W = -\sqrt&#123;A_1^2 + A_2^2&#125;
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                would work as well,
                if we add
                {" "}
                <Math>
                  $2\eta$
                </Math>
                {" "} to the argument!
              </OuterP>
            </SolutionNote>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "}
              The previously-studied
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos x + \sin x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (cf. Exercise 4) corresponds to the case
            </OuterP>
            <Pause />
            <MathBlock>
              $$A_1 = A_2 = 1$$
            </MathBlock>
            <Pause />
            <OuterP>
              of this exercise, and
              in which case we can set
            </OuterP>
            <Pause />
            <MathBlock>
              $$W = \sqrt&#123;2&#125;$$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$\psi = -\eta/2$$
            </MathBlock>
            <Pause />
            <OuterP>
              because the pair
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W, \,-\psi) \,=\, (\sqrt&#123;2&#125;, \,\,\eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a polar coordinate of {" "}
              <NoBreak>
                <Math>
                  $(A_1, A_2) = (1, 1)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_polar_discovery_1_1.svg" />
            <Pause />
            <OuterP>
              (In fact, the fact that...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \cos x + \sin x = \sqrt&#123;2&#125;\cdot\cos(x - \eta/2)
                  $$
                  <ImageRight
                    src="/images/svg_ch5_ex_polar_discovery_cloud.svg"
                    compensate_offset_x_for_large_text_columns={true} />
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...was painstakingly uncovered
              in Exercise 33, if you recall.)
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
              If we attempt to express
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\sin x + A_2\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              in the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              then what does the relationship
              between {" "}
              <NoBreak>
                <Math>
                  $A_1$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $A_2$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $W$
              </Math>
              {" "} and {" "}
              <Math>
                $\psi$
              </Math>
              {" "} become?
            </OuterP>
            <OuterP class="indent-10">
              (NB: We have flipped {" "}
              <NoBreak>
                ‘
                <Math>
                  $\cos$
                </Math>
                ’
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                ‘
                <Math>
                  $\sin$
                </Math>
                ’
              </NoBreak>
              {" "} in the first expression, compared
              to Exercise 34, and reducing to that exercise is
              likely to produce confusion.
              Solving from scratch is recommended.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Expanding
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin(x + \psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the angle-sum formula gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sin x\cos \psi + \cos x\sin \psi
              $$
              <ImageRight
                src="/images/svg_ch5_ex_polar_discovery2_cloud.svg"
                offset_x="8em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              whereby multiplying by {" "}
              <Math>
                $W$
              </Math>
              {" "} and collecting coefficients
              of {" "}
              <NoBreak>
                <Math>
                  $\sin x$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $\cos x$
              </Math>
              {" "} gives
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W\cdot\cos \psi)\cdot\sin x + (W\cdot\sin \psi)\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and equating to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A_1\cdot\sin x + A_2\cdot\cos x
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              gives the system of equations
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              W\cdot\cos \psi = A_1
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              W\cdot\sin \psi = A_2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              which is to say that, for this specific arrangement of
              the variables,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (W, \,\psi)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              exact
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              polar coordinates of {" "}
              <NoBreak>
                <Math>
                  $(A_1, A_2)$
                </Math>
                !!!
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "}
              By this result,
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  \sin(x) + \cos(x) = \sqrt&#123;2&#125;\cdot\sin(x + \eta/2)
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (\sqrt&#123;2&#125;, \,\eta/2)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              are the (hum: “the”) polar coordinates of {" "}
              <NoBreak>
                <Math>
                  $(1, 1)$
                </Math>
                .
              </NoBreak>
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
              If aliens descended on Earth, captured everyone,
              took you aside and told you that the fate of
              humanity rested on your ability to “illustrate
              powers of secant”, without further instructions,
              what would you do?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Presumably the aliens are asking
              for an illustration of the sequence
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec \theta, \,\sec^2(\theta), \,\sec^3(\theta), \,\sec^4(\theta), \dots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some fixed {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "} based on a geometric
              interpretation of {" "}
              <NoBreak>
                <Math>
                  $\sec$
                </Math>
                .
              </NoBreak>
              {" "} (Actually...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1, \,\sec \theta, \,\sec^2(\theta), \,\sec^3(\theta),  \,\sec^4(\theta), \dots,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...we should start the sequence at {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <Math>
                  $1 = \sec^0(\theta)$
                </Math>
                .)
              </NoBreak>
              {" "} Here is a possibility that
              echoes back to the first solution to Exercise 27:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_bounce.svg" />
            <Pause />
            <OuterP>
              Starting with a length of {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} bottom left,
              successive multiplications by {" "}
              <Math>
                $\sec(\theta)$
              </Math>
              {" "}
              are performed by “dropping a height up” onto
              the opposite side of the angle {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ,
              </NoBreak>
              {" "}
              bouncing back and forth between the two sides.
            </OuterP>
            <OuterP class="indent-10">
              If we are willing to reproduce the angle
              {" "}
              <Math>
                $\theta$
              </Math>
              {" "} several times over,
              another possibility is to draw a “snail stack”
              of right triangles sharing a common vertex:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_snail.svg" />
            <Pause />
            <OuterP>
              Or if we move the angle {" "}
              <Math>
                $\theta$
              </Math>
              {" "} around from
              one end of the previously obtained segment to
              another, another somewhat exotic possibility is
              this one:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_inverted_towers.svg" />
            <Pause />
            <OuterP>
              We can also take a page from the geometric
              interpretation of sec that is mentioned towards
              the end of the chapter, and draw this figure:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sec_powers_circles.svg" />
            <Pause />
            <OuterP>
              (In which we are effectively using a circular arc
              to each time realign the last obtained segment with
              horizontal.) In any case, with so many nice drawings,
              you are bound to save humanity!
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                One can note that the third diagram makes a cameo
                appearance within the second diagram (modulo scale):
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_sec_powers_bounce_cameo.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={37}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 37.
              </b>
              {" "}
              What do similar illustrations look like for
              powers of cosine, and for powers of tangent?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              For cosines we can copy the same figures as
              for secant, but go “in the other direction”:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_cos_bounce.svg" />
            <Pause />
            <Image
              style="margin-top:1.5em;"
              src="/images/svg_ch5_ex_costan_powers_cos_snail.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_cos_inverted_towers.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_circles.svg" />
            <Pause />
            <OuterP>
              For ‘tan’ it is possible to produce spirals:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_big.svg" />
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_big_other_spiral.svg" />
            <Pause />
            <OuterP>
              There is also a staircase possibility (nb:
              the spirals will go inward, and the staircase
              collapses to a point, if {" "}
              <NoBreak>
                <Math>
                  $\theta &lt; \eta/2$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_wedge.svg" />
            <Pause />
            <OuterP>
              We can also do as in the second spiral,
              and put the powers of {" "}
              <Math>
                $\tan(\theta)$
              </Math>
              {" "} on the
              hypotenuses of the triangles...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_costan_powers_tan_48_other_wedge.svg" />
            <Pause />
            <OuterP>
              ...since the size ratio of successive triangles
              is {" "}
              <NoBreak>
                <Math>
                  $\tan(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} by the first staircase drawing!
              (In fact, we could have done this trick with
              powers of sec/cos as well, relabeling some other
              side of the triangle to be the power of {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Here are some examples of what we suggest at the
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cos_snail_other_way.svg" />
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cos_towers_other_way.svg" />
              <Pause />
              <OuterP>
                (To reiterate, this works because the triangles are all similar,
                and the size ratio of one triangle to the previous—specifically,
                the ratio of the hypotenuses—is
                {" "}
                <NoBreak>
                  <Math>
                    $\cos(\theta)$
                  </Math>
                  .)
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                To illustrate powers of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cot(\theta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                one can start from the illustrations for
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \tan(\theta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                and replace the complementary angle by {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $\theta$
                  </Math>
                  ’.
                </NoBreak>
                {" "}
                E.g.:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_cot_48_big.svg" />
              <Pause />
              <OuterP>
                Likewise, to illustrate powers of
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \sin(\theta)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                one can start with an illustration for powers of
                {" "}
                <Math>
                  $\cos(\theta)$
                </Math>
                {" "} and reverse the role of {" "}
                <Math>
                  $\theta$
                </Math>
                {" "} and
                its complement. E.g., with our two variations of the
                snail:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_sin_snail.svg" />
              <Pause />
              <Image src="/images/svg_ch5_ex_costan_powers_sin_snail_other_way.svg" />
              <Pause />
              <OuterP>
                (Likewise to switch from an illustration of {" "}
                <Math>
                  $\sec$
                </Math>
                {" "}
                to illustration of {" "}
                <Math>
                  $\csc$
                </Math>
                {" "} it suffices to move {" "}
                <Math>
                  $\theta$
                </Math>
                {" "}
                around, not that aliens will ever descend on Earth and
                ask us these things.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={38}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 38.
              </b>
              {" "}
              What sequence of geometric transformations
              of the plane will map the graph
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(x)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              onto the graph...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(0.1x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...?
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Place {" "}
              <Math>
                $\cos(x + 0.1)$
              </Math>
              {" "} as an intermediate function
              between {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\cos(0.1x + 0.1)$
                </Math>
                ,
              </NoBreak>
              {" "}
              breaking the transformation into two steps:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \,\cos(0.1x + 0.1).
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              The first step, going to {" "}
              <NoBreak>
                <Math>
                  $\cos(x + 0.1)$
                </Math>
                ,
              </NoBreak>
              {" "} shifts
              the graph of cos left by {" "}
              <Math>
                $0.1$
              </Math>
              {" "} (cf. Exercise 1,
              Exercise 22); the second step dilates the
              resulting graph by a factor {" "}
              <Math>
                $10$
              </Math>
              {" "} horizontally,
              because the multiplication by {" "}
              <Math>
                $0.1$
              </Math>
              {" "} slows
              everything down by a factor {" "}
              <NoBreak>
                <Math>
                  $10$
                </Math>
                .
              </NoBreak>
              {" "} Thus
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              y = \cos(0.1x + 0.1)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is obtained from {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "} by:
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. left translation by {" "}
              <Math>
                $0.1$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal scaling by {" "}
              <Math>
                $10$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              (Or “horizontal compression by {" "}
              <NoBreak>
                <Math>
                  $0.1$
                </Math>
                ”,
              </NoBreak>
              {" "} for 2.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                One can also place {" "}
                <Math>
                  $\cos(0.1x)$
                </Math>
                {" "} as an
                intermediate function between {" "}
                <Math>
                  $\cos(x)$
                </Math>
                {" "} and
                {" "}
                <NoBreak>
                  <Math>
                    $\cos(0.1x + 0.1)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(0.1x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \,\cos(0.1(x + 1)) = \cos(0.1x + 0.1).
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                In this case the first step, going to {" "}
                <NoBreak>
                  <Math>
                    $\cos(0.1x)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                dilates the graph horizontally by a factor {" "}
                <NoBreak>
                  <Math>
                    $10$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                while the second step, in which {" "}
                <Math>
                  $x$
                </Math>
                {" "} is replaced
                by {" "}
                <NoBreak>
                  <Math>
                    $x + 1$
                  </Math>
                  ,
                </NoBreak>
                {" "} shifts the resulting graph to the
                left by {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ,
                </NoBreak>
                {" "} and the obtained sequence is:
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                1. horizontal scaling by {" "}
                <Math>
                  $10$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                2. left translation by {" "}
                <Math>
                  $1$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                (Indeed, this ends up performing the same overall
                transformation of the plane as the first solution,
                albeit decomposed differently in terms of its sub-steps.
                Neither sequence is more correct than the other.)
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                Take the following three-box assemblage, that
                computes {" "}
                <NoBreak>
                  <Math>
                    $x \ra \cos(0.1x + 0.1)$
                  </Math>
                  :
                </NoBreak>
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x.svg" />
              <Pause />
              <OuterP>
                (The label of the middle box is pasted diagonally
                above the box because of reasons of space.)
              </OuterP>
              <OuterP class="indent-10">
                We can understand our first solution as gluing
                the middle and right boxes onto the {" "}
                <NoBreak>
                  ‘
                  <Math>
                    $\cos$
                  </Math>
                  ’
                </NoBreak>
                {" "} box
                one at a time, and observing the effect of each
                additional gluing on the graph:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_2.svg" />
              <Pause />
              <OuterP>
                On the other hand, if we perform the same
                analysis on this alternate three-box sequence...
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_3.svg" />
              <Pause />
              <OuterP>
                ...that also computes {" "}
                <NoBreak>
                  <Math>
                    $x \ra \cos(0.1x + 0.1)$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                we recover our second solution:
              </OuterP>
              <Pause />
              <Image src="/images/svg_ch5_ex_cos_01x_4.svg" />
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={39}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 39.
              </b>
              {" "}
              More generally, how is the graph of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x \ra \cos(Bx + C)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              related to the graph of {" "}
              <NoBreak>
                <Math>
                  $\cos$
                </Math>
                ,
              </NoBreak>
              {" "} for constants
              {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <NoBreak>
                <Math>
                  $C \in \rr$
                </Math>
                ?
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              As in the solution to Exercise 37 place
              {" "}
              <Math>
                $\cos(x + C)$
              </Math>
              {" "} as an intermediate function between
              {" "}
              <Math>
                $\cos(x)$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $\cos(Bx + C)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(x)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(x + C)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \downarrow
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \cos(Bx + C)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              The first step effects a tranlation to the left by {" "}
              <NoBreak>
                <Math>
                  $C$
                </Math>
                ,
              </NoBreak>
              {" "}
              the second step (since it replaces {" "}
              <Math>
                $x$
              </Math>
              {" "} by {" "}
              <NoBreak>
                <Math>
                  $Bx$
                </Math>
                )
              </NoBreak>
              {" "} effects
              a horizontal compression by a factor {" "}
              <Math>
                $B$
              </Math>
              {" "} (speed-up by
              factor {" "}
              <NoBreak>
                <Math>
                  $B$
                </Math>
                ),
              </NoBreak>
              {" "} so the following pair of steps, in order,
              takes the graph {" "}
              <Math>
                $y = \cos(x)$
              </Math>
              {" "} to the graph {" "}
              <NoBreak>
                <Math>
                  $y = \cos(Bx + C)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              1. horizontal translation by {" "}
              <Math>
                $-C$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <CentralDisplayItalic>
              2. horizontal scaling by {" "}
              <Math>
                $1/B$
              </Math>
            </CentralDisplayItalic>
            <Pause />
            <StarDivider />
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Alternately, like Note 1 of Exercise 37, we can
                stop at {" "}
                <Math>
                  $\cos(Bx)$
                </Math>
                {" "} as an intermediate point:
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(x)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(Bx)
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \downarrow
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \cos(B(x + C/B)) = \cos(Bx + C)
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                This gives us the following alternate sequence:
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                1. horizontal scaling by {" "}
                <Math>
                  $1/B$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <CentralDisplayItalic>
                2. horizontal translation by {" "}
                <Math>
                  $-C/B$
                </Math>
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                ...which is different-but-equivalent, but
                generally considered inferior
                by virtue of involving the more complicated translation
                term, {" "}
                <NoBreak>
                  <Math>
                    $-C/B$
                  </Math>
                  !
                </NoBreak>
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                One says that translation and scaling  are
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                non-commutative
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                because it matters which of the two operations is performed
                first. If it didn't matter,
                then both of our solutions would involve the
                same amount of translation, but they don't!
              </OuterP>
              <OuterP class="indent-10">
                (Also:
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                translation and scaling don't commute
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                or
              </OuterP>
              <Pause />
              <CentralDisplayItalic>
                transation doesn't commute with scaling
              </CentralDisplayItalic>
              <Pause />
              <OuterP>
                ...all good sentences to use in the wild!)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={40}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 40.
              </b>
              {" "}
              If
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A \ne 0
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a point on the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, how can we construct
              the value
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 / A
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by purely geometric means?
              (We assume that {" "}
              <NoBreak>
                ‘
                <Math>
                  $0$
                </Math>
                ’
              </NoBreak>
              {" "} and {" "}
              <NoBreak>
                ‘
                <Math>
                  $1$
                </Math>
                ’
              </NoBreak>
              {" "} are also marked on the axis.)
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The key is to view {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $1/A$
              </Math>
              {" "} as values of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A = \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              1/A = \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some angle {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "} or
              as values of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              A = \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              1/A = \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for some angle {" "}
              <NoBreak>
                <Math>
                  $\theta \in \rr$
                </Math>
                ,
              </NoBreak>
              {" "} if {" "}
              <NoBreak>
                <Math>
                  $|A| \leq 1$
                </Math>
                .
              </NoBreak>
              {" "}
              In more detail, we make use of the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be obtained as the intersection of the tangent
              to the unit circle with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis (we never discussed
              this, you can't be faulted for missing it):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_one_over_A_secant_construction.svg">
              <ImageRight src="/images/svg_ch5_ex_one_over_A_secant_construction_cloud.svg" />
            </Image>
            <Pause />
            <OuterP>
              So the idea is, for example if {" "}
              <NoBreak>
                <Math>
                  $|A| \geq 1$
                </Math>
                ,
              </NoBreak>
              {" "} to draw
              a tangent to the circle from {" "}
              <NoBreak>
                <Math>
                  $A$
                </Math>
                ,
              </NoBreak>
              {" "} then to drop a height
              onto the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_one_over_A_secant_Agt1.svg" />
            <Pause />
            <OuterP>
              ...the position obtained is the corresponding
              {" "}
              <NoBreak>
                <Math>
                  $\cos(\theta)$
                </Math>
                ,
              </NoBreak>
              {" "} and {" "}
              <Math>
                $\cos(\theta)\cdot\sec(\theta) = 1$
              </Math>
              {" "} &amp;#x2705;.
              If {" "}
              <Math>
                $|A| \leq 1$
              </Math>
              {" "} we can reverse the process,
              “dropping a height onto the circle”, and then finding
              the intersection of the tangent at that point with
              the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis! (Which will not work, as should be,
              if and only if {" "}
              <NoBreak>
                <Math>
                  $\cos(\theta) = 0$
                </Math>
                ,
              </NoBreak>
              {" "} a.k.a., if and only
              if {" "}
              <NoBreak>
                <Math>
                  $A = 0$
                </Math>
                .)
              </NoBreak>
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
              In the following drawing at what
              coordinates does the tangent to the circle
              intersect the axes, as marked by the purple
              triangles?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_60_tangent.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              First we note that the {" "}
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
              {" "} of
              the point of tangency are  {" "}
              <Math>
                $1/2$
              </Math>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;0.75&#125; = &#123;\sqrt&#123;3&#125;\over 2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} being {" "}
              <Math>
                $\cos(60^\circ)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sin(60^\circ)$
              </Math>
              {" "} respectively:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_60_tangent_with_coordinates.svg" />
            <Pause />
            <OuterP>
              But by Exercise 43 this implies that the coordinate
              of the intersectionj of the tangent is
              <ImageRight src="/images/svg_ch5_ex_60_tangent_sec_cloud.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 1/2&#125; = 2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the {" "}
              <Math>
                $x$
              </Math>
              {" "} axis, and
              <ImageRight src="/images/svg_ch5_ex_60_tangent_csc_cloud.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over \sqrt&#123;3&#125;/2&#125; = &#123;2\over \sqrt&#123;3&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with the {" "}
              <Math>
                $y$
              </Math>
              {" "} axis, reasoning symmetrically.
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={42}>
          <ExerciseStatement id="_25_9509">
            <OuterP>
              <b>
                Exercise 42.
              </b>
              {" "}
              Compute the vertical distance from {" "}
              <Math>
                $A$
              </Math>
              {" "} to {" "}
              <Math>
                $A'$
              </Math>
              {" "}
              from the following set of blueprints for a shed with
              an angled inside wall (all distances in inches):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We will compute the two green lengths, then the
              red length, then the blue length, then add 130:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan_soln1.svg" />
            <Pause />
            <OuterP>
              Proceeding, the longer and smaller green lengths
              are {" "}
              <Math>
                $112\rt&#123;0.1&#125; \cdot \sin(25.5^\circ\hlfbk)$
              </Math>
              {" "}
              and {" "}
              <Math>
                $8\rt&#123;0.1&#125; \cdot \cos(25.5^\circ\hlfbk)$
              </Math>
              {" "} inches,
              respectively:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_floorplan_soln2.svg" />
            <Pause />
            <OuterP>
              The red length is therefore
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align*&#125;
              &amp;\,\,268 - 8 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk) \\
              \up&#123;1.6&#125; =&amp;\,\,260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)
              \end&#123;align*&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (inches) while the blue length is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (inches) and the final answer is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              130 + \tan(22^\circ\hlfbk)\cdot[260 - 112\cdot\sin(25.5^\circ\hlfbk) - 8\cdot\cos(25.5^\circ\hlfbk)]
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              inches, which comes out to
              <ImageLeft src="/images/svg_ch5_ex_floorplan_computation_cloud.svg" />
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              212.65
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              minus some. (Approximating to {" "}
              <NoBreak>
                <Math>
                  $1/100$
                </Math>
                -th
              </NoBreak>
              {" "} of an inch
              should be good enough for a construction site.)
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                Note that...
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                \cos(25.5^\circ) = 0.90258\dots
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \sin(25.5^\circ) = 0.43051\dots
                $$
              </MathBlock>
              <Pause />
              <MathBlock>
                $$
                \tan(22^\circ) = 0.40402\dots
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                ...and if you are not finding these values, then make sure
                that your calculator is in “degree mode”.
                (Otherwise you have to manually
                convert the arguments to radians.)
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={43}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 43.
              </b>
              {" "}
              Given the following sketch, to what angle
              can the door be opened before it hits against
              the roof? (Hint: You will need to Google “how
              to use arctan”, or “how to convert from polar
              to Cartesian coordinates”.)
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door.svg" />
            <Pause />
            <OuterP>
              And:
            </OuterP>
            <TextParent>
              <ul style="list-style-type:disc;margin-top:1em;margin-bottom:1em;padding-left:66px;line-height:1.7em;">
                <li>
                  all distances are in inches
                </li>
                <li>
                  assume half an inch from the edge of the door
                  to the center of its hinge
                </li>
                <li>
                  assume the door has negligible thicknesss
                </li>
              </ul>
            </TextParent>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We start by computing these lengths in the
              original plane of the {" "}
              <NoBreak>
                <Math>
                  $2$
                </Math>
                -dimensional
              </NoBreak>
              {" "} drawing:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door_soln1.svg" />
            <Pause />
            <OuterP>
              (Nb: One can also compute the length marked ‘2’ as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;42\over \tan(23^\circ)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <NoBreak>
                <Math>
                  $\cot = 1/\tan$
                </Math>
                ,
              </NoBreak>
              {" "} or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              42\cdot \tan(67^\circ)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <Math>
                $67^\circ = 90^\circ - 23^\circ$
              </Math>
              {" "} is the complement
              of {" "}
              <NoBreak>
                <Math>
                  $23^\circ$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Next, as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the distance from the side of the door to its
              hinge, the door swings at a radius of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              38.5
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and the distance between the hinge's center
              and the ceiling, measured horizontally at the top
              of the door, is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              30.945 - 0.5 = 30.445...
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by subtracting from the length marked ‘5’.
              We can draw the following overhead sketch of the situation
              (not to scale, and keeping to {" "}
              <Math>
                $3$
              </Math>
              {" "} digits of accuracy):
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_opening_door_overhead.svg" />
            <Pause />
            <OuterP>
              Here
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \arctan
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a function that you can find notated as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\tan^&#123;-1&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              on your calculator (a questionable choice of notation,
              because it is {" "}
              <i>
                not
              </i>
              {" "} the same as {" "}
              <NoBreak>
                <Math>
                  $1/\tan = \cot$
                </Math>
                ),
              </NoBreak>
              {" "} and
              sometimes known as
            </OuterP>
            <Pause />
            <CentralDisplayItalic>
              tangent inverse
            </CentralDisplayItalic>
            <Pause />
            <OuterP>
              by the gallery, converts a fraction of the form
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\te&#123;opposite&#125;\over\te&#123;adjacent&#125;&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              into the corresponding angle whose tangent equals that
              fraction.
            </OuterP>
            <OuterP class="indent-10">
              The final answer to the problem is...
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  90^\circ + 52.26^\circ = 142.26^\circ
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              ...because {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} only constitutes the amount of rotation
              past {" "}
              <NoBreak>
                <Math>
                  $90^\circ$
                </Math>
                ,
              </NoBreak>
              {" "} per the drawing.
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
              (Speaking of doors with negligible thickness.)
              The sketch below shows the top view of a bomb
              shelter door set in a corner near a wall,
              with distances in centimeters.
              How far can the door open when the big handle
              is in the “open” position, shown in the figure?
              How far can it open when the big handle is in
              the “closed” position, shown by the dotted line?
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_tru_sizes.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              In the interest of mass-producing our results
              we will write a general formula to compute
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} in terms of {" "}
              <NoBreak>
                <Math>
                  $x_0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y_0$
              </Math>
              {" "} and {" "}
              <Math>
                $z$
              </Math>
              {" "} in
              the following diagram (note that {" "}
              <NoBreak>
                <Math>
                  $r = \sqrt&#123;x_0^2 + y_0^2&#125;$
                </Math>
                ):
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_alpha_x0y0.svg" />
            <Pause />
            <OuterP>
              We can decompose
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              90^\circ + \beta - \gamma
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              with {" "}
              <Math>
                $\beta$
              </Math>
              {" "} and {" "}
              <Math>
                $\gamma$
              </Math>
              {" "} as depicted here:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_door_alpha_decomposed.svg" />
            <Pause />
            <OuterP>
              By definition of {" "}
              <NoBreak>
                ‘
                <Math>
                  $\arctan$
                </Math>
                ’
              </NoBreak>
              {" "} (cf. Exercise 43),
              we have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \gamma = \arctan(y_0/x_0)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;r^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \beta = \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              directly in terms of {" "}
              <NoBreak>
                <Math>
                  $z$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $x_0$
              </Math>
              {" "} and {" "}
              <NoBreak>
                <Math>
                  $y_0$
                </Math>
                ,
              </NoBreak>
              {" "} since
              {" "}
              <NoBreak>
                <Math>
                  $r^2 = x_0^2 + y_0^2$
                </Math>
                ,
              </NoBreak>
              {" "} so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(z/\sqrt&#123;x_0^2 + y_0^2 - z^2&#125;) - \arctan(y_0/x_0)
              $$
              <ImageRight
                src="/images/svg_ch5_ex_bomb_shelter_door_alpha_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              which constitutes our “general formula”.
            </OuterP>
            <OuterP class="indent-10">
              From this point, we apply the general formula with
              {" "}
              <NoBreak>
                <Math>
                  $z = 66 - 18 = 44$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (60, 30)$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (93, 30)$
                </Math>
                ,
              </NoBreak>
              {" "} and
              {" "}
              <NoBreak>
                <Math>
                  $(x_0, y_0) = (108, 22)$
                </Math>
                :
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_bomb_shelter_annotated.svg" />
            <Pause />
            <OuterP>
              The three values of {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} obtained, respectively,
              are...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;60^2 + 30^2 - 48^2&#125;) - \arctan(30/60) = 109.1225\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;93^2 + 30^2 - 48^2&#125;) - \arctan(30/93) = 101.5410\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <MathBlock>
              $$
              \alpha = 90^\circ + \arctan(48/\sqrt&#123;108^2 + 22^2 - 48^2&#125;) - \arctan(22/108) = 104.3033\ldots^\circ
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...being, namely, upper bounds on the amount of
              rotation of the door caused by a putative contact of
              the big handle in open position with the wall, of the
              big handle in closed position with the wall, and of
              the small handle with the wall.
            </OuterP>
            <OuterP class="indent-10">
              (By the way: don't be confused by the fact that
              {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} is not an angle measured “from
              horizontal”; {" "}
              <Math>
                $\alpha$
              </Math>
              {" "} is still the amount of rotation (aperture)
              undergone by the door, as it measures the amount of rotation
              of a specific point attached to the door!)
            </OuterP>
            <OuterP class="indent-10">
              In particular, since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              104.3033\ldots &lt; 109.1225\ldots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the big handle is not the limiting factor when
              the big handle is in open position, at which point
              the small handle is the limiting factor and prevents
              the door from opening more than {" "}
              <NoBreak>
                <Math>
                  $104^\circ$
                </Math>
                -and-some,
              </NoBreak>
              {" "}
              whereas since
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              101.5410\ldots &lt; 104.3033\ldots
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              the big handle becomes the limiting factor when it
              is in closed position, at which point the door can
              only open to {" "}
              <NoBreak>
                <Math>
                  $101^\circ$
                </Math>
                -and-some!
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={45}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 45.
              </b>
              {" "}
              If a sphere is projected directly outward onto
              a cylinder abutting the sphere at the equator, with each
              point remaining at its height, as pictured in the
              sketch and in the visualization below, by what factor are
              areas stretched as a function of the latitude {" "}
              <NoBreak>
                <Math>
                  $\theta$
                </Math>
                ?
              </NoBreak>
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_horizontal_projection_sphere_statement.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Areas are scaled by a factor of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta) \cdot \cos(\theta) = 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because latitudes (circles that slice the sphere
              horizontally) are stretched by a factor of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \sec(\theta)
              $$
              <ImageRight
                offset_x="9em"
                src="/images/svg_ch5_ex_horizontal_projection_sphere_sec_cloud.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              by the projection, whereas longitudes (the other
              ones, perpendicular to latitudes) are locally stretched
              by a factor of...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \cos(\theta)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...as depicted in this...
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_horizontal_projection_sphere_cos_explanation.svg" />
            <Pause />
            <OuterP>
              ...sketch, and because the
              overall scaling in area is the latitudinal
              scaling factor times the longitudinal
              scaling factor. (Area = width {" "}
              <Math>
                $\times$
              </Math>
              {" "} height,
              so you take the factor by which “width” scales,
              times the factor by which “height” scales—presuming
              your old “width” and “height” are still at right
              angle to one another after the projection, which
              is the case here: longitudes and latitudes, that
              are perpendicular on the sphere, project to
              lines and circles, respectively, that are
              perpendicular on the cylinder.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={46}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 46.
              </b>
              {" "}
              Rank the {" "}
              <Math>
                $7$
              </Math>
              {" "} slices of this
              sphere with unit radius from the greatest to
              smallest area slice:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_pez_sphere_statement.svg" />
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The three slices of height {" "}
              <Math>
                $1/3$
              </Math>
              {" "} have the same
              area, as do the four slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
              {" "} But
              naturally, the slices of height {" "}
              <Math>
                $1/3$
              </Math>
              {" "} have larger
              area than the slices of height {" "}
              <NoBreak>
                <Math>
                  $1/4$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                This holds because each slice has the same area
                as the horizontal projection of that slice onto a cylinder
                hugging the sphere, by Exercise 46, and because
                the area of a cylinder slice only depends on its
                height.
                <ImageRight src="/images/svg_ch5_ex_pez_sphere_cloud.svg" />
              </OuterP>
            </SolutionNote>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 2.
                </i>
                {" "}
                The slices of height {" "}
                <Math>
                  $1/3$
                </Math>
                {" "} have area exactly
              </OuterP>
              <Pause />
              <MathBlock>
                $$
                &#123;1/3 \over 1/4&#125; = 4/3 = 1.333...
                $$
              </MathBlock>
              <Pause />
              <OuterP>
                times the area of the slices of height {" "}
                <NoBreak>
                  <Math>
                    $1/4$
                  </Math>
                  ,
                </NoBreak>
                {" "}
                given that the area of a slice is directly
                proportional to its height.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
        <Exercise number={47}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 47.
              </b>
              {" "}
              Give a formula for the area of a sphere of
              radius {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The area of a sphere of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r = 8\eta\rt&#123;0.05&#125;r^2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because it is the same as the area of a cylinder
              of radius {" "}
              <Math>
                $r$
              </Math>
              {" "} and and height {" "}
              <NoBreak>
                <Math>
                  $2r$
                </Math>
                ,
              </NoBreak>
              {" "} by Exercise 46:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_area.svg" />
            <Pause />
            <OuterP>
              (Namely,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              4\eta\rt&#123;0.05&#125;r\cdot 2r
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is the product “circumference {" "}
              <Math>
                $\times$
              </Math>
              {" "} height”
              that gives the area of the cylinder.)
            </OuterP>
          </Solution>
        </Exercise>
        <Exercise number={48}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 48.
              </b>
              {" "}
              Give a formula for the volume of a sphere of
              radius {" "}
              <Math>
                $r$
              </Math>
              {" "} using the fact that the volume of
              a cone is “one third base times height”.
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              The basic idea is that we can view the
              sphere as being made up of many cones:
            </OuterP>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_volume_idea.svg" />
            <Pause />
            <OuterP>
              When we add up the volume
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125; \times \rm&#123;height&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over all these cones, each height is nearly {" "}
              <NoBreak>
                <Math>
                  $r$
                </Math>
                ,
              </NoBreak>
              {" "}
              so what we really need is the sum of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times \rm&#123;base&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              over all the cones, which comes out to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              because the sum of all the areas of the bases
              is the sphere area. (Everything speaking
              approximately, for many fine cones, in the
              limit of our imagination as they become
              infinitely fine.) (*Where each ‘base’ stands
              for the shaved-off, “flattened” version of the
              base.) So multiplying the height {" "}
              <Math>
                $r$
              </Math>
              {" "} back in,
              we find
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  V = &#123;1\over 3&#125;\times (&#123;\rm sphere\,\,area&#125;) \times r = &#123;8\over 3&#125;\eta\rt&#123;.1&#125;r^3
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              for the volume {" "}
              <Math>
                $V$
              </Math>
              {" "} of the sphere, using the fact that
              the sphere area {" "}
              <Math>
                $A$
              </Math>
              {" "} is
            </OuterP>
            <center style="margin-top:1em;margin-bottom:1em;">
              <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                <MathBlock>
                  $$
                  A = 8\eta\rt&#123;.05&#125;r^2
                  $$
                </MathBlock>
              </div>
            </center>
            <OuterP>
              by Exercise 49.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                To formalize the argument, consider that
                we can approximate the volume of the sphere
                by finitely many cones with triangular bases,
                by triangulating the surface of the sphere:
              </OuterP>
            </SolutionNote>
            <Pause />
            <Image src="/images/svg_ch5_ex_sphere_tetrahedrons.svg">
              <p>
                Note that a cone with a triangular base is
                just a
              </p>
              <Pause />
              <CentralDisplayItalic>
                tetrahedron
                <ImageLeft src="/images/svg_ch5_ex_sphere_volume_cones_cloud.svg" />
              </CentralDisplayItalic>
              <p>
                where “tetrahedron” means “four-sided shape”.
                (There is only 1 way to pull off a four-sided
                shape in 3D: to make all sides triangles.)
                So the volume of the sphere is approximated
                by the sum of the volumes of the tetrahedrons,
                a.k.a. cones.
              </p>
              <p>
                Define the
              </p>
              <Pause />
              <CentralDisplayItalic>
                mesh size
              </CentralDisplayItalic>
              <p>
                of such a set of tetrahedrons to be the largest
                sidelength of any tetrahedron base.
              </p>
              <p>
                (The smaller the mesh size, the more pointed
                the tetrahedrons.)
              </p>
              <p>
                For the current
                discussion we take it for granted that as the
                mesh size shrinks, the sum of the volumes of
                the cones (= tetrahedrons) converges to the
                volume of sphere.
              </p>
              <p>
                (Or take the limit, as the mesh size shrinks,
                of the sum of the volume of the tetrahedrons
                to be the {" "}
                <i>
                  definition
                </i>
                {" "} of the “volume of the
                sphere”—that's just as well, since we don't have
                any other competing notion of “volume of the sphere”,
                at the moment.)
              </p>
              <p>
                Here is a closer look at a single tetrahedron
                {" "}
                <NoBreak>
                  (
                  <Math>
                    $h_i$
                  </Math>
                </NoBreak>
                {" "} is the height of the tetrahedron):
              </p>
              <Pause />
              <Image src="/images/svg_ch5_ex_sphere_volume_closeup.svg" />
              <p>
                One observes that
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i \leq A_i
                $$
              </MathBlock>
              <p>
                where
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i
                $$
              </MathBlock>
              <p>
                is the base of the tetrahedron and
              </p>
              <Pause />
              <MathBlock>
                $$
                A_i
                $$
              </MathBlock>
              <p>
                is the projection of the base onto the surface
                of the sphere from the center of the sphere, and
                that
              </p>
              <Pause />
              <MathBlock>
                $$
                h_i \leq r
                $$
              </MathBlock>
              <p>
                where
                {" "}
                <Math>
                  $
                  h_i
                  $
                </Math>
                {" "}
                is the height of the tetrahedron, and {" "}
                <Math>
                  $r$
                </Math>
                {" "} is the
                radius of sphere. On the other hand, it is not hard
                to convince oneself that
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.9A_i
                $$
              </MathBlock>
              <p>
                and
              </p>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.9r
                $$
              </MathBlock>
              <p>
                for all of the tetrahedrons, if the mesh size is
                sufficiently small; even,
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99A_i
                $$
              </MathBlock>
              <p>
                and
              </p>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99r
                $$
              </MathBlock>
              <p>
                for all of the tetrahedrons simultaenously,
                {" "}
                <i>
                  if the mesh size is sufficiently small
                </i>
                ; even,
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i \geq 0.99999A_i
                $$
              </MathBlock>
              <p>
                and
              </p>
              <Pause />
              <MathBlock>
                $$
                h_i \geq 0.99999r
                $$
              </MathBlock>
              <p>
                for all... if etc.
              </p>
              <p>
                (Or as mathematicians would put it: “for all {" "}
                <Math>
                  $\e &gt; 0$
                </Math>
                {" "}
                there exists an {" "}
                <Math>
                  $s &gt; 0$
                </Math>
                {" "} such that
              </p>
              <Pause />
              <MathBlock>
                $$
                B_i \geq (1-\e)A_i
                $$
              </MathBlock>
              <p>
                and
              </p>
              <Pause />
              <MathBlock>
                $$
                h_i \geq (1-\e)r
                $$
              </MathBlock>
              <p>
                for all of the tetrahedrons, if the mesh size less than {" "}
                <NoBreak>
                  <Math>
                    $s$
                  </Math>
                  .”)
                </NoBreak>
                {" "}
                (“For all... there exists... such that... if... .”)
              </p>
              <p>
                This implies that
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <p>
                [nb: fast-foward to Exercise 38 if you have never
                seen {" "}
                <NoBreak>
                  <Math>
                    $\sum$
                  </Math>
                  -notation,
                </NoBreak>
                {" "} but this basically reads
                “sum from {" "}
                <Math>
                  $i$
                </Math>
                {" "} equals {" "}
                <Math>
                  $1$
                </Math>
                {" "} up to {" "}
                <NoBreak>
                  <Math>
                    $N$
                  </Math>
                  ”]
                </NoBreak>
                {" "} which is the
                total volume of the tetrahedrons, where {" "}
                <Math>
                  $N$
                </Math>
                {" "} denotes
                the number of tetrahedrons and {" "}
                <NoBreak>
                  <Math>
                    $B_i$
                  </Math>
                  ,
                </NoBreak>
                {" "} {" "}
                <Math>
                  $h_i$
                </Math>
                {" "} are the
                base and height of the {" "}
                <NoBreak>
                  <Math>
                    $i$
                  </Math>
                  -th
                </NoBreak>
                {" "} tetrahedron, is
                sandwiched between
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_i r
                $$
                <ImageRight
                  offset_x="5em"
                  src="/images/svg_ch5_ex_sphere_volume_AiBi_cloud.svg"
                  compensate_offset_x_for_large_text_columns={true} />
              </MathBlock>
              <p>
                above, and
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r
                $$
                <ImageLeft
                  offset_x="2.5em"
                  src="/images/svg_ch5_ex_sphere_volume_AiBi_other_cloud.svg"
                  compensate_offset_x_for_large_text_columns={true} />
              </MathBlock>
              <p>
                below, for sufficiently small mesh size; but
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N A_i = A
                $$
              </MathBlock>
              <p>
                where {" "}
                <Math>
                  $A = 8\eta\rt&#123;.05&#125;r^2$
                </Math>
                {" "} is the total area
                of the sphere, and so
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <p>
                is sandwiched between
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;A_ir = &#123;1\over 3&#125;\cdot r\cdot \sum_&#123;i=1&#125;^N A_i = &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <p>
                above, and
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;\cdot 0.99999\cdot A_i\cdot 0.99999\cdot r = (0.99999)^2&#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <p>
                below; or, nicely put in a double inequality:
              </p>
              <center style="margin-top:1em;margin-bottom:1em;">
                <div style="display:inline-block;border:1px solid red;padding:1em 1em;">
                  <MathBlock>
                    $$
                    &#123;1\over 3&#125;Ar \geq \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i \geq (0.99999)^2&#123;1\over 3&#125;Ar
                    $$
                  </MathBlock>
                </div>
              </center>
              <p>
                ...but we could replace {" "}
                <NoBreak>
                  “
                  <Math>
                    $0.99999$
                  </Math>
                  ”
                </NoBreak>
                {" "} by any other
                constant less that {" "}
                <Math>
                  $1$
                </Math>
                {" "} [yah no: because of the square,
                we need to say “between {" "}
                <Math>
                  $0$
                </Math>
                {" "} and {" "}
                <NoBreak>
                  <Math>
                    $1$
                  </Math>
                  ”]
                </NoBreak>
                {" "} by further
                shrinking the size of the mesh, which implies that
              </p>
              <Pause />
              <MathBlock>
                $$
                \sum_&#123;i=1&#125;^N &#123;1\over 3&#125;B_ih_i
                $$
              </MathBlock>
              <p>
                must converge to
              </p>
              <Pause />
              <MathBlock>
                $$
                &#123;1\over 3&#125;Ar
                $$
              </MathBlock>
              <p>
                as the mesh size goes to zero—it cannot converge to
                something greater than, nor less than, this number!
              </p>
            </Image>
          </Solution>
        </Exercise>
        <Exercise number={49}>
          <ExerciseStatement>
            <OuterP>
              <b>
                Exercise 49.
              </b>
              {" "}
              Similarly to Exercise 9, suggest a definition for
              the product
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c\cdot\vec&#123;v&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of a vector {" "}
              <Math>
                $\vec&#123;v&#125;$
              </Math>
              {" "} by a real number {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </OuterP>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              We define
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              c \cdot (v_x, v_y) = (c\rt&#123;0.1&#125;v_x, c\rt&#123;0.1&#125;v_y)
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for the product of a real number {" "}
              <Math>
                $c$
              </Math>
              {" "} with a
              vector {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125; = (v_x, v_y) \in \rr^2$
                </Math>
                .
              </NoBreak>
              {" "}
              (Similarly for a vector of higher dimension—those
              exist too.)
            </OuterP>
            <OuterP class="indent-10">
              In other words, the product takes the constant
              {" "}
              <Math>
                $c$
              </Math>
              {" "} “inside”, multiplying each coordinate of
              the vector by {" "}
              <NoBreak>
                <Math>
                  $c$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "} We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (10, 3.333) = (20, 6.666),
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              applying the definition with {" "}
              <NoBreak>
                <Math>
                  $c = 2$
                </Math>
                ,
              </NoBreak>
              {" "}
              {" "}
              <NoBreak>
                <Math>
                  $\vec&#123;v&#125; = (10, 3.333)$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 2.
              </i>
              {" "} We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2 \cdot (a, b) = (2a, 2b),
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
              {" "} for an example
              that is half-algebraic, half-numerical.
            </OuterP>
            <Pause />
            <SolutionNote>
              <OuterP>
                <i>
                  Note 1.
                </i>
                {" "}
                In some sense, the vector “wins” over the
                number, in that their conjoint baby is a vector,
                not a number.
              </OuterP>
            </SolutionNote>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};