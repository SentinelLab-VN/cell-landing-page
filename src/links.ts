export const APP_URL: string = import.meta.env.VITE_APP_URL ?? "#";
export const GITHUB_ORG = "https://github.com/cellprivacy";
export const REPOS = {
  contract: `${GITHUB_ORG}/cell-protocol-contract`,
  backend: `${GITHUB_ORG}/cell-channel`,
  frontend: `${GITHUB_ORG}/cell-frontend`,
  docs: `${GITHUB_ORG}/cell-protocol-workflow`,
};
export const X_URL = "https://x.com/cellprotocol_";
export const CONTACT_URL: string = import.meta.env.VITE_CONTACT_URL ?? X_URL;
