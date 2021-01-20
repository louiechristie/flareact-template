import Head from "flareact/head";

export default function Index(props) {
  const {
    title = "memes | louiechristie.com",
    description = "... (Internet, slang) Something, usually humorous, which is copied and circulated online with slight adaptations, including quizzes, basic pictures, video templates etc.",
    image = "/images/lc-icon.svg",
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

      <header>
      <nav>
      <div id="home-button">
        <a href="/"><img src="/images/lc-icon.svg" width="40" height="40"
            alt="louiechristie.com icon, L C initials handwritten" role="img" />
        </a>
      </div>
      <div id="hamnav">
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" />
        <div id="hamitems">
          <a href="/">
            home</a> <a href="/adventure/">adventure</a>
          <a href="/blog/">blog</a>
          <a href="https://comedy.louiechristie.com">comedy</a>
          <a href="/#experiments">experiments</a>
          <a href="/#tech-talks">talks</a>
          <a href="/intro-to-web-dev-course/">tutorials</a>
          <a href="/memes/" className="active">memes</a>
          <a href="/#profiles">profiles</a>
          <a href="/#about">about</a>
          <a href="/blog/contact/">contact</a>
        </div>
      </div>

    </nav>
      </header>

      <h1>{title}</h1>
    </div>
  );
}
