"use client";

import type { HTMLAttributes } from "react";
import Image from "next/image";
import { cx } from "@/utils/cx";

export const UntitledLogo = (props: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className={cx("flex items-center justify-start overflow-hidden", props.className)}>
            <Image
                src="/images/kmi-footer-icon.png"
                alt="Konsultan Manajemen Indonesia / KMI Logo"
                width={150}
                height={100}
                className="w-auto h-auto max-w-[150px] max-h-[100px] object-contain"
                priority
            />
        </div>
    );
};
