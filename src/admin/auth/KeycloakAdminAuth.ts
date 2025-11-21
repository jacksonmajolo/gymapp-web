import { KeycloakAuth } from "@common/auth/KeycloakAuth";

export class KeycloakAdminAuth extends KeycloakAuth {
  constructor() {
    super(
        import.meta.env.VITE_GYMAPP_AUTH_ADMIN_URL ?? "",
        import.meta.env.VITE_GYMAPP_AUTH_ADMIN_REALM ?? "",
        import.meta.env.VITE_GYMAPP_AUTH_ADMIN_CLIENT_ID ?? ""
    );
  }
}
