import React, { useState, useEffect, useContext } from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import FolderList from '../components/Folder/FolderList'
import FileList from '../components/files/FileList'
import Storage from '../components/Storage/Storage'
import { app } from "../Config/FirebaseConfig";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { useRouter } from 'next/router'
import { useUser } from '@clerk/nextjs'
import { ParentIdContext } from '../context/ParentIdContext'

const files = () => {

    const router = useRouter();
    const [folderList, setFolderList] = useState([])
    const [fileList, setFileList] = useState([])
    const { setParentId } = useContext(ParentIdContext);

    const { user } = useUser();
    const db = getFirestore(app)

    const getFolderList = async () => {
        setParentId("")
        setFolderList([]);
        const q = query(collection(db, "Folders"),
            where("createBy", '==', user.id));

        const querySnapshot = await getDocs(q);

        const folders = [];

        querySnapshot.forEach((doc) => {
            folders.push(doc.data());
        });

        setFolderList(folders);
    };


    const getFileList = async () => {
        setParentId("")
        setFileList([]);
        const q = query(collection(db, "Files"),
            where("createdBy", '==', user.id));

        const querySnapshot = await getDocs(q);

        const files = [];

        querySnapshot.forEach((doc) => {
            files.push(doc.data());
        });

        setFileList(files);
    };
    useEffect(() => {
        if (user) {

            getFileList()
            getFolderList()
        }
    }, [user])

    return (
        <div>

            <div className="flex">
                <Sidebar />
                <div className="grid grid-cols-1
        md:grid-cols-3 w-full">
                    <div className="col-span-2 p-5">
                        <SearchBar />
                        <FolderList folderList={folderList} />
                        <FileList fileList={fileList} />
                    </div>
                    <div className="bg-white p-5
         order-first md:order-last"
                    >
                        <Storage />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default files