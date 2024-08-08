import Link from 'next/link';
import { Button } from '@/components/atoms/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/atoms/avatar';
import { getAvatarFallback } from '@/utils/userInfo';
import { BellIcon, InfoIcon, LockIcon, LogOutIcon, Settings } from 'lucide-react';
import { useAuth } from '@/auth/AuthProvider';

const ProfileMenu = () => {
  const { userDetails: userInfo, logout } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" className="rounded-full hidden md:block mr-5">
          <Avatar className="rounded-full border-2 border-primary text-foreground">
            <AvatarImage src={userInfo?.avatar} alt="user image" />
            <AvatarFallback>{getAvatarFallback(userInfo ? userInfo.displayName : 'Unknown User')}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[200px]">
        <DropdownMenuLabel>{userInfo?.displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={`/account-info`}>
          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </Link>
        <Link href={'/information'}>
          <DropdownMenuItem className="cursor-pointer">
            <InfoIcon className="mr-2 h-4 w-4" />
            <span>Information</span>
          </DropdownMenuItem>
        </Link>
        <Link href={'/privacy-settings'}>
          <DropdownMenuItem className="cursor-pointer">
            <LockIcon className="mr-2 h-4 w-4" />
            <span>Privacy Settings</span>
          </DropdownMenuItem>
        </Link>
        <Link href={'/notifications'}>
          <DropdownMenuItem className="cursor-pointer">
            <BellIcon className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={logout}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <DropDownMenu>
    //   <DropDownMenuTrigger>
    //     <Button size="icon" className="rounded-full">
    //       <Avatar className="rounded-full border-2 border-primary text-foreground">
    //         <AvatarImage src={userInfo?.avatar} alt="user image" />
    //         <AvatarFallback>
    //           {getAvatarFallback(userInfo ? userInfo.displayName : "Unknown User")}
    //         </AvatarFallback>
    //       </Avatar>
    //     </Button>
    //   </DropDownMenuTrigger>

    //   <DropDownMenuContent open={true}>
    //     <DropDownMenuLabel>{userInfo?.displayName}</DropDownMenuLabel>
    //     <DropdownMenuSeparator />
    //     <Link href={`/account-info`}>
    //       <DropDownMenuItem>
    //         <Settings className="mr-2 h-4 w-4" />
    //         <span>Settings</span>
    //       </DropDownMenuItem>
    //     </Link>
    //   </DropDownMenuContent>
    // </DropDownMenu>
  );
};

export default ProfileMenu;
