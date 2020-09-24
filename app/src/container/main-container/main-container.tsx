import React from "react";
import { HeaderBar } from "../../components/header/header-bar";

interface IMainContainer {

}

export const MainContainer: React.FC<IMainContainer> = ({ }) => {
    return (
        <HeaderBar />
    );
}