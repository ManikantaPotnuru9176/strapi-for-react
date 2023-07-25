module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "containers-us-west-72.railway.app"),
      port: env.int("PGPORT", 6814),
      database: env("PGDATABASE", "railway"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "cjjgeZ4LUJnkKoJ8lZ04"),
      ssl: env.bool(true),
    },
    pool: { min: 0 },
  },
});
