import Link from "next/link";

export const Menu = () => {
  const menuItems = ["Home", "Players", "Teams", "History"];

  return (
    <div className="flex items-center gap-4">
      {menuItems.map((item, index) => (
        <div key={item} className="flex items-center gap-4">
          <Link href={`/${item === "Home" ? "" : item.toLowerCase()}`}>
            <span>{item}</span>
          </Link>
          {index < menuItems.length - 1 && (
            <span className="text-white">|</span>
          )}
        </div>
      ))}
    </div>
  );
};
