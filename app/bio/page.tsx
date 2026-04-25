import ContactForm from './ContactForm'
import styles from './bio.module.css'

const PHRASE = 'Prazer, eu sou a Liz   ✦   '
const marqueeText = PHRASE.repeat(22)

export const metadata = {
  title: 'Liz Helena — Link na Bio',
  description: 'Psicologia · Análise do Comportamento · @LizHelena.psi',
}

export default function BioPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>

        {/* ── Header ── */}
        <header className={styles.header}>
          <div className={styles.photoWrap}>
            <div className={styles.photo}>
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-hidden="true">
                <circle cx="31" cy="23" r="14" fill="rgba(255,255,255,0.22)" />
                <ellipse cx="31" cy="54" rx="23" ry="15" fill="rgba(255,255,255,0.16)" />
              </svg>
            </div>
            <div className={styles.photoBadge} aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className={styles.name}>Liz Helena</h1>
            <p className={styles.handle}>
              @LizHelena<em className={styles.handleEm}>.psi</em>
            </p>
            <p className={styles.profession}>Psicologia · Análise do Comportamento</p>
          </div>
        </header>

        {/* ── Band Divider 1 — single ── */}
        <div className={`${styles.bandDivider} ${styles.single}`} aria-hidden="true">
          <div className={`${styles.bandStrip} ${styles.stripA}`}>
            <span className={`${styles.bandText} ${styles.forward}`}>{marqueeText}</span>
          </div>
        </div>

        {/* ── Social Links ── */}
        <nav className={styles.socialLinks} aria-label="Redes sociais">
          <a className={styles.socialLink} href="https://instagram.com/lizhelenapsi" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <div className={styles.socialInfo}>
              <div className={styles.socialLabel}>Instagram</div>
              <div className={styles.socialHandle}>@LizHelena.psi</div>
            </div>
            <span className={styles.socialArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a className={styles.socialLink} href="https://tiktok.com/@lizhelenapsi" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.66a8.2 8.2 0 004.79 1.52V6.73a4.85 4.85 0 01-1.02-.04z" />
              </svg>
            </span>
            <div className={styles.socialInfo}>
              <div className={styles.socialLabel}>TikTok</div>
              <div className={styles.socialHandle}>@LizHelena.psi</div>
            </div>
            <span className={styles.socialArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>

          <a className={styles.socialLink} href="https://linkedin.com/in/lizhelenapsi" target="_blank" rel="noopener noreferrer">
            <span className={styles.socialIcon} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <div className={styles.socialInfo}>
              <div className={styles.socialLabel}>LinkedIn</div>
              <div className={styles.socialHandle}>Liz Helena</div>
            </div>
            <span className={styles.socialArrow} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </nav>

        {/* ── Band Divider 2 — double ── */}
        <div className={`${styles.bandDivider} ${styles.double}`} aria-hidden="true">
          <div className={`${styles.bandStrip} ${styles.stripA}`}>
            <span className={`${styles.bandText} ${styles.forward}`}>{marqueeText}</span>
          </div>
          <div className={`${styles.bandStrip} ${styles.stripB}`}>
            <span className={`${styles.bandText} ${styles.backward}`}>{marqueeText}</span>
          </div>
        </div>

        {/* ── Parcerias Label ── */}
        <div className={styles.sectionLabel}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
          <span>parcerias</span>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
        </div>

        {/* ── Contact Form ── */}
        <ContactForm />

        {/* ── Footer ── */}
        <footer className={styles.footer}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
          <span>Liz Helena · 2026</span>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
          </svg>
        </footer>

      </div>
    </div>
  )
}
