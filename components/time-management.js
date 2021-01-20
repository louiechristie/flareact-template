export default function TimeManagement() {
  return (
    <main className="page-container" style={{maxWidth: 640}}>
      <p>
        A always thought this bit of video from Tony Robbins was good at
        illustrating time management.
      </p>

      <figure className="hero">
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/10zNZD8tIKY?start=591&amp;end=621&amp;rel=0"
            frameBorder={0}
            allow="autoplay; encrypted-media"
            allowFullScreen></iframe>
        </div>

        <figcaption>
          Would you rather spend your time at a burger stand or in Fiji?
        </figcaption>
      </figure>

      <p>
        The main takeaway from Robbins: time management is actually all about
        using emotion, focus on some goal in the future that will make you
        happy.
      </p>

      <p>
        The rest of the video is delightfully cheesy 1980s, and Robbins at times
        looks like 80’s Christian Bale in American Psycho.
      </p>

      <div className="box-shadow">
        <p>
          <strong>Warning ⚠️</strong>: Tony Robbins does not have all the
          answers, a lot of self-help is bollocks.
        </p>
        <p>
          <sub>
            (A guy a knew spent a lot of money on{" "}
            <a href="https://www.netflix.com/title/80102204">
              Robbin's conferences
            </a>
            , and later topped himself.)
          </sub>
        </p>
      </div>

      <p>
        But I always thought Robbins’s time management stuff was good, and his
        investment advice.
      </p>

      <h2>Also on time management</h2>

      <p>
        I see the NHS are recommending the time matrix thing, as created by
        President Eisenhower and publicised in the book The Seven Habits of
        Highly Effective People - focus on the things that are
        <a href="https://www.nhs.uk/conditions/stress-anxiety-depression/time-management-tips/">
          not urgent but important
        </a>{" "}
        - so that's not self help bollocks.
      </p>

      <figure className="embed column">
        <div className="image-container">
          <a href="https://commons.wikimedia.org/wiki/File:MerrillCoveyMatrix.png#/media/File:MerrillCoveyMatrix.png">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/32/MerrillCoveyMatrix.png"
              alt="MerrillCoveyMatrix.png"
              style={{ width: "300px;" }}
            />
          </a>
        </div>
        <figcaption>
          - From
          <a href="https://commons.wikimedia.org/w/index.php?curid=2135450">
            Wikipedia
          </a>
        </figcaption>
      </figure>

      <div style={{margin: '2em'}}>
        <a
          className="link-box"
          href="https://www.nhs.uk/conditions/stress-anxiety-depression/feel-better-and-happy/">
          <aside className="box-shadow column" style={{margin: '0 auto'}}>
            <figure>
              6 NHS tips to help you be happier:
              <ul>
                <li>1. Manage your stress levels.</li>
                <li>2. Enjoy yourself.</li>
                <li>3. Boost your self-esteem.</li>
                <li>4. Have a healthy lifestyle.</li>
                <li>5. Talk and share.</li>
                <li>6. Build your resilience.</li>
              </ul>
              <figcaption>
                <a href="https://www.nhs.uk/conditions/stress-anxiety-depression/feel-better-and-happy/">
                  National Health Service UK
                  <br />
                  (accessed 2019-12-09.)
                </a>
              </figcaption>
            </figure>
          </aside>
        </a>
      </div>

      <h2>Time Management: And Now In 3D</h2>

      <p>
        My new take on time management - part art exhibit, part science project.
      </p>

      <figure className="embed">
        <div className="image-container">
          <img
            className="three-d"
            sizes="(max-width: 1920px) 100vw, 1920px"
            srcSet="
            ../../time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_320.jpg          320w,
            ../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1307.jpg 1307w,
            ../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1920.jpg 1920w
          "
            src="../../images/time-management-cube-by-louie-christie-2018_me7fst_c_scale,w_1920.jpg"
            alt="Hessian cube box with post-it notes on it. A post-it note says win-win at the corner of 3 axis: good for me (not bad for me), good for others (not bad for others), good in the future, good now. That's four dimensions?...
        🤔. I'm not sure how it breaks time and space."
            title="Hessian cube box with post-it notes on it. A post-it note says win-win at the corner of 3 axis: good for me (not bad for me), good for others (not bad for others), good in the future, good now. That's four dimensions?...
        🤔. I'm not sure how it breaks time and space."
          />
        </div>
        <figcaption className="box-shadow">
          <h3>
            Time Management Cube <br />- Louie Christie <br />
            (2018, Croydon<sup>*</sup>)
          </h3>

          <p>
            A Hessian cube box with post-it notes on it. A post-it note says
            win-win at the corner of 3 axis:
          </p>
          <ol>
            <li>good for me (not bad for me),</li>
            <li>good for others (not bad for others),</li>
            <li>good in the future (not bad in the future),</li>
            <li>good now (not bad now).</li>
          </ol>
          <p>
            That's four dimensions?... I'm not sure how it breaks time and
            space.
          </p>
        </figcaption>
      </figure>

      <p>
        Prior art influences also include: the Tal Ben-Shahar Positive
        Psychology course at Harvard University (which may or may not be freely
        available online.)
      </p>

      <h2>Footnotes</h2>

      <p>
        <sub>[*] Croydon - shithole and street art capital.</sub>
      </p>
    </main>
  );
}
