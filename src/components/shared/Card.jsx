export default function Card({ text }) {
    return (
        <>
            <div className='w-[32rem] h-24 absolute translate-x-1 translate-y-1 bg-purple-400 -z-[1]'></div>
            <div className='w-[32rem] h-24 absolute translate-x-2 translate-y-2 bg-purple-500 -z-[2]'></div>
            <div className='w-[32rem] h-24 absolute translate-x-3 translate-y-3 bg-purple-600 -z-[3]'></div>
            <div className='w-[32rem] h-24 absolute translate-x-4 translate-y-4 bg-purple-700 -z-[4]'></div>
            <div className='w-[32rem] h-24 absolute translate-x-5 translate-y-5 bg-purple-800 -z-[5]'></div>
            <div className='w-[32rem] h-24 absolute translate-x-6 translate-y-6 bg-purple-900 -z-[6]'></div>
            <div className='flex w-[32rem] h-24 justify-center items-center bg-purple-200'>
            <p className='text-2xl font-extrabold italic'>{text}</p>
            </div>
        </>
    )
}