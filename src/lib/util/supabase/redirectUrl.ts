import { SITE_URL, VERCEL_URL } from "lib/config/env";

export const getRedirectURL = () => {
  let url =
    SITE_URL ?? // Set this to your site URL in production env.
    VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";
  // Make sure to include `https://` when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
