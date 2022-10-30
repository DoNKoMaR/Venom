import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/доброе утро.mp3'
conn.sendFile(m.chat, vn, 'доброе утро.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Доброе утро/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
