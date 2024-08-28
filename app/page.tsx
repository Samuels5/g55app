"use client";
import Image from "next/image";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getblogs } from "./api/Backend";
import data from "../public/data.json";
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

export default function Home() {
  // const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState<blog[]>(data as blog[]);
  const [arr, setarr] = useState<blog[]>();
  const [num, setnum] = useState<number>(5);
  const [inputValue, setInputValue] = useState("");

  // Step 3: Create the onChange handler
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  // Combined fetching data to reduce multiple useEffect hooks
  // useEffect(() => {
  //   const fetchData = async () => {

  //     try {
  //       // Fetch f
  //       const data1 = await getblogs();
  //       console.log(data1);
  //       setblogs(data1);
  //       setloading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     } finally {
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading )
  //   return (<div>loading</div>);
  const wowblogs = blogs?.filter((blog) => blog.title.includes(inputValue));
  const newblogs = [];
  // if (inputValue){
  // setblogs(wowblogs)
  // }
  let run = wowblogs?.length! > 0 ? wowblogs : blogs;
  if (inputValue.length > 0) {
    run = wowblogs;
  } else {
    // setblogs(data as blog[])
  }
  for (let i = 0; i < num; i++) {
    if (run && run[i]) {
      newblogs.push(run[i]);
    }
  }
  return (<>
    <Nav />
    <main className=" min-h-[25vh]">
      
      <div className="flex w-full pt-14 px-16 ">
        <div className="text-[#000000] font-bold text-2xl">Blogs</div>
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Search..."
            value={inputValue} // Bind the input value to state
            onChange={(e) => handleChange(e)}
            className="border border-[#CFCFCF] rounded-full flex justify-center focus:border focus:border-blue-500 px-4"
          />
          <div className="bg-[#264FAD] rounded-full flex justify-center items-center px-4 py-1 ml-4 text-white text-sm">
            + New Blog
          </div>
        </div>
      </div>
      {/* <div className=" border-2 border-gray-200 mx-40"></div> */}
      <div className="mx-32">
        {newblogs?.map((blog: blog, ind: number) => (
          <Link
            key={blog._id}
            href={{
              pathname: "/blog",
              query: {
                id: blog._id,
              },
            }}
          >
            <Card key="" blog={blog} />
          </Link>
        ))}
      </div>
      
    </main>
    <Footer />
    </>
  );
}
