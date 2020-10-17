import * as React from 'react'
import Player from 'griffith'


const griffithVideo  = () => {
  const sources = {
    ld: {
      bitrate: 10,
      duration: 10,
      format: '',
      height: 300,
      size: 500,
      width: 500,
      play_url: 'https://video.171edu.com/tacc/files/fileCenter/1561429739000.3132.m3u8?pm3u8/0&e=1577165280&token=vIRAIill7Y0Ar7tlcZETV11owcLPGRKPvOZyO-sH:EcYIHlk1PZRD-fwS-D914BuvuH0=',
    },
    hd: {
      bitrate: 10,
      duration: 10,
      format: '',
      height: 300,
      size: 500,
      width: 500,
      play_url: 'https://video.171edu.com/tacc/files/fileCenter/1561429739000.3132.m3u8?pm3u8/0&e=1577165280&token=vIRAIill7Y0Ar7tlcZETV11owcLPGRKPvOZyO-sH:EcYIHlk1PZRD-fwS-D914BuvuH0=',
    },
    sd: {
      bitrate: 10,
      duration: 10,
      format: '',
      height: 300,
      size: 500,
      width: 500,
      play_url: 'https://video.171edu.com/tacc/files/fileCenter/1561429739000.3132.m3u8?pm3u8/0&e=1577165280&token=vIRAIill7Y0Ar7tlcZETV11owcLPGRKPvOZyO-sH:EcYIHlk1PZRD-fwS-D914BuvuH0=',
    },
  }

  return (
    <div className="video-container">
      <Player
        id="griff-video"
        error={ {message: '视频错误'} }
        cover=""
        title="video"
        duration={1000}
        standalone={false}
        sources={sources} />
    </div>
  )
}


export default griffithVideo
