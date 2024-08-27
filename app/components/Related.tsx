import React from 'react'
import Image from 'next/image'

const Related = () => { 
  return (
    <div className="w-80">
      <Image src="/image4.png" alt="profile" width={300} height={300} />
      <div className="text-[#5E5873] py-5">
        Design Liberalized Exchange Rate Management
      </div>
      <div className="flex items-center text-xs">
        <Image src="/image5.png" alt="profile" width={25} height={50} />
        <div className="font-light px-1">by </div>
        <div className="font-bold pr-1">Fred Boone </div>
        <div className="font-light"> | Jan 10, 2020</div>
      </div>
      <div>
        <div className="flex text-[#8E8E8E] text-xs my-6">
          <div className=" mr-5 px-6 py-2 bg-[#F5F5F5] rounded-full">UI/UX</div>
          <div className=" mr-5 px-6 py-2 bg-[#F5F5F5] rounded-full">
            Development
          </div>
        </div>
        <p className="text-xs text-[#8E8E8E]">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </p>
        <div className="border-t-2 border-[#D7D7D7]  my-8"></div>
      </div>
      <div className="flex justify-between text-xs mb-6">
        <div className="flex">
          <div>
            <Image src="/Icon.png" alt="" width={20} height={20} />
          </div>
          <div
            className="pl-1 text-[#5E5873]"
          >
            2.3k Likes
          </div>
        </div>
        <div className="text-[#7367F0]">Read More</div>
      </div>
    </div>
  );
}

export default Related