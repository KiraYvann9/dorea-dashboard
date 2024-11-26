
import {poppins} from "@/fonts/fonts";



export default function Home() {
  return (
    <div className={`${poppins.variable} min-h-screen w-full flex flex-col justify-center items-center gap-4`}>
      <h1 className={'text-4xl font-bold'}>DOREA</h1>
        <h2 className={'text-2xl font-medium text-gray-600'}>Connectez vous</h2>
    </div>
  );
}
