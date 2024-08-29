import React from 'react'
import StorageInfo from './StorageInfo'
import StorageDetailList from './StorageDetailList'
import StorageUpgradeMsg from './StorageUpgradeMsg'

function Storage() {
  return (
    <div>
        <StorageInfo/>
        <StorageDetailList/>
        <StorageUpgradeMsg/>
    </div>
  )
}

export default Storage