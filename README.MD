# Express Server with TypeScript

Basic setup for an Express application.

Type `yarn start` in the CLI to install `node_modules` and start the server

See changes [here](https://github.com/kmpizmad/express-server/blob/main/CHANGELOG.md)

### Dependencies (vendors)

`express:` Server framework.

`dotenv:` For importing environment variables which is used 99.99% of the time

`winston:` Logging HTTP requests

`nodemailer:` Sends email to developer(s) when an error occurs in today's `error-logs.log`

`redis:` For caching the number of last known errors

### Folder structure

```
project root
└ logs
└ server
    └ middlewares
    └ routes
    └ utils
    └ vendors
└ types
```

### MIT License

Copyright (c) 2021 Viktor Nagy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
