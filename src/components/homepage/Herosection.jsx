import HerosectionImage from "../../assets/herosection.png"

const Herosection = () => {
  return (
    <section className="bg-blue-50">
      <section className="w-11/12 mx-auto py-20 grid md:grid-cols-2 items-center">
        <div className="col-span-1 order-2 md:order-1">
          <p className="text-lg md:text-xl">Lets do it with Deo</p>
          <h1 className="text-2xl md:text-6xl font-bold w-4/5 text-green-500">
            Lets explore to uncoverd mystires with bravery
          </h1>
        </div>
        <div className="col-span-1 order-1 md:order-2 mb-5 md:mb-0 grid place-content-center">
          <div className="h-64 w-h-64 mx-auto md:h-96 md:w-96">
            <img
              src={HerosectionImage}
              className="h-full w-full object-contain"
              alt="herosection"
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Herosection
