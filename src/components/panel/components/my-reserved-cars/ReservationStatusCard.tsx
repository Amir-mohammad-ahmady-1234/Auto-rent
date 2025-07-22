interface ReservationStatusCardProps {
  title: string
  count: number
  variant: "cancelled" | "completed" | "current"
}

export function ReservationStatusCard({ title, count, variant }: ReservationStatusCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "completed":
        return "bg-blue-600 text-white"
      case "cancelled":
        return "bg-white border border-gray-200 text-gray-700"
      case "current":
        return "bg-white border border-gray-200 text-gray-700"
      default:
        return "bg-white border border-gray-200 text-gray-700"
    }
  }

  return (
    <div className={`rounded-lg p-6 text-center ${getVariantStyles()}`}>
      <h3 className="text-sm font-medium mb-2">{title}</h3>
      <div className="text-2xl font-bold">{count}</div>
    </div>
  )
}
