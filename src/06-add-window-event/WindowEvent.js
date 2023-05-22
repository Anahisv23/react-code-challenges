import React, { useEffect} from "react"
export default function WindowEvent () {

  // when component mounts we add an event listener to listen for double clicks
  // when component unmounts we removed the event listener

  useEffect(() => {
    const doubleClick = () => alert("You clicked twice!")

    window.addEventListener("dblclick", doubleClick)

    
    // add doubleClick as the second parameter so we can tell removeEventLister what event lister to remove
    // this return from the useEffect is a clean up function
    
    return () => window.removeEventListener("dblclick", doubleClick)
  }, [])
  return (
    <h2>Window event active</h2>
  )
}
