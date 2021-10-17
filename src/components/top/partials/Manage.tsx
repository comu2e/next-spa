import React, {FC} from 'react'

const Manage:FC<{title: string}> = ({title}) => (
    <>
      <p><b>{title}</b></p>
      <button type="button">Sample</button>
      <p>タブ機能していますか？</p>
    </>
)

export default Manage