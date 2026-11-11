import { Logo } from "@/lib/icons";
import Link from "next/link";
import HeaderExtraInfo from "./headerExtraInfo";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";

export type MenuType = {
  id: number;
  label: string;
  href: string;
  subMenu?: {
    id: number;
    label: string;
    href: string;
  }[];
};
const menuList: MenuType[] = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    label: "About",
    href: "#",
  },
  {
    id: 4,
    label: "Instructors",
    href: "#",
  },
  {
    id: 5,
    label: "All Pages",
    href: "#",
    subMenu: [
      { id: 1, label: "Contact", href: "#" },
      { id: 2, label: "Blog", href: "#" },
      // { id: 3, label: "Blog Details", href: "/blog/1" },
      { id: 4, label: "Sign Up", href: "#" },
      { id: 5, label: "Login", href: "#" },
      { id: 6, label: "Reset password", href: "#" },
      { id: 7, label: "Terms and Conditions", href: "#" },
      { id: 8, label: "Privacy Policy", href: "#" },
      { id: 9, label: "404 Error", href: "/not-found" },
    ],
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-50 w-full overflow-x-clip bg-primary py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href={"/"} className="inline-block shrink-0 py-1.75">
              <Logo className="text-purple-500 max-sm:w-27" />
            </Link>
            <Navigation data={menuList} />
          </div>
          <div className="flex items-center gap-7">
            <HeaderExtraInfo />
            <MobileNavigation data={menuList} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
