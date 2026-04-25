export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(160deg, #1a1215 0%, #2a1020 45%, #d81c5b 100%)',
        color: '#fff',
        fontFamily: 'var(--font-body)',
        textAlign: 'center',
        gap: '16px',
        padding: '40px',
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="#ffb5c7" aria-hidden="true">
        <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
      </svg>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 800,
          fontSize: 'clamp(28px, 7vw, 48px)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        Liz Helena
      </h1>
      <p
        style={{
          fontSize: 'clamp(11px, 2.5vw, 13px)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        Site institucional em breve
      </p>
      <a
        href="/bio"
        style={{
          marginTop: '24px',
          padding: '12px 28px',
          background: '#fff',
          color: '#332c2f',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Link na Bio →
      </a>
    </main>
  )
}
