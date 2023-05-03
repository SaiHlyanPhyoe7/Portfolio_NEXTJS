import Link from 'next/link'

export function DownloadCV() {
  return (
    <Link
      href="/SaiHlyanPhyoe_resume.pdf"
      target="_blank"
      className="hover:border-b hover:border-b-[#ed6d3c]"
    >
      View My CV
    </Link>
  )
}
