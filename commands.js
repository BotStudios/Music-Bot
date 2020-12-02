const downloadYT = require('ytdl-core');
const searchYT = require('yt-search');

async function play(msg, ...args) {
  const vc = msg.member.voice.channel;

  const connection = await vc.join();
  const video = await findVideo(args.join(' '));

  if (video) {
    const stream = downloadYT(video.url, { filter: 'audioonly' });
    connection.play(stream, { seek: 0, volume: 1 });

    await msg.reply(`Now playing \`${video.title}\`.`);
  } else
    await msg.reply(`No results found.`);
}
async function findVideo(query) {
  const result = await searchYT(query);
  return (result.videos.length > 1)
    ? result.videos[0]
    : null;
}

async function stop(msg) {
  const vc = msg.member.voice.channel;
  await vc.leave();

  await msg.reply('Stopped.');
}

module.exports.play = play;
module.exports.stop = stop;
