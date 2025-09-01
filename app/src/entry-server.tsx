// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {import.meta.env.VITE_ENV === "LOCAL" ? (
            <>
              <link rel="icon" href="/favicon-local.ico" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon-local.png"
              />
              <link
                rel="apple-touch-startup-image"
                href="/apple-touch-icon-local.png"
              />
            </>
          ) : import.meta.env.VITE_ENV === "DEV" ? (
            <>
              <link rel="icon" href="/favicon-dev.ico" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon-dev.png"
              />
              <link
                rel="apple-touch-startup-image"
                href="/apple-touch-icon-dev.png"
              />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab-dev.svg"
                color="#5bbad5"
              />
              <link
                rel="apple-touch-icon-precomposed"
                href="/apple-touch-icon-dev.png"
              />
            </>
          ) : (
            <>
              <link rel="icon" href="/favicon.ico" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="apple-touch-startup-image"
                href="/apple-touch-icon.png"
              />
              <link
                rel="mask-icon"
                href="/safari-pinned-tab.svg"
                color="#5bbad5"
              />
              <link
                rel="apple-touch-icon-precomposed"
                href="/apple-touch-icon.png"
              />
            </>
          )}

          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1"
          />
          <meta name="format-detection" content="telephone=no" />
          <script src="/extras.js" defer={true} />
          <script src="/mathjax_setup.js" defer={true} />
          <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
            defer={true}
          />

          <title>Little Bo Peep</title>

          {assets}
        </head>
        {/* needed width:0 to avoid an overlapping 
        div that was fucking with pointer events: */}
        <body style="width:0;">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
