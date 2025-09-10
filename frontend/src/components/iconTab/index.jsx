import { MenuIcon, Bar } from "./IconTab.js";

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