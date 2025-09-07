import { MenuIcon, Bar } from "./TresBarras.js";

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