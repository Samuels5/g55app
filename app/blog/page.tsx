"use client";
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Image from 'next/image'
import Related from '../components/Related'
import { getblogs } from '../components/Backend';
type autor = {
  email: string;
  image: string;
  name: string;
  role: string;
  _id: string;
};
type blog = {
  _id: "";
  image: string;
  title: string;
  description: string;
  author: null | autor;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
const Blog = ({searchParams} : {
  searchParams:{
    id : string;
  }
}) =>{
    const [loading, setloading] = useState(true);
    const [blogs, setblogs] = useState<blog[]>();

    // Combined fetching data to reduce multiple useEffect hooks
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch f
          const data1 = await getblogs();
          console.log(data1);
          setblogs(data1);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setloading(false);
        }
      };

      fetchData();
    }, []);
    
    if (loading) return <div>loading</div>;
    const newarr = blogs?.filter((blog) => blog._id === searchParams.id)
    const newblog = newarr![0]


  return (
    <div className="">
      <Nav />
      <div className="">
        <div className="text-center pt-20 text-3xl font-light font-serif">
          {newblog?.title || "The essential guide to Competitive Programming"}
        </div>
        <div className="text-center text-xs pt-2 font-light">
          {newblog?.tags.length > 0
            ? newblog?.tags.map((val) => val + " ")
            : "Programming, tech"}{" "}
          | 6 min Read
        </div>
        <div className="flex justify-center mt-10">
          <Image
            src={newblog?.image || "/image2.png"}
            alt=""
            width={700}
            height={770}
          />
          {/* newblog?.image|| */}
        </div>
        <div className="mt-8 flex justify-center ">
          <Image src="/image3.png" alt="" width={50} height={50} />
        </div>

        <div className="flex justify-center my-2 text-xs">
          {newblog?.author?.name || "chaltu kebede"} | software engineer
        </div>
        <div className="flex justify-center my-2 text-xs text-[#264FAD]">
          {newblog?.author?.email || "chaltu_kebede"}
        </div>
        <div className="px-28 mt-12">
          <p className="text-xl font-serif">
            {newblog?.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"}
          </p>
          <p className="py-5 text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud{" "}exercitation{" "}
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="py-5 text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud{" "}
            <span className="underline text-[#264FAD]">exercitation</span>{" "}
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="py-5 text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud{" "}
            <span className="underline text-[#264FAD]">exercitation</span>{" "}
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="py-5 text-sm text-[#737373]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud{" "}
            <span className="underline text-[#264FAD]">exercitation</span>{" "}
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="px-28">
          <div className="mb-5">Related Blogs</div>
          <div className="flex flex-wrap justify-between sm:block">
            <Related />
            <Related />
            <Related />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog