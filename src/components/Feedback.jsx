import React from "react";
import userProfile from "../assets/images/userProfile.svg";
import { Star } from "lucide-react";

const Feedback = () => {
  return (
    <div className="bg-n1 rounded-[4px] pb-1">
      <div className="p-4 text-lg font-semibold">Customer's Feedback</div>
      <div className="flex flex-col max-h-[19rem] overflow-y-auto thin-scrollbar p-4">
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-8 h-8" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">My favourite restaurant is Bangalore. I visited 3 times and the food was excellent. Pancakes are my favourite here. I tried 'Lamb'orghini burger and it was awesome.</p>
        <hr className="w-full bg-rgba(200, 200, 200, 0.3) py-2"></hr>

      </>
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-6 h-6" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">We were here on a hungry Sunday morning, they served us keema burger, english breakfast, tomato soup, chicken cream soup. Thankful for such yummy breakfast.</p>
        <hr className="w-full bg-rgba(200, 200, 200, 0.3) py-2"></hr>

      </>
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-6 h-6" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">we enjoyed eggs and coffe. Perfect service. But overall lovely ambience, nice music and good food.</p>
        <hr className="w-full bg-rgba(200, 200, 200, 0.3) py-2"></hr>

      </>
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-6 h-6" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">We were here on a hungry Sunday morning, they served us keema burger, english breakfast, tomato soup, chicken cream soup. Thankful for such yummy breakfast.</p>
        <hr className="w-full bg-rgba(200, 200, 200, 0.3) py-2"></hr>

      </>
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-6 h-6" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">We were here on a hungry Sunday morning, they served us keema burger, english breakfast, tomato soup, chicken cream soup. Thankful for such yummy breakfast.</p>
        <hr className="w-full bg-rgba(200, 200, 200, 0.3) py-2"></hr>

      </>
      <>
        <div className="flex gap-3 items-center justify-start">
          <img src={userProfile} className="rounded-full w-6 h-6" alt="img" />
          <span>Wilson</span>
        </div>
        <div className="flex gap-0.5 mt-2">
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="yellow" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
          <Star fill="white" strokeWidth={0} size={20}/>
        </div>
        <p className="pb-4">We were here on a hungry Sunday morning, they served us keema burger, english breakfast, tomato soup, chicken cream soup. Thankful for such yummy breakfast.</p>

      </>
      </div>
    </div>
  );
};

export default Feedback;
