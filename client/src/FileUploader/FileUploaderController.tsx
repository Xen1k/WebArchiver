import React, { useState } from 'react';
import FileUploaderView from './FileUploaderView'
import axios from 'axios';

const FileUploaderController = () => {
    const [isDragging, setIsDragging] = useState(false)

    const dragStartHandler = (e: React.DragEvent): void => {
        e.preventDefault()
        setIsDragging(true)
    }

    const dragLeaveHandler = (e: React.DragEvent): void => {
        e.preventDefault()
        setIsDragging(false)
    }

    const onDropHandler = (e: React.DragEvent): void => {
        e.preventDefault()
        setIsDragging(false)
        let file: File = e.dataTransfer.files[0]
        const formData: FormData = new FormData()
        formData.append('file', file)
        sendData(formData);
    }

    const sendData = async (formData: FormData) => {
        const response = await axios.post("http://localhost:80/compress", formData, {
            responseType: 'blob'
        });
        let fileURL = window.URL.createObjectURL(new Blob([(response.data)]))
        let fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', `${(formData.get("file") as File).name}.zip`);
        fileLink.click();
    }

    return (
        <FileUploaderView
            isDragging={isDragging}
            dragStartHandler={dragStartHandler}
            dragLeaveHandler={dragLeaveHandler}
            onDropHandler={onDropHandler}
        />
    )
}

export default FileUploaderController;


