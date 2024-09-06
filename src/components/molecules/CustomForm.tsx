import { FormEvent } from "react"
import { useForm } from 'react-hook-form'


// interface IErrors {
//     document: string,
//     phoneNumber: string,
//     acceptPrivacyPolicy: string,
//     acceptCommercialCommunications: string
// }



const CustomForm = () => {

    const { register, handleSubmit,  } = useForm()


    // const [errors, setErrors] = useState<IErrors>({
    //     document: '',
    //     phoneNumber: '',
    //     acceptPrivacyPolicy: '',
    //     acceptCommercialCommunications: '',
    // })



    // const errorMessage = {
    //     document: '*El documento ingresado no es válido',
    //     phoneNumber: '*El celular ingresado no es válido',
    //     acceptPrivacyPolicy: 'Por favor, acepta la Política de Privacidad.',
    //     acceptCommercialCommunications: 'Por favor, acepta la Política de Comunicaciones Comerciales.',
    // }


    // const [showPopup, setShowPopup] = useState(false)


    const onSubmit = handleSubmit((data) => {
        // e.preventDefault()
        console.log(data)

    })


    return (
        <form onSubmit={onSubmit} className="my-6 flex flex-col gap-y-5">

            <div className='flex w-full h-[6rem] items-center ' >
                <div className='w-fit min-w-[14rem] h-full border-black rounded-l-2xl border-r-0 overflow-hidden border relative flex items-center'>
                    <select
                        className="w-full rounded-2xl p-5 focus:outline-none"
                        title="selecton document"
                        {...register('type_document')}>
                        <option value="DNI">DNI</option>
                        <option value="RUC">RUC</option>
                    </select>
                    <i className="icon-arrow absolute px-5 right-0 top-50 text-[1rem] pointer-events-none  bg-white" />
                </div>

                <div className={`border border-black font-[500] rounded-r-2xl h-full w-full flex flex-col justify-center pl-5 `}>
                    <label htmlFor="document" className="before">
                        <div className="text-[1.2rem]">Nro. de documento</div>
                    </label>
                    <input
                        type='text'
                        id='document'
                        className="text-[1.6rem] focus:outline-none"
                        {...register('document', {
                            pattern: /^[0-9]+$/
                        })}
                        onInput={(e: FormEvent<HTMLInputElement>) => {
                            // Asegurar que el input solo acepte números y limitar a 9 dígitos
                            if (e.currentTarget.value.length > 8) {
                                e.currentTarget.value = e.currentTarget.value.slice(0, 8);
                            }
                        }}
                    />


                </div>
            </div>
            {/* {errors.document && <div className="text-[var(--red5)] text-[14px] leading-4 mt-2 mb-4">{errors.document}</div>} */}

            <div className={` w-full flex font-[500] flex-col justify-center pl-5 pr-8 h-[6rem] 
                 border-black rounded-2xl  overflow-hidden border focus:outline-none' 
                 
                 relative after:absolute after:top-0 after:right-0 after:h-full after:w-[4rem] after:bg-white after:content-['']
                 `}>

                <label htmlFor="cel" className="w-full t">
                    <div className="text-[1.2rem]">Celular</div>
                </label>

                <input
                    type='text'
                    id='cel'
                    {...register('phone', {
                        required: true,
                        maxLength: 9,
                        pattern: /^[0-9]+$/
                    })}
                    onInput={(e: FormEvent<HTMLInputElement>) => {
                        // Asegurar que el input solo acepte números y limitar a 9 dígitos
                        if (e.currentTarget.value.length > 9) {
                            e.currentTarget.value = e.currentTarget.value.slice(0, 9);
                        }
                    }}
                    className="focus:outline-none "
                />
            </div>
            {/* {errors.phoneNumber && <div className="text-[var(--red5)] text-[14px] leading-4 mt-2">{errors.phoneNumber}</div>} */}
            {/* {authError && <div className="text-[var(--red5)] text-[14px] leading-4 mt-4">{authError}</div>} */}


            <div className="flex gap-3">

                <input
                    title="check"
                    type='checkbox'
                    name='acceptPrivacyPolicy'
                    className="accent-black font-[400]"

                />

                <div className='text-[1.2rem] leading-[20px] tracking-[.1px] text-[#0A051E]'>Acepto la Política de Privacidad</div>

            </div>

            <div className="flex gap-3">
                <input
                    title="check"
                    type='checkbox'
                    name='acceptCommercialCommunications'
                    className="accent-black font-[400]"
                />


                <div className='paragraph font-br-sonoma-regular text-[1.2rem] leading-[20px] tracking-[.1px] text-[#0A051E]'>Acepto la Política Comunicaciones Comerciales</div>

            </div>


            <button type='button' className='underline text-[1.3rem] leading-[20px] font-bold text-left w-fit cursor-pointer inline-block'>Aplican Términos y Condiciones.</button>

            <button type='submit' className='bg-dark-100 w-fit font-semibold text-white px-[4rem] py-[1.5rem] rounded-full text-[2rem]'>Cotiza aqui</button>

        </form>
    )
}

export default CustomForm
