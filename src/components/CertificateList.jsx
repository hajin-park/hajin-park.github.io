import CertificateItem from './CertificateItem'

export default function CertificateList({ certificates }) {
    return (
        <ul className='flex flex-col items-center gap-y-8'>
            <h2>Udemy Certificates</h2>
            {certificates.map((item) => (
                <CertificateItem key={item.id} item={item}/>
            ))}
        </ul>
    )
}