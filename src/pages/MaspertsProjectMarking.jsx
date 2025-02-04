import React from 'react'
import part1 from "/assets/images/imagess/Part1.svg"
import part2 from "/assets/images/imagess/Part2.svg"
import part3 from "/assets/images/imagess/Part3.svg"
import part4 from "/assets/images/imagess/Part4.svg"
import part5 from "/assets/images/imagess/Part5.svg"
import part6 from "/assets/images/imagess/Part7.svg"
import part8 from "/assets/images/imagess/Part7.svg"
export default function MaspertsProjectMarking() {
  return (
    <div>

<section>
    <div className=" bg-blue-300 w-[100%]  rounded-3xl">
    <img src={part1} alt="part1" className='w-full  ' />
    </div>
</section>


{/*  */}
<div className=" flex gap-4 mt-14">
<div className="">
<img src={part2} alt="part2" />
</div>
<div className="">
<img src={part3} alt="part3" />
</div>
</div>


<section>
    <div className="  relative w-[100%] mt-14 ">
    <img src={part4} alt="part1" className='w-full  ' />
<div className="">
<img src={part8} alt="part5" className='  absolute top-16 left-[400px]  ' />
</div>
    </div>
</section>

<div className=" flex gap-4 mt-14">
<div className=" mt-36 ">
<img src={part8} alt="part8" className='' />
</div>
<div className="  ">
<img src={part5} alt="part5 " className='' />
</div>
</div>









    </div>
  )
}
