import { FormEvent, useEffect, useState } from "react"
import { useForm } from 'react-hook-form'

interface props {

}

interface IErrors {
    document: string,
    phoneNumber: string,
    acceptPrivacyPolicy: string,
    acceptCommercialCommunications: string
}



const CustomForm = () => {

    const { handleSubmit } = useForm()

    const [formData, setFormData] = useState({
        documentType: 'DNI',
        documentNumber: '',
        phoneNumber: '',
        acceptPrivacyPolicy: false,
        acceptCommercialCommunications: false,
    })

    const [errors, setErrors] = useState<IErrors>({
        document: '',
        phoneNumber: '',
        acceptPrivacyPolicy: '',
        acceptCommercialCommunications: '',
    })



    const errorMessage = {
        document: '*El documento ingresado no es válido',
        phoneNumber: '*El celular ingresado no es válido',
        acceptPrivacyPolicy: 'Por favor, acepta la Política de Privacidad.',
        acceptCommercialCommunications: 'Por favor, acepta la Política de Comunicaciones Comerciales.',
    }


    const [showPopup, setShowPopup] = useState(false)

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target
        const newFormData = { ...formData, [name]: type === 'checkbox' ? checked : value }
        const newErrors = { ...errors }
    
        // newErrors[name] = ''
    
        // if (name === 'documentType') {
        //   newFormData.documentNumber = ''
        //   setDocumentMaxLength(newFormData.documentType === 'DNI' ? 8 : 11)
        // } else if (name === 'documentNumber') {
        //   if ((formData.documentType === 'DNI' && value.length === 8) || (formData.documentType === 'RUC' && value.length === 11)) {
        //     newErrors.document = ''
        //   } else {
        //     newErrors.document = errorMessage.document
        //   }
        // } else if (name === 'phoneNumber') {
        //   if (value.length < 1) {
        //     newErrors.phoneNumber = errorMessage.phoneNumber
        //   }
        // }
        
        // setFormData(newFormData)
        // setErrors(newErrors)
    
        // if (authError) {
        //   clearErrorUser()
        // }
      }

    const onSubmit = handleSubmit((e:any) => {
        // e.preventDefault()
        console.log(e)

    })


    return (
        <form onSubmit={onSubmit} className="mt-6">

            <div className='flex w-full items-center' >
                <div className='w-fit min-w-[14rem] border-black rounded-2xl overflow-hidden border relative flex items-center'>
                    <select className="w-full rounded-2xl p-5" title="selecton document" id="documentType" name="documentType" value={formData.documentType} onChange={handleInputChange}>
                        <option value="DNI">DNI</option>
0                        <option value="RUC">RUC</option>
                    </select>
                    <i className="icon-arrow absolute right-5 top-50 text-[1rem] pointer-events-none  bg-white" />
                </div>

                <div className={`input__login w-full ${errors.document ? 'error' : ''}`}>
                    <input
                        type='text'
                        id='document'
                        name='documentNumber'
                        placeholder=' '
                        value={formData.documentNumber}
                        onChange={handleInputChange}
                        maxLength={8}
                        onInput={(e: FormEvent<HTMLInputElement>) => { e.currentTarget.value = e.currentTarget.value.replace(/[^\d]/g, '') }}
                    />

                    <label htmlFor="document" className="before">
                        <div className="paragraph font-br-sonoma-regular">Nro. de documento</div>
                    </label>
                </div>
            </div>
            {errors.document && <div className="text-[var(--red5)] text-[14px] leading-4 mt-2 mb-4">{errors.document}</div>}

            <div className={`input__login mt-4 ${errors.phoneNumber ? 'error' : ''}`}>
                <input
                    type='number'
                    id='cel'
                    name='phoneNumber'
                    placeholder=' '
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />

                <label htmlFor="cel" className="before">
                    <div className="paragraph font-br-sonoma-regular">Celular</div>
                </label>
            </div>
            {errors.phoneNumber && <div className="text-[var(--red5)] text-[14px] leading-4 mt-2">{errors.phoneNumber}</div>}
            {/* {authError && <div className="text-[var(--red5)] text-[14px] leading-4 mt-4">{authError}</div>} */}

            <div className='mt-6'>
                <label className={`check__label ${errors.acceptPrivacyPolicy ? 'error' : ''}`}>
                    <input
                        type='checkbox'
                        name='acceptPrivacyPolicy'
                        checked={formData.acceptPrivacyPolicy}
                        onChange={handleInputChange}
                        hidden
                    />

                    <div className="check__label--box">
                        <img src="./check.svg" className='i' alt="Check Box" />
                    </div>

                    <div className='paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]'>Acepto la Política de Privacidad</div>
                </label>

                <label className={`check__label mt-4 ${errors.acceptCommercialCommunications ? 'error' : ''}`}>
                    <input
                        type='checkbox'
                        name='acceptCommercialCommunications'
                        checked={formData.acceptCommercialCommunications}
                        onChange={handleInputChange}
                        hidden
                    />

                    <div className="check__label--box">
                        <img src="./check.svg" className='i' alt="Check Box" />
                    </div>

                    <div className='paragraph font-br-sonoma-regular text-[12px] leading-[20px] tracking-[.1px] text-[#0A051E]'>Acepto la Política Comunicaciones Comerciales</div>
                </label>

                <button type='button' onClick={()=>setShowPopup(true)} className='mt-[12px] underline text-[12px] leading-[20px] tracking-[.1px] text-[var(--gray1)] font-br-sonoma-bold active:text-[var(--neutrals6)] cursor-pointer inline-block'>Aplican Términos y Condiciones.</button>

                <div className='block-btn'><button type='submit' className='btn font-br-sonoma-bold bg-[var(--gray1)]'>Cotiza aqui</button></div>
            </div>
        </form>
    )
}

export default CustomForm
