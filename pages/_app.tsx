import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeHookProvider } from "../src/theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider>
      <NextSeo
        title="Nwoye Fidelis Chidera - Flutter Developer Portfolio"
        description="Portfolio Website for Nwoye Fidelis Chidera - Flutter Development Projects"
        canonical="https://fidelischidera.com"
        openGraph={{
          title: "Nwoye Fidelis Chidera",
          description:
            "I'm Nwoye Fidelis Chidera, a Flutter Developer specializing in building scalable, high-performance mobile and web applications.",
          url: "https://fidelischidera.com",
          type: "profile",
          profile: {
            firstName: "Nwoye",
            lastName: "Fidelis Chidera",
            username: "nwoyefidelis",
            gender: "male",
          },
          images: [
            {
              url: "/assets/images/man.png",
              width: 850,
              height: 650,
              alt: "Profile Photo",
            },
          ],
        }}
      />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <Component {...pageProps} />
    </ThemeHookProvider>
  );
}
