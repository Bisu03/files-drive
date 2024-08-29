import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '../../Config/FirebaseConfig'

function StorageInfo() {
    const [totalSizeUsed,setTotalSizeUsed]=useState(0);
    const [imageSize,setImageSize]=useState(0);

    const [fileList,setFileList]=useState([])
    // let totalSize=0;
 
    // useEffect(()=>{
    //     setImageSize(StorageSize.getStorageByType(fileList,['png','jpg']));
    // },[fileList])
    

  return (
    <div className='mt-7'>
           <h2
        className="text-[22px] 
       font-bold"
      >
        {totalSizeUsed} {" "}
        <span
          className="text-[14px]
        font-medium"
        >
          used of{" "}
        </span>{" "}
        50 MB
      </h2>
        <div className='w-full
        bg-gray-200  h-2.5 flex'>
            <div className='bg-blue-600 h-2.5 w-[25%]'></div>
            <div className='bg-green-600 h-2.5 w-[35%]'></div>
            <div className='bg-yellow-400 h-2.5 w-[15%]'></div>

        </div>
        
    </div>
  )
}

export default StorageInfo