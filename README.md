# exp [![Slack](http://slack.getexponent.com/badge.svg)](https://slack.getexponent.com)
The Exponent Development CLI

## Installation

[Installation instructions and documentation here.](https://docs.getexponent.com/versions/latest/guides/exp-cli.html)

## Getting Started

To make a new project use `exp init [path]`. The path is optional and it will use the current directory if not specified (all commands that need a path behave similarly).

## Viewing a Project on Your Phone

To view a project you must have an `exp` server running in the background for that project. Run `exp start [path]` to start running the server. Once it is ready it'll output a url for your project.

```bash
$ exp start
[exp] Starting exp-serve process under pm2
[exp] Waiting for packager, etc. to start
[exp] Exponent is ready.
[exp] Your URL is

exp://3h-xu5.jesse.exponent-example.exp.direct
```

The server will continue running until you stop it with `exp stop`. Use `exp logs` to view logs.

To view this on your phone, do the following:

  * Go get the Exponent app on your Android or iOS device. It's available [on the Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) and [on the iOS App Store](https://itunes.com/apps/exponent).

  * Run `exp send` to send a link via email or text. You can also use the `--send-to` option when running `exp start`.

  * Check your e-mail or texts and tap the link. The Exponent app should open and you should be able to view your experience there!

## Publishing a Project

To publish something you've made, just follow these steps:

  * Create an Exponent account or login to an existing one by running `exp login`.

  * Run an `exp` server using `exp start`.

  * Check to make sure you can load your app by sending the link to yourself with `exp send` and opening it in the Exponent app.

  * Once everything looks good, run `exp publish`. A few seconds later, you should get a clean URL sent to you that points to the exp.host server where your package was published to.

You can publish as many times as you want and it will replace your old version, so don't worry about making a mistake!
