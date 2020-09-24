exports.data = {
  title: "sosuke.dev",
};

exports.render = function (data) {
  return `<!doctype html>
  <html lang="ja">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="/styles/styles.css">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&display=swap" rel="stylesheet">
      <link href="/styles/prism-dracula.css" rel="stylesheet">
      <title>${data.title}</title>
    </head>
    <body>
      <header>
        <h1><a href="/">sosuke.dev</a></h1>
        <div class="icons">
          <a href="https://github.com/sosukesuzuki">
            <img src="/img/github-icon.png" class="icon github-icon">
          </a>
          <a href="https://twitter.com/__sosukesuzuki">
            <img src="/img/twitter-icon.png" class="icon twitter-icon">
          </a>
        </div>
      </header>
      <main>
        ${data.content}
      </main>
      <footer>
        <small>© 2019 Sosuke Suzuki</small>
      </footer>
    </body>
  </html>`;
};
