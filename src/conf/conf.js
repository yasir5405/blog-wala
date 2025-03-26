const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteUserProfileCollectionId: String(
    import.meta.env.VITE_APPWRITE_USER_PROFILE_COLLECTION_ID
  ),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwriteUserBucketId: String(import.meta.env.VITE_APPWRITE_PROFILE_BUCKET_ID),
  appwriteContactCollectionId: String(
    import.meta.env.VITE_APPWRITE_CONTACT_COLLECTION_ID
  ),
};

export default conf;
