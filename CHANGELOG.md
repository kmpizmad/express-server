# Changelog v0.1.0-alpha.v1

### Removed

- `body-parser` as a dependency. Server now uses the built-in `express.json()` and `express.urlencoded({ extended: true })` middlewares for parsing incoming data

### Added

- Jest config for testing purpose
- Test suite for `testEndpoint.ts`. Needed to optimize the server for proper testing.

### Changed

- `routes` property in `createServer()` now uses an array of handlers.
- `errorHandlers` are now abstracted into their own source file - `middlewares/errors.ts`.
- Dummy data and `.post()` route added to `testEndpoint.handlers.ts`
- `startServer` now returns a `http.Server` instance
