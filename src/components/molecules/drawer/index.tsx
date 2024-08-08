import { motion } from "framer-motion";
import { Button } from "@/components/atoms/button";
import { XIcon } from "lucide-react";

const Drawer = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      {open ? (
        <div className="w-screen h-screen fixed right-0 top-0 bg-[#0007] z-50 ">
          <motion.div
            className="w-[720px] h-screen fixed right-0 top-0 bg-muted rounded-tl rounded-bl shadow-lg px-5 py-3"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Button
              className="absolute top-3 right-3 rounded-full w-10 h-10 p-1 bg-transparent text-foreground hover:bg-primary hover:text-background transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              <XIcon size={24} />
            </Button>
            {children}
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default Drawer;
