import Image from "next/image";
import Link from "next/link";
import { Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/atoms/tooltip";
import { navs } from "../common/nav";
import { Nav } from "../common/types";

const SideBar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-6 px-2 sm:py-5">
        <Link
          href={"/"}
          className="group flex shrink-0 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground md:h-10 md:w-10 md:text-base border border-primary"
        >
          <Image
            src={"/images/logoMinimal.jpg"}
            width={28}
            height={28}
            alt="LEVEA logo"
            className="rounded-full"
          />
          <span className="sr-only">LEVEA</span>
        </Link>
        {navs.map((nav: Nav) => (
          <Tooltip key={nav.path}>
            <TooltipTrigger asChild>
              <Link
                href={nav.path}
                className="bg-muted hover:bg-[#2667ff48] flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
              >
                {nav.icon}
                <span className="sr-only"> {nav.tooltip}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-[#2667ff] text-white z-50">
              {nav.tooltip}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={`/settings`}
              className="bg-muted flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
            >
              <Settings className="h-7 w-7" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-[#2667ff] text-white z-50">
            Account Settings
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default SideBar;
