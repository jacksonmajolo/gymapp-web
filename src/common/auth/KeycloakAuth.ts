import type { Authenticatable } from "@common/types/Authenticatable";
import type { User } from "@common/types/User";
import Keycloak from "keycloak-js";

export class KeycloakAuth implements Authenticatable {
  private keycloak;

  constructor(url: string, realm: string, clientId: string) {
    this.keycloak = new Keycloak({
      url: url,
      realm: realm,
      clientId: clientId,
    });
  }

  async initialize() {
    await this.keycloak.init({
      onLoad: "login-required",
    });
  }

  async login() {
    await this.keycloak.login();
  }

  async logout() {
    await this.keycloak.logout();
  }

  getAccessToken() {
    return this.keycloak.token ?? null;
  }

  isAuthenticated() {
    return !!this.keycloak.authenticated;
  }

  getUser(): User | null {
    if (!this.keycloak.tokenParsed) return null;

    return {
      id: this.keycloak.subject ?? "",
      username: this.keycloak.tokenParsed.preferred_username ?? "",
      email: this.keycloak.tokenParsed.email,
      roles: this.keycloak.tokenParsed.realm_access?.roles ?? [],
      permissions: this.keycloak.tokenParsed.resource_access
        ? Object.values(this.keycloak.tokenParsed.resource_access)
            .map((resoruceAccess: any) => resoruceAccess.roles)
            .flat()
        : [],
    };
  }
}