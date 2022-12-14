import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs/');


  return (
    <div className='home'>
      
      {isPending && <div>Loading...</div>}

      {error && <div>{error}</div>}
      
      {/* won't load until the blogs have been fetched */}
      {blogs && 
        <>
      <BlogList blogs={blogs}
        title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Aky')}
        title="Aky's Blogs" />
      </>
      }
    </div>
  );
}

export default Home;