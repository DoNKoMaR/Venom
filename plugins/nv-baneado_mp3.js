import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/иди сюда.mp3'
conn.sendFile(m.chat, vn, 'иди сюда.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Троль|Ссылочник|Пиздабол/
handler.command = new RegExp
export default handler
