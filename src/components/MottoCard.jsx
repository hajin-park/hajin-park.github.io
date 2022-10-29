import Card from './shared/Card'

export default function MottoCard({ quotes }) {
    return (
        <article className='flex flex-col justify-end'>
            <section className='relative'>
                <Card text={quotes[0]} />
            </section>
            <section className='relative translate-x-6 translate-y-6'>
                <Card text={quotes[1]} />
            </section>
            <section className='relative translate-x-12 translate-y-12'>
                <Card text={quotes[2]} />
            </section>
        </article>
    )
}