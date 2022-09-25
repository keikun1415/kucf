let articles;
(async ()=>{
  const res = await fetch('https://api.keikun1215.cf/private/blog/get')
  articles = await res.json()
  $("#articles").append(articles.map((a,i)=>{
    return `<div onclick="location.replace('https://keikun1215.cf/blog?p=${i}')" class="article">
  <span class="art-title">${a.title}</span><br>
  <span class="art-tags">${a.tags.split(",").map(t=>`<span class="art-tag">${t}</span>`).join("")}</span><br>
  <span class="art-date">${a.date}</span>
</div>`
  }).join(""))
  ald()
})()
function showArticle (o={}) {
  history.pushState(o||history.state, "")
  $("#main").html(`
  <h1>${o.title||history.state.title}</h1>
  ${o.text||history.state.text}`)
  $("title").text(o.title||history.state.title)
}
function ald () {
  if(/https:\/\/keikun1215\.cf\/blog/g.test(location.href) && location.search != "") showArticle(gquery().p))
}
function gquery() {
  let ret = {}
  location.search.slice(1).split("&").forEach(q=>{ret[q.split("=")[0]]=q.split("=")[1]})
  return ret
}
