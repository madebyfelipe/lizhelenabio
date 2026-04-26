import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.site}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <Image src="/logo-white.png" alt="Liz Helena" height={24} width={90} style={{ objectFit: 'contain' }} />
          </a>
          <div className={styles.navLinks}>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#areas" className={styles.navLink}>Áreas</a>
            <a href="#conteudo" className={styles.navLink}>Conteúdo</a>
            <a href="#trajetoria" className={styles.navLink}>Trajetória</a>
            <a href="#contato" className={styles.navCta}>Contato</a>
          </div>
          <div className={styles.navMobileLinks}>
            <a href="#contato" className={styles.navCta}>Contato</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Psicologia · TCC · Divulgação Científica</p>
            <h1 className={styles.heroHeadline}>
              Psicologia baseada<br />
              em evidências para<br />
              quem quer entender<br />
              o próprio comportamento.
            </h1>
            <p className={styles.heroSub}>
              Liz Helena estuda Psicologia com foco em Terapia Cognitivo-Comportamental e produz
              conteúdo sobre saúde mental, autoconhecimento e comportamento para mulheres,
              adolescentes e jovens adultos.
            </p>
            <div className={styles.heroCtas}>
              <a
                href="https://www.instagram.com/lizhelena.psi/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Acompanhar o trabalho
              </a>
              <a href="#sobre" className={styles.ctaSecondary}>
                Conhecer a trajetória
              </a>
            </div>
          </div>
          <div className={styles.heroDecoStar} aria-hidden="true">
            <Image src="/estrela-1.png" alt="" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE 1 ── */}
      <div className={styles.marqueeBand} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              Psicologia Baseada em Evidências <span className={styles.marqueeDot}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SOBRE ── */}
      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreInner}>
          <div>
            <p className={styles.eyebrow}>Sobre</p>
            <h2 className={styles.sectionTitle}>
              Estudo, pesquisa e divulgação científica em psicologia.
            </h2>
          </div>
          <div>
            <p className={styles.bodyText}>
              Liz Helena é estudante de Psicologia e dedica sua formação ao estudo da Terapia
              Cognitivo-Comportamental, abordagem reconhecida internacionalmente pela base
              científica e pela eficácia comprovada no tratamento de questões como ansiedade,
              autoestima e regulação emocional.
            </p>
            <p className={styles.bodyText}>
              Seu trabalho atual reúne produção de conteúdo, pesquisa acadêmica e estudo contínuo
              das principais referências da área. O objetivo é traduzir psicologia séria para um
              público que busca entender o próprio funcionamento sem cair em simplificações ou
              autoajuda rasa.
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE 2 ── */}
      <div className={styles.marqueeBand2} aria-hidden="true">
        <div className={styles.marqueeTrack2}>
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={styles.marqueeItem2}>
              TCC · Saúde Mental · Comportamento <span className={styles.marqueeDot2}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ÁREAS DE ESTUDO ── */}
      <section className={styles.areas} id="areas">
        <div className={styles.areasInner}>
          <div className={styles.areasHeader}>
            <p className={styles.eyebrowDark}>Áreas de Estudo e Interesse</p>
            <h2 className={styles.sectionTitleDark}>
              Os temas que orientam minha formação.
            </h2>
          </div>
          <div className={styles.areasGrid}>
            {[
              {
                title: 'Terapia Cognitivo-Comportamental (TCC)',
                desc: 'Fundamentos teóricos, técnicas e aplicações clínicas.',
              },
              {
                title: 'Psicologia da adolescência e juventude',
                desc: 'Desenvolvimento emocional, identidade e relações.',
              },
              {
                title: 'Saúde mental da mulher',
                desc: 'Autoestima, ansiedade, sobrecarga e padrões de pensamento.',
              },
              {
                title: 'Comportamento e cognição',
                desc: 'Como pensamentos moldam emoções e ações no dia a dia.',
              },
              {
                title: 'Divulgação científica em psicologia',
                desc: 'Tradução de conteúdo acadêmico para linguagem acessível.',
              },
            ].map((area, i) => (
              <div
                key={i}
                className={`${styles.areaCard} ${i === 4 ? styles.areaCardAccent : ''}`}
              >
                <span className={styles.areaArrow} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
                <h3 className={styles.areaTitle}>{area.title}</h3>
                <p className={styles.areaDesc}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO E PRODUÇÃO ── */}
      <section className={styles.conteudo} id="conteudo">
        <div className={styles.conteudoInner}>
          <p className={styles.eyebrow}>Conteúdo e Produção</p>
          <h2 className={styles.sectionTitle}>
            Onde acompanhar meu trabalho.
          </h2>
          <p className={styles.conteudoText}>
            Compartilho estudos, leituras e reflexões sobre psicologia comportamental nas redes
            sociais. O foco é levar conteúdo claro, embasado e útil para quem quer entender
            melhor a própria mente.
          </p>
          <a
            href="https://www.instagram.com/lizhelena.psi/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLight}
          >
            Seguir no Instagram
          </a>
        </div>
      </section>

      {/* ── TRAJETÓRIA ACADÊMICA ── */}
      <section className={styles.trajetoria} id="trajetoria">
        <div className={styles.trajetoriaInner}>
          <div>
            <p className={styles.eyebrowDark}>Trajetória Acadêmica</p>
            <h2 className={styles.sectionTitleDark}>
              Formação em construção, com método.
            </h2>
          </div>
          <div>
            <p className={styles.bodyTextDark}>
              Atualmente cursando Psicologia, com participação em grupos de estudo, leitura
              sistemática de literatura científica e foco em fundamentos da Terapia
              Cognitivo-Comportamental. Esta página reúne minha trajetória de estudo e os
              caminhos que pretendo desenvolver ao longo da formação.
            </p>
            <div className={styles.trajetoriaPlaceholder}>
              <p className={styles.placeholderText}>
                Em breve: semestre atual · instituição · eventos acadêmicos ·
                cursos complementares · grupos de pesquisa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LISTA DE ESPERA ── */}
      <section className={styles.waitlist}>
        <div className={styles.waitlistInner}>
          <h2 className={styles.waitlistTitle}>
            Entre na lista de espera.
          </h2>
          <p className={styles.waitlistDesc}>
            Seja a primeira a saber quando tiver novidade — conteúdo exclusivo, mentorias e muito mais.
          </p>
          <a
            href="https://typebot.co/my-typebot-pyy8ao8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaDark}
          >
            Quero entrar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── AVISO ÉTICO ── */}
      <section className={styles.aviso}>
        <div className={styles.avisoInner}>
          <div className={styles.avisoIcon} aria-hidden="true">✦</div>
          <h2 className={styles.avisoTitle}>Sobre atendimento clínico.</h2>
          <p className={styles.avisoText}>
            Liz Helena ainda está em formação e não realiza atendimento psicológico. Este site tem
            caráter informativo e educacional. Caso você precise de acompanhamento profissional,
            procure um psicólogo registrado no CRP da sua região.
          </p>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section className={styles.contato} id="contato">
        <div className={styles.contatoInner}>
          <div>
            <p className={styles.eyebrow}>Contato</p>
            <h2 className={styles.sectionTitle}>Vamos conversar.</h2>
            <p className={styles.contatoText}>
              Para parcerias acadêmicas, convites para eventos, projetos de conteúdo ou trocas
              sobre psicologia comportamental, entre em contato pelos canais abaixo.
            </p>
          </div>
          <div className={styles.contatoLinks}>
            <a href="mailto:liz@lizhelena.com.br" className={styles.contatoLink}>
              <span className={styles.contatoLinkLabel}>E-mail</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/lizhelena.psi/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contatoLink}
            >
              <span className={styles.contatoLinkLabel}>Instagram</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/liz-helena-fort-ribeiro-11381922b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contatoLink}
            >
              <span className={styles.contatoLinkLabel}>LinkedIn</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Image
            src="/logo-black.png"
            alt="Liz Helena"
            height={22}
            width={84}
            style={{ objectFit: 'contain', opacity: 0.3 }}
          />
          <p className={styles.footerText}>© 2026 Liz Helena · Psicologia</p>
          <a href="https://madebyfelipe.com.br" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo.png"
              alt="Made by Felipe"
              height={20}
              width={78}
              style={{ objectFit: 'contain', opacity: 0.25 }}
            />
          </a>
        </div>
      </footer>

    </div>
  )
}
