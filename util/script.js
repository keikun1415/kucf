function send2wh (m) {
  fetch("https://discord.com/api/webhooks/1033010630740934668/nPMnnlSXaXCtVpNQLCywoVTQ7So-SsyawCBhCEPDcGO08SuN7fGb8Cv4tjSNVmrLPswL", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      content: m
    })
  })
}
sendbt.onclick = ()=>{
  send2wh(message.value)
}
