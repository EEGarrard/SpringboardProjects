import React from 'react'

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionButtons";

const PostsExcerpt = ({post}) => {
  return (
<article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post = {post}/>
    </article>  )
}

export default PostsExcerpt