import CertificateItem from './CertificateItem'

export default function CertificateList({ certificates }) {
    return (
        <article id='certificates' className='grid mt-32'>
            <h2 className='text-center mb-8 font-bold text-5xl'>Udemy Certificates</h2>
            <ul className='flex flex-col items-center gap-y-8'>
                {certificates.map((item) => (
                    <CertificateItem className='' key={item.id} item={item}/>
                ))}
            </ul>
        </article>
    )
}