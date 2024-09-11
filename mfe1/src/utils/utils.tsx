import React from "react";
export const Badge = (props: any) => {
    return (
        <div
            className={`inline-flex items-center bg-green-300 rounded-full px-2.5 py-0.5 text-xs font-medium ${props.className}`}
        >
            {props.children}
        </div>
    );
}