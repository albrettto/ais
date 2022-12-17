import React from 'react'

const Authors = (props) => {

  return (
        <div>
            <span>{props.authors.firstName} {props.authors.lastName.slice(0,1)}.</span>
        </div>
  )
}

export default Authors