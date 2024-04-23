import BlogDetails from "@/components/ui/BlogDetails";
import { blogs } from "@/types";

interface BlogId {
    params:{
        blogId :string
    }
}

export const generateStaticParams = async ()=> {
  const res = await fetch('http://localhost:5000/blogs')
  const blogs= await res.json()
   return blogs.map((blog:blogs)=> ({
    blogId: blog.id
   }))

// return [{blogId: "1"}]
  }
  
const BlogDetailsPage = async({params}:BlogId) => {
    // console.log(params);
    const result= await fetch(`http://localhost:5000/blogs/${params.blogId}`,{
        cache:'no-store'
    })
    const blog= await result.json()
    return (
        <div>
           <BlogDetails key={blog.id} blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;