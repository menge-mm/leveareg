import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { Button } from "@/components/atoms/button";
import { Copy, MoreVertical } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/atoms/dropdown-menu";

import ChartList from "../charts/chart";

const RightSidebar = () => {
  return (
    <div className="hidden mt-3 md:block">
      <Card className="mt-[2px] border-gray-200" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-2xl">
              Latest Activities
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Latest Activities</span>
              </Button>
            </CardTitle>
            <CardDescription className="font-mono">{new Date().toDateString()}</CardDescription>
          </div>
          {/* <div className="ml-auto flex items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">Actions for Summary</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Reset</DropdownMenuItem>
                <DropdownMenuItem>Hide</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Show</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
        </CardHeader>
        <CardContent className="p-3 md:p-6 text-sm">
          <ChartList />
        </CardContent>
        {/* <CardFooter className="flex flex-row items-center bg-muted/50 px-6 py-3"></CardFooter> */}
      </Card>
    </div>
  );
};

export default RightSidebar;
