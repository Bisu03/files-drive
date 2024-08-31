import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { app } from "../../Config/FirebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { ParentIdContext } from "../../context/ParentIdContext";

// import { ShowToastContext } from "../../context/ShowToastContext";
function CreateFolderModal() {
  const docId = uuidv4();

  const { isLoaded, user } = useUser();
  const [folderName, setFolderName] = useState();
  const { ParentId } = useContext(ParentIdContext)
  const db = getFirestore(app)

  const onCreate = async () => {
    await setDoc(doc(db, "Folders", docId), {
      name: folderName,
      id: docId,
      createBy: user.id,
      parentFolderId: ParentId || ""
    })
    location.reload()
    toast.success('Folder Created!')
  }



  return (
    <div>
      <form method="dialog" className="modal-box p-9 items-center">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div className="w-full items-center 
        flex flex-col justify-center gap-3">
          <Image src="/folder.png" alt="folder" width={50} height={50} />
          <input
            type="text"
            placeholder="Folder Name"
            className="p-2 border-[1px] outline-none
                rounded-md"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <button className="bg-blue-500
          text-white rounded-md p-2 px-3 w-full"
            onClick={() => onCreate()}
          >Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateFolderModal;
