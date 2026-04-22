/**
 * URLs públicas configurables. En producción, definir en `.env` el portal real
 * de inversionista cuando lo indique el negocio.
 */
export const INVESTOR_PORTAL_URL =
  process.env.NEXT_PUBLIC_INVESTOR_PORTAL_URL ?? "https://iamgroup.pe";

export const LOGO_IAM_URL =
  "https://iamgroup.pe/wp-content/themes/iamgroup/assets/img/Logo-IAM-02.png";
