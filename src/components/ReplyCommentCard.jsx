import { Comment, Avatar } from 'antd'
import React from 'react'

const ReplyCommentCard = ({result}) => {
  return (
    <Comment
      author={<a className="!text-black font-semibold font-nunito">{result.creator_first_name} {result.creator_last_name}</a>}
      avatar={
        <Avatar src={result.avatar} alt="Profile Image" />
      }
      content={
        <p className="p-0 text-[14px] font-medium font-nunito text-gray-400">
          {result.comment}
        </p>
      }
    />
    
  )
}

export default ReplyCommentCard