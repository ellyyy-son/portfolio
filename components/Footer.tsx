import Socials from "@/components/Socials";

export default function Footer(){
    return(
        <div className='flex flex-col lg:flex-row justify-between items-center mt-20 mb-10 gap-4 lg:gap-0'>
            <h1 className='font-bold text-xl text-white text-center'>Elly Olegario</h1>
            <Socials />
        </div>
    )
}