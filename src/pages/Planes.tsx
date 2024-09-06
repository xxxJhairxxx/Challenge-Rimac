import Container from "@/components/globals/Container"
import Layout from "@/components/layout/Layout"
import Navbar from "@/components/molecules/Navbar"
import { useNavigate } from "react-router-dom";
import personal from '@/assets/img/personal.svg'
import other from '@/assets/img/family.svg'
import SeleccionCard from "@/components/molecules/SeleccionCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PlanesCard from "@/components/molecules/PlanesCard";
import home from '@/assets/img/home.svg'
import clinica from '@/assets/img/clinica.svg'
import Button from "@/components/atom/Button";


interface error {
  message: string
}

interface data {
  list: {
    name: string,
    price:number,
    description: Array<string>,
    age: string
  }[]
}

const Plans = () => {

  const name = "Rocio";

  const navigate = useNavigate()

  const [data, setData] = useState<data>({  list: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<error | null>(null);

  const [selectPersonal, setSelectPersonal] = useState<boolean>(false);
  const [selectOther, setSelectOther] = useState<boolean>(false);

  const handlePersonal = () => {
    setSelectPersonal(true)
    setSelectOther(false)
  }

  const handleOther = () => {
    setSelectPersonal(false)
    setSelectOther(true)
  }

  useEffect(() => {
    // Hacer una solicitud GET a la API
    axios.get('https://rimac-front-end-challenge.netlify.app/api/plans.json') // Reemplaza con tu URL de API
      .then(response => {
        setData(response.data); // Guardar los datos en el estado
        setLoading(false); // Terminar la carga
      })
      .catch(err => {
        setError(err); // Manejo de errores
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>cargando...</h1>

  if (error) return <p>Ocurrió un error: {error.message}</p>;

  return (
    <Layout>
      <Navbar />
      <Container className="mt-[5rem]">
        <section>
          <Button onClick={() => navigate('/')}>Volver</Button>
        </section>

        <section className="flex flex-col max-w-[54.4rem] mx-auto leading-[4.8rem] text-center justify-center items-center py-[5rem]cl">
          <h1 className="text-[4rem] font-semibold">{name} ¿Para quién deseas cotizar?</h1>
          <p className="text-[1.6rem]">Selecciona la opción que se ajuste más a tus necesidades.</p>
          <div className="w-full flex justify-center gap-[3rem] my-[3rem]">
            <SeleccionCard onClick={handlePersonal} state={selectPersonal} title='Para mí' text='Cotiza tu seguro de salud y agrega familiares si así lo deseas.' img={personal} />
            <SeleccionCard onClick={handleOther} state={selectOther} title='Para alguien más' text='Realiza una cotización para uno de tus familiares o cualquier persona.' img={other} />
          </div>

          <div className="flex justify-between gap-[3.5rem]">
            {data.list.slice(0,3).map(({name,description,price}, index)=>
              <PlanesCard key={index} name={name} description={description} price={price} img={index%2===0?home:clinica}/>
            )}

          </div>


        </section>

      </Container>

    </Layout>
  )
}

export default Plans
