import { FilePlus2, FileText, LayoutDashboard, MessageCircleReply } from 'lucide-react';
import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Label } from '../ui/label';

const list = [
    {
        id: 1,
        name: "Application",
        route: "application",
        icon: <LayoutDashboard size={22}/>
    },
    {
        id: 2,
        name: "Nocs",
        route: "noc",
        icon: <FileText size={22} />
    },
    {
        id: 3,
        name: "Extensions",
        route: "extension",
        icon: <FilePlus2 size={22} />
    },
    {
        id: 4,
        name: "Grievence Desk",
        route: "grievence",
        icon: <MessageCircleReply size={22} />
    },
]

const Sidebar = () => {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = React.useState(0);
    const sidebarLinks = list

    useEffect(() => {
        const currentPath = location.pathname;

        const selectedLink = sidebarLinks.find((link) =>
            currentPath.includes(link.route)
        );

        if (selectedLink) {
            setSelectedTab(selectedLink.id);
        }
    }, [location.pathname, sidebarLinks]);
    return (
        <div className='flex flex-col mt-10 space-y-4 p-4'>
            {
                sidebarLinks.map((item, index) => {
                    return (
                        <NavLink key={item.id} to={item.route} className='cursor-default'
                        >
                            {
                                selectedTab === item.id ? (
                                    <div
                                        key={index}
                                        className='bg-gray-200 rounded p-3 flex space-x-3 items-center'
                                    >
                                        {item.icon}
                                        <Label className='text-gray-800 text-md'>
                                            {item.name}
                                        </Label>
                                    </div>
                                ) : (
                                    <div key={index}
                                        className='p-3 flex space-x-3 items-center'
                                    >
                                        {item.icon}
                                        <Label className='text-gray-800 text-md'>
                                            {item.name}
                                        </Label>
                                    </div>
                                )
                            }
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Sidebar