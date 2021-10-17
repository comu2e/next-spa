import React, {FC} from 'react'

const Work:FC<{title: string}> = ({title}) => (
    <>
      <p><b>{title}</b></p>
      <button type="button">Sample</button>
      <p>タブ機能していますか？</p>
    </>
)

export default Work