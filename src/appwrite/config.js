import { Account, Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  account;
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
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
      return false;
    }
  }

  async uploadImage(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Error in uploadImage :: ", error);
      throw error;
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

  async createPost({ title, content, featuredImage, status }) {
    try {
      const user = await this.account.get();
      const author = user.name;
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          featuredImage,
          status,
          userId: user.$id,
          author,
        }
      );
    } catch (error) {
      console.log("Error in createPost :: ", error);
      throw error;
    }
  }

  async getAllPosts() {
    try {
      const posts = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("status", "active")]
      );
      return posts.documents;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

const service = new Service();

export default service;
