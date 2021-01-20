import Link from "flareact/link";
import Head from "../components/head";
import Footer from "../components/footer";

import memes, { Meme } from "../memes";

export const getEdgeProps = async () => {
  const items: Meme[] = memes;
  return {
    props: {
      memes,
    },
  };
};

interface Props {
  memes: Meme[];
}

export default function Index(props: Props) {
  const { memes } = props;

  return (
    <>
      <Head title="Memes" />

      <div className="memes-container">
        <blockquote
          className="meme-definition"
          cite="https://en.wiktionary.org/wiki/meme">
          <p>
            <strong>Meme</strong> ... (Internet, slang) Something, usually
            humorous, which is copied and circulated online with slight
            adaptations, including quizzes, basic pictures, video templates etc.
          </p>
          <cite>- Wiktionary, 2020</cite>
        </blockquote>

        <ul className="memes-list">
          {memes.map((item) => (
            <Link key={item.url} href={`/${item.url}`}>
              <a>
                <li className="box-shadow">
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
