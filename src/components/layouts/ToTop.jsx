import React from "react";
import { FiArrowUp } from 'react-icons/fi'

const ToTop = () => {

  window.addEventListener("scroll", () => {
    const toTop = document.querySelector(".topscroll")

    if (window.pageYOffset >= 300) {
      toTop.classList.remove('hidden')
      toTop.classList.add('block')
    } else {
      toTop.classList.remove('block')
      toTop.classList.add('hidden')
    }
  })

  return (
    <a href="#" className="topscroll hidden ">
      <i className="fixed bottom-8 left-8 bg-yellow-600 p-3 cursor-pointer hover:bg-yellow-300 rounded-xl text-xl text-white font-bold z-10">
        <FiArrowUp />
      </i>
    </a>
  );
}

export default ToTop;