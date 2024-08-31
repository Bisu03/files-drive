import React, { useContext, useEffect, useState } from "react";
import Storage from "../components/Storage/Storage";
import FileList from "../components/files/FileList";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { app } from "../Config/FirebaseConfig";
import { useUser } from "@clerk/nextjs";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ParentIdContext } from "../context/ParentIdContext";

const Allfiles = () => {

    const [fileList, setFileList] = useState([])
    const { setParentId } = useContext(ParentIdContext);

    const { user } = useUser();
    const db = getFirestore(app)

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
        }
    }, [user])

    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div
                    className="grid grid-cols-1
        md:grid-cols-3 w-full">
                    <div className="col-span-2 p-5">
                        <SearchBar />
                        <FileList fileList={fileList} />
                    </div>
                    <div
                        className="bg-white p-5
         ">
                        <Storage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allfiles;
