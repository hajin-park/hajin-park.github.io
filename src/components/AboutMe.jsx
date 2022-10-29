import MottoCard from './MottoCard'

export default function AboutMe() {
    return (
        <article id='about-me' className='grid grid-cols-2 grid-rows-[300px_300px] items-center justify-items-center h-screen w-full'>
            <section className='row-span-2'>
                <h1 className='text-6xl font-black text-indigo-600'>Hi! I'm Hajin Park.</h1>
                <p className='text-6xl font-black text-indigo-300'>Currently exploring web development...</p>
            </section>
            <section className='col-start-2 row-span-2'>
                <h2 className='animate-bounce text-4xl font-extrabold text-pink-200 mb-4'>My Mottos</h2>
                <MottoCard quotes={['Learn to Understand', 'Programming is Art', 'Live by Faith']} />
            </section>
        </article>
    )
}