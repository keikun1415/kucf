/*定数定義*/
//メニューのリンクたち
const links = [{
  name: "Home",
  href: "index.html"
},{
  name: "Admins",
  href: "admins.html"
}]
//管理リスト(みかん星)
const admins = [{
  name: null,
  icon: null
}]
/*!定数定義*/
/*
*No.1
*矢印が押されたらメニューを開閉
*使用場所: 全htmlファイルのヘッダー部分
*/
$("#m-opb").on("click", ()=>{
  $("#m-opb").toggleClass("opened")
  $("#m-menu").toggleClass("opened")
})
/*
*No.2
*#m-menuにエレメント追加
*使用場所: 全htmlファイルのメニュー部分
*/
links.forEach(e=>{
  $("#m-menu").append(`<a href="${e.href}" class="m-elem">${e.name}</a>`)
})
/*
*No.2
*#a-listにエレメント追加
*使用場所: admins.html#a-list
*/
admins.forEach(e=>{
  $("#a-list").append(`<div class="a-elem">
          <img class="a-icon" src="${e.icon || "https://placehold.jp/50x50.png"}" />
          <p class="a-name">${e.name || "なし"}</p>
        </div>`)
})
