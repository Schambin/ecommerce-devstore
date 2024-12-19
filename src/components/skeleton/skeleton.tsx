import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Skeleton({className, ...props}: ComponentProps<'div'>) {
    return (
        <div className={twMerge("animate-pulse bg-zinc-700 w-full h-12 rounded-md", className)} 
        {...props} 
        />
    )
}