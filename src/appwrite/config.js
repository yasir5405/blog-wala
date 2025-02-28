import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async uploadProfileImage(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteUserBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error uploading profile image", error);
      return null;
    }
  }

  async saveProfileImage(userId, imageUrl) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserProfileCollectionId,
        ID.unique(),
        {
          userId,
          imageUrl,
        }
      );
    } catch (error) {
      console.log("Error saving profile Image: ", error);
      return null;
    }
  }

  async getProfileImage(userId) {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserProfileCollectionId,
        [Query.equal("userId", userId)]
      );

      if (response.documents.length > 0) {
        return response.documents[0].imageUrl;
      }

      return null;
    } catch (error) {
      console.log("Error fetching profile Image: ", error);
      return null;
    }
  }
}

const service = new Service();

export default service;
