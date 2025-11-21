import FlavorSlider from "../components/FlavorSlider"
import FlavorTitle from "../components/FlavorTitle"

const FlavorSection = () => {
  return (
    <section className="flavor-section">
      <div className="h-full lg:flex-row flex-col item-center relative">
        <div className="lg:w-[57%] flex-no h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />

        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>

    </section>
  )
}

export default FlavorSection
