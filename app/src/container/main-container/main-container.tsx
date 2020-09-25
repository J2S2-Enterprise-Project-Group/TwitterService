import React from "react";
import { HeaderBar } from "../../components/header/header-bar";
import { Dashboard } from "../../components/dashboard/dashboard";

interface IMainContainer {

}

export const MainContainer: React.FC<IMainContainer> = ({ }) => {
    return (
        <div>
            <HeaderBar />
            <Dashboard />
        </div>
    );
}