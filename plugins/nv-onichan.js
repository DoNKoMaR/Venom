import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/новенький.mp3'
conn.sendFile(m.chat, vn, 'новенький.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /новенький|новенькие|o-onichan/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
