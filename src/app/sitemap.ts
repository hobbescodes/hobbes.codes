const ROUTES = ["", "/about", "/projects", "/contact", "/login"];

const sitemap = async () => {
  const routes = ROUTES.map((route) => ({
    url: `https://hobbes.codes${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
};

export default sitemap;
