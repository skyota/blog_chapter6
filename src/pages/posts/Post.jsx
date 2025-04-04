import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import formatDate from "../../utils/formatDate";

import classes from "./Post.module.css";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`)
        const data = await res.json()
        setPost(data.post)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost(id);
  }, []);

  if (loading) return <p>読み込み中...</p>;

  return (
    <div className={classes.post}>
      <div className="inner">
        <div className={classes.post__img}>
          <img src={post.thumbnailUrl} alt={post.title} />
        </div>
        <div className={classes.post__contents}>
          <div className={classes.post__header}>
            <div className={classes.post__date}>
              <time dateTime={formatDate(post.createdAt, '-')}>
                {formatDate(post.createdAt, '/')}
              </time>
            </div>
            <div className={classes.post__categories}>
              {post.categories.map((category) => (
                <p>{category}</p>
              ))}
            </div>
          </div>
          <div className={classes.post__title}>
            <p>{post.title}</p>
          </div>
          <div className={classes.post__content} dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}

export default Post;
