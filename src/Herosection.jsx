import HerosectionImage from "./assets/herosection.png"

const Herosection = () => {
  return (
    <section className="bg-blue-50">
      <section className="w-11/12 mx-auto py-20 grid grid-cols-2 items-center">
        <div className="col-span-1">
          <p className="text-xl">Lets do it with Deo</p>
          <h1 className="text-6xl font-bold w-4/5 text-green-500">
            Lets explore to uncoverd mystires with bravery
          </h1>
        </div>
        <div className="col-span-1 grid place-content-center">
          <div className="h-96 w-96">
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
