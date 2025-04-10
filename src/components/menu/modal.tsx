import { cn } from "@/utils";
import { ReactNode } from "react";

export function ModalBody({ children, className }: { children?: ReactNode, className?: string }) {
    return <div className={cn(className, "p-5 fixed top-1/2 left-1/2 -translate-1/2 bg-background/90 border-[1px] border-foreground max-w-[90vw] max-h-[90vh]")}>
        {children}
    </div>
}