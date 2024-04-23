import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
    params:{
        blogId :string
    }
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