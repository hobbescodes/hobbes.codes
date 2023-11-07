const sitemap = async () => {
  const routes = ["", "/about", "/projects", "/contact"].map((route) => ({
    url: `https://hobbes.codes${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
};

export default sitemap;
