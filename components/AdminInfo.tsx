
import React, { FC } from 'react'
import { Info } from './UserInfo'

type AdminInfo = {
    admin: boolean;
} & Info

const AdminInfo:FC<AdminInfo> = ({}) => {
  return (
    <li>AdminInfo</li>
  )
}

export default AdminInfo