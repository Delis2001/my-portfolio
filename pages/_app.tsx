import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeHookProvider } from "../src/theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeHookProvider>
      <NextSeo
        title="Flutter Developer Portfolio"
        description="Portfolio Website showcasing Flutter development projects and expertise"
        canonical="https://yourportfolio.com"
        openGraph={{
          title: "Flutter Developer",
          description:
            "I'm a Flutter Developer specializing in building scalable, high-performance mobile and web applications.",
          url: "https://yourportfolio.com",
          type: "profile",
          profile: {
            firstName: "Your",
            lastName: "Name",
            username: "yourusername",
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
