import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("Error is createAccount :: ", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error in login :: ", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error in getCurrentUser :: ", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }

  async recoverPassword({ email }) {
    try {
      const resetUrl =
        import.meta.env.MODE === "development"
          ? "http://localhost:5173/reset-password"
          : "https://blog-wala.vercel.app/reset-password"; // Use Vite env variables
      return await this.account.createRecovery(email, resetUrl);
    } catch (error) {
      console.log("Error in recoverPassword :: ", error);
    }
  }

  async resetPassword(userId, secret, password) {
    try {
      await this.account.updateRecovery(userId, secret, password, password);
      return true;
    } catch (error) {
      console.log("Error in resetPassword :: ", error);
    }
  }

  async loginWithGoogle() {
    try {
      const baseUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:5173"
          : "https://blog-wala.vercel.app";
      await this.account.createOAuth2Session(
        "google",
        `${baseUrl}/auth/callback`,
        `${baseUrl}/login` //Failure redirect
      );
    } catch (error) {
      console.log("Error in loginWithGoogle :: ", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
