import Head from "flareact/head";

export default function Index(props) {
  const {
    title = "memes | louiechristie.com",
    description = "... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc.",
    image = "lc-icon.svg",
  } = props;

  return (
    <div>
      <Head>
        <title>{title} | memes | louiechristie.com</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="twitter:card" content="summary" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:700|Roboto:400,900&display=swap"
          rel="stylesheet"
          rel="preload"
        />
        <meta name="monetization" content="$ilp.gatehub.net/484331722" />
      </Head>
      <h1>{title}</h1>
    </div>
  );
}
