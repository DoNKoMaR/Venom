import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[β] πΈπ½πΆππ΄ππ΄ ππ½ ππ΄πππΎ πΏπ°ππ° π·π°π±π»π°π π²πΎπ½ ππΈπΌππΈπΌπΈ πΎ π΄π» π±πΎπ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} Π‘Π°Π»Π°ΠΌ ΠΠ»Π΅ΠΉΠΊΡΠΌ ΠΠΎΡ*`
let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['Π±ΠΎΡ', 'simi', 'simsimi'] 
export default handler
