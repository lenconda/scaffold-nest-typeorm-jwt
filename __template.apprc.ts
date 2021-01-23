export default {
  name: '<%= name %>',
  db: {
    type: '<%= dbType %>',
    host: '<%= dbHost %>',
    port: parseInt('<%= dbPort %>', 10),
    username: '<%= dbUsername %>',
    password: '<%= dbPassword %>',
    database: '<%= dbName %>',
  },
  jwt: {
    secret: '<%= jwtSecret %>',
    signOptions: {
      expiresIn: '<%= jwtExpires %>',
    },
  },
};
