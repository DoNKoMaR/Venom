import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/иди на хуй.mp3'
conn.sendFile(m.chat, vn, 'иди на хуй.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Иди на хуй|иди на хуй/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
