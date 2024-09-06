

const SummaryCard = () => {
  return (
    <div className="shadow-defaut p-10 rounded-[2.4rem] mt-[5rem]">
        <section className="font-bold border-b ">
            <h2 className="text-[1.2rem] ">PRECIOS CALCULADOS PARA:</h2>
            <h1 className="text-[2rem] py-5"><i className="icon-family"/> Rocio Miranda Diaz</h1>
        </section>
        <section className="flex flex-col gap-[1.6rem] mt-5">
            <div className="flex flex-col gap-[0.4rem]">
                    <h2 className="text-[1.6rem] font-bold">Responsable de pago</h2>
                    <p className="text-[1.6rem]">DNI: </p>
                    <p className="text-[1.6rem]">Celular:</p>
            </div>
            <div className="flex flex-col gap-[0.4rem]">
                    <h2 className="text-[1.6rem] font-bold">Plan elegido</h2>
                    <p className="text-[1.6rem]">Plan en Casa</p>
                    <p className="text-[1.6rem]">Costo del plan al mes</p>
            </div>
        </section>
      
    </div>
  )
}

export default SummaryCard
