import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import Header from './components/Header'
import CertificateList from './components/CertificateList'
import CertificateData from './data/CertificateData'

export default function App() {
    const [certificates] = useState(CertificateData)

    return (
        <>
            <NavigationBar />
            <Header />
            <CertificateList certificates={certificates}/>
        </>
    )
}