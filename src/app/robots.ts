const robots = () => {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://hobbes.codes/sitemap.xml",
    host: "https://hobbes.codes",
  };
};

export default robots;
