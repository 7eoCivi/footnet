import { Menu } from "./Menu";

export const Navbar = () => {
  return (
    <div className="w-full h-[6rem] px-[2rem] flex items-center justify-between font-semibold bg-black">
      <div>LOGO</div>
      <Menu />
      <div>Sign in</div>
    </div>
  );
};
