import { IconStarFilled, IconStarHalf } from '@tabler/icons-react'

export function StarGenerateCompo({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const halfStars = Math.round(rating - fullStars)

  const stars = []

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <IconStarFilled key={i} size={15} className="text-emerald-400" />
    )
  }

  if (halfStars > 0) {
    stars.push(<IconStarHalf size={15} className="text-emerald-400" />)
  }

  return <>{stars}</>
}
