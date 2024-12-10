import Header from "@/components/header/header";

export default function StoreLayout({ children }:{ children: React.ReactNode }) {
    return (
    <div className="mx-auto min-h-s w-full max-w-[1600px] grid grid-rows-app gap-5 p-8">
        <Header/>
        {children}
    </div>
    )
}