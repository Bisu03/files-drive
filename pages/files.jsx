import React from 'react'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import FolderList from '../components/Folder/FolderList'
import FileList from '../components/files/FileList'
import Storage from '../components/Storage/Storage'

const files = () => {
    return (
        <div>

            <div className="flex">
                <Sidebar />
                <div className="grid grid-cols-1
        md:grid-cols-3 w-full">
                    <div className="col-span-2 p-5">
                        <SearchBar />
                        <FolderList />
                        <FileList />
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