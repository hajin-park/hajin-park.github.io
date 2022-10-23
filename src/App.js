import { useState } from 'react'
import Header from './components/Header'
import Counter from './components/Counter'
import CertificateList from './components/CertificateList'
import CertificateData from './data/CertificateData'

export default function App() {
    const [certificates] = useState(CertificateData)

    return (
        <>
            <Header />
            <Counter />
            <CertificateList certificates={certificates}/>
        </>
    )
}