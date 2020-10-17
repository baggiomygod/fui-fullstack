import * as React from 'react'
import { Upload, message, Button, Icon } from 'antd';

const upload = () => {
    const eachSize = 2 * 1024 // 每个chunks 的大小
    let blockCount: number
    
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        beforeUpload(file: any, fileList: any) {
            console.log('file size:', file.size)
            blockCount = Math.ceil(file.size / eachSize)
            console.log('file count:', blockCount)
            return true
        },
        onChange(info: any) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
    return (
        <div className="upload-container">
            <Upload {...props}>
            <Button>
            <Icon type="upload" /> Click to Upload
            </Button>
            </Upload>
        </div>
    )
}


export default upload