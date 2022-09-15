let articles;
(async ()=>{
  const res = await fetch('https://api.keikun1215.cf/private/blog/get')
  articles = await res.json()
  $("#articles").append(articles.map(a=>{
    return `<div onclick="showArticle(articles.find(b=>b.title='${a.title}'))" class="article">
  <span class="art-title">${a.title}</span><br>
  <span class="art-tags">${a.tags.split(",").map(t=>`<span class="art-tag">${t}</span>`).join("")}</span><br>
  <span class="art-date">${a.date}</span>
</div>`
  }).join(""))
})()
function showArticle (o={}) {
  history.pushState(o||history.state, "")
  $("#main").html(`
  <h1>${o.title||history.state.title}</h1>
  ${o.text||history.state.text}`)
  $("title").text(o.title||history.state.title)
}
