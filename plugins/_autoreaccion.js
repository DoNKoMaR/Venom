let handler = async (m, { conn }) => {
let emot = pickRandom(["π", "β€", "π", "π", "π", "π", "π", "β­", "π»", "π₯"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(Π±ΠΎΡΠΈΠΊ|notjhuz - MD|notjhuz - bot|notjhuz-bot)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
