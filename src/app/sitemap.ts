import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mdesinestudio.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/architectural",
    "/services/interior",
    "/services/structural",
    "/services/vastu",
    "/services/3d-visualization",
    "/services/estimation",
    "/services/site-mgmt",
    "/services/drawing-approval",
    "/projects",
    "/gallery",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/contact" || route === "/about" ? 0.9 : 0.8,
  }));
}
