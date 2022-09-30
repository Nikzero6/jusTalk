//Contains all the routes of the app
const ROUTES = {
  ONBOARDING: "/onboarding",
  EDIT_FLOW: "/edit-flow",
  THEMES: "/themes",
  ACCOUNT_INFORMATION: "/account-information",
  FLOWS: "/flows",
  SHOPIFY_AUTH: "/shopifyAuth",
  DASHBOARD: "/dashboard",
  TEMPLATES: "/template-list",
  RECOMMENDATIONS: "/recommendations",
  BILLING: "/billing",
  SMS_TEMPLATES: "/sms-templates",
  CAMPAIGN_TEMPLATES: "/campaign-templates",
  SMS_CONFIG: "/sms-config",
  CAMPAIGNS: "/campaigns",
  MEDIA_LIBRARY: "/media-library"
};

export const POSSIBLE_TYPES = {
  image: "image",
  paragraph: "paragraph",
  single_line: "single_line",
  single_line_rte: "single_line_rte",
  link: "link",
  font: "font",
  color: "color",
  programmed: "programmed"
};

export const SCOPES = {
  GLOBAL: "GLOBAL",
  LOCAL: "LOCAL"
};

export const PUBLISH_STATUS = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED"
};

export default ROUTES;
