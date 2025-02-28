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
      return false;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error in login :: ", error);
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
      return await this.account.createRecovery(
        email,
        "http://localhost:5173/reset-password"
      );
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
      const redirectURL =
        window.location.hostname === "localhost"
          ? "http://localhost:5173/auth/callback"
          : "https://blogwala-nine.vercel.app/auth/callback";
      await this.account.createOAuth2Session(
        "google",
        // `${window.location.origin}/auth/callback`, // Success redirect
        redirectURL,
        `${window.location.origin}/login` //Failure redirect
      );
    } catch (error) {
      console.log("Error in loginWithGoogle :: ", error);
    }
  }
}

const authService = new AuthService();

export default authService;
