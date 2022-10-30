import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/сука.mp3'
conn.sendFile(m.chat, vn, 'сука.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Сука|Закрой рот|Ишак|chicalgante|chical gante|Chical gante/
handler.command = new RegExp
export default handler