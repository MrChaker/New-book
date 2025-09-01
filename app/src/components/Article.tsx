import { ParentProps } from "solid-js";
import useCheckedSavedScroll from "~/hooks/useCheckedSavedScroll";
import { ExercisesStoreProvider } from "~/store/ExercisesStoreProvider";
import PageTopBottomArrows from "./PageTopBottomArrows";
import Page from "./Page";
import PageUpDownArrows from "./PageUpDownArrows";

type ArticleProps = {
  id?: string;
  pageNecessaryMargin?: number;
  maxElementWidth?: number;
  nextPage?: string;
  prevPage?: string;
};

const Article = (props: ParentProps & ArticleProps) => {
  return (
    <Page
      pageNecessaryMargin={props.pageNecessaryMargin}
      maxElementWidth={props.maxElementWidth}
      nextPage={props.nextPage}
      prevPage={props.prevPage}>
      <ExercisesStoreProvider>
        <span id={props.id} class="id_span"></span>
        <ExercisesStoreConsumer>{props.children}</ExercisesStoreConsumer>
        <PageTopBottomArrows />
        <PageUpDownArrows />
      </ExercisesStoreProvider>
    </Page>
  );
};

const ExercisesStoreConsumer = (props: ParentProps) => {
  useCheckedSavedScroll();
  return <>{props.children}</>;
};

export default Article;
