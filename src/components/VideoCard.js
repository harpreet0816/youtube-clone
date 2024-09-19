import React from 'react'

const VideoCard = ({info}) => {
    console.log(info, "--info--")
    const {snippet, statistics} = info || {};
    const {title, channelTitle, description, thumbnails} = snippet || {};
    const {viewCount, commentCount, likeCount} = statistics || {};
    console.log(thumbnails, thumbnails.medium)
  return (
    <div className='p-2 m-2 w-72 shadow-lg basis-calc-quarter'>
    <img className='rounded-lg' src={thumbnails?.medium?.url} alt="" />
    <ul>
    <li className='font-bold py-2'>{title}</li>
    <li>{channelTitle}</li>
    <li>{viewCount} views</li>
    <li></li>
    </ul>
    </div>
  )
}

export default VideoCard