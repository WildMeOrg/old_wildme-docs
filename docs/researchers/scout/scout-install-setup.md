# Scout Installation and Startup
You must have set up the system, software, and NAS installation before Scout can be pulled and deployed.

## Installing the Latest Version of Scout (Internet required)

To pull the latest container version of Scout while connected to the Internet, enter the following in the Ubuntu Terminal:

docker pull wildme/scout:latest

## Running Scout (Offline or online)
To run Scout:

1. Run the following command in the Ubuntu Terminal to launch the Scout Docker container. 
```
    docker run --privileged -p 1337:1337 --rm -it --gpus all --mount type=bind,source=/nas,target=/nas -e ENV_IP="`ip route get 1 | sed 's/^.*src \([^ ]*\).*$/\1/;q'`" -v ~/:/data/db -v ~/tmp:/tmp/scout-tmp wildme/scout:latest
```
    Note: An Internet connection is required for the first installation. Each subsequent execution of the command either 1) pulls and runs the latest version of Scout if an Internet connection is present or 2) runs the existing container if no Internet connection is present.

2. During your first installation of Scout, you are prompted to enter a source image directory where the images are stored. Select/nas/images.
```
> Welcome to Scout
> ----------------------------
> Please create a directory on your NAS where you would like to upload your images. Then, enter the absolute path to that directory here. If you are uploading images to several sub-directories, please only list the parent folder. Eg: /nas/images/ or /nas/
```
3. After entering the full path of the upload image directory, Scout starts normally.
```
> latest: Pulling from wildme/scout
> Digest: sha256:65316698984ac186823873406728e877cb169eb69f25d07bcb87e9c2b8e45994
> Status: Image is up to date for wildme/scout:latest
>  * Starting database mongodb                                             [ OK ] 
> 
> > scout-mvp@0.0.1 start
> > NODE_ENV=production node app.js
>
> Validating your settings...
> 
> 
> Your settings have been validated
> ----------------------------
> 
> Your Scout Server is now running.
> Please open a Chrome browser and navigate to http://10.0.0.104:1337
> ----------------------------
> 
> Your password override token is: lccmnvxw6j
> ----------------------------
> 
> debug: Warning: since `sails.config.session.cookie.secure` is not set to `true`, the session
> debug: cookie will be sent over non-TLS connections (i.e. with insecure http:// requests).
> debug: To enable secure cookies, set `sails.config.session.cookie.secure` to `true`.
> debug: 
> debug: If your app is behind a proxy or load balancer (e.g. on a PaaS like Heroku), you
> debug: may also need to set `sails.config.http.trustProxy` to `true`.
> debug: 
> debug: For more help:
> debug:  • https://sailsjs.com/config/session#?the-secure-flag
> debug:  • https://sailsjs.com/config/session#?do-i-need-an-ssl-certificate
> debug:  • https://sailsjs.com/config/sails-config-http#?properties
> debug:  • https://sailsjs.com/support
> debug: 
> debug: It looks like your `sails.config.sockets.onlyAllowOrigins` array only includes
> debug: references to the `localhost` origin.  This is completely valid, but be sure
> debug: to add any other origins to this list that you'd like to accept socket
> debug: connections from!
> debug: 
> debug: -------------------------------------------------------
> debug: :: Sun Sep 25 2022 04:43:16 GMT+0000 (GMT)
> debug: Environment : production
> debug: Port        : 1337
> debug: -------------------------------------------------------
```
Successful Scout installation provides some critical information that you should provide to the lab lead. This includes:
* Scout URL and port for browser access. This URL should be provided directly to the Lab Lead.
```
    Your Scout Server is now running.
    Please open a Chrome browser and navigate to http://10.0.0.104:1337
    ----------------------------
```
* A password override token. This token is only needed if a lab lead forgets their password and cannot sign in. This token changes with every restart of Scout.
```
    Your password override token is: lccmnvxw6j
    ----------------------------
```
Once you have provided the lab lead with the Scout Server URL and image directory full path on the NAS, setup is complete.

## Adding survey images to Scout
Any person who can log into the Scout Server or access the NAS remotely can copy aerial survey images into the /nas/images folder. If Scout is running, it automatically checks this folder periodically for new images and copies them for internal storage and processing. Images added to this folder disappear from the Ubuntu desktop folder as Scout imports them. The following alert bar displays in Scout when image ingestion is in progress, warning users that new images are being added, and therefore not all images may be available for task creation.


Important: Scout assumes that imported images have been through some form of filename manipulation before entering Scout. Each image imported into Scout should be uniquely named and should have a distinctive system of naming and numbering that it can be later matched within its cohort of images, allowing users of Scout to easily find the images by filename and assign them to logical tasks for annotation.
