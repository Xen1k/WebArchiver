import React from 'react';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './FileUploader.css'

const FileUploaderView = (props: any) => {
    if (!props.loading)
        return (
            <div
                onDragLeave={e => props.dragLeaveHandler(e)}
                onDrop={e => props.onDropHandler(e)}
                onDragOver={e => props.dragStartHandler(e)}
                className={props.isDragging ? 'drop-area drop-area-highlight' : 'drop-area'}
            >
                {props.isDragging ? "Отпустите файл для загрузки" : "Перетащите файл для загрузки"}
            </div>
        )
    else
        return (
            <div className={props.isDragging ? 'drop-area drop-area-highlight' : 'drop-area'}>
                <LoadingAnimation />
            </div>
        )
}

export default FileUploaderView;