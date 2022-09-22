module.exports = {
  // pwa: {
  //   disable: process.env.NODE_ENV === "development",
  //   dest: "public",
  //   runtimeCaching,
  // },
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};
