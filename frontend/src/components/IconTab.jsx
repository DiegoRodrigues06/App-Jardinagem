import { MenuIcon, Bar } from "../assets/styles/IconTab";

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