export async function getEdgeProps() {
  const response = await fetch('https://raw.githubusercontent.com/louiechristie/louiechristie.github.io/master/memes/items.json');

  const memes = await response.json();

  return {
    props: {
      memes,
    },
  };
}

export default function Index(props) {
  const {memes} = props;

  return (
    <>
      <h1>Memes</h1>

      <div class="memes-container">
        <blockquote class="meme-definition" cite="https://en.wiktionary.org/wiki/meme">
          <p>
            <strong>Meme</strong> ... (Internet, slang) Something, usually
            humorous, which is copied and circulated online with slight
            adaptations, including quizzes, basic pictures, video templates etc.
          </p>
          <cite>- Wiktionary, 2020</cite>
        </blockquote>

        <ul class="memes-list">
        {memes.map(item => (
          <a href={`./${item.url}`}>
            <li key={item.url} class="box-shadow">
              <img src={item.image} alt={item.alt} />
              <h2>{item.title}</h2>
            </li>
          </a>
        ))}
      </ul>

      </div>
  </>
  );
}
