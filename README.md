# Gover-web
Gover-web is an Ember.js-powered frontend to a Gover instance.

## Usage
Gover-web expects a Gover instance at `localhost:8080`. Thus it's best to run this on the same machine as Gover (To change this, change `base_url` in `app/utils/http.js`).
```
$ git clone github.com/dstaley/gover-web
$ cd gover-web
$ npm install
$ bower install
$ grunt server
```