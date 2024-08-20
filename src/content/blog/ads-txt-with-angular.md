---
title: ads.txt with Angular
description: How to create and use the ads.txt file in Angular.
pubDate: 2024-07-16T15:02:33.000Z
tags:
  - ads.txt
  - ads.txt in angular
  - ads.txt with angular
  - angular
  - programming
  - seo
keywords:
  - ads.txt
  - ads.txt with angular
  - angular
preview: /articles/ads.txt_with_angular.png
---
I recently added Google’s AdSense to my site and I got a failure when I submitted my site. Apparently, I had to create an [ads.txt file](https://support.google.com/adsense/answer/12171612?hl=en). I had not heard of this before and I must have missed it when reading through the instructions. Interestingly it is not short for advertising it is an acronym for Authorized Digital Sellers. 

Here is what you need to do to host the file in your Angular site.

First, I added the file at `src/ads/ads.txt` but you can put it wherever you like.  
Here is the file. I only have one line but you can have more if you have more providers.  

Then you need to add this line.  
`google.com, pub-XXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`

Replace `pub-XXXXXXXXXXXXXX` with your publisher ID. 

Note: You can find your publisher ID by right-clicking on your site in AdSense \> Sites and copying the link. It will look something like this.  
`https://www.google.com/adsense/new/u/0/pub-XXXXXXXXXXXXX/sites/detail/url=graybush.io`

Now that the file exists, we need to tell Angular to copy it to the `/dist` folder at the root when we build. We can do this by using the [assets](https://angular.dev/reference/configs/workspace-config\#assets-configuration) section of the `angular.json` file. If you don’t know, this file controls the build and allows you to configure many things. 

You are probably used to seeing strings in here, like this:

`"assets": ["src/favicon.ico", "src/assets", "src/articles"]`

But, you can also use an object, like this:

```json  
    {  
        "glob": "\*\*/\*",  
        "input": "src/assets/",  
        "output": "/",  
        “exclude”: “\*\*/\*.png”  
    }  
```  
Using this method, we can tell the compiler exactly where to place our files. This means that we can store the ads.txt file in our project in a place that works for us logically. Then, we let Angular copy it to the root on build. Best of both worlds\! 

Here is what I ended up with.

```json  
    "assets": [  
      {  
        "glob": "favicon.ico",  
        "input": "src/",  
        "output": "/"  
      },  
      {  
        "glob": "\*\*/\*",  
        "input": "src/assets/",  
        "output": "/assets"  
      },  
      {  
        "glob": "\*\*/\*",  
        "input": "src/ads/",  
        "output": "/"  
      }  
    ]
```

Now you can submit your site without worrying about violating this policy. I hope this was helpful.