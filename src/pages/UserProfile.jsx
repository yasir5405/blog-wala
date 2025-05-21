// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import service from "../appwrite/config.js";
// import conf from "../conf/conf.js";
// import { useEffect, useState } from "react";
// import { AlertCircle, User } from "lucide-react";

// const UserProfile = () => {
//   const { userId } = useParams();
//   const userData = useSelector((state) => state.auth.userData);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [profileImage, setProfileImage] = useState(null);

//   const buttons = [
//     {
//       name: "Profile",
//       icon: <User size={16} />,
//     },
//     {
//       name: "Account",
//       icon: <AlertCircle size={16} />,
//     },
//   ];

//   const [activePart, setActivePart] = useState(buttons[0].name);

//   // Fetching the User Profile Pic
//   useEffect(() => {
//     const fetchProfilePic = async () => {
//       if (userId) {
//         const imageUrl = await service.getProfileImage(userId);
//         setProfileImage(imageUrl ? imageUrl : null);
//       }
//     };

//     fetchProfilePic();
//   }, [userId, selectedFile]);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!selectedFile) {
//       console.log("No files Selected");
//       return;
//     }

//     const uploadedFile = await service.uploadProfileImage(selectedFile);
//     if (!uploadedFile) {
//       console.log("File upload failed.");
//       return;
//     }

//     const fileUrl = service.storage.getFilePreview(
//       conf.appwriteUserBucketId,
//       uploadedFile.$id
//     );

//     const userId = userData?.$id;
//     const savedImage = await service.saveProfileImage(userId, fileUrl);

//     if (savedImage) {
//       console.log("Profile image saved successfully:", savedImage);
//       setProfileImage(fileUrl);
//       setSelectedFile(null);
//     } else {
//       console.error("Failed to save profile image.");
//     }
//   };

//   return (
//     <>
//       {userId == userData?.$id && (
//         <div className="pt-[185px] w-full min-h-[90.6vh] flex py-[100px] justify-center bg-zinc-950 text-white">
//           {/* Center Container */}
//           <div className="w-full max-w-[600px] border-zinc-800/50 bg-zinc-950 backdrop-blur-lg shadow-xl flex flex-col rounded-lg overflow-hidden">
//             {/* Buttons Div */}
//             <div className="w-full flex items-center gap-2 bg-zinc-900/50 shadow-lg p-2 rounded-t-lg">
//               {buttons.map((button, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActivePart(button.name)}
//                   className={`flex-1 py-2 text-[14px] font-medium flex items-center justify-center gap-2 rounded-lg transition-all ${
//                     button.name === activePart
//                       ? "bg-zinc-800/70 text-white shadow-lg"
//                       : "text-zinc-400 hover:text-white"
//                   }`}
//                 >
//                   {button.icon}
//                   {button.name}
//                 </button>
//               ))}
//             </div>

//             {/* Content */}
//             <div className="border border-zinc-700/50 bg-zinc-800/30 p-4 rounded-b-lg">
//               {activePart === "Profile" ? (
//                 <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
//                   {/* Left Section */}
//                   <div className="w-full sm:w-1/2">
//                     <h1 className="font-semibold text-white">Profile</h1>
//                     <p className="text-zinc-400 text-sm">
//                       Your personal information
//                     </p>

//                     <h1 className="text-zinc-500 text-sm mt-3 font-semibold">
//                       Name
//                     </h1>
//                     <h1 className="font-semibold text-lg">{userData.name}</h1>

//                     <h1 className="text-zinc-500 text-sm mt-3 font-semibold">
//                       Email
//                     </h1>
//                     <h1 className="font-semibold text-lg">{userData.email}</h1>

//                     <Link to={"/my-posts"}>
//                       <h1 className="text-zinc-400 text-md my-4 font-semibold hover:underline hover:text-sky-400">
//                         My Posts
//                       </h1>
//                     </Link>
//                   </div>

//                   {/* Profile Picture Section */}
//                   <div className="w-full sm:w-1/2 flex flex-col items-center gap-4">
//                     {profileImage ? (
//                       <img
//                         src={profileImage}
//                         alt="Profile"
//                         className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] object-cover rounded-full border border-zinc-700/50"
//                       />
//                     ) : (
//                       <form
//                         onSubmit={handleUpload}
//                         className="flex flex-col items-center gap-2"
//                       >
//                         <input
//                           type="file"
//                           accept="image/*"
//                           onChange={handleFileChange}
//                           className="text-sm text-zinc-400"
//                         />
//                         <button
//                           type="submit"
//                           className="bg-white hover:bg-zinc-200 text-black px-4 py-2 rounded-lg"
//                         >
//                           Upload Profile Pic
//                         </button>
//                       </form>
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <h1 className="font-semibold text-white">Account</h1>
//                   <p className="text-zinc-400 text-sm">Manage your account</p>

//                   <div className="w-full flex flex-col items-start gap-2 p-4 mt-4 rounded-lg bg-red-500/20 border border-red-500/30">
//                     <h1 className="text-lg font-bold text-red-400">
//                       Danger Zone
//                     </h1>
//                     <p className="text-red-300 text-sm">
//                       Deleting your account is permanent and cannot be undone.
//                     </p>
//                     <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-sm rounded-lg transition-all">
//                       <AlertCircle size={16} />
//                       Delete Account
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserProfile;

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
      conf.appwriteBucketId, // changed from conf.appwriteUserBucketId
      uploadedFile.$id
    );

    const userId = userData?.$id;
    const savedImage = await service.saveProfileImage(userId, fileUrl);

    if (savedImage) {
      console.log("Profile image saved successfully:", savedImage);
      setProfileImage(fileUrl);
      setSelectedFile(null);
    } else {
      console.error("Failed to save profile image.");
    }
  };

  return (
    <>
      {userId === userData?.$id && (
        <div className="md:pt-[220px] pt-[120px] lg:pt-[220px] w-full min-h-screen flex justify-center bg-zinc-950 text-white px-6 md:px-12 lg:px-20">
          {/* Main Container */}
          <div className="w-full max-w-[600px] bg-zinc-950/50 shadow-lg rounded-lg overflow-hidden">
            {/* Buttons Div */}
            <div className="w-full flex items-center gap-2 bg-zinc-800/50 shadow-lg p-2 rounded-t-lg">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => setActivePart(button.name)}
                  className={`flex-1 py-2 text-[14px] font-medium flex items-center justify-center gap-2 rounded-lg transition-all ${
                    button.name === activePart
                      ? "bg-zinc-800 text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {button.icon}
                  {button.name}
                </button>
              ))}
            </div>

            {/* Content Section */}
            <div className="border border-zinc-700/50 bg-zinc-800/40 p-4 rounded-b-lg">
              {activePart === "Profile" ? (
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Profile Info */}
                  <div className="w-full sm:w-1/2 space-y-3">
                    <h1 className="text-lg font-semibold text-white">
                      Profile
                    </h1>
                    <p className="text-zinc-400 text-sm">
                      Your personal information
                    </p>

                    <div className="mt-4 space-y-2">
                      <h2 className="text-zinc-500 text-sm font-semibold">
                        Name
                      </h2>
                      <p className="font-semibold text-lg">{userData.name}</p>

                      <h2 className="text-zinc-500 text-sm font-semibold">
                        Email
                      </h2>
                      <p className="font-semibold text-lg">{userData.email}</p>

                      <Link to={"/my-posts"}>
                        <p className="text-zinc-400 text-md mt-2 font-semibold hover:underline hover:text-zinc-200">
                          My Posts
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="w-full sm:w-1/2 flex flex-col items-center gap-4">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="h-[150px] w-[150px] sm:h-[180px] sm:w-[180px] object-cover rounded-full border border-zinc-700/50"
                      />
                    ) : (
                      <form
                        onSubmit={handleUpload}
                        className="flex flex-col items-center gap-3 w-full"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="text-sm text-zinc-400 w-full"
                        />
                        <button
                          type="submit"
                          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-all"
                        >
                          Upload Profile Pic
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-lg font-semibold text-white">Account</h1>
                  <p className="text-zinc-400 text-sm">Manage your account</p>

                  {/* Danger Zone */}
                  <div className="w-full flex flex-col items-start gap-3 p-4 mt-4 rounded-lg bg-red-500/10 border border-red-500/30">
                    <h1 className="text-lg font-bold text-red-400">
                      Danger Zone
                    </h1>
                    <p className="text-red-300 text-sm">
                      Deleting your account is permanent and cannot be undone.
                    </p>
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 text-sm rounded-lg transition-all">
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
