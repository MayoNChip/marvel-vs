import Link from "next/link";
import menuItems from "./navbar.items";

export default function Navbar() {
  return (
    <div className="flex h-[60px] w-full bg-red-600 items-center">
      <h2 className="mx-10 text-2xl bold text-gray-900">Marvel VS</h2>
      <div className=" flex">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.route}>
            <button className="hover:text-red-100 active:text-red-900 text-gray-900 mx-5">
              {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
