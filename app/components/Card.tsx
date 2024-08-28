import React from 'react'
import Image from 'next/image'
type authers = {
  email: string;
image: string;
name: string;
role: string;
_id: string;
}
type blog = {
  _id: "";
  image: string;
  title: string;
  description: string;
  author:  authers|null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
const Card = ({blog}:{blog: blog}) => {
  return (
    <div>
      <div className="border-t-2 border-[#D7D7D7] mr-40 my-11"></div>
      <div className="flex mt-8">
        <div>
          <Image src={blog.image} alt="profile" width={50} height={50} />
        </div>
        <div className="pl-2">
          <div className="flex items-center">
            {blog?.author?.name || "Yididiya Kebede"}
            {/* <div>Yididiya Kebede</div> */}
            <div className="pl-2 text-sm text-[#868686]">
              {blog?.createdAt || "Apr 16, 2022"}
            </div>
          </div>
          <div className="text-sm text-[#9C9C9C]">
            {blog?.skills.length > 0
              ? blog?.skills.map((val: string) => val + " ")
              : "SOFTWARE ENGINEER"}
          </div>
        </div>
      </div>
      <div className="flex mr-10">
        <div className="mt-5 mr-20">
          <div className="text-[#000000] text-xl font-bold">
            {blog?.title
              ? blog?.title
              : "The essential guide to Competitive Programming Tab System On React : 3 ways to do it."}
          </div>
          <p className="text-[#737373] text-sm mt-6">
            {blog?.description
              ? blog?.description
              : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"}
          </p>
        </div>
        <div>
          <Image src={blog.image} alt="profile" width={600} height={400} />
        </div>
      </div>
      <div className="flex text-[#8E8E8E] text-sm my-6">
        {blog?.tags.length > 0 ? (
          blog?.skills.map((val: string) => (
            <div key="" className=" mr-5 px-6 py-2 bg-[#F5F5F5] rounded-full">
              {val}
            </div>
          ))
        ) : (
          <>
            <div className=" mr-5 px-6 py-2 bg-[#F5F5F5] rounded-full">
              UI/UX
            </div>
            <div className=" mr-5 px-6 py-2 bg-[#F5F5F5] rounded-full">
              Development
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card