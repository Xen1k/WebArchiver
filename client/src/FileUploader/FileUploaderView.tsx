import React from 'react';
import './FileUploader.css'

const FileUploaderView = (props: any) => (
    <div
        onDragLeave={e => props.dragLeaveHandler(e)}
        onDrop={e => props.onDropHandler(e)}
        onDragOver={e => props.dragStartHandler(e)}
        className={props.isDragging ? 'drop-area drop-area-highlight' : 'drop-area'}
    >
        {props.isDragging ? "Отпустите файл для загрузки" : "Перетащите файл для загрузки"}
    </div>
)

export default FileUploaderView;