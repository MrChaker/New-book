import { Meta, MetaProvider } from "@solidjs/meta";
import { StoreProvider } from "./store/StoreProvider";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import HeaderButtons from "./components/HeaderButtons";
import HamburgerPanel from "./components/HamburgerPanel";
import Container from "~/components/Container";
import { createEffect, Suspense } from "solid-js";
import "./app.css";

export default function App() {
  createEffect(() => {
    if (!localStorage.getItem("route")) return;
    if (location.pathname !== localStorage.getItem("route")) {
      window.location.replace(localStorage.getItem("route")!);
    }
  });
  return (
    <MetaProvider>
      <Meta property="og:image" content="images/lbp_preview.png"></Meta>
      <StoreProvider>
        <Router
          root={(props) => (
            <>
              <HeaderButtons />
              <HamburgerPanel />
              <Container>
                <Suspense>{props.children}</Suspense>
              </Container>
            </>
          )}>
          <FileRoutes />
        </Router>
      </StoreProvider>
    </MetaProvider>
  );
}
