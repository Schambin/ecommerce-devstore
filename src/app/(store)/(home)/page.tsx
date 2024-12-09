import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

const productsMock: ProductProps[] = [
  {
    id: "1",
    name: "Moletom Never Stop Learning",
    imageUrl: "/moletom-never-stop-learning.png",
    price: "R$129",
  },
  {
    id: "2",
    name: "Moletom AI Side",
    imageUrl: "/moletom-ai-side.png",
    price: "R$99",
  },
  {
    id: "3",
    name: "Camiseta Expand Your Mind",
    imageUrl: "/camiseta-dowhile-2022.png",
    price: "R$69",
  },
]

export default function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-never-stop-learning.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
          <span className="text-sm truncate">
            {productsMock[0].name}
          </span>
          <span className="flex h-full place-items-center  rounded-full bg-violet-500 px-4 font-semibold">
          {productsMock[0].price}
          </span>
        </div>
      </Link>
        <Link 
          href="/" 
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image 
            className="group-hover:scale-105 transition-transform duration-500"
            src="/moletom-ai-side.png"
            alt=""
            width={450}
            height={450}
            quality={80}
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
            <span className="text-sm truncate4">
              {productsMock[1].name}
            </span>
            <span className="flex h-full place-items-center  rounded-full bg-violet-500 px-4 font-semibold">
              {productsMock[1].price}
            </span>
          </div>
        </Link>
        <Link 
          href="/" 
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
        >
          <Image 
            className="group-hover:scale-105 transition-transform duration-500"
            src="/camiseta-dowhile-2022.png" 
            alt="" 
            width={450}
            height={450} 
            quality={80} 
          />

          <div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-4">
            <span className="text-sm truncate">
              {productsMock[2].name}
            </span>
            <span className="flex h-full place-items-center  rounded-full bg-violet-500 px-4 font-semibold">
              {productsMock[2].price}
            </span>
          </div>
        </Link>
      </div>
  );
}
  