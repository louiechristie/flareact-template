import "../normalize.css";
import "../stylesheet.css";
import Link from "flareact/link";

import Head from "../components/head";
import Footer from "../components/footer";

import memes from "../memes";

export async function getEdgeProps() {
  return {
    props: {
      memes,
    },
  };
}

export default function Index(props) {
  const { memes } = props;

  return (
    <>
      <Head title="Memes" />

      <div class="memes-container">
        <blockquote
          class="meme-definition"
          cite="https://en.wiktionary.org/wiki/meme">
          <p>
            <strong>Meme</strong> ... (Internet, slang) Something, usually
            humorous, which is copied and circulated online with slight
            adaptations, including quizzes, basic pictures, video templates etc.
          </p>
          <cite>- Wiktionary, 2020</cite>
        </blockquote>

        <ul class="memes-list">
          {memes.map((item) => (
            <Link href={`/${item.url}`}>
              <a>
                <li key={item.url} class="box-shadow">
                  <img src={item.image} alt={item.alt} />
                  <h2>{item.title}</h2>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
}
