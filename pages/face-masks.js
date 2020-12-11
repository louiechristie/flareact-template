import Head from "../components/head";
import Footer from "../components/footer";
import memes from "../memes";

export async function getEdgeProps() {
  const meme = { ...memes.find(({ url }) => url === "face-masks") };

  return {
    props: {
      meme,
    },
  };
}

export default function Index(props) {
  const {
    meme: {
      url,
      title,
      image,
      alt,
      caption = null,
      youtube = null,
      footnotes = null,
    },
  } = props;

  return (
    <div>
      <Head title={title} description={caption} />

      <Footer />
    </div>
  );
}
