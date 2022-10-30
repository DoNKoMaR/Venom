import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/досвидания.mp3'
conn.sendFile(m.chat, vn, 'досвидания.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /вы кто такие|feliz navidad|Merry Christmas|merry chritmas/
handler.command = new RegExp
export default handler
