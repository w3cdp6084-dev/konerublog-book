import styles from '../src/styles/about.module.scss';

  export default function About() {
    return (
      <main className={styles.mainWrap}>
        <div className={styles.contentWrap}>
          <div className={styles.logoWrap}>
            <div className={styles.logo}>
              <img src="/image/logo.svg" alt="about logo" />
            </div>
          </div>
          <div>
            <h2 className="font-bold">KONEKONE</h2>
            <h3>Yusuke Mori <br />
            Designer/Developer</h3>
          </div>
          <div>
            <p>KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
            ブランディングとコンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
            デザイン・プログラムでいろいろな実験を個人で行ってますので、こちらはそのnoteにもなっています。
            </p>
          </div>
          <div>
            <p>portfolio</p>
          </div>
        </div>
      </main>
    );
  }