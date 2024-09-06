import Button from "@/components/atom/Button"
import Container from "@/components/globals/Container"
import Layout from "@/components/layout/Layout"
import Navbar from "@/components/molecules/Navbar"
import SummaryCard from "@/components/molecules/SummaryCard"
import { useNavigate } from "react-router-dom"


const Summary = () => {

    const navigate = useNavigate()

  return (
    <Layout>
      <Navbar />
      <Container className="!px-[9.6rem] w-[80%] mt-[5rem]">
        <section>
          <Button onClick={() => navigate('/planes')}>Volver</Button>
        </section>

        <section className="p-10 mx-[1.6rem]">
            <h1 className="text-[4rem] font-semibold">Resumen del seguro</h1>
                <SummaryCard/>
        </section>
        </Container>

    </Layout>
  )
}

export default Summary
