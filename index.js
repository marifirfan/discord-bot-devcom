const { Client, GatewayIntentBits } = require("discord.js");

// Membuat client dengan intents yang dibutuhkan
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers, // Memungkinkan bot untuk mendeteksi anggota guild
    ],
});

// Event ketika bot siap
client.once("ready", () => {
    console.log("Devcom Bot Umm Online");
});

// Event ketika member baru bergabung
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.get("1302543738530304061"); // Mengambil channel dengan ID tertentu
    if (channel) {
        channel.send(
            `+ Selamat datang di Developer Community UMM, ${member}! 🎉` // Mengirim pesan ke channel yang ditentukan
        );
    }
});

// Event ketika member keluar
client.on("guildMemberRemove", (member) => {
    const channel = member.guild.channels.cache.get("1302543738530304061"); // Mengambil channel dengan ID tertentu
    if (channel) {
        channel.send(
            `- Selamat tinggal, ${member}! Kami akan merindukanmu! 😢` // Mengirim pesan ke channel yang ditentukan
        );
    }
});

// Gantilah token di bawah dengan token bot yang valid
client.login(process.env.DISCORD_TOKEN); // Gantilah ini dengan token bot yang valid
