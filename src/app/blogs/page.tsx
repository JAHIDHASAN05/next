import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import React from "react";

const BlogsPage =async () => {
    const res= await fetch('http://localhost:5000/blogs',{
        next :{
            revalidate:1
        }
    })
    const AllBlogs= await res.json()

  return (
    <div>
      <h1 className="text-4xl text-center my-5 ">
       All blogs form <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-xl text-center w-2/4 text-gray-400 mx-auto ">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-10 p-5">
        {
            AllBlogs.map((blog:blogs)=> <BlogCard key={blog.id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default BlogsPage;
