let handler = async (m, { conn, text }) => {
let id = m.chat
conn.math = conn.math ? conn.math : {}
if (id in conn.math) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
m.reply('π·π΄π!! π΄πππ°π π·π°π²πΈπ΄π½π³πΎ πππ°πΌπΏπ°')
}
let val = text
.replace(/[^0-9\-\/+*ΓΓ·ΟEe()piPI/]/g, '')
.replace(/Γ/g, '*')
.replace(/Γ·/g, '/')
.replace(/Ο|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'Ο')
.replace(/Math\.E/g, 'e')
.replace(/\//g, 'Γ·')
.replace(/\*Γ/g, 'Γ')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
m.reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) throw '*[βΠΠΠ€Πβ] πΈπ½πΆππ΄ππ΄ π»π° πΎπΏπ΄ππ°π²πΈπΎπ½ πΌπ°ππ΄πΌπ°ππΈπ²π° πππ΄ π³π΄ππ΄π΄ π²π°π»π²ππ»π°π*'
throw '*[βΠΠΠ€Πβ] π΅πΎππΌπ°ππΎ π½πΎ π°π³πΌπΈππΈπ³πΎ, ππΎπ»πΎ ππ΄ π°π³πΌπΈππ΄π½ π½ππΌπ΄ππΎπ π π»πΎπ ππΈπΌπ±πΎπ»πΎπ -, +, *, /, Γ, Γ·, Ο, e, (, )*'
}}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5
export default handler
