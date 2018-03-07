import Route from '@ember/routing/route';

import Channel from 'mypipe/models/channel';
import Video from 'mypipe/models/video';

export default Route.extend({
  model: function() {
    const vlog = Video.create({
      title: 'A vlog',
      channel: 'Old Meat 69',
      seen: true
    });

    const gta8 = Video.create({
      title: 'GTA8 playthrough',
      channel: 'Old Meat 69'
    });

    const chupdate = Video.create({
      title: '2018 Channel update',
      channel: 'Boring 66'
    });

    const oldmeat69 = Channel.create({ name: 'Old Meat 69', videos: [vlog, gta8] });
    const boring66 = Channel.create({ name: 'Boring 66', videos: [chupdate] });

    return [oldmeat69, boring66];
  }
});
