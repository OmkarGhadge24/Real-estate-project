import Searchbar from "./Searchbar"

const HeroSection = () => {
  return (
    <div className="relative w-full h-150 rounded-3xl overflow-hidden">
        <img className="w-full h-full object-cover" src="./Hero.jpg" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white mb-8">Find Your Properties</h1>
            <Searchbar />
        </div>
    </div>
  )
}

export default HeroSection