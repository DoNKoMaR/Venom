import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
import { EmojiAPI } from 'emoji-api' 
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
let er = `
*[β] π΄π» πππΎ π²πΎπππ΄π²ππΎ π³π΄π» π²πΎπΌπ°π½π³πΎ π΄π*
*β ${usedPrefix + command} <tipo> <emoji>*

*ββ π΄πΉπ΄πΌπΏπ»πΎ:*
*β ${usedPrefix + command}* fa π

*ββ ππΈπΏπΎπ* 

*β wha = whatsapp* 
*β ap = apple*
*β fa = facebook*
*β ig = Instagram*
*β go = google*
*β ht = htc*
*β mi = microsoft*
*β mo = mozilla*
*β op = openmoji*
*β pi = pixel*
*β sa = samsung*
*β tw = twitter*

*ββ ππΎπ»πΎ πππ°π ππ½ π΄πΌπΎπΉπΈ π ππ΄ππΏπ΄ππ΄ π»πΎπ π΄ππΏπ°π²πΈπΎπ*`

if (!args[0]) throw er
let template = (args[0] || '').toLowerCase()
if (!args[1]) throw er
if (/emo/i.test(command)) {
try {
switch (template) {
case 'apple':
case 'ip':
case 'ap':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[0].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'facebook':
case 'fb':
case 'fa':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[6].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'google':
case 'go':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[1].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'htc':
case 'ht':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[12].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'lg':
case 'ig':
case 'instagram':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[11].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'microsoft':
case 'mc':
case 'mi':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[3].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'mozilla':
case 'moz':
case 'mo':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[13].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'openmoji':
case 'omoji':
case 'op':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[8].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'pixel':
case 'pi':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[7].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'samsung':
case 'sa':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[2].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'twitter':
case 'tw':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(false, emoji.images[5].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
case 'whatsapp':
case 'wa':
case 'wh':
case 'wha':
emoji.get(`${args[1]}`)
.then(async emoji => {
let stiker = await sticker(null, emoji.images[4].url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
})
break
}
} catch (e) {
throw er
}}}
handler.help = ['emoji <tipo> <emoji>']
handler.tags = ['sticker'] 
handler.command = ['ΡΡΠΈΠΊΠ΅ΡΡΠΌΠΎΡΠΈΠΈ', 'smoji', 'semoji']
export default handler
