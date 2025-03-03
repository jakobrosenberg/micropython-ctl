# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.15.3](https://github.com/metachris/micropython-ctl/compare/v1.15.2...v1.15.3) (2022-07-27)


### Bug Fixes

* better handling of safeboot during rawrepl ([56542b3](https://github.com/metachris/micropython-ctl/commit/56542b35817f52517e33d8e65d88d09fcac87706))

### [1.15.2](https://github.com/metachris/micropython-ctl/compare/v1.15.1...v1.15.2) (2022-07-27)


### Bug Fixes

* leading slashes were lost for mkdirs ([c4b86db](https://github.com/metachris/micropython-ctl/commit/c4b86dbe99bfdc4149dcfda893ca484c7dda3d86))
* rawRepl didn't detect safeboot (0x06) ([e3e271c](https://github.com/metachris/micropython-ctl/commit/e3e271c5768ac3c630fde31ab77464e6c20b18ba))

### [1.15.1](https://github.com/metachris/micropython-ctl/compare/v1.15.0...v1.15.1) (2022-07-21)


### Bug Fixes

* console.log should be logger.debug ([6e12d03](https://github.com/metachris/micropython-ctl/commit/6e12d03e95a1f6ad4095c286aaf6b3283f991d5b))

## [1.15.0](https://github.com/metachris/micropython-ctl/compare/v1.14.3...v1.15.0) (2022-07-21)


### Features

* added mkdirs ([63334ab](https://github.com/metachris/micropython-ctl/commit/63334aba29fa6b66ee0715f79c420210cc1ecd84))

### [1.14.3](https://github.com/metachris/micropython-ctl/compare/v1.14.2...v1.14.3) (2022-07-18)


### Bug Fixes

* regression error ([e5420af](https://github.com/metachris/micropython-ctl/commit/e5420af88563db55d75e5ca08baf93609eb207a1))

### [1.14.2](https://github.com/metachris/micropython-ctl/compare/v1.14.1...v1.14.2) (2022-07-04)


### Bug Fixes

* resetting device with boot scripts should not throw errors ([c020fee](https://github.com/metachris/micropython-ctl/commit/c020feeea1b62e4d81b8d0afc4878b2f511032ca))

### [1.14.1](https://github.com/metachris/micropython-ctl/compare/v1.14.0...v1.14.1) (2022-06-29)


### Bug Fixes

* missing types for Device.port ([7b39831](https://github.com/metachris/micropython-ctl/commit/7b39831505de9bcd38dc7964b7928a36e23802d6))

## [1.14.0](https://github.com/metachris/micropython-ctl/compare/v1.13.11...v1.14.0) (2022-06-23)


### Features

* added chucking override ([8748432](https://github.com/metachris/micropython-ctl/commit/874843272d7b0aa0bee307363f8a2a7b63c493fa))

### [1.13.11](https://github.com/metachris/micropython-ctl/compare/v1.13.10...v1.13.11) (2022-06-10)


### Bug Fixes

* listdir flakiness ([5f34fe8](https://github.com/metachris/micropython-ctl/commit/5f34fe8d597f222be533756d64b1510167d64c23))

### [1.13.10](https://github.com/metachris/micropython-ctl/compare/v1.13.9...v1.13.10) (2022-05-18)

### [1.13.9](https://github.com/metachris/micropython-ctl/compare/v1.13.8...v1.13.9) (2022-03-29)


### Bug Fixes

* bad types ([4439683](https://github.com/metachris/micropython-ctl/commit/44396834542be7efa8fe5a0b88e39a740377c40f))
* deprecated Buffer syntax ([3773adc](https://github.com/metachris/micropython-ctl/commit/3773adc319bbc30a9a82d5f9d19a999d31d9a77d))
* upgrade serialport ([7ae5f6f](https://github.com/metachris/micropython-ctl/commit/7ae5f6fa5b240d1101a15e9a1e6552213f90f5a5))

### [1.13.8](https://github.com/metachris/micropython-ctl/compare/v1.13.4...v1.13.8) (2022-02-10)


### Bug Fixes

* add ctrl+x for exit (ctrl+k taken in vscode) ([5b7bc4b](https://github.com/metachris/micropython-ctl/commit/5b7bc4bcf456b450ae8c89e6f7bde99324a8a090))
* bump + fix for serialport ([179cff7](https://github.com/metachris/micropython-ctl/commit/179cff7ab3e465374b1e81cc8c46d3bb89a238a5))
* serialport bad version ([e8a61a4](https://github.com/metachris/micropython-ctl/commit/e8a61a41b8ca8a1514382836a71b3359449ea98e))

1.13.8-beta1 (dev)
------------------

https://github.com/metachris/micropython-ctl/pull/8

* cli: guess /dev/tty device by ending of `-t` argument
  * searches for files that start with `/dev/tty` and end with the argument
  * eg. `mctl ls -t USB0` uses `/dev/ttyUSB0`
  * so does `mctl ls -t 0`
* end repl fix
* more debug output


1.13.4 (2020-03-15)
-------------------
* `putFile`: run gc.collect by default
* added `main.gcCollect()`
* should help with out-of-memory issues with larger file uploads (mctl sync)


1.13.2 (2021-03-12)
-------------------
* Proxy mode also works with webrepl/network connection

1.13.0 (2021-03-12)
-------------------
* `mctl sync`: synchronize a directory onto the device. checks file hashes and only uploads changed ones, deletes removed one.
* `listFiles` can now include sha256 hash (also `mctl ls --include-hash`)
* `mctl put`: `--changed-only` flag to check hash and upload only if changed (useful for large files, downside it needs to calculate the hash before uploading)
* `mctl repl` opens a webserver allowing other `mctl` processes to reuse that session for running scripts
* connect bugfix (implemented `readUntil`)
* major `runScript` speed improvements (tests run in 10s, before 16s)


1.11.2 (2021-03-09)
-------------------
* fix for `mctl rm / -r` (threw an error on some devices)


1.11.0 (26.2.2021)
------------------
* Establishing a connection doesn't kill running MicroPython process (eg. `mctl repl`, etc.)
* `ls` with JSON output
* `runScript` options: `runGcCollectBeforeCommand`
* various smaller fixes and improvements


1.10.0 (28.1.2021)
------------------

* First feature-complete, allround tested version.
* `mctl` works on Windows, Linux and macOS!
* See also https://github.com/metachris/micropython-ctl
