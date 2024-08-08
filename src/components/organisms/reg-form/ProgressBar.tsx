import { Progress } from "@/components/atoms/progress";
import { cn } from "@/lib/utils";

const ProgressBar = ({
  stepLength,
  current,
  className,
}: {
  stepLength: number;
  current: number;
  className: string;
}) => {
  const progress = Math.ceil((current / stepLength) * 100);

  return <Progress value={progress} className={cn("h-2", className)} />;
};

export default ProgressBar;
