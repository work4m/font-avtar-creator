

Avrat Creator
==========

Generate avatars with initials from names.
------------------------------------------

Avrat Creator has a simple-to-use API with no limiting or login. No usage tracking and no information is stored. The final images are cached, but nothing else. Just write name or surname, or both.

+1000 Daily Requests

Usage
-----

All requests returns a image stream to be used directly in a `<img/>` tag.

### Generate a avatar with default settings, for user "John Doe".

`https://avtar-create-api.herokuapp.com/api?name=John+Doe`

### Generate a blue avatar

`https://avtar-create-api.herokuapp.com/api?background=blue&color=white`


Settings
--------

### Image Size (`size`)

Avatar image size in pixels. Between: 16 and 512. Default: 64

`https://avtar-create-api.herokuapp.com/api?size=128`

### Font Size (`fontSize`)

Default: 24

`https://avtar-create-api.herokuapp.com/api?fontSize=0.33`

### Initial Characters (`length`)

Length of the generated initials. Default: 2

`https://avtar-create-api.herokuapp.com/api?length=1`

### Name (`name`)

The name used to generate initials. You can specify the initials yourself as well. Default: John Doe

`https://avtar-create-api.herokuapp.com/api?name=Ramesh+Chandra`

### Background Color (`background`)

Color for the image background. Default: white

`https://avtar-create-api.herokuapp.com/api?background=red`

### Font Color (`color`)

Color for the font. Default: black

`https://avtar-create-api.herokuapp.com/api?color=ff0000`

### Lowercase (`lower`)

Default: true

`https://avtar-create-api.herokuapp.com/api?lower=true`

### Uppercase (`upper`)

Default: true

`https://avtar-create-api.herokuapp.com/api?upper=false`

### Format (`type`)

Decide if the API should return SVG or PNG. Default: png if the `Accept` header includes `image/svg+xml`, png otherwise

`https://avtar-create-api.herokuapp.com/api?type=svg`

All settings above can be mixed together as you desire.


Privacy and Monitoring
----------------------

No data is being stored on our serveres. Monitoring & logging is entirely disabled.

* * *

Made by [Krunal Chauhan](https://twitter.com)

[Code on Github](https://github.com/work4m/font-avtar-creator)

Help us scale to more regions, and keep running. We're surpassing 800 MILLION requests a month, and can use any contribution you're able to give. Thank you!

Your logo will show up here with a link to your website. [Become a sponsor](https://opencollective.com/avrat-creator-api)
