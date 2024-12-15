const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const { prefix, token } = require('./config.json'); // Substitua com seu arquivo de configuração
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates // Necessário para interagir com canais de voz
    ]
});

// Arrays de músicas
const musicArrays = {
    1: [
        './SoundTrack/Climax/climax1.mp3', // Substitua pelos caminhos corretos das suas músicas
        './SoundTrack/Climax/climax3.mp3',
        './SoundTrack/Climax/DeathNoteTheme.mp3'
    ],

};

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} está online!`);
});

client.on('messageCreate', async (message) => {
    console.log(message.member); // Debug
    if (!message.guild) return message.channel.send('Comandos de música só funcionam em servidores.');
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'play') {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) {
            return message.channel.send('Você precisa estar em um canal de voz para tocar música!');
        }

        const arrayNumber = args[0];
        if (!musicArrays[arrayNumber]) {
            return message.channel.send('Número de array de música inválido!');
        }

        const songs = musicArrays[arrayNumber];

        try {
            const connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });

            const player = createAudioPlayer();

            // Função para tocar as músicas do array em ordem
            const playSongs = async (songs) => {
                for (let i = 0; i < songs.length; i++) {
                    const resource = createAudioResource(songs[i]);
                    player.play(resource);

                    // Aguarda o player ficar ocioso antes de tocar a próxima música
                    await new Promise((resolve) => {
                        player.on(AudioPlayerStatus.Idle, resolve);
                    });
                }

                // Depois de tocar todas as músicas, o bot se desconecta
                connection.destroy();
                message.channel.send('Todas as músicas foram tocadas!');
            };

            connection.subscribe(player);
            playSongs(songs); // Chama a função para tocar as músicas

            message.channel.send('Tocando as músicas!');
        } catch (error) {
            console.error(error);
            message.channel.send('Erro ao tentar tocar a música!');
        }
    }
});

client.login(token);
