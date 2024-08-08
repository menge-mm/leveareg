import DashboardBreadcrumb from "./breadcrumb";
import MobileMenu from "./mobile-menu";
import Search from "./search";
import ProfileMenu from "./profile-menu";

const Header = () => {
  return (
    <header className="py-2 bg-gray-100 w-full top-0 z-10 flex h-14 items-center justify-between pl-5 rounded">
      <MobileMenu />
      <DashboardBreadcrumb />
      <div className="flex items-center gap-5">
        <Search />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
