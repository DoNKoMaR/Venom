let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗ИНФО❗] ОТПРАВИТЬ ОТЧЕТ*\n\n*ПРИМЕР:*\n*${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`
if (text.length < 10) throw `*[❗ИНФО❗] ДЛИНА ОТЧЕТА ДОЛЖНА СОСТАВЛЯТЬ 10 СИМВОЛОВ!*`
if (text.length > 1000) throw `*[❗ИНФО❗] ДЛИНА ОТЧЕТА ДОЛЖНА СОСТАВЛЯТЬ 1000 СИМВОЛОВ!*`
let teks = `*❒═════[ОТЧЕТ]═════❒*\n*┬*\n*├❧ НОМЕР:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ СООБЩЕНИЕ:* ${text}\n*┴*`
conn.reply('+79773452127@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
m.reply(`*[ ✔️ ] ОТЧЕТ УСПЕШНО ОТПРАВЛЕН СОЗДАТЕЛЮ БОТА. ВАШ ОТЧЕТ БУДЕТ РАССМОТРЕН КАК МОЖНО СКОРЕЕ, ЕСЛИ ЭТО ЛОЖЬ ИЛИ ШУТКА, ОН БУДЕТ ТОЛЬКО ИГНОРИРОВАН*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(отчет|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
