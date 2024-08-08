import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getCurrentPathName = (path: string) => {
  switch (path) {
    case "/":
      return "Registration";
    case "/information":
      return "General Information";
    case "/privacy-settings":
      return "Privacy Settings";
    case "/account-info":
      return "Account Information";
    case "/about":
      return "About Us";
    case "/notifications":
      return "Notifications";
    default:
      return "";
  }
};

const DashboardBreadcrumb = () => {
  const pathname = usePathname();

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={"/"}
              className="text-foreground no-underline font-lg font-bold hover:underline"
            >
              LEVEA
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              href={"/"}
              className="text-foreground no-underline font-lg font-bold hover:underline"
            >
              {getCurrentPathName(pathname)}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DashboardBreadcrumb;
