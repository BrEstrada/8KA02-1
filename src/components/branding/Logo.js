import React from "react"

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 160"
    style={{
      enableBackground: "new 0 0 240 160",
    }}
    xmlSpace="preserve"
    
    height={props.height || "2rem"}
    fill={props.fill || "grey"}
  >
    <path d="M16.7 137c8 8.4 17.9 12.4 29.2 13.6 12.9 1.3 25.3-.1 36.8-7 23.1-13.8 26.6-50.1 3.7-66.4-1.3-.9-2.5-1.9-3.2-2.4 3.3-3.4 7-6.3 9.6-9.9 10-14.3 5.4-36.9-10.1-47C64.9 6.4 46 6.2 27.7 16.1 4.4 28.6 3.4 62.3 24.9 74.4c-1.5 1.1-2.7 2-3.9 2.9C.2 92.9 2.3 122 16.7 137zM53.6 33.4c10.1 0 16.7 6.5 16.7 16.7 0 9.7-6.5 15.9-16.7 15.9C43.5 66 37 59.7 37 50c-.1-9.6 6.9-16.5 16.6-16.6zM54 87c11.5.1 19.8 8.9 19.8 20.9-.1 11.6-8.7 20.2-20.2 20.1-11.6-.1-20-8.8-19.9-20.7.1-11.9 8.6-20.4 20.3-20.3zM137.7 144v-43.7c0-1.1 0-2.7.7-3.4 3.5-3.4 7.3-6.7 11-10 16.1 19.9 31.9 39.5 47.6 59.1 1.4 1.8 2.8 2.6 5.2 2.6 7.4-.1 14.8-.1 22.2-.1h10l-65.6-78.6c21.4-19.2 42.7-38.3 64.7-57.9-13.4 0-25.7 0-38 .1-1 0-2.2.7-3 1.5C177 28.2 161.7 43.1 146.3 58c-2.6 2.5-5.3 4.9-8.6 8V12h-27.5v136.1h27.7c-.2-1.5-.2-2.8-.2-4.1z" />
  </svg>
)

export default Logo
