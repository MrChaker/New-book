import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic, CentralDisplay }  from "~/components/Delimiters";
import { ExerciseStatement, Exercise, Exercises }  from "~/components/Exercises";
import Grid  from "~/components/Grid";
import InChapterLink  from "~/components/InChapterLink";
import { Item, List }  from "~/components/List";
import { Math, MathBlock }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageLeft, ImageRight }  from "~/components/SideImage";
import Solution  from "~/components/Solution";
import { Example, NoBreak, Pause, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Chapter1__() {
  return (
    <Article
      prevPage="/"
      nextPage="/article/chapter2"
      pageNecessaryMargin={800}
      maxElementWidth={500}
      id="_2_338">
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            square roots
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            fractions and division
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            distributivity
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            epilogue
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            vocabulary
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=exercises">
            exercises
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Chapter 1:">
        A {" "}
        <i>
          Few
        </i>
        {" "} Refreshers
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Square Roots.
          </b>
        </OuterP>
        <OuterP class="indent-10">
          You might remember that “minus times minus
          is plus” and that “plus times plus is plus”.
          (Why? The enemy of my enemy is my friend.)
          So any nonzero number multiplied by itself
          is positive. For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-2) \times (-2) = 4
          $$
        </MathBlock>
        <Pause />
        <CentralDisplay>
          and
        </CentralDisplay>
        <Pause />
        <MathBlock>
          $$
          2 \times 2 = 4
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          are both positive. But {" "}
          <Math>
            $\sqrt&#123;4&#125;$
          </Math>
          {" "} is, by
          definition, the unique {" "}
          <i>
            nonnegative
          </i>
          {" "}
          solution to {" "}
          <NoBreak>
            <Math>
              $x^2 = 4$
            </Math>
            .
          </NoBreak>
          {" "}
          Hence,
        </OuterP>
        <Pause />
        <MathBlock>
          $$\sqrt&#123;(-2)^2&#125; = 2$$
          <ImageRight
            src="/images/svg_ch1_ch_minus_two_squared_cloud.svg"
            offset_y="0em"
            offset_x="5em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          and, in particular, it is {" "}
          <i>
            not
          </i>
          {" "} true that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; x
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for every real number {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
          {" "} Instead we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;x^&#123;2&#125;&#125; \rt&#123;0.1&#125; = \rt&#123;0.1&#125; |x|
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for every real number {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ,
          </NoBreak>
          {" "} where {" "}
          <Math>
            $|x|$
          </Math>
          {" "}
          denotes the absolute value of {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          (Nb: If ever you want to indicate both
          solutions of the equation {" "}
          <Math>
            $x^2 = 4$
          </Math>
          {" "} you
          can always use the notation {" "}
          <NoBreak>
            “
            <Math>
              $\pm \sqrt&#123;4&#125;$
            </Math>
            ”.
          </NoBreak>
          {" "}
          This is what happens, for example, in the
          maybe-well-known formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x = &#123;-b \pm \sqrt&#123;b^2 - 4ac&#125; \over 2a&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for the solutions to the quadratic equation
          {" "}
          <NoBreak>
            <Math>
              $ax^2 + bx + c = 0$
            </Math>
            .)
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Next, we will ponder
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          whose value is—by definition—the unique
          nonnegative solution to
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = 0.5.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          As beginners, there's nothing wrong with
          trying to solve this equation by trial and
          error. With {" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} for example,
          we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;1\over 4&#125;\times&#123;1\over 4&#125; = &#123;1\over 16&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          so {" "}
          <Math>
            $x = &#123;1\over 4&#125;$
          </Math>
          {" "} is not a solution of
          the equation, being apparently too small.
          Increasing {" "}
          <Math>
            $x$
          </Math>
          {" "} to {" "}
          <NoBreak>
            <Math>
              $x = &#123;1\over 2&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} say, we
          find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;1\over 2&#125;\times&#123;1\over 2&#125; = &#123;1\over 4&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which is better, since {" "}
          <Math>
            $1/4$
          </Math>
          {" "} is closer to {" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "}
          but still too small. Increasing {" "}
          <Math>
            $x$
          </Math>
          {" "} by {" "}
          <Math>
            $1/4$
          </Math>
          {" "}
          again, say, to {" "}
          <NoBreak>
            <Math>
              $x = &#123;3\over 4&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          x^2 = &#123;3\over 4&#125;\times&#123;3\over 4&#125; = &#123;9\over 16&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which—surprise!—is actually pretty close to
          {" "}
          <NoBreak>
            <Math>
              $1/2$
            </Math>
            ,
          </NoBreak>
          {" "} as {" "}
          <NoBreak>
            <Math>
              $1/2 = 8/16$
            </Math>
            .
          </NoBreak>
          {" "} And since {" "}
          <NoBreak>
            <Math>
              $9/16 &gt; 0.5$
            </Math>
            ,
          </NoBreak>
          {" "}
          {" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "} must be a little {" "}
          <i>
            less
          </i>
          {" "} than
          {" "}
          <NoBreak>
            <Math>
              $&#123;3\over 4&#125; = 0.75$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          In last resort, and in reasonably good
          agreement with our observations, a calculator
          reveals that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;0.5&#125; = 0.7071067...
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          where the decimals trail off with no pattern.
          (This number is irrational.) Even so, the fact
          that {" "}
          <Math>
            $\sqrt&#123;0.5&#125;$
          </Math>
          {" "} is {" "}
          <i>
            greater
          </i>
          {" "} than {" "}
          <Math>
            $0.5$
          </Math>
          {" "} is
          often perceived as counterintuitive.
        </OuterP>
        <OuterP class="indent-10">
          You can think of it this way: multiplying a
          value by {" "}
          <NoBreak>
            <Math>
              $0.7071$
            </Math>
            ,
          </NoBreak>
          {" "} or approximately {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125;$
            </Math>
            ,
          </NoBreak>
          {" "}
          is like taking {" "}
          <Math>
            $70.71\%$
          </Math>
          {" "} of that value—for
          example, say,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          605 \cdot 0.7071 = 427.7955
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is {" "}
          <Math>
            $70.71\%$
          </Math>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $605$
            </Math>
            ,
          </NoBreak>
          {" "} and so on—so if we
          multiply {" "}
          <i>
            twice
          </i>
          {" "} by {" "}
          <Math>
            $0.7071$
          </Math>
          {" "} we obtain
          {" "}
          <NoBreak>
            “
            <Math>
              $70.71\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "} and it just so happens
          that {" "}
          <NoBreak>
            “
            <Math>
              $70.71\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $70.71\%$
            </Math>
            ”
          </NoBreak>
          {" "} is close to
          {" "}
          <NoBreak>
            <Math>
              $50\%$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          The point is: if {" "}
          <NoBreak>
            “
            <Math>
              $X\%$
            </Math>
          </NoBreak>
          {" "} of {" "}
          <NoBreak>
            <Math>
              $X\%$
            </Math>
            ”
          </NoBreak>
          {" "} equals {" "}
          <NoBreak>
            <Math>
              $50\%$
            </Math>
            ,
          </NoBreak>
          {" "}
          then, of course, {" "}
          <NoBreak>
            <Math>
              $\rt&#123;0.03&#125;X &gt; 50$
            </Math>
            —that
          </NoBreak>
          {" "} much
          seems logical—and, with a little thought, the
          same phenomenon explains why {" "}
          <NoBreak>
            <Math>
              $\sqrt&#123;0.5&#125; &gt; 0.5$
            </Math>
            !
          </NoBreak>
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
            Fractions and Division.
          </b>
          {" "}
          An elementary fraction, or division, such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;50 \over 2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          can be thought of in a few different ways:
        </OuterP>
        <Pause />
        <List>
          <Item>
            Fifty halves (i.e., {" "}
            <NoBreak>
              <Math>
                $50 \times &#123;1\over 2&#125;$
              </Math>
              ).
            </NoBreak>
          </Item>
          <Item>
            The size obtained when something of size
            fifty is divided into two equal parts
            (answer: {" "}
            <NoBreak>
              <Math>
                $25$
              </Math>
              ).
            </NoBreak>
          </Item>
          <Item>
            The number of times that {" "}
            <Math>
              $2$
            </Math>
            {" "} goes into {" "}
            <Math>
              $50$
            </Math>
            {" "}
            (answer: {" "}
            <NoBreak>
              <Math>
                $25$
              </Math>
              ,
            </NoBreak>
            {" "} because it takes twenty-five
            {" "}
            <NoBreak>
              <Math>
                $2$
              </Math>
              's
            </NoBreak>
            {" "} to make up {" "}
            <NoBreak>
              <Math>
                $50$
              </Math>
              ).
            </NoBreak>
          </Item>
        </List>
        <Pause />
        <OuterP>
          But {" "}
          <Math>
            $50/2$
          </Math>
          {" "} is a ratio of integers, which makes
          things particularly nice! For a ratio of
          decimals, such as, say,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1 \over 0.01&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          our possible points of view are going to be
          more restricted. Thankfully, however, we can
          still characterize this fraction as the
          answer to the question “how many times does
          {" "}
          <Math>
            $0.01$
          </Math>
          {" "} go into {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ?”
          </NoBreak>
          {" "} as in the third option
          above. And, indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1 \over 0.01&#125; \,=\,100
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because {" "}
          <Math>
            $0.01$
          </Math>
          {" "} goes {" "}
          <Math>
            $100$
          </Math>
          {" "} times into {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            .
          </NoBreak>
          {" "} For
          that matter,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123; 1 \over 0.001&#125; = 1000,\qquad&#123;1 \over 0.0001&#125; = 10000,\quad\,\,\,\,\textrm&#123;(etc)&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by the same reasoning, which explains why
          dividing by smaller and smaller numbers produces
          larger and larger results (and, by extension,
          why dividing by {" "}
          <Math>
            $0$
          </Math>
          {" "} is undefined).
        </OuterP>
        <Pause />
        <OuterP>
          <b>
            Note.
          </b>
          {" "} In general, the ratio of two decimal
          numbers can be turned into a ratio of integers
          by multiplying the ratio top and bottom by a
          suitable power of {" "}
          <NoBreak>
            <Math>
              $10$
            </Math>
            .
          </NoBreak>
          {" "} E.g.:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          &#123;1.42 \over 0.8&#125; = &#123;100 \cdot 1.42 \over 100 \cdot 0.8&#125; = &#123;142 \over 80&#125; = &#123;71 \over 40&#125;.
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          This example was chosen randomly, and, if you
          allow, we would like to see how large {" "}
          <Math>
            $71/40$
          </Math>
          {" "}
          really is (one second!):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          &#123;71 \over 40&#125; \,&amp;=\, &#123;40 + 30 + 1 \over 40&#125; \,=\, &#123;40 \over 40&#125; + &#123;30 \over 40&#125; + &#123;1 \over 40&#125;\\
          \,&amp;=\, 1 + &#123;3 \over 4&#125; + &#123;1 \over 4&#125;\!\cdot \!&#123;1 \over 10&#125;\up&#123;1.5&#125;\\
          \,&amp;=\, 1 + 0.75 + 0.025 = 1.775\up&#123;1.5&#125;
          \end&#123;align&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...so we find, among others, that {" "}
          <Math>
            $71$
          </Math>
          {" "} is exactly
          {" "}
          <Math>
            $77.5\%$
          </Math>
          {" "} greater than {" "}
          <NoBreak>
            <Math>
              $40$
            </Math>
            .
          </NoBreak>
          {" "} (Interesting, no?)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Distributivity.
          </b>
          {" "}
          As you might already know, a number that
          multiplies a sum can be brought “inside” the
          sum. For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          5(10 + 2) \,=\, 5\!\cdot\!10 \,+\, 5\!\cdot\!2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (five times twelve equals fifty plus ten), or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a(b + c) = ab + ac
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          more generally. This property is known as the
          {" "}
          <i>
            distributivity of multiplication over addition
          </i>
          ,
          or {" "}
          <i>
            distributivity
          </i>
          {" "} for short.
        </OuterP>
        <OuterP class="indent-10">
          (We might finally clarify that {" "}
          <NoBreak>
            ‘
            <Math>
              $\cdot$
            </Math>
            ’
          </NoBreak>
          {" "} means
          “times”, i.e., the same as {" "}
          <NoBreak>
            ‘
            <Math>
              $\times$
            </Math>
            ’.
          </NoBreak>
          {" "} Moreover,
          when we write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          5\!\cdot\!10 \,+\, 5\!\cdot\!2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          we really mean
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (5\!\cdot\!10) + (5\!\cdot\!2)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as opposed to something else, such as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          ((5\!\cdot\!10) + 5)\!\cdot\! 2,
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because multiplication takes precedence over
          addition, by default.)
        </OuterP>
        <OuterP class="indent-10">
          A little more generally, one has such identities
          as
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) \,=\, aC + bC + aD + bD
          $$
          <ImageLeft
            src="/images/325.svg"
            offset_y="-0.5em"
            offset_x="1em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          that come from multiplying every term of the first
          parenthesis with every term of the second
          parenthesis. Indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) = (a + b)C + (a + b)D
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by one application of distributivity, while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)C = aC + bC
          $$
        </MathBlock>
        <Pause />
        <MathBlock>
          $$
          (a + b)D = aD + bD
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by distributivity again.
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
            \begin&#123;align&#125;
            (10 + 2)(10 + 4) \,&amp;=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!4 \,+\, 2\!\cdot\!10 \,+\, 2\!\cdot\!4\\
            \,&amp;=\, 100 \,+\, 40 \,+\, 20 \,+\, 8\\
            \,&amp;=\, 168
            \end&#123;align&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            so {" "}
            <NoBreak>
              <Math>
                $12 \times 14 = 168$
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
            \begin&#123;align&#125;
            (10 + 3)(10 + 3) \,&amp;=\, 10\!\cdot\!10 \,+\, 10\!\cdot\!3 \,+\, 3\!\cdot\!10 \,+\, 3\!\cdot\!3\\
            \,&amp;=\, 100 \,+\, 30 \,+\, 30 \,+\, 9\\
            \,&amp;=\, 169
            \end&#123;align&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            so {" "}
            <NoBreak>
              <Math>
                $13 \times 13 = 169$
              </Math>
              .
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          (The fact that {" "}
          <Math>
            $13 \times 13$
          </Math>
          {" "} is exactly one
          greater than {" "}
          <Math>
            $12 \times 14$
          </Math>
          {" "} is a bit curious
          indeed.)
        </OuterP>
        <OuterP class="indent-10">
          If we start from the afore-mentioned identity
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) \,=\, aC + bC + aD + bD
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and set {" "}
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $D = b$
            </Math>
            ,
          </NoBreak>
          {" "} we find
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a + b) \,=\, aa + ba + ab + bb
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or, equivalently,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)^2 = a^2 + 2ab + b^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since {" "}
          <NoBreak>
            <Math>
              $(a + b)(a + b) = (a + b)^2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $aa = a^2$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
          {" "} (This is the {" "}
          <i>
            binomial expansion
            of degree two
          </i>
          , but such terminology is not very
          important at this stage.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 3.
            </b>
            {" "}
            By the last formula (or “binomial expansion
            of degree two”),
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            \begin&#123;align&#125;
            \up&#123;1&#125; (10 + 3)^2 \,&amp;=\, 10\!\cdot\!10 \,+\, 2\!\cdot\!3\!\cdot\!10 \,+\, 3\!\cdot\!3 \\
            \up&#123;1&#125; \,&amp;=\, 100 + 60 + 9 \\
            \up&#123;1&#125; \,&amp;=\, 169
            \end&#123;align&#125;
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            which agrees with Example 2.
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          On the other hand, setting {" "}
          <NoBreak>
            <Math>
              $C = a$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $D = -b$
          </Math>
          {" "} in
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(C + D) = aC + aD + bC + bD
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          gives
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a + (-b)) = aa + a(-b) + ba + b(-b)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or, less pedantically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a - b) = aa - ab + ba - bb
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a + b)(a - b) = a^2 - b^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since {" "}
          <NoBreak>
            <Math>
              $- ab + ba = 0$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $aa = a^2$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            <Math>
              $bb = b^2$
            </Math>
            .
          </NoBreak>
          {" "} Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a^2 - b^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          a difference of squares
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          whence {" "}
          <i>
            a difference of squares can always be
            factored
          </i>
          . (Factored as {" "}
          <NoBreak>
            <Math>
              $(a + b)(a - b)$
            </Math>
            ,
          </NoBreak>
          {" "} that
          is.) (PS: “Factored” means “written as a product”.)
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 4.
            </b>
            {" "}
            Since
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            19 = 100 - 81 = 10^2 - 9^2
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            is a difference of squares, {" "}
            <Math>
              $19$
            </Math>
            {" "} can be
            factored. (On the other hand {" "}
            <Math>
              $19$
            </Math>
            {" "} is a prime
            number, but nevermind.)
          </OuterP>
        </Example>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 5.
            </b>
            {" "}
            The algebraic expression
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            can be factored, because
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 = 1^2
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            implies that
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            truly is “a difference of squares”. And, indeed,
          </OuterP>
          <Pause />
          <MathBlock>
            $$
            1 - x^2 = (1 - x)(1 + x)
            $$
          </MathBlock>
          <Pause />
          <OuterP>
            as per {" "}
            <NoBreak>
              “
              <Math>
                $\rt&#123;0.04&#125;a^2 - b^2 = (a - b)(a + b)$
              </Math>
              ”.
            </NoBreak>
          </OuterP>
        </Example>
        <Pause />
        <OuterP>
          In relation to distributivity, we should also
          mention the simple but important fact that
          multiplying a difference by {" "}
          <Math>
            $-1$
          </Math>
          {" "} {" "}
          <i>
            reverses
          </i>
          {" "} the
          difference. That is,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (-1)(a - b) \,=\, b - a
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          or, for short,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          -(a - b) \,=\, b - a
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because, indeed,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          (-1)(a - b) \,&amp;=\, (-1)(a + (-b)) \\
          \,&amp;=\, (-1)a + (-1)(-b) \\
          \,&amp;=\, -a + b
          \end&#123;align&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          by distributivity (used in the second step).
        </OuterP>
        <Pause />
        <Example>
          <OuterP>
            <b>
              Example 6.
            </b>
            {" "}
            We have {" "}
            <NoBreak>
              <Math>
                $-(10 - 3) = 3 - 10$
              </Math>
              .
            </NoBreak>
            {" "}
            (Because {" "}
            <NoBreak>
              <Math>
                $-7 = -7$
              </Math>
              ,
            </NoBreak>
            {" "} as it would be, haha.)
          </OuterP>
        </Example>
      </Section>
      <Pause />
      <Section
        divider={false}
        id="section-4">
        <OuterP>
          <b>
            Epilogue.
          </b>
          {" "} Do you remember the near miss between
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          12\cdot 14 \,=\, 168
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          13 \cdot 13 \,=\, 13^2 \,=\, 169
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          ...? Well if you observe, additionally, that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \begin&#123;align&#125;
          11\,\cdot\,13 &amp;= 12^2 - 1\\
          10\,\cdot\,12 &amp;= 11^2 - 1\\
          9\,\cdot\,11 &amp;= 10^2 - 1
          \end&#123;align&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (etc) you might become suspicious of a pattern!
          But the mystery is rather thin: we have
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (n - 1)(n + 1) \,=\, n^2 - 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for {" "}
          <i>
            every
          </i>
          {" "} real number {" "}
          <Math>
            $n$
          </Math>
          {" "} because of the
          formula
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          (a - b)(a + b) \,=\, a^2 - b^2
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for a difference of squares!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Vocabulary.
          </b>
          {" "}
          A pair of algebraic expressions of the form
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          a + b,\, a - b
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is called a {" "}
          <i>
            conjugate pair
          </i>
          . For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          n + 1,\, n - 1
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a conjugate pair, as is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \sqrt&#123;3&#125; + \sqrt&#123;2&#125;,\,\, \sqrt&#123;3&#125; - \sqrt&#123;2&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and so on. (Generally speaking, conjugate pairs
          are good things to multiply together.)
        </OuterP>
      </Section>
      <Pause />
      <Exercises>
        <Exercise number={1}>
          <ExerciseStatement id="_1_830">
            <OuterP>
              <b>
                Exercise 1.
              </b>
              {" "}
              True or false (and, if possible, explain):
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              sm_cols={2}
              sm_cutoff={520}
              center_on_overflow={true}>
              <Item>
                a. {" "}
                <Math>
                  $ 0.9^2 &lt; 0.9 $
                </Math>
              </Item>
              <Item>
                b. {" "}
                <Math>
                  $ \sqrt&#123;0.01&#125; = 0.1 $
                </Math>
              </Item>
              <Item>
                c. {" "}
                <Math>
                  $ \sqrt[2]&#123;\up&#123;0.8&#125;\sqrt[3]&#123;2&#125;&#125; = \sqrt[3]&#123;\up&#123;0.8&#125;\sqrt[2]&#123;2&#125;&#125; $
                </Math>
              </Item>
              <Item>
                d. {" "}
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over \up&#123;0.55&#125;2&#125; = \sqrt&#123;0.5&#125;$
                </Math>
              </Item>
              <Item>
                e. {" "}
                <Math>
                  $ &#123;1 \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;0.5&#125; $
                </Math>
              </Item>
              <Item>
                f. {" "}
                <Math>
                  $ 2^&#123;30&#125; &gt; 1000^3 $
                </Math>
              </Item>
              <Item>
                g. {" "}
                <Math>
                  $ &#123;1 \over 0.95&#125; &gt; 1.05 $
                </Math>
              </Item>
              <Item>
                h. {" "}
                <Math>
                  $ (-1)^&#123;101&#125; = -1 $
                </Math>
              </Item>
              <Item>
                i. {" "}
                <Math>
                  $ &#123;100 \over \up&#123;0.5&#125;99&#125; &lt; &#123;101 \over \up&#123;0.5&#125;100&#125; $
                </Math>
              </Item>
            </Grid>
          </ExerciseStatement>
          <Solution>
            <OuterP>
              Part by part:
            </OuterP>
            <Pause />
            <OuterP>
              a. (True) We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.9^2 = &#123;9 \over 10&#125;\cdot&#123;9 \over 10&#125; = &#123;81 \over 100&#125; = 0.81
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and {" "}
              <NoBreak>
                <Math>
                  $0.81 &lt; 0.9$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              b. (True) We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              0.1^2 = &#123;1 \over 10&#125; \cdot &#123;1 \over 10&#125; = &#123;1 \over 100&#125; = 0.01,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and {" "}
              <Math>
                $0.1$
              </Math>
              {" "} is nonnegative, so {" "}
              <NoBreak>
                <Math>
                  $\sqrt&#123;0.01&#125; = 0.1$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              c. (True) In fact,
              {" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "}
              and {" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "} are
              both equal to {" "}
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                .
              </NoBreak>
              {" "} To
              convince yourself, note that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\, (\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&amp;\,\, \up&#123;1.3&#125;
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\qquad\\
              =&amp;\,\, \up&#123;1.3&#125;
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125; \times
              \sqrt[2]&#123;\up&#123;0.75&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \\
              =&amp; \,\, \up&#123;1.3&#125; (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;) \times
              (\sqrt[3]&#123;\up&#123;0.64&#125;2&#125;\rt&#123;0.1&#125;)\\
              =&amp; \,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;
              $$
              <ImageLeft
                src="/images/17.svg"
                offset_y="0.8rem"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\,\, (\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 \\
              =&amp;\,\, \up&#123;1.3&#125;
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\\
              =&amp; \,\, \up&#123;1.3&#125;
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;) \times
              (\gbk\sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125; \times
              \sqrt[3]&#123;\up&#123;0.75&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.11&#125;)\\
              =&amp;\,\, \up&#123;1.3&#125;
              \sqrt[2]&#123;\up&#123;0.65&#125;2&#125; \times \sqrt[2]&#123;\up&#123;0.65&#125;2&#125;\\
              =&amp;\,\, \up&#123;1.4&#125; 2
              \end&#123;align&#125;
              $$
              <ImageLeft
                src="/images/18.svg"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              so {" "}
              <NoBreak>
                <Math>
                  $(\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 =
                  (\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;\rt&#123;0.1&#125;)^6 = 2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <OuterP class="indent-10">
              Technically, however, a number {" "}
              <Math>
                $x$
              </Math>
              {" "} such that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              x^6 = 2
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is not necessarily {" "}
              <NoBreak>
                <Math>
                  $\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
                </Math>
                ,
              </NoBreak>
              {" "}
              because {" "}
              <Math>
                $x = -\sqrt[6]&#123;\up&#123;0.6&#125;2&#125;$
              </Math>
              {" "} satisfies
              this equation as well!
            </OuterP>
            <OuterP class="indent-10">
              The last step, therefore, is to note that
              {" "}
              <Math>
                $\sqrt[2]&#123;\up&#123;0.76&#125;\sqrt[3]&#123;2&#125;&#125;$
              </Math>
              {" "} and
              {" "}
              <Math>
                $\sqrt[3]&#123;\up&#123;0.76&#125;\sqrt[2]&#123;2&#125;&#125;$
              </Math>
              {" "} are both
              {" "}
              <i>
                nonnegative
              </i>
              {" "} numbers (taken as obvious),
              and which implies that they are the {" "}
              <i>
                unique
                nonnegative
              </i>
              {" "} solution to {" "}
              <NoBreak>
                <Math>
                  $x^6 = 2$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              d. (True) In general,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; = \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for all {" "}
              <NoBreak>
                <Math>
                  $x \geq 0$
                </Math>
                ,
              </NoBreak>
              {" "} {" "}
              <Math>
                $y &gt; 0$
              </Math>
              {" "} (you need each
              root to be defined), so
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;\sqrt&#123;2&#125; \over 2&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;4&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;2 \over 4&#125; = \sqrt&#123;0.5&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              ...ta-daa!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 1.
              </i>
              {" "} One can also proceed by “direct
              verification”:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;\sqrt&#123;2&#125; \over 2&#125;\right)^&#123;\!2&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;\cdot&#123;\sqrt&#123;2&#125; \over 2&#125;
              = &#123;\sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125; \over 4&#125; = &#123;2 \over 4&#125; = 0.5.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (This, together with the fact that
              {" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125;$
              </Math>
              {" "} is not negative,
              establishes that {" "}
              <NoBreak>
                <Math>
                  $&#123;\sqrt&#123;2&#125; \over 2&#125; =
                  \sqrt&#123;0.5&#125;$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              e. (True) Using the
              {" "}
              <NoBreak>
                “
                <Math>
                  $&#123;\sqrt&#123;x&#125; \over \sqrt&#123;y&#125;&#125; =
                  \sqrt&#123;\up&#123;0.7&#125;x \over y&#125;$
                </Math>
                ”
              </NoBreak>
              {" "} identity:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;1&#125; \over \sqrt&#123;2&#125;&#125; = \sqrt&#123;\up&#123;0.8&#125;1 \over 2&#125; = \sqrt&#123;0.5&#125;.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Or by direct verification:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \left(&#123;1 \over \sqrt&#123;2&#125;&#125;\right)^&#123;\!2&#125; = &#123;1 \over \sqrt&#123;2&#125;&#125;\cdot&#123;1 \over \sqrt&#123;2&#125;&#125;
              = &#123;1 \over \sqrt&#123;2&#125;\cdot\sqrt&#123;2&#125;&#125; = &#123;1 \over 2&#125; = 0.5.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (And {" "}
              <Math>
                $1 \over \sqrt&#123;2&#125;$
              </Math>
              {" "} is nonnegative.)
              Or by reducing to part d:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over \sqrt&#123;2&#125; \cdot \sqrt&#123;2&#125;&#125; = &#123;\sqrt&#123;2&#125; \over 2&#125;.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (The point being: we already know that
              {" "}
              <Math>
                $&#123;\sqrt&#123;2&#125; \over 2&#125; = \sqrt&#123;0.5&#125;$
              </Math>
              {" "} by part d.)
            </OuterP>
            <Pause />
            <OuterP>
              f. (True) We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;30&#125; = 2^&#123;10&#125; \times 2^&#123;10&#125; \times 2^&#123;10&#125; = (2^&#123;10&#125;)^3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              (2^&#123;10&#125;)^3 = (1024)^3 &gt; 1000^3.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              <i>
                Note 2.
              </i>
              {" "}
              The first ten or so powers of {" "}
              <Math>
                $2$
              </Math>
              {" "} are worth
              knowing by heart (here's {" "}
              <i>
                eleven
              </i>
              {" "} powers, mind
              you):
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;array&#125;&#123;c|c&#125;
              \,\,\,\,n\,\,\,\, &amp; 2^n\dn&#123;0.3&#125; \\ \hline
              0 &amp; 1 \up&#123;1.1&#125;\\
              1 &amp; 2 \\
              2 &amp; 4 \\
              3 &amp; 8 \\
              4 &amp; 16 \\
              5 &amp; 32 \\
              6 &amp; 64 \\
              7 &amp; 128 \\
              8 &amp; 256 \\
              9 &amp; 512 \\
              10 &amp; 1024
              \end&#123;array&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              Among which, the fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;10&#125; \approx 10^3
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can be particularly useful to know! For
              example, if a 1-millimeter-thick napkin is
              folded {" "}
              <Math>
                $50$
              </Math>
              {" "} times over, doubling the width
              each time, one obtains something of
              thickness
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              2^&#123;50&#125;\fw\te&#123;mm&#125; = (2^&#123;10&#125;)^5\fw\te&#123;mm&#125; \approx (10^3)^5\fw\te&#123;mm&#125; = 10^&#123;15&#125;\fw\te&#123;mm&#125;.
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              As
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1\fw\te&#123;mm&#125; = 10^&#123;-6&#125;\fw\te&#123;km&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              this is
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              10^&#123;9&#125;\fw\te&#123;km&#125;
              $$
              <ImageRight
                src="/images/svg_ch1_ex_104.svg"
                offset_x="3rem"
                offset_y="-1rem"
                squiggle={false}
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              or {" "}
              <i>
                one billion
              </i>
              {" "} kilometers. By
              comparison, the distance from the Earth to
              the Sun is a mere {" "}
              <Math>
                $150$
              </Math>
              {" "} million kilometers.
              (The point being: that we could go from the
              relatively mysterious
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;2^&#123;50&#125;\fw\te&#123;mm&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to the relatively less mysterious
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\fw10^&#123;15&#125;\te&#123;mm&#125;\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by the approximation {" "}
              <NoBreak>
                <Math>
                  $2^&#123;10&#125; \approx 10^3$
                </Math>
                .)
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              g. (True) As an inequality can be multiplied
              on both sides by a positive number while
              preserving the inequality, one has
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp; &#123;1 \over 0.95&#125; &gt; 1.05\\
              \iff &amp; 1 &gt; 1.05 \cdot 0.95\up&#123;1.4&#125;\\
              \iff &amp; 1 &gt; (1 + 0.05)(1 - 0.05)\up&#123;1.4&#125;\\
              \iff &amp; 1 &gt; 1 - 0.05^2\up&#123;1.4&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (using the fact that {" "}
              <NoBreak>
                <Math>
                  $(1+x)(1-x) = 1-x^2$
                </Math>
                ,
              </NoBreak>
              {" "} of
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \te&#123;“&#125;\,(a+b)(a-b) = a^2-b^2\,\te&#123;”&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              fame), and since the {" "}
              <i>
                last
              </i>
              {" "} inequality is true,
              the {" "}
              <i>
                first
              </i>
              {" "} inequality is true! (Recall that
              {" "}
              <NoBreak>
                “
                <Math>
                  $\!\iff\!$
                </Math>
                ”
              </NoBreak>
              {" "} means “if and only if”.)
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 3.
              </i>
              {" "}
              More generally, even though
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1 - \epsilon&#125; &gt; 1 + \epsilon
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for any small {" "}
              <NoBreak>
                <Math>
                  $\epsilon &gt; 0$
                </Math>
                ,
              </NoBreak>
              {" "} the number
              {" "}
              <Math>
                $1 + \epsilon$
              </Math>
              {" "} remains a good approximation to
              {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over 1 - \epsilon&#125;$
                </Math>
                .
              </NoBreak>
              {" "} For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.99&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a good approximation to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.99&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.999&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is a good approximation to
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 0.999&#125;,
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              etc.
            </OuterP>
            <Pause />
            <OuterP>
              h. (True) Here are the first few powers of {" "}
              <Math>
                $-1$
              </Math>
              {" "}
              (note how each additional multiplication by {" "}
              <Math>
                $-1$
              </Math>
              {" "}
              simply changes the sign of the previous result):
            </OuterP>
            <Pause />
            <Grid
              cols={3}
              place_items="end">
              <Math>
                $ (-1)^1 = $
              </Math>
              <Math>
                $ (-1) = $
              </Math>
              <Math>
                $ -1 $
              </Math>
              <Math>
                $ (-1)^2 = $
              </Math>
              <Math>
                $ (-1)\times (-1) = $
              </Math>
              <Math>
                $ 1 $
              </Math>
              <Math>
                $ (-1)^3 = $
              </Math>
              <Math>
                $ (-1)\times(-1)\times (-1) = $
              </Math>
              <Math>
                $ -1 $
              </Math>
              <Math>
                $ (-1)^4 = $
              </Math>
              <Math>
                $ (-1)\times(-1)\times(-1)\times(-1) = $
              </Math>
              <Math>
                $ 1 $
              </Math>
              <Math>
                $ (-1)^5 = $
              </Math>
              <Math>
                $ \,\,\,(-1)\times(-1)\times(-1)\times(-1)\times(-1) = $
              </Math>
              <Math>
                $ -1 $
              </Math>
            </Grid>
            <Pause />
            <OuterP>
              (Etc.) Obviously, even powers of {" "}
              <Math>
                $(-1)$
              </Math>
              {" "} are
              equal to {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                ,
              </NoBreak>
              {" "} while odd powers of {" "}
              <Math>
                $(-1)$
              </Math>
              {" "} are
              equal to {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
              {" "} As {" "}
              <Math>
                $101$
              </Math>
              {" "} is odd, {" "}
              <Math>
                $(-1)^&#123;101&#125;$
              </Math>
              {" "}
              is {" "}
              <NoBreak>
                <Math>
                  $-1$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              i. (False) We have
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;100 \over 99&#125; = &#123;99 + 1 \over 99&#125; = 1 + &#123;1 \over 99&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;101 \over 100&#125; = &#123;100 + 1 \over 100&#125; = 1 + &#123;1 \over 100&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              so the smaller of the two fractions is {" "}
              <NoBreak>
                <Math>
                  $&#123;101
                  \over 100&#125;$
                </Math>
                ,
              </NoBreak>
              {" "} since {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over 100&#125; &lt; &#123;1 \over
                  99&#125;$
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
              The difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 99&#125; - &#123;1 \over 100&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is interesting in its own right, being
              connected to a famous infinite sum. To
              visualize this sum, picture a hare poised at
              {" "}
              <Math>
                $x = 0$
              </Math>
              {" "} on the number line. This hare runs
              forward by one unit and backwards by half a
              unit, stopping at the number
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              1 - &#123;1\over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              by virtue of this back-and-forth movement.
              The hare then proceeds to run forward by
              {" "}
              <i>
                half
              </i>
              {" "} a unit and back by a {" "}
              <i>
                third
              </i>
              {" "} of a unit,
              stopping at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right) \\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right) \\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 3&#125;\right)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              for another break. Keeping with this pattern,
              the hare then stops at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 4&#125;\right)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and then at
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              \hline
              = \,&amp;\, \left(1 - &#123;1 \over 5&#125;\right)
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and so on.
              Clearly, the successive positions at which
              the hare stops are approaching the number {" "}
              <Math>
                $1$
              </Math>
              {" "}
              from the left, pointing to the fact that the
              {" "}
              <i>
                infinite
              </i>
              {" "} sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              + \,&amp;\, \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is “equal” (in some sense) to {" "}
              <NoBreak>
                <Math>
                  $1$
                </Math>
                .
              </NoBreak>
              {" "} But how
              much, exactly, is the {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "} term
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              of the sum? (By the way, this {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                -th
              </NoBreak>
              {" "} term
              is the difference
              {" "}
              <Math>
                $&#123;1 \over 99&#125; - &#123;1 \over 100&#125;$
              </Math>
              {" "} for {" "}
              <NoBreak>
                <Math>
                  $n = 99$
                </Math>
                ,
              </NoBreak>
              {" "}
              which is how we came to be reminded of this
              infinite sum in the first place.) Well...
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; &amp;= &#123;1 \over n&#125;\cdot&#123;n+1 \over n+1&#125;\, - \,
              &#123;1 \over n+1&#125;\cdot&#123;n \over n&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;n+1 \over n(n+1)&#125; - &#123;n \over n(n+1)&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
              <ImageRight
                src="/images/svg_ch1_ex_24.svg"
                offset_y="-0.5em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              ...it's that much. (For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1&#125; - &#123;1 \over 2&#125; = &#123;1 \over 1 \cdot 2&#125; = &#123;1 \over 2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 2&#125; - &#123;1 \over 3&#125; = &#123;1 \over 2 \cdot 3&#125; = &#123;1 \over 6&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              and so on.) So the infinite sum
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &amp;\, \left(1 - &#123;1 \over 2&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 2&#125; - &#123;1 \over 3&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 3&#125; - &#123;1 \over 4&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 4&#125; - &#123;1 \over 5&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 5&#125; - &#123;1 \over 6&#125;\right)\\
              + \,&amp;\, \left(&#123;1 \over 6&#125; - &#123;1 \over 7&#125;\right)\\
              + \,&amp;\, \,\,\,\,\,\,\,\,\dots\up&#123;1.3&#125;\dn&#123;1&#125;\\ \hline
              = \,&amp;\, 1\up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              can also be written
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 1 \cdot 2&#125; + &#123;1 \over 2 \cdot 3&#125; + &#123;1 \over 3 \cdot 4&#125; + &#123;1 \over 4 \cdot 5&#125; + &#123;1 \over
              5 \cdot 6&#125; + \dots \,=\, 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              (or
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 2&#125; + &#123;1 \over 6&#125; + &#123;1 \over 12&#125; + &#123;1 \over 20&#125; + &#123;1 \over 30&#125; + \dots \,=\, 1
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              equivalently) which is not obvious at first
              glance, and kind of interesting!
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Note 5.
              </i>
              {" "} The fact that
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              means, in particular, that
              {" "}
              <Math>
                $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
              </Math>
              {" "} is roughly
              {" "}
              <Math>
                $&#123;1 \over n^2&#125;$
              </Math>
              {" "} for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} which is
              sometimes handy to know. For example,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10&#125; - &#123;1 \over 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is approximately {" "}
              <NoBreak>
                <Math>
                  $1/10^2 = 0.01$
                </Math>
                ,
              </NoBreak>
              {" "} while
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 100&#125; - &#123;1 \over 101&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is approximately {" "}
              <NoBreak>
                <Math>
                  $1/100^2 = 0.01^2 = 0.0001$
                </Math>
                ,
              </NoBreak>
              {" "}
              etc.
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
              In the solution to {" "}
              <InChapterLink
                href="/article/chapter1?id=_1_830"
                class="handle-in-chapter-link">
                Exercise 1
              </InChapterLink>
              , we 
              observed how the difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is {" "}
              <i>
                roughly
              </i>
              {" "} {" "}
              <Math>
                $1/n^2$
              </Math>
              {" "} for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                .
              </NoBreak>
              {" "} But how
              far off is this exactly? (I.e., what is the
              difference between {" "}
              <Math>
                $&#123;1 \over n&#125; - &#123;1 \over n+1&#125;$
              </Math>
              {" "}
              and {" "}
              <NoBreak>
                <Math>
                  $&#123;1 \over n^2&#125;$
                </Math>
                ?)
              </NoBreak>
              {" "} And {" "}
              <i>
                roughly
              </i>
              {" "} how much is
              this far-offness, for large {" "}
              <NoBreak>
                <Math>
                  $n$
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
              &#123;1 \over n&#125; - &#123;1 \over n+1&#125; = &#123;1 \over n(n+1)&#125;
              $$
              <ImageRight
                offset_x="5rem"
                offset_y="1.2rem"
                src="/images/svg_ch1_ex_25.svg"
                squiggle={false}
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              (as previously computed) is smaller than
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125;
              $$
              <ImageRight
                offset_x="11.5rem"
                offset_y="1.2rem"
                src="/images/svg_ch1_ex_26.svg"
                squiggle={false}
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              we will compute the difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              as opposed to the “other” difference
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n(n+1)&#125; - &#123;1 \over n^2&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to avoid a minus sign in the result.
              (Computing the second difference and having
              a minus sign does not constitute a mistake,
              however.) Having said this, the difference is:
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              \begin&#123;align&#125;
              &#123;1 \over n^2&#125; - &#123;1 \over n(n+1)&#125; &amp;= &#123;1 \over n^2&#125; \cdot &#123;n+1 \over n+1&#125; - &#123;1 \over n(n+1)&#125; \cdot
              &#123;n \over n&#125;\\
              &amp;= &#123;n+1 \over n^2(n+1)&#125; - &#123;n \over n^2(n+1)&#125;\up&#123;1.5&#125;\\
              &amp;= &#123;1 \over n^2(n+1)&#125;\up&#123;1.5&#125;
              \end&#123;align&#125;
              $$
              <ImageRight
                src="/images/svg_ch1_ex_27.svg"
                offset_y="-0.5em"
                compensate_offset_x_for_large_text_columns={true} />
            </MathBlock>
            <Pause />
            <OuterP>
              which, for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                ,
              </NoBreak>
              {" "} is roughly
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over n^3&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              since {" "}
              <Math>
                $n^2(n+1) \approx n^3$
              </Math>
              {" "} for large {" "}
              <NoBreak>
                <Math>
                  $n$
                </Math>
                .
              </NoBreak>
            </OuterP>
            <Pause />
            <OuterP>
              <i>
                Example 1.
              </i>
              {" "} Above, we estimated
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10&#125; - &#123;1 \over 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              to be roughly {" "}
              <NoBreak>
                <Math>
                  $1/100 = 0.01$
                </Math>
                ,
              </NoBreak>
              {" "} but {" "}
              <Math>
                $1/100$
              </Math>
              {" "} is
              bigger than the actual value of
              {" "}
              <Math>
                $&#123;1 \over 10\cdot 11&#125; = &#123;1 \over 110&#125;$
              </Math>
              {" "} by
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10^2\cdot 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              or close to {" "}
              <NoBreak>
                <Math>
                  $1/10^3 = 0.001$
                </Math>
                .
              </NoBreak>
              {" "}
              (So
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10&#125; - &#123;1 \over 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is about {" "}
              <NoBreak>
                <Math>
                  $0.01$
                </Math>
                ,
              </NoBreak>
              {" "} while making an error of about
              {" "}
              <NoBreak>
                <Math>
                  $0.001$
                </Math>
                .)
              </NoBreak>
              {" "} (In fact,
            </OuterP>
            <Pause />
            <MathBlock>
              $$
              &#123;1 \over 10^2\cdot 11&#125;
              $$
            </MathBlock>
            <Pause />
            <OuterP>
              is {" "}
              <i>
                less
              </i>
              {" "} than {" "}
              <NoBreak>
                <Math>
                  $1/10^3$
                </Math>
                ,
              </NoBreak>
              {" "} so the error is {" "}
              <i>
                less
              </i>
              {" "}
              than {" "}
              <NoBreak>
                <Math>
                  $0.001$
                </Math>
                .)
              </NoBreak>
            </OuterP>
          </Solution>
        </Exercise>
      </Exercises>
    </>}
  </>;
};