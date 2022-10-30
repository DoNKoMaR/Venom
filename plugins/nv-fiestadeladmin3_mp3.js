import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/я пошла.mp3'
conn.sendFile(m.chat, vn, 'я пошла.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /я пошла|я пошел|atencion grupo|aviso importante|fiestadeladmin3|fiesta en casa de uriel/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler

