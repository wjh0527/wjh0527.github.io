var posts=["2025/09/02/hello-world/","2025/08/30/web/","2025/09/03/SQL注入/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };