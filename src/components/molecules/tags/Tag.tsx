import { Button } from "@/components/atoms/button";
import { EditIcon } from "lucide-react";

const Tag = ({
  searchKey,
  field,
  index,
  setIndex,
  setDialogShow,
}: {
  searchKey: string;
  field: any;
  index: number;
  setIndex: (resource: any) => void;
  setDialogShow: (dialogState: boolean) => void;
}) => {
  const handleClicked = () => {
    setIndex(index);
    setDialogShow(true);
  };
  return (
    <Button
      onClick={handleClicked}
      variant={"outline"}
      size="xs"
      className="bg-blue-100 text-dark hover:bg-blue-300 hover:text-white text-xs font-semibold flex items-center gap-1 cursor-pointer border-dashed border-red-500"
    >
      {field[searchKey]}
      <EditIcon size={14} />
    </Button>
  );
};

export default Tag;
