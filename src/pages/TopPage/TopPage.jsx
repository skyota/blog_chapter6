import { useEffect, useState } from 'react';
import PostCard from './components/PostCard/PostCard';

import classes from './TopPage.module.css';

const TopPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>読み込み中...</p>

  return (
    <>
      <div className={classes.post}>
        <div className='inner'>
          <ul className={classes.post__cards}>
            {posts.map(post => (
              <li className={classes.post__card}>
                <PostCard post={post} key={post.id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopPage;
