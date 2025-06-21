import React from 'react'
import Marquee from "react-fast-marquee";
export default function Header() {
  return (
    <div>
      <div className="bg-teal-500 text-white text-xl font-bold p-2">
        <Marquee>
          আপনার জীবনকে সহজতর করার জন্য, আমরা নিয়ে এসেছি "Online Store"।  এখানে
          পাবেন আপনার প্রাত্যহিক প্রয়োজনীয় পণ্য থেকে শুরু করে বিশেষ দিনের
          উপহার—সবই।
        </Marquee>
      </div>
    </div>
  );
}
