import Article  from "~/components/Article";
import ArticleTitle  from "~/components/ArticleTitle";
import { CentralDisplayItalic }  from "~/components/Delimiters";
import InChapterLink  from "~/components/InChapterLink";
import { MathBlock, Math }  from "~/components/Math";
import OuterP  from "~/components/OuterP";
import SectionsBreadcrumbs,  { BreadcrumbItem }  from "~/components/SectionsBreadcrumbs";
import { ImageRight }  from "~/components/SideImage";
import { Pause, NoBreak, Section }  from "~/components/Wrappers";
import useShowMore from "~/hooks/useShowMore";

export default function __Bootcamp1__() {
  return (
    <Article
      prevPage="/article/bootcamp2"
      nextPage="/"
      pageNecessaryMargin={160}
      maxElementWidth={800}>
      <SectionsBreadcrumbs>
        <BreadcrumbItem id="breadcrumb-0">
          <InChapterLink href="?id=section-1">
            notation
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-1">
          <InChapterLink href="?id=section-2">
            what it does
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-2">
          <InChapterLink href="?id=section-3">
            set equality
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-3">
          <InChapterLink href="?id=section-4">
            second notation for the empty set
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-4">
          <InChapterLink href="?id=section-5">
            sets within sets
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-5">
          <InChapterLink href="?id=section-6">
            set union and set intersection
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-6">
          <InChapterLink href="?id=section-7">
            sets encountered in calculus
          </InChapterLink>
        </BreadcrumbItem>
        <BreadcrumbItem id="breadcrumb-7">
          <InChapterLink href="?id=section-8">
            sets not encountered in calculus
          </InChapterLink>
        </BreadcrumbItem>
      </SectionsBreadcrumbs>
      <ArticleTitle banner="Bootcamp 1:">
        Sets
      </ArticleTitle>
      <Section id="section-1">
        <OuterP>
          <b>
            Notation.
          </b>
          {" "}
          Curly braces typically denote the beginning
          {" "}
          <NoBreak>
            “
            <Math>
              $\&#123;$
            </Math>
            ”
          </NoBreak>
          {" "} and ending {" "}
          <NoBreak>
            “
            <Math>
              $\&#125;$
            </Math>
            ”
          </NoBreak>
          {" "} of a collection of
          elements, otherwise known as a {" "}
          <i>
            set
          </i>
          .
          For example, this is a set containing the
          numbers {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $2$
          </Math>
          {" "} and {" "}
          <Math>
            $3$
          </Math>
          {" "} (and nothing else):
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large\&#123;1, 2, 3\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          Also,
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large\&#123;1\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          is a set containing just the number {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} while
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large\&#123;1, 3\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          is a set containing just the numbers {" "}
          <Math>
            $1$
          </Math>
          {" "}
          and {" "}
          <NoBreak>
            <Math>
              $3$
            </Math>
            ,
          </NoBreak>
          {" "} etc. Even,
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large\&#123;\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          is an {" "}
          <i>
            empty
          </i>
          {" "} set, a set with no elements!
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
            What it does.
          </b>
          {" "}
          The “API” (a computer science notion,
          roughly meaning
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the interface offered to the outside world
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as in, for example, the buttons and clock
          display and door handle of a microwave oven)
          of a set consists of just one functionality:
          a set can answer questions of the form
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          do you contain ... ?
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and nothing else.
          For example, you could ask a set
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          do you contain 3?
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to which {" "}
          <Math>
            $\&#123;1, 3\&#125;$
          </Math>
          {" "} would answer “yes”, but
          {" "}
          <Math>
            $\&#123; 1\&#125;$
          </Math>
          {" "} would answer “no”, or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          to which {" "}
          <Math>
            $\&#123;1\&#125;$
          </Math>
          {" "} and {" "}
          <Math>
            $\&#123;1, 3\&#125;$
          </Math>
          {" "} would
          both answer “no”, but {" "}
          <Math>
            $\&#123;1, 2, 3\&#125;$
          </Math>
          {" "} would
          answer “yes”.
        </OuterP>
        <OuterP class="indent-10">
          Notation-wise, the expression
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large x \in A$$
        </MathBlock>
        <Pause />
        <OuterP>
          means
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          {" "} contains {" "}
          <Math>
            $x$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $A$
          </Math>
          {" "} answers “yes” to the
          question “do you contain {" "}
          <NoBreak>
            <Math>
              $x$
            </Math>
            ?”
          </NoBreak>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          equivalently. [One can also say
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "} in {" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "} is in {" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          or
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          <Math>
            $x$
          </Math>
          {" "} is an element of {" "}
          <Math>
            $A$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          depending on one's mood and/or tastes.]
          As in all of mathematics, any such statement
          evaluates to either “true” or “false”.
          For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large 1 \in \&#123;1, 2\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          is true, because {" "}
          <Math>
            $1$
          </Math>
          {" "} {" "}
          <i>
            is
          </i>
          {" "} an element of the set
          {" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
            </Math>
            ,
          </NoBreak>
          {" "} whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large 3 \in \&#123;1, 2\&#125;$$
        </MathBlock>
        <Pause />
        <OuterP>
          is false, because {" "}
          <Math>
            $3$
          </Math>
          {" "} {" "}
          <i>
            is not
          </i>
          {" "}
          an element of the set {" "}
          <NoBreak>
            <Math>
              $\&#123;1, 2\&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-3">
        <OuterP>
          <b>
            Set Equality.
          </b>
          {" "}
          Two sets are deemed to be
          equal if and only if they
          answer the same to
          all “do you contain ...?” questions.
          For example, while
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;2, 1\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might look superficially different from
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          these sets are actually one and the same,
          because they both answer “yes” to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          do you contain 1?
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and answer “no” to all else. For that matter,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          might also look superficially different from
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\&#123;1, 2\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          but since both sets answer “yes” to
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          do you contain 1?
        </CentralDisplayItalic>
        <Pause />
        <CentralDisplayItalic>
          do you contain 2?
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and answer “no” to all else,
          they are by definition the same.
        </OuterP>
        <OuterP class="indent-10">
          (These examples demonstrate that human notation
          is redundant: there are several different ways of
          writing down the same set. They also demonstrate
          that sets do not keep track of the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          order
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          nor of the
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          multiplicity
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          of their elements. Such notions are simply not part
          of the “API” of a set.)
        </OuterP>
        <OuterP class="indent-10">
          Moreover, any empty set is equal to any other
          empty set. Equality follows because both sets
          answer all questions the same way: they both
          answer “no” to everything. So there is
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          one
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          and only one empty set. Therefore, mathematicians
          speak of
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          empty set—the one and only!
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-4">
        <OuterP>
          <b>
            Second notation for the empty set.
          </b>
          {" "}
          While the empty set can be written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          another available notation is
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \phi
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which is the Greek letter phi, read “fee”. (Or
          “fie”? Hum.) (Or you can just say “the empty set”,
          and keep it safe.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-5">
        <OuterP>
          <b>
            Sets within sets.
          </b>
          {" "}
          Sets can be nested much like Russian dolls. In
          fact, the result of doing this might even look
          like a little bit like a Russian doll (no?):
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#123;\&#125;\&#125;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          The above is “a set containing a set containing
          a set containing a set containing the empty set”.
          Eschewing complete adherence to the Russian doll
          aesthetic, we could also write
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\phi\&#125;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          for the same thing, given that {" "}
          <NoBreak>
            <Math>
              $\phi = \&#123;\&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Mind you, concerning this example, that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#125; \&#125; \ne \&#123;\&#125;
          $$
          <ImageRight
            src="/images/svg_bt1_bt_empty_set_cloud.svg"
            offset_x="3em"
            compensate_offset_x_for_large_text_columns={true} />
        </MathBlock>
        <Pause />
        <OuterP>
          because a box containing an empty box is not the
          same thing as an empty box! Specifically,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123; \&#123;\&#125; \&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          answers “yes” to the question “do you contain
          {" "}
          <NoBreak>
            <Math>
              $\&#123;\&#125;$
            </Math>
            ?”
          </NoBreak>
          {" "} (a.k.a., “do you contain {" "}
          <NoBreak>
            <Math>
              $\phi$
            </Math>
            ?”)
          </NoBreak>
          {" "} whereas
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          answers “no” to the same question. (Indeed, while
          the empty set {" "}
          <i>
            contains
          </i>
          {" "} nothing, it {" "}
          <i>
            is
          </i>
          {" "} something.)
          Similarly,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;\&#123;\&#123;\&#125;\&#125; \&#125; \ne \&#123;\&#123;\&#125;\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          etc, etc: adding a new outer layer changes the
          whole set each time.
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-6">
        <OuterP>
          <b>
            Set union and set intersection.
          </b>
          {" "}
          The so-called {" "}
          <i>
            union
          </i>
          {" "} of two sets {" "}
          <Math>
            $A$
          </Math>
          {" "} and {" "}
          <Math>
            $B$
          </Math>
          {" "} is
          written
        </OuterP>
        <Pause />
        <MathBlock>
          $$\Large A \cup B$$
        </MathBlock>
        <Pause />
        <OuterP>
          and consists of the set
          of all things that are either in {" "}
          <Math>
            $A$
          </Math>
          {" "} or in {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "} For
          example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cup \&#123;2, 5\&#125; = \&#123;1, 2, 5\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as {" "}
          <NoBreak>
            <Math>
              $1$
            </Math>
            ,
          </NoBreak>
          {" "} {" "}
          <Math>
            $2$
          </Math>
          {" "} and {" "}
          <Math>
            $5$
          </Math>
          {" "} are the only elements to find
          themselves either in {" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "} or in {" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
          {" "}
          The so-called {" "}
          <i>
            intersection
          </i>
          {" "} of two sets {" "}
          <Math>
            $A$
          </Math>
          {" "} and
          {" "}
          <Math>
            $B$
          </Math>
          {" "} is written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large A \cap B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and consists of the set of all things that are both
          in {" "}
          <Math>
            $A$
          </Math>
          {" "} and in {" "}
          <NoBreak>
            <Math>
              $B$
            </Math>
            .
          </NoBreak>
          {" "} For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \&#123;1, 2\&#125; \cap \&#123;2, 5\&#125; = \&#123;2\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          as {" "}
          <Math>
            $2$
          </Math>
          {" "} is the only element that is both in {" "}
          <Math>
            $\&#123;1, 2\&#125;$
          </Math>
          {" "}
          and in {" "}
          <NoBreak>
            <Math>
              $\&#123;2, 5\&#125;$
            </Math>
            .
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          if and only if
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in A
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
          \Large x \in B
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          because that's how we defined “union”. (Replace
          “or” by “and” to get a definition of intersection.)
          In fact, a logician would define the union of two
          sets by an abstruse expression of the type
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large x \in (A \cup B) \iff (x \in A) \vee (x \in B)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          read
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          an element {" "}
          <Math>
            $x$
          </Math>
          {" "} is in the thing I call {" "}
          <NoBreak>
            “
            <Math>
              $A \cup B$
            </Math>
            ”
          </NoBreak>
          {" "}
          if and only if {" "}
          <Math>
            $x$
          </Math>
          {" "} is in {" "}
          <Math>
            $A$
          </Math>
          {" "} or {" "}
          <Math>
            $x$
          </Math>
          {" "} is in {" "}
          <Math>
            $B$
          </Math>
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          as {" "}
          <NoBreak>
            “
            <Math>
              $\!\!\iff\!\!$
            </Math>
            ”
          </NoBreak>
          {" "} means “if and only if” and
          {" "}
          <NoBreak>
            “
            <Math>
              $\vee$
            </Math>
            ”
          </NoBreak>
          {" "} means “or”. (You can figure out the
          similar definition for the intersection of two sets
          if we tell you that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large \wedge
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          means “and”.)
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-7">
        <OuterP>
          <b>
            Sets encountered in calculus.
          </b>
          {" "}
          In calculus, you will see sets such as {" "}
          <i>
            the real
            numbers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which is an infinite set containing all “ordinary”
          decimal numbers, or such as {" "}
          <i>
            the integers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\zz
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which contains all “whole” numbers, including the
          negative ones. You might also encounter
          {" "}
          <i>
            the natural numbers
          </i>
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\nn
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          which contains only those integers that are greater
          than {" "}
          <Math>
            $0$
          </Math>
          {" "} (i.e., {" "}
          <NoBreak>
            <Math>
              $\nn = \&#123;1, 2, 3, \ldots \&#125;$
            </Math>
            ).
          </NoBreak>
        </OuterP>
        <OuterP class="indent-10">
          Secondly—and this pretty much wraps it up for those
          sets  that are commonly seen in calculus—you will
          encounter {" "}
          <i>
            intervals
          </i>
          . For example,
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a {" "}
          <i>
            closed interval
          </i>
          , consisting of all (real)
          numbers greater than or equal to {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "} and less than
          or equal to {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "} Or
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [a, b)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          is a {" "}
          <i>
            half-open
          </i>
          {" "} interval, consisting of all real
          numbers greater than or equal to {" "}
          <NoBreak>
            <Math>
              $a$
            </Math>
            ,
          </NoBreak>
          {" "} and less than
          {" "}
          <NoBreak>
            <Math>
              $b$
            </Math>
            .
          </NoBreak>
          {" "} Etc.
        </OuterP>
        <OuterP class="indent-10">
          Note that
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty) = \rr
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          since
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty, \infty)
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (which is an {" "}
          <i>
            open
          </i>
          {" "} interval, by the way) means
        </OuterP>
        <Pause />
        <CentralDisplayItalic>
          the set of real numbers with no bound below,
          and no bound above
        </CentralDisplayItalic>
        <Pause />
        <OuterP>
          which is all of {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            .
          </NoBreak>
        </OuterP>
      </Section>
      <Pause />
      <Section id="section-8">
        <OuterP>
          <b>
            Sets not encountered in calculus.
          </b>
          {" "}
          If you take a more advanced course, you might
          encounter the so-called {" "}
          <i>
            set of extended real numbers
          </i>
          ,
          written
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          and which consists of all the numbers in {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            ,
          </NoBreak>
          {" "} plus
          the formal symbols {" "}
          <NoBreak>
            “
            <Math>
              $-\infty$
            </Math>
            ”,
          </NoBreak>
          {" "} {" "}
          <NoBreak>
            “
            <Math>
              $\infty$
            </Math>
            ”
          </NoBreak>
          {" "} as well:
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large\overline&#123;\rr&#125; = \rr \cup \&#123;-\infty, \infty\&#125;
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          (I.e., ...well, you get it!)
        </OuterP>
        <OuterP class="indent-10">
          You can view {" "}
          <Math>
            $\overline&#123;\rr&#125;$
          </Math>
          {" "} as a kind “closed interval”
          version of {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            ,
          </NoBreak>
          {" "} that is, think of {" "}
          <Math>
            $\overline&#123;\rr&#125;$
          </Math>
          {" "}
          as being the closed interval
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large [-\infty, \infty]
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          with the two infinite endpoints {" "}
          <i>
            included
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          Does all this have any “real meaning”? Good question!
          The answer is: {" "}
          <i>
            not until you give it one
          </i>
          .
        </OuterP>
        <OuterP class="indent-10">
          E.g. (to give you a brief flavor, before we move on
          forever from the topic), the value of something like
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large 0.5+ \infty
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          must be {" "}
          <i>
            defined
          </i>
          . (It is defined to be {" "}
          <NoBreak>
            <Math>
              $\infty$
            </Math>
            ,
          </NoBreak>
          {" "} in
          case you're curious. In fact, one has {" "}
          <Math>
            $a + \infty = \infty$
          </Math>
          {" "}
          for any {" "}
          <NoBreak>
            <Math>
              $a \ne -\infty$
            </Math>
            .)
          </NoBreak>
          {" "} And some things remain
          explicitly {" "}
          <i>
            undefined
          </i>
          . For example, the expression
        </OuterP>
        <Pause />
        <MathBlock>
          $$
          \Large (-\infty) + \infty
          $$
        </MathBlock>
        <Pause />
        <OuterP>
          has an {" "}
          <i>
            undefined
          </i>
          {" "} value—the same way, say, that
          division by {" "}
          <Math>
            $0$
          </Math>
          {" "} is undefined in {" "}
          <NoBreak>
            <Math>
              $\rr$
            </Math>
            .
          </NoBreak>
          {" "}
          (Well, anyway, end of lesson.)
        </OuterP>
      </Section>
    </>}
  </>;
};