/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Content-Generator_owner:zVNU9wtWiho3@ep-falling-dew-a15aojtt.ap-southeast-1.aws.neon.tech/AI-Content-Generator?sslmode=require',
    }
  };