MyMaccas
========

My Macca's online ordering web app test.

Background
========

McDonald's are rolling out a trial of a [mobile ordering system](http://mymaccasmobile.com.au) in my hometown of
Wollongong, NSW Australia.

Currently it's only available for iOS devices. I thought I'd take a look at the app, try to figure out how it works,
and build my own implementation for a different platform.

API
========

The iOS app uses a RESTful API which handles all processing on the server-side. Sessions are maintained via a token
which is given to the client upon successful authentication and sent to the server as a header with every subsequent
authenticated request.

Sessions expire after a certain amount of time. I will be documenting the API more fully in the future.

Environment
========

To get around the same-origin policy, I configured a local reverse proxy supporting SSL at https://mymaccas.dev/api.
This routes all requests to the correct endpoint.

I wrote a [tutorial on how to configure Apache as a HTTPS reverse proxy](http://mechonomics.com/how-to-configure-apache-2-as-an-https-reverse-proxy-for-ajax-requests/).