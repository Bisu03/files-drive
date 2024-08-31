import { useRouter } from "next/router";
import React, { useEffect, useContext, useState } from "react";
import SearchBar from "../../components/SearchBar";
import Sidebar from "../../components/Sidebar";
import Storage from "../../components/Storage/Storage";
import { ParentIdContext } from "../../context/ParentIdContext";
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { app } from "../../Config/FirebaseConfig";
import FolderList from "../../components/Folder/FolderList";
import FileList from "../../components/files/FileList";
import toast from "react-hot-toast";

const FolderDetails = () => {
    const router = useRouter();
    const { slug, name } = router.query;
    const { user } = useUser();

    const { setParentId } = useContext(ParentIdContext);
    const [folderList, setFolderList] = useState([]);
    const [fileList, setFileList] = useState([]);

    const db = getFirestore(app);

    const deleteFolder = async () => {
        await deleteDoc(doc(db, "Folders", slug)).then(resp => {
            toast.success('Folder Deleted')
            deleteFiles()
        })
    };

    const deleteFiles = async () => {
        await deleteDoc(doc(db, "Files", slug)).then(resp => {
            toast.success('Files Deleted')
            router.push("/files");
        })
    };
    const getFolderList = async () => {
        setFolderList([]); // Clear the existing list

        const q = query(
            collection(db, "Folders"),
            where("createBy", "==", user?.id),
            where("parentFolderId", "==", slug)
        );

        const querySnapshot = await getDocs(q);

        const folders = [];

        querySnapshot.forEach((doc) => {
            folders.push(doc.data());
        });

        setFolderList(folders);
    };


    const getFileList = async () => {
        setFileList([]);

        const q = query(
            collection(db, "Files"),
            where("parentFolderId", "==", slug),
            where("createdBy", "==", user?.id)
        );

        const querySnapshot = await getDocs(q);

        const files = [];

        querySnapshot.forEach((doc) => {
            files.push(doc.data());
        });

        setFileList(files);
    };

    useEffect(() => {
        if (user) {
            setParentId(slug);
            getFileList();
            getFolderList();
        }
    }, [slug, user]);

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div
                    className="grid grid-cols-1
        md:grid-cols-3 w-full">
                    <div className="col-span-2 p-5">
                        <SearchBar />
                        <h2 className="text-[20px] font-bold mt-5">
                            {name}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={deleteFolder}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 float-right text-red-500
                    hover:scale-110 transition-all cursor-pointer">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </h2>

                        {folderList.length > 0 ? (
                            <FolderList folderList={folderList} isBig={false} />
                        ) : (
                            <h2
                                className="text-gray-400
        text-[16px] mt-5">
                                No Sub Folder Found
                            </h2>
                        )}

                        <FileList fileList={fileList} />
                    </div>
                    <div
                        className="bg-white p-5
         order-first md:order-last">
                        <Storage />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FolderDetails;
