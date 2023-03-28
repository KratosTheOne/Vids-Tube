import React from 'react'

const VideoCard = ({ info }) => {
    //console.log(info);

    //const { snippet, statistics } = info;

    //const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="p-2 m-2 w-72 shadow-md">
            <img className="rounded-lg" alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url} />
            <ul className="py-2">
                <li className="font-semibold py-2">{info?.snippet?.title}</li>
                <li className="text-sm text-gray-500">{info?.snippet?.channelTitle}</li>
                <li className="font-semibold">{info?.statistics?.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;