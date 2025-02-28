import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import service from "../appwrite/config.js";
import conf from "../conf/conf.js";
import { useEffect, useState } from "react";
import { AlertCircle, User } from "lucide-react";
const UserProfile = () => {
  const { userId } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const buttons = [
    {
      name: "Profile",
      icon: <User size={16} />,
    },
    {
      name: "Account",
      icon: <AlertCircle size={16} />,
    },
  ];

  const [activePart, setActivePart] = useState(buttons[0].name);

  // Fetching the User Profile Pic
  useEffect(() => {
    const fetchProfilePic = async () => {
      if (userId) {
        const imageUrl = await service.getProfileImage(userId);

        setProfileImage(imageUrl ? imageUrl : null);
      }
    };

    fetchProfilePic();
  }, [userId, selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      console.log("No files Selected");
      return;
    }

    const uploadedFile = await service.uploadProfileImage(selectedFile);
    if (!uploadedFile) {
      console.log("File upload failed.");
      return;
    }

    const fileUrl = service.storage.getFilePreview(
      conf.appwriteUserBucketId,
      uploadedFile.$id
    );

    const userId = userData?.$id;
    const savedImage = await service.saveProfileImage(userId, fileUrl);

    if (savedImage) {
      console.log("Profile image saved successfully:", savedImage);
      setProfileImage(fileUrl);
      setSelectedFile(null);
      // TODO: Update UI with new profile image
    } else {
      console.error("Failed to save profile image.");
    }
  };

  return (
    <>
      {userId == userData?.$id && (
        <div className="w-full h-[90vh]  flex py-[100px] justify-center">
          {/* Center Container */}
          <div className="w-[600px] border-[1px] border-zinc-300 shadow-xl flex flex-col rounded-lg overflow-hidden">
            {/* Buttons Div */}
            <div className="w-full h-[40px] bg-[#F5F5F5] rounded-xl flex items-center gap-[10px] shadow-lg">
              {buttons.map((button, index) => (
                <button
                  className={`px-[40px] h-full text-[14px] font-medium flex items-center justify-center gap-[7px] rounded-lg text-zinc-500 ${
                    button.name == activePart ? "bg-white shadow-md" : ""
                  }`}
                  key={index}
                  onClick={() => setActivePart(button.name)}
                >
                  {button.icon}
                  {button.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className=" w-full border-[1px] border-zinc-300 shadow-xl px-[30px] rounded-xl h-full py-[15px] mt-[8px]">
              {activePart === "Profile" ? (
                <div className="flex">
                  <div className="w-[50%]">
                    <h1 className="font-semibold">Profile</h1>
                    <p className="text-zinc-500 text-[14px]">
                      Your personal information
                    </p>

                    <h1 className="text-gray-500 text-[16px] mt-[15px] font-semibold">
                      Name{" "}
                    </h1>

                    <h1 className="font-semibold text-[18px]">
                      {userData.name}
                    </h1>

                    <h1 className="text-gray-500 text-[16px] mt-[15px] font-semibold">
                      Email{" "}
                    </h1>

                    <h1 className="font-semibold text-[18px]">
                      {userData.email}
                    </h1>
                  </div>

                  <div className="w-[50%]  flex items-center justify-center">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="object-cover h-[180px] w-[180px] rounded-full"
                      />
                    ) : (
                      <form
                        onSubmit={handleUpload}
                        className="flex flex-col gap-4"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                          Upload Profile Pic
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="font-semibold">Account</h1>
                  <p className="text-zinc-500 text-[14px]">
                    Manage your account
                  </p>
                  <p className="text-zinc-500 text-[14px] my-[20px]">
                    Your account is currently active and in good standing.
                  </p>

                  <div className="w-full flex flex-col justify-center gap-[4px] items-start h-[130px] rounded-lg bg-[#FDECEC] px-[15px]">
                    <h1 className="text-[18px] font-bold text-[#F05656]">
                      Danger Zone
                    </h1>

                    <p className="text-[#F05656] text-[14px] mt-[3px] font-[500]">
                      Deleting your account is permanent and cannot be undone.
                    </p>

                    <button className="flex items-center justify-center gap-[10px] bg-[#F05454] text-white mt-[10px] py-[6px] px-[10px] text-[14px] rounded-lg">
                      <AlertCircle size={16} />
                      Delete Account
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
