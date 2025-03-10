import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
        <div className="w-full min-h-[90vh] flex py-[100px] justify-center">
          {/* Center Container */}
          <div className="w-full max-w-[600px] border border-zinc-300 shadow-xl flex flex-col rounded-lg overflow-hidden">
            {/* Buttons Div */}
            <div className="w-full flex items-center gap-2 bg-[#F5F5F5] shadow-lg p-2 rounded-t-lg">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => setActivePart(button.name)}
                  className={`flex-1 py-2 text-[14px] font-medium flex items-center justify-center gap-2 rounded-lg text-zinc-500 ${
                    button.name === activePart ? "bg-white shadow-md" : ""
                  }`}
                >
                  {button.icon}
                  {button.name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="border border-zinc-300 shadow-xl p-4 rounded-b-lg">
              {activePart === "Profile" ? (
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  {/* Left Section */}
                  <div className="w-full sm:w-1/2">
                    <h1 className="font-semibold">Profile</h1>
                    <p className="text-zinc-500 text-sm">
                      Your personal information
                    </p>

                    <h1 className="text-gray-500 text-sm mt-3 font-semibold">
                      Name
                    </h1>
                    <h1 className="font-semibold text-lg">{userData.name}</h1>

                    <h1 className="text-gray-500 text-sm mt-3 font-semibold">
                      Email
                    </h1>
                    <h1 className="font-semibold text-lg">{userData.email}</h1>

                    <Link to={"/my-posts"}>
                      <h1 className="text-zinc-500 text-md my-4 font-semibold hover:underline">
                        My Posts
                      </h1>
                    </Link>
                  </div>

                  {/* Profile Picture Section */}
                  <div className="w-full sm:w-1/2 flex flex-col items-center gap-4">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] object-cover rounded-full border border-zinc-300"
                      />
                    ) : (
                      <form
                        onSubmit={handleUpload}
                        className="flex flex-col items-center gap-2"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="text-sm"
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
                  <p className="text-zinc-500 text-sm">Manage your account</p>

                  <div className="w-full flex flex-col items-start gap-2 p-4 mt-4 rounded-lg bg-[#FDECEC]">
                    <h1 className="text-lg font-bold text-[#F05656]">
                      Danger Zone
                    </h1>
                    <p className="text-[#F05656] text-sm">
                      Deleting your account is permanent and cannot be undone.
                    </p>
                    <button className="flex items-center gap-2 bg-[#F05454] text-white py-2 px-4 text-sm rounded-lg">
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
