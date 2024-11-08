import React, { type PropsWithChildren } from "react";

export default function TooltipProvider({ children }: PropsWithChildren) {
    return <TooltipProvider>{children}</TooltipProvider>;
}
