import Layout from "@/components/layout/Layout"
import image from '@/assets/img/family.jpg'
import CustomForm from "@/components/molecules/CustomForm"

const Home = () => {
  return (
    <Layout className="flex gap-[12.8rem] pt-[3rem] pb-[8rem] items-center">

    <img src={image} className="w-[48rem] h-[56rem] rounded-3xl" alt="" />

    <section className="max-w-[35.2rem]">
      <h2 className="bg-custom-gradient w-fit text-[1.4rem] px-3 py-1 rounded-lg font-bold">Seguro Salud Flexible</h2>
      <h1 className="text-[3.2rem] font-bold leading-[4rem]">Creado para ti y tu familia</h1>
      <p className="font-semibold text-[1.4rem]">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
      
      <CustomForm/>
    </section>
     
    </Layout>

  )
}

export default Home
