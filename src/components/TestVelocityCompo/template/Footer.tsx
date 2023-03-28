import { Logo } from './Logo'

export function Footer({ title = '' }) {
  return (
    <footer className=".footer">
      <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer">
        <Logo />
      </a>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <code className="code">{title}</code>
      </a>
    </footer>
  )
}
