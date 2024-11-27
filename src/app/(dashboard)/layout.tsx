import React from 'react';
import {Sidebar} from "@/components/sidebar/Sidebar";

import {poppins} from "@/fonts/fonts";

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className={`${poppins.variable} min-h-screen w-full bg-red-100`}>
            <Sidebar/>
            <div className={'w-full min-h-screen p-8'}>
                {children}
            </div>
        </div>
    );
}

export default Layout;