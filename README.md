# Memoirable
> Online diary for all

[![CodeRuse Slack](http://slack.coderuse.com/badge.svg)](http://slack.coderuse.com "Let's discuss some interesting stuff!") [![Build Status](https://travis-ci.org/coderuse/memoirable.svg?branch=master)](https://travis-ci.org/coderuse/memoirable)

###### [Site](https://coderuse.github.io/memoirable)

### Contents

- [Overview](#overview)
- [Future Plan](#future-plan)
- [User Manual](#user-manual)
- [Current Release](#release-notes)
- [Support](#support)
- [Use in your own site](#use-this-in-your-own-site)
- [Contribute](#contribute)
- [Documentation](#documentation)
- [Team](#team)
- [License](#license)

## Overview

We believe that, everyone should keep their experiences to meet new friends, starting new relations, having a bad day, having the most memorable day in a written format. In one's own language and with own feelings. And this written notes should not be lost. One of the problems in preserving paper diaries.

For this reason, we are building this. For you, for us. We can also pass these journals to future generations.

And of course this should remain free and private.

This app will use known and popular free storage providers like Google Drive, Microsoft OneDrive to store data and will be hosted on Github pages. So, as long as you can remember the password of your Storage provider's account, your journal will be accessible for you. And ofcourse it will remain for your own eye only.

## Future Plan

Later we may add some features like:

- Add user preference for fonts, diary editor theme etc
- Pass selective journal entries to another user
- Make a backup of your journal to local disk and restore from there. So that, you can keep your journal more safe and more personal

## User Manual

We have a small user manual [here](https://github.com/coderuse/memoirable/wiki)

## Release Notes

#### Release notes for version 0.1 (29th November, 2016)

In this first release of this diary, we have tried our best to keep it bug free as far as possible. Features are as follows.

##### Features

- This release will be compatible with all the later releases. That means, any entry created with this release will be available and usable in later releases
- Google Drive is supported as the only storage provider. User need to give the [permission for application data folder](https://developers.google.com/drive/v3/web/appdata). [More details](https://developers.google.com/drive/v2/web/scopes)
- Multiple entries for a date is possible
- Entries for future date is possible
- Buttons for **Bold** & *Italics* are available in the editor. As we are using [CommonMark](http://commonmark.org/) compatible renderer, all the tags available for `CommonMark` will be available for the writing. [reference](http://spec.commonmark.org/0.27/)
- Entries would be automatically saved with a delay of 2 seconds after last change (so, there would be no impact over the limitation of Google drive api calls per second)

##### Disclaimer

- We have only manually tested this application. Unit tests and automated end-to-end tests have not been added in this release. Those are planned for future releases
- Refresh on the editor is not permitted and will show one `404 error` generated by GitHub
- This release is only for Google Chrome Desktop version. Best viewed at a minimum `1024px by 768px` view-port. But it should work flawlessly with Firefox and Safari

[Release History](./ReleaseHistory.md)

## Support

- [GitHub Issues](https://github.com/coderuse/memoirable/issues)
- [Gitter Chat](https://gitter.im/coderuse/memoirable)

## Use this in your own site

``` bash
git clone https://github.com/coderuse/memoirable.git
npm install -g grunt-cli typescript typings
npm install
```

Follow the [steps](https://developers.google.com/drive/v2/web/auth/web-client#create_a_client_id_and_client_secret) to create a client id for the app and change the `clientId` in `src/app/constants.ts`.

Also installation of `Ruby` is required.

``` bash
gem install sass susy normalize-scss
grunt build
```

Host the content in the `build` folder.

## Contribute

This project is at a very initial stage. So, it's the right time to show your love for Open Source Development and be a part of the core team for this awesome project.

So, fork it, follow the [above steps](#use-this-in-your-own-site) and invoke `grunt` to spawn a dev server with watch over the dev file changes.

## Documentation

An auto generated doc is hosted at https://coderuse.github.io/memoirable

## Team

[![Arnab Das](https://avatars3.githubusercontent.com/u/1061389?v=3&s=130)](http://coderuse.com)|[![Chandan Kr Jha](https://avatars3.githubusercontent.com/u/13062613?v=3&s=130)](http://chandankrjha.com)
---|---
[Arnab Das](http://coderuse.com)|[Chandan Kr Jha](http://chandankrjha.com)

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcoderuse%2Fmemoirable.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fcoderuse%2Fmemoirable?ref=badge_large)
