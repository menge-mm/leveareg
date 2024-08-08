import { CircleHelp, Info as CircleInfo, TriangleAlert, BookUser, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/atoms/dropdown-menu';
import styles from './Footer.module.css';
import Link from 'next/link';

const getFormattedDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
};

const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t py-2 z-10 flex h-14 items-center justify-between gap-4 bg-primary-foreground pl-4 shadow-sm">
      <span className={`${styles.textSpan} ${styles.textSpanBottomMargin}`}>{getFormattedDate()}</span>

      <span className={`${styles.textSpan} hidden md:block`}>
        This Application is a protected project through Hora e.V. ZVR: 1335812639.
      </span>

      <div className="flex items-center">
        <span className={styles.textSpan}>BY LEVEA™</span>
        <div className="mx-10 bg-background text-foreground">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className={styles.dropdownToggle}>
              <CircleInfo color="#222" className="" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="px-3 mr-8 border-primary/40">
              <DropdownMenuLabel className="text-foreground text-xl">About LEVEA</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="flex flex-col gap-1 pb-3">
                <DropdownMenuItem className="px-2 flex gap-3  bg-background text-foreground py-2 rounded-md cursor-pointer hover:bg-muted focus:bg-muted text-md">
                  <BookUser size={24} className="text-primary/60" />
                  <Link href="/">Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 flex gap-3  bg-background text-foreground py-2 rounded-md cursor-pointer hover:bg-muted focus:bg-muted text-md">
                  <CircleHelp size={24} className="text-primary/60" />
                  <Link href="/information">Help</Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="px-2 flex gap-3  bg-background text-foreground py-2 rounded-md cursor-pointer hover:bg-muted focus:bg-muted text-md">
                  <TriangleAlert size={24} className="text-primary/60" />
                  <Link href="/privacy-settings">Privacy Settings</Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="px-2 flex gap-3  bg-background text-foreground py-2 rounded-md cursor-pointer hover:bg-muted focus:bg-muted text-md">
                  <CircleInfo size={24} className="text-primary/60" />
                  <Link href="/notifications">Notifications</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 flex gap-3  bg-background text-foreground py-2 rounded-md cursor-pointer hover:bg-muted focus:bg-muted text-md">
                  <Settings size={24} className="text-primary/60" />
                  <Link href="/notifications">Settings</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
