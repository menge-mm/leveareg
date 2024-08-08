import React from "react";
import { Button } from "../../atoms/button";
import { BadgeInfoIcon, DownloadIcon, TrashIcon } from "lucide-react";
import { Card } from "../../atoms/card";
import { dataUsagePolicy } from "./data";
import { useDialog } from "../../../contexts/Dialog";

const DataManagement = () => {
  const { openDialogWithContent } = useDialog();

  const handleDataDownload = async () => {
    // To-Do
  };

  const requestAccountDeletion = async () => {
    // To-Do
  };
  return (
    <div className="mt-4 md:ml-2 flex flex-wrap gap-2 w-full">
      <Card className="flex flex-col items-center flex-1 py-3 border-gray-200 min-w-[300px]">
        <BadgeInfoIcon
          size={54}
          className="mb-2 text-primary bg-primary/40 p-2 rounded-full border-2 stroke-black"
        />
        <h5>Data Usage</h5>
        <p>Know how we utilize your data.</p>
        <Button
          variant="link"
          onClick={() => {
            openDialogWithContent(
              dataUsagePolicy.title,
              dataUsagePolicy.description,
              dataUsagePolicy.content
            );
          }}
          className="mt-3"
        >
          Learn More
        </Button>
      </Card>
      <Card className="flex flex-col items-center flex-1 py-3 border-gray-200 min-w-[300px]">
        <DownloadIcon
          size={54}
          className="mb-2 text-primary bg-primary/40 p-2 rounded-full border-2 stroke-black"
        />
        <h5>Data Download</h5>
        <p>Get a copy of all your data.</p>
        <Button variant="link" onClick={handleDataDownload} className="mt-3">
          Download
        </Button>
      </Card>
      <Card className="flex flex-col items-center flex-1 py-3 border-gray-200">
        <TrashIcon
          size={54}
          className="mb-2 text-primary bg-primary/40 p-2 rounded-full border-2 stroke-black"
        />
        <h5>Data Deletion</h5>
        <p>Erase your account and its data.</p>
        <Button variant="destructive" onClick={requestAccountDeletion} className="mt-3">
          Delete
        </Button>
      </Card>
    </div>
  );
};

export default DataManagement;
