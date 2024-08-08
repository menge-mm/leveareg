import React from "react";
import { useContext, createContext } from "react";
import { Button } from "@/components/atoms/button";
import { ArrowLeft } from "lucide-react";
import { ToastAction } from "../components/atoms/toast";
import { useToast } from "../components/atoms/use-toast";
import { motion } from "framer-motion";

const GlobalDialog = ({ actionButtons = [] }: { actionButtons: any[] }) => {
  const { title, content, description, open, closeDialog } = useDialog();

  return (
    open && (
      <motion.div
        initial={{ opacity: 0.5, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="z-30 w-screen border h-screen fixed top-0 left-0 flex justify-center pt-2 lg:pt-5  bg-black/40 items-start overflow-hidden"
      >
        <div className="relative max-h-[95vh] flex flex-col w-full md:w-[640px] xl:w-[920px] rounded-lg h-auto bg-gray-50 px-3 md:px-3 lg:px-5 gap-3">
          <div className="w-full mt-5 md:mt-1">
            <div className="flex text-foreground flex-row items-center w-full mx-0 justify-between">
              <Button
                className="md:hidden absolute top-3 hover:border focus:border transition duration-150  bg-transparent  rounded-full hover:bg-gray-200 py-2"
                size="xs"
                onClick={closeDialog}
              >
                <ArrowLeft size={24} className="w-10 h-6  text-gray-500" />
                <span className="sr-only">Back</span>
              </Button>
            </div>
            <h2 className="me-auto mt-4 pt-1 text-2xl mb-3 font-semibold  px-3 lg:px-5">{title}</h2>
            {description && (
              <p className="me-auto text-start text-sm text-muted-foreground px-3 lg:px-5">
                {description}
              </p>
            )}
          </div>
          <div className="max-h-[75vh] grid gap-4 overflow-y-auto scrollbar px-3 lg:px-5">
            {content}
          </div>
          <div className="flex flex-row items-center w-full justify-end my-5">
            <Button
              variant="destructive"
              onClick={closeDialog}
              type="button"
              className="text-white mr-5 md:mr-0"
            >
              Close
            </Button>

            {actionButtons.length > 0
              ? actionButtons.map((actionButton) => (
                  <Button
                    key={actionButton.text}
                    type={actionButton.type || "button"}
                    onClick={actionButton.onClick}
                    className={actionButton.style}
                  >
                    {actionButton.text}
                  </Button>
                ))
              : null}
          </div>
        </div>
      </motion.div>
    )
  );
};

export default GlobalDialog;

type DialogContextType = {
  title: string;
  description: string;
  content: React.ReactNode;
  open: boolean;
  closeDialog: () => void;
  openDialogWithContent: (title: string, description: string, content: React.ReactNode) => void;
};

const DialogContext = createContext<DialogContextType>({
  title: "",
  description: "",
  content: null,
  open: false,
  closeDialog: () => {},
  openDialogWithContent: (title: string, description: string, content: React.ReactNode) => {},
});

export const useDialog = () => {
  const { toast } = useToast();
  const context = useContext(DialogContext);

  if (!context) {
    toast({
      title: "Unable to open dialog",
      description: "Dialog context is not available. please do something about it",
      variant: "destructive",
      action: (
        <ToastAction altText="Close" onClick={() => {}} className="bg-red-700">
          Close
        </ToastAction>
      ),
    });
  }
  return context;
};

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");

  const closeDialog = () => setOpen(false);
  const openDialogWithContent = (title: string, description: string, content: React.ReactNode) => {
    setOpen(true);
    setTitle(title);
    setDescription(description);
    setContent(content);
  };

  return (
    <DialogContext.Provider
      value={{ content, title, description, open, closeDialog, openDialogWithContent }}
    >
      <GlobalDialog actionButtons={[]} />
      {children}
    </DialogContext.Provider>
  );
};
