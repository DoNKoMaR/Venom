import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw 'Error!'
conn.sendButton(m.chat, `饾櫚-饾櫚饾殎饾櫚 饾櫚饾殎饾櫚 饾殏饾櫞饾櫦饾櫩饾櫚饾櫢~~`, author, json.url, [['小袥袝袛校些袠袡校些袗携', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
export default handler
