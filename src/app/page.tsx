import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <video autoPlay loop muted className={styles.backgroundVideo}>
        <source src="/2818546-hd_1280_720_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.content}>
      <p>Hi there 👋 I&apos;m Jordan</p>
      <p>I&apos;m a frontend developer from Melbourne, Australia</p>
      <p style={{ marginTop: '1rem', textAlign: 'center' }}>This website is 🚧 under construction 🚧</p>
      </div>
    </div>
  );
}
