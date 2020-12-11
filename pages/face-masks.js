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
      <Head title={title} description={caption} image={image} />

      <div class="meme-container">
        {!youtube && (
          <figure>
            <div class="image-container">
              <img src={image} alt={alt} />
            </div>
            {caption && (
              <figcaption>
                <blockquote>{caption}</blockquote>
              </figcaption>
            )}
          </figure>
        )}

        {youtube && (
          <center>
            <figure>
              <div class="iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtube.v}?start=${youtube.start}&amp;end=${youtube.end}&amp;rel=0`}
                  frameborder="0"
                  allowfullscreen></iframe>
              </div>

              {caption && (
                <figcaption>
                  <blockquote>{caption}</blockquote>
                </figcaption>
              )}
            </figure>
          </center>
        )}
      </div>

      {footnotes &&
        footnotes.map((footnote, index) => {
          const number = index + 1;
          return (
            <section class="footnotes-container">
              <h5>Footnotes</h5>
              <ol class="footnotes">
                <li class="footnote">
                  {footnote.text || noll}&nbsp;
                  {footnote.link && (
                    <a class="ref" href={footnote.link || null}>
                      [{number}]
                    </a>
                  )}
                </li>
              </ol>
            </section>
          );
        })}

      <Footer />
    </div>
  );
}
