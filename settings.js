/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Masukin Apikey', // Ambil apikey di zenz biar fitur yg make api work
}

// Other
global.owner = ['62882007331744','6288233481992','62882007331744']
global.premium = ['62882007331744']
global.ownernomer = '62882007331744'
global.ownername = 'Rafi Aji'
global.botname = 'Vincent-Md'
global.footer = 'Vincent'
global.ig = 'Gk Punya Banh'
global.email = 'Ajinugraharafi.20@gmail.com'
global.region = 'Indonesia'
global.sc = 'Mau ngapain banh'
global.myweb = 'https://api-Rafiajiya.herokuap.com'
global.packname = 'Vincent-Md'
global.author = 'Rafi Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group Goblok',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu Bg!',
    owner: 'Lu Bukan Owner Astaga',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
