import Header from '../components/Header';
import PostCard from '../components/PostCard';
import '../css/common.css'
import '../css/TopPage.css'

const TopPage = ({ posts }) => {
  return (
    <>
      <Header />
      <div className='post'>
        <div className='post__inner inner'>
          <ul className='post__cards'>
            {posts.map(post => (
              <PostCard post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopPage;
