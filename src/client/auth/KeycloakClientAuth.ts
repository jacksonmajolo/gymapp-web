import { KeycloakAuth } from "@common/auth/KeycloakAuth";

export class KeycloakClientAuth extends KeycloakAuth {
  constructor() {
    super(
        import.meta.env.VITE_GYMAPP_AUTH_CLIENT_URL ?? "",
        import.meta.env.VITE_GYMAPP_AUTH_CLIENT_REALM ?? "",
        import.meta.env.VITE_GYMAPP_AUTH_CLIENT_CLIENT ?? ""
    );
  }
}
