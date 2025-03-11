import React from "react";
import { MenuItemList } from "./CONSTATNS/MenuItemList";
import AppMenuItem from "./AppMenuItem";

function AppMenuItemGroup() {
    return (
        <div className="flex flex-col gap-4 w-full">
            {MenuItemList.map((x) => (
                <AppMenuItem key={x.id} icon={x.icon} text={x.title} link={x.link} />
            ))}
        </div>
    );
}

export default AppMenuItemGroup;
