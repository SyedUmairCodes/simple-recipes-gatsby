import React from "react"
import setupTags from "../utils/setupTags"
const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  console.log(newTags)
  return (
    <div>
      <p>Tags list</p>
    </div>
  )
}

export default TagsList
