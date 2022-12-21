import React from 'react'

const Authors = (props) => {

  return (
        <div>
            <span>{props.authors.lastName} {props.authors.firstName.slice(0,1)}.</span>
        </div>
  )
}

export default Authors