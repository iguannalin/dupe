window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function display() {
    const slashes = window.location.hash;
    console.log(window.location);
    if (slashes) console.log({slashes});
    const slash = 1;
    const meta = document.createElement("meta");
    meta.httpEquiv = "REFRESH";
    meta.content = "5";

    const url = new URL("https://iguannalin.github.io/dupe");
    url.hash = `#${slashes ? slashes++ : 1}`
    // params.append("q", slash);
    console.log({url});
    meta.url = url;
    // link.onclick = () => {
      // <meta HTTP-EQUIV="REFRESH" CONTENT="1; URL="></meta>
      document.head.appendChild(meta);

      // const text = `<!doctypehtml><title>how-to live with spam</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=https://iguannalin.github.io/spam/index.css rel=stylesheet><script src=https://iguannalin.github.io/spam/spam.js></script><div id=container></div>`;
      // const blob = new Blob([text], {type: "text/html"});
      // const blobUrl = URL.createObjectURL(blob);
      // window.open(blobUrl, "_self", `popup,location,status,scrollbars,resizable,width=400, height=400, left=${getRandomInt(0,500)}, top=${getRandomInt(0,500)}`);
      // window.URL.revokeObjectURL(blobUrl);

    // }
    // document.body.appendChild(link);
  }

  display();
});