import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, '饾櫜饾櫡饾櫢饾櫜饾櫚 饾櫜饾殑饾殐饾櫞', wm, json.result.female, [['小袥袝袛校些袠袡校些袗携', `/${command}`]], m)
conn.sendButton(m.chat, '饾櫜饾櫡饾櫢饾櫜饾櫨 饾櫜饾殑饾殐饾櫞', wm, json.result.male, [['小袥袝袛校些袠袡校些袗携', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple)$/i
export default handler
