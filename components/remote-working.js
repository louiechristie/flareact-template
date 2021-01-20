export default function RemoteWorking() {
  return (
    <div>
      <div className="iframe-container">
        <iframe
          src="//fast.wistia.net/embed/iframe/n54m1lmixt?playerColor=bb6b29&amp;version=v1&amp;videoHeight=315&amp;videoWidth=560&amp;volumeControl=true"
          allowFullScreen></iframe>
      </div>
      <cite>
        Sponsored by "REMOTE"{" "}
        <a href="https://basecamp.com/books/remote?wvideo=n54m1lmixt">
          more info
        </a>{" "}
        <a href="https://amzn.to/2XFcgb9">[Ad] Buy it</a>
      </cite>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Coronavirus discount! I just got REMOTE WORK audiobook for free:
            <a href="https://t.co/F35zZ5P1RT">https://t.co/F35zZ5P1RT</a>
            <a href="https://t.co/ZvZ7CH4Xs6">https://t.co/ZvZ7CH4Xs6</a>
          </p>
          &mdash; Louie Christie (@louiechristie)
          <a href="https://twitter.com/louiechristie/status/1238045934069653504?ref_src=twsrc%5Etfw">
            March 12, 2020
          </a>
        </blockquote>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"></script>
      </div>

      <div className="cta">
        <p>
          <a href="https://amzn.to/2XFcgb9">
            [Ad] Buy REMOTE book on Amazon.co.uk
          </a>
        </p>
        <p>
          <iframe
            className="amazonAdContainer"
            marginWidth={0}
            marginHeight={0}
            scrolling="no"
            frameBorder={0}
            src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=GB&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=louiechristie-21&language=en_GB&marketplace=amazon&region=GB&placement=0091954673&asins=0091954673&linkId=44f2c06c0b601a6db5b71ca04cbb8377&show_border=true&link_opens_in_new_window=false"></iframe>
        </p>
      </div>
    </div>
  );
}
