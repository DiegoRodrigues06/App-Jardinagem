// icone de 3 barrinha para menu

import { MenuIcon, Bar } from "./styles/IconTab";

const Icon = ({ onClick }) => {
    return (
        <MenuIcon onClick={onClick}>
            <Bar />
            <Bar />
            <Bar />
        </MenuIcon>
    );
};

export default Icon;