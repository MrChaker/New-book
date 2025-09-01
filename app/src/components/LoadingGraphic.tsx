import { onMount, createSignal, onCleanup } from "solid-js";
import mainColumnWidth from "~/hooks/useMainColumnWidth";
import { useGlobalContext } from "~/store/StoreProvider";

const LoadingGraphic = () => {
  const { store, set_store } = useGlobalContext();
  const [ms, setMs] = createSignal(0);
  const [_interval, _setInterval] = createSignal<NodeJS.Timeout | null>(null);
  const startTime = performance.now();

  onMount(() => {
    let interval = setInterval(() => { setMs(performance.now() - startTime); }, 63);
    _setInterval(interval);
  });

  onCleanup(() => {
    let delta = performance.now() - startTime;
    set_store("last_page_load_ms", delta);
    set_store("total_page_load_ms", store.total_page_load_ms + delta);
    set_store("num_page_loads", store.num_page_loads + 1);
    clearInterval(_interval()!);
  });

  return (
    <>
      <div class="fixed top-0 left-0 w-full h-full bg-white z-50"></div>
      <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <img
          src="/images/loading_screen.png"
          style={`min-width:${mainColumnWidth() * 0.7}px;`}
        />
        <div class="mt-4 text-5xl font-baskerville text-center">
          <div>{(ms() / 1000).toFixed(2)}s&thinsp;</div>
        </div>
      </div>
    </>
  );
};

export default LoadingGraphic;
