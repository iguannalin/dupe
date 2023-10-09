window.addEventListener("load", () => {
  function display() {
    let title = Number(document.querySelector("title").innerText);
    if (!title) title = 1; 
    else title+=1;

    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.innerText = Math.random()>0.5 ? "/" : "\\";
    container.appendChild(p);

    const text = `<!doctypehtml><title>${title}</title><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><link href=https://iguannalin.github.io/dupe/index.css rel=stylesheet><script src=https://iguannalin.github.io/dupe/index.js></script><div id=container></div>`;
    const blob = new Blob([text], {type: "text/html"});
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_self", "location,status,scrollbars,resizable");
    window.URL.revokeObjectURL(blobUrl);
  }

  display();
});