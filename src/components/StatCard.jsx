
const StatCard = ({ number, title, color = "#EAEAF4", text ='#222222' }) => {
  return (
    <div className="w-64 px-6 py-8 rounded-2xl flex flex-col gap-4" style={{ backgroundColor: color , color : text }}>
      <h3 className="text-4xl font-semibold">{number}</h3>
      <h5 className="text-lg font-normal">{title}</h5>
    </div>
  )
}

export default StatCard