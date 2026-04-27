import Image from 'next/image'
import styles from './bio.module.css'

export default function BioPage() {
  return (
    <div className={styles.page}>

      {/* ── Header + Links (crimson block compartilha a grid) ── */}
      <div className={styles.crimsonBlock}>
        <header className={styles.header}>
          <Image className={`${styles.starImg} ${styles.starTl}`} src="/estrela-1.png" alt="" width={60} height={60} />
          <Image className={`${styles.starImg} ${styles.starBr}`} src="/estrela-2.png" alt="" width={52} height={52} />
          <div className={styles.headerInner}>
            <div className={styles.headerEyebrow}>
              @LizHelena<em>.psi</em>
            </div>
            <h1 className={styles.headerName}>Liz Helena</h1>
            <p className={styles.headerSub}>Estudante de Psicologia</p>
          </div>
        </header>

        <section className={styles.linksSection}>
          <div className={`${styles.sectionEyebrow} ${styles.eyebrowLight}`}>links principais</div>
          <a href="https://lizhelena.com.br" target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.btnLight}`}>Acessar meu site</a>
          <a href="https://tellonym.me/liz.helena/anythingu" target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.btnLight}`}>Caixinhas — me manda sua pergunta</a>
        </section>
      </div>

      {/* ── Lista de Espera ── */}
      <div className={styles.waitlistBand}>
        <div className={styles.marqueeWrap}>
          <div className={styles.marqueeTrack}>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className={styles.marqueeItem}>
                Lista de Espera <span className={styles.marqueeDot}>✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className={styles.waitlistBody}>
          <div className={styles.waitlistIconWrap}>
            <svg viewBox="0 0 24 24" width="52" height="52" stroke="white" fill="none" strokeWidth="1.2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </div>
          <div className={styles.waitlistContent}>
            <div className={styles.waitlistTitle}>Entrar na lista de espera</div>
            <p className={styles.waitlistDesc}>Seja a primeira a saber quando tiver novidade — conteúdo exclusivo, mentorias e muito mais.</p>
            <a href="https://typebot.co/my-typebot-pyy8ao8" target="_blank" rel="noopener noreferrer" className={styles.waitlistCta}>
              Quero entrar ✦
            </a>
          </div>
        </div>
      </div>

      {/* ── Redes Sociais ── */}
      <section className={styles.sociaisSection}>
        <div className={`${styles.sectionEyebrow} ${styles.eyebrowLight}`}>me segue nas redes</div>

        <a href="https://www.instagram.com/lizhelena.psi/" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram
        </a>

        <span className={`${styles.socialBtn} ${styles.socialBtnDisabled}`} aria-disabled="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.78 1.53V6.84a4.85 4.85 0 01-1.01-.15z" />
          </svg>
          TikTok
        </span>

      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <a href="https://madebyfelipe.com.br" target="_blank" rel="noopener noreferrer">
          <Image src="/logo.png" alt="Made by Felipe" height={22} width={86} style={{ objectFit: 'contain', opacity: 0.25 }} />
        </a>
      </footer>

    </div>
  )
}
