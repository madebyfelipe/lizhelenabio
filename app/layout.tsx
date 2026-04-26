import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const ppEiko = localFont({
  src: [
    { path: './fonts/PPEiko-Heavy.otf', weight: '800', style: 'normal' },
    { path: './fonts/PPEiko-BlackItalic.otf', weight: '800', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
})

const neueHaas = localFont({
  src: './fonts/NeueHaasDisplayBold.ttf',
  weight: '700',
  variable: '--font-subtitle',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Liz Helena — Psicologia e TCC',
  description: 'Estudante de Psicologia com foco em Terapia Cognitivo-Comportamental. Conteúdo sobre saúde mental, comportamento e autoconhecimento para mulheres, adolescentes e jovens adultos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${ppEiko.variable} ${neueHaas.variable}`}>
      <body>{children}</body>
    </html>
  )
}
