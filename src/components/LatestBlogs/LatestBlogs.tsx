import { blogs } from '@/types';
import React from 'react';
import LatestBlogCard from '../ui/LatestBlogCard';
import BlogCard from '../ui/BlogCard';
// import blogs from './../../types/index'

const LatestBlogs = ({blogs}:{blogs:blogs[]}) => {
    return (
        <div>
            <h1 className='text-4xl text-center my-5 '>Latest blogs form <span className='text-accent'>Blogiz</span></h1>
            <p className='text-xl text-center w-2/4 text-gray-400 mx-auto '>
                <i>
                Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
                </i>
            </p>
            <div className='grid grid-cols-2 gap-5 my-5'>
                {
                    blogs.slice(0,2).map(blog=><LatestBlogCard key={blog.id
                    } blog={blog}/>)

                }
            </div>
            <div className='grid grid-cols-3 gap-5 w-[90%] mx-auto my-10'>
                {
                    blogs.slice(2,5).map(blog=><BlogCard key={blog.id
                    } blog={blog}/>)

                }
            </div>
        </div>
    );
};

export default LatestBlogs;