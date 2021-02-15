# Changelog v1.0.0

### Added

- [Nodemailer](https://www.npmjs.com/package/nodemailer) and [Redis](https://www.npmjs.com/package/redis) as a dependency. Server now warns developers of new errors via email
- `utils` folder which contains utility functions
- `scanner` and `reportErrors` functions which warns the developers of an occuring error. Scans every 15 minutes
- `redis.ts` to create a redis client which holds the last known number of errors

### Changed

- `startServer` to periodically scan `error-logs.log` file
