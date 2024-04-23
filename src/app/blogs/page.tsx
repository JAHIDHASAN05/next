import BlogCard from "@/components/ui/BlogCard";
import { blogs } from "@/types";
import React from "react";

const BlogsPage =async () => {
    const res= await fetch('http://localhost:5000/blogs',{
        next :{
            revalidate:10
        }
    })
    const AllBlogs= await res.json()

  return (
    <div>
     
    </div>
  );
};

export default BlogsPage;
