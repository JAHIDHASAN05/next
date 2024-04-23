"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { blogs } from "@/types";
import React from "react";
import { useDispatch } from "react-redux";

const BlogsPage = () => {
    // const res= await fetch('http://localhost:5000/blogs',{
    //     next :{
    //         revalidate:1
    //     }
    // })
    // const AllBlogs= await res.json()
    const {data:blogs, error,isError, isLoading}=  useGetBlogsQuery('')
    // if(isLoading){
    //   return
    // }
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
            blogs?.map((blog:blogs)=> <BlogCard key={blog.id} blog={blog}/>)
        }
      </div>
    </div>
  );
};

export default BlogsPage;
