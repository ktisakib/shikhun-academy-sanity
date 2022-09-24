import { NextStudio } from "next-sanity/studio";
import Head from "next/head";
import { useEffect, useState } from "react";

import _config from "../sanity.config";

export default function IndexPage() {
  const [config, setConfig] = useState(_config);

  useEffect(
    () =>
      void import(
        /* webpackIgnore: true */ "https://themer.sanity.build/api/hues?preset=tw-cyan"
      ).then(({ theme }) => setConfig((config) => ({ ...config, theme }))),
    [],
  );

  return (
    <>
      <Head>
        <title>Shikhun Academy</title>
      </Head>
      <NextStudio
        config={config}
        unstable__head={
          <link
            // Speed up the theme loading significantly
            rel='modulepreload'
            href={"https://themer.sanity.build/api/hues?preset=tw-cyan"}
          />
        }
      />
    </>
  );
}
