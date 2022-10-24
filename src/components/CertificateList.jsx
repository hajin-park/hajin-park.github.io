import CertificateItem from './CertificateItem'

export default function CertificateList({ certificates }) {
    return (
        <ul className='flex flex-col mt-32 items-center gap-y-8'>
            <h2 className='font-black text-2xl'>Udemy Certificates</h2>
            {certificates.map((item) => (
                <CertificateItem className='' key={item.id} item={item}/>
            ))}
        </ul>
    )
}