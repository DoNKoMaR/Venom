global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^π²ππ°π½ππΎ π΄π π΄π» ππ΄πππ»ππ°π³πΎ π³π΄/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return conn.sendButton(m.chat, '*[βΠΠΠ€Πβ] ππ° ππ΄ π°π· ππ΄ππΏπΎπ½π³πΈπ³πΎ π° π΄ππ° πΏππ΄πΆππ½ππ°*', author, null, [['ππΎπ»ππ΄π π° πΉππΆπ°π', '/mates']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
if (m.text == math.result) {
conn.sendButton(m.chat, `*ππ΄ππΏππ΄π π²πΎπππ΄π²ππ°!!*\n*π·π°π πΆπ°π½π°π³πΎ: ${math.bonus} ππΏ*`, author, null, [['ππΎπ»ππ΄π π° πΉππΆπ°π', `/math ${math.mode}`]], m)
global.db.data.users[m.sender].exp += math.bonus
clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `*ππ΄ π°π²π°π±π°ππΎπ½ πππ πΎπΏπΎππππ½πΈπ³π°π³π΄π*\n*π»π° ππ΄ππΏππ΄πππ° π΄π: ${math.result}*`, author, null, [['ππΎπ»ππ΄π π° πΉππΆπ°π', `/math ${math.mode}`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `*ππ΄ππΏππ΄πππ° πΈπ½π²πΎπππ΄π²ππ°!!*\n*π°ππ½ π³πΈππΏπΎπ½πΈπ±π»π΄π ${global.math[id][2]} πππππππππππππ*`, m)
}}}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
export default handler
