var posts=["2025/09/02/hello-world/","2025/08/30/web/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };