import React from "react";
import { MenuItemList } from "./CONSTATNS/MenuItemList";
import AppMenuItem from "./AppMenuItem";

function AppMenuItemGroup() {
    return (
        <nav className="flex flex-col gap-3 w-full">
            {MenuItemList.map((x) => (
                <AppMenuItem key={x.id} icon={x.icon} text={x.title} link={x.link} />
            ))}
        </nav>
    );
}

export default AppMenuItemGroup;
