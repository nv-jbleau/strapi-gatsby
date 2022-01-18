module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c68af4f9ffa946cbd8087337a2d10ffc'),
  },
});
