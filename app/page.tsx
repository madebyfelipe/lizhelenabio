import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.site}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navLogo}>
            <Image src="/logo.png" alt="Liz Helena" height={24} width={90} style={{ objectFit: 'contain' }} />
          </a>
          <div className={styles.navLinks}>
            <a href="#sobre" className={styles.navLink}>Sobre</a>
            <a href="#areas" className={styles.navLink}>Áreas</a>
            <a href="#conteudo" className={styles.navLink}>Conteúdo</a>
            <a href="#trajetoria" className={styles.navLink}>Trajetória</a>
            <a href="#contato" className={styles.navLink}>Contato</a>
            <a href="https://typebot.co/my-typebot-pyy8ao8" target="_blank" rel="noopener noreferrer" className={styles.navCta}>
              Lista de espera
            </a>
          </div>
          <div className={styles.navMobileLinks}>
            <a href="https://typebot.co/my-typebot-pyy8ao8" target="_blank" rel="noopener noreferrer" className={styles.navCta}>
              Lista de espera
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Psicologia</p>
            <h1 className={styles.heroHeadline}>
              Psicologia baseada<br />
              em evidências com<br />
              responsabilidade e<br />
              sensibilidade.
            </h1>
            <p className={styles.heroSub}>
              Liz Helena estuda Psicologia com foco nas Terapias Contextuais Comportamentais ACT e
              DBT, também produz conteúdo sobre saúde mental, autoconhecimento e comportamento para
              mulheres, jovens adultos e adolescentes.
            </p>
            <div className={styles.heroCtas}>
              <a href="https://www.instagram.com/lizhelena.psi/" target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                Acompanhar o trabalho
              </a>
              <a href="#sobre" className={styles.ctaSecondary}>
                Conhecer a trajetória
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.heroPhoto}>
            <Image src="/20260426_213415.jpg" alt="Liz Helena" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>
        </div>

        {/* Second floating star — top left */}
        <div className={styles.heroSecondStar} aria-hidden="true">
          <Image src="/estrela-2b.png" alt="" fill style={{ objectFit: 'contain' }} />
        </div>

        {/* Scroll indicator */}
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollLine} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── MARQUEE 1 ── */}
      <div className={styles.marqueeBand} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.marqueeItem}>
              Psicologia Baseada em Evidências
              <svg className={styles.marqueeStar} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── SOBRE ── */}
      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreInner}>
          <div>
            <p className={styles.eyebrow}>Sobre</p>
            <div className={styles.titleWrap}>
              <h2 className={styles.sectionTitle}>
                Estudos e foco de atuação na psicoterapia.
              </h2>
              <div className={styles.sobreDecor} aria-hidden="true">01</div>
            </div>
          </div>
          <div>
            <p className={styles.bodyText}>
              Liz Helena é estudante de Psicologia e dedica sua formação ao estudo da Terapia de
              Aceitação e Compromisso (ACT) e Terapia Comportamental Dialética (DBT) com origem na
              Análise do Comportamento, abordagem reconhecida internacionalmente pela base científica
              e pela eficácia comprovada no tratamento de questões como ansiedade, rigidez cognitiva
              e regulação emocional.
            </p>
          </div>
        </div>
      </section>

      {/* ── MARQUEE 2 ── */}
      <div className={styles.marqueeBand2} aria-hidden="true">
        <div className={styles.marqueeTrack2}>
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={styles.marqueeItem2}>
              ACT
              <svg className={styles.marqueeStar2} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
              </svg>
              Saúde Mental
              <svg className={styles.marqueeStar2} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
              </svg>
              DBT
              <svg className={styles.marqueeStar2} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── ÁREAS DE ESTUDO ── */}
      <section className={styles.areas} id="areas">
        <div className={styles.areasInner}>
          <div className={styles.areasHeader}>
            <p className={styles.eyebrowDark}>Áreas de Estudo e Interesse</p>
            <div className={styles.titleWrap}>
              <h2 className={styles.sectionTitleDark}>
                Os temas que orientam minha formação.
              </h2>
              <span className={styles.areasCount} aria-hidden="true">02</span>
            </div>
          </div>
          <div className={styles.areasGrid}>
            {[
              { title: 'Terapias Contextuais Comportamentais', desc: 'Entende a importância de contextos históricos e situacionais para a compreensão do comportamento humano, buscando entender a função e significados dos comportamentos.' },
              { title: 'Terapia de Aceitação e Compromisso (ACT)', desc: 'Promove a flexibilidade psicológica, desenvolvendo a capacidade de lidar de forma aberta com experiências e emoções desafiadoras em vez de evitá-las, para uma vida mais valorizada.' },
              { title: 'Terapia Comportamental Dialética (DBT)', desc: 'Treinamento de habilidades em Mindfulness, Regulação Emocional, Tolerância ao Mal Estar e Efetividade Interpessoal buscando o equilíbrio comportamental.' },
              { title: 'Jovens adultos e adolescência', desc: 'Autoestima, autenticidade e cultura.' },
              { title: 'Cognição e contexto', desc: 'Estudos sobre como os comportamentos são processados pelo cérebro, sem excluir da análise fatores sociais, econômicos, históricos e culturais.' },
            ].map((area, i) => (
              <div key={i} className={`${styles.areaCard} ${i === 4 ? styles.areaCardAccent : ''}`}>
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
        <div className={styles.conteudoLayout}>

          <div className={styles.conteudoInner}>
            <p className={styles.eyebrow}>Conteúdo e Produção</p>
            <div className={styles.conteudoTop}>
              <h2 className={styles.sectionTitle}>
                Onde acompanhar meu trabalho.
              </h2>
              <span className={styles.conteudoDecorNum} aria-hidden="true">03</span>
            </div>
            <p className={styles.conteudoText}>
              Compartilho estudos, leituras e reflexões sobre psicologia comportamental nas redes
              sociais. O foco é levar conteúdo claro, embasado e útil para quem quer entender
              melhor a própria mente.
            </p>
            <a href="https://www.instagram.com/lizhelena.psi/" target="_blank" rel="noopener noreferrer" className={styles.ctaLight}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Seguir no Instagram
            </a>
          </div>

          <div className={styles.conteudoSidePhoto}>
            <Image src="/20260426_215111.jpg" alt="Liz Helena lendo" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} />
          </div>

        </div>
      </section>

      {/* ── TRAJETÓRIA ACADÊMICA ── */}
      <section className={styles.trajetoria} id="trajetoria">
        <div className={styles.trajetoriaLayout}>
          <div className={styles.trajetoriaSidePhoto}>
            <Image src="/20260426_215241.jpg" alt="Liz Helena" fill style={{ objectFit: 'cover', objectPosition: '70% 20%' }} />
          </div>
          <div className={styles.trajetoriaContent}>
            <div className={styles.trajetoriaInner}>
              <div>
                <p className={styles.eyebrowDark}>Trajetória Acadêmica</p>
                <div className={styles.titleWrap}>
                  <h2 className={styles.sectionTitleDark}>
                    Formação em construção, com método e sensibilidade.
                  </h2>
                  <div className={styles.sobreDecor} style={{ color: 'rgba(0,0,0,0.06)' }} aria-hidden="true">04</div>
                </div>
              </div>
              <div>
                <p className={styles.bodyTextDark}>
                  Atualmente estou no 9° de 10° semestres da graduação em Psicologia, faço atendimentos
                  na Clinica-Escola e em comunidades, faço parte de grupos de estudos com o meu foco de
                  atuação e estudos individuais. Acredito que uma boa psicoterapia é baseada em muito
                  conhecimento técnico e científico sem excluir o afeto e a sensibilidade diante da
                  pessoa, caminhando lado a lado para a vida que essa pessoa quer construir.
                </p>
                <p className={styles.trajetoriaDestaque}>Ciência com afeto e responsabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LISTA DE ESPERA ── */}
      <section className={styles.waitlist}>
        <div className={styles.waitlistInner}>
          <div className={styles.waitlistIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className={styles.waitlistTitle}>
            Entre na lista de espera.
          </h2>
          <p className={styles.waitlistDesc}>
            Seja a primeira a saber quando tiver novidade — conteúdo exclusivo, mentorias e muito mais.
          </p>
          <a href="https://typebot.co/my-typebot-pyy8ao8" target="_blank" rel="noopener noreferrer" className={styles.ctaDark}>
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
          <div className={styles.avisoIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
          </div>
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
              <span className={styles.contatoLinkInner}>
                <svg className={styles.contatoLinkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className={styles.contatoLinkLabel}>E-mail</span>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="https://www.instagram.com/lizhelena.psi/" target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>
              <span className={styles.contatoLinkInner}>
                <svg className={styles.contatoLinkIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className={styles.contatoLinkLabel}>Instagram</span>
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/liz-helena-fort-ribeiro-11381922b/" target="_blank" rel="noopener noreferrer" className={styles.contatoLink}>
              <span className={styles.contatoLinkInner}>
                <svg className={styles.contatoLinkIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className={styles.contatoLinkLabel}>LinkedIn</span>
              </span>
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
          <p className={styles.footerText}>© 2026 Liz Helena · Psicologia</p>
          <a href="https://madebyfelipe.com.br" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.png" alt="Made by Felipe" height={20} width={78} style={{ objectFit: 'contain', opacity: 0.25 }} />
          </a>
        </div>
      </footer>

    </div>
  )
}
