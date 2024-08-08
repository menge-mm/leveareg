import UserInfoForm from "./user-info-form";

const GeneralSetting = () => {
  return (
    <div className="flex flex-col gap-5 px-3">
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-col mt-3 justify-center">
          <h2 className="text-lg mb-1 font-medium text-gray-600">Personal Information</h2>
          <p className="text-xs text-gray-500">
            Update your personal information and profile picture
          </p>
        </div>
        {/* <div className="flex gap-3">
          <button className="btn bg-secondary border rounded border-gray-500 py-1 px-3 hover:text-background hover:bg-gray-500 transition duration-150 ease-in-out">
            Cancel
          </button>
          <button className="btn hover:bg-primary py-1 hover:text-background border border-primary rounded px-3 transition duration-150 ease-in-out">
            Save Changes
          </button>
        </div> */}
      </div>
      <UserInfoForm />
    </div>
  );
};

export default GeneralSetting;
