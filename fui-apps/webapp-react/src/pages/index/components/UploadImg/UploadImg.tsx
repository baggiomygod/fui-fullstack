///<reference path='../../@types/cos-js-sdk-v5.d.ts' />

import * as React from 'react'
// https://github.com/tencentyun/cos-js-sdk-v5/blob/6c76e7564fe5b9bb34dc5c3ffbd011900a62c169/demo/demo.js
import {getAuthorization} from './getAuthorization' // 计算签名
const COS = require('cos-js-sdk-v5')

// 请求用到的参数
const Bucket = 'test-1258297209' // fui fuitest
const Region = 'ap-guangzhou'
const protocol = location.protocol === 'https:' ? 'https:' : 'http:'
const prefix = `${protocol}//${Bucket}.cos.${Region}.myqcloud.com/`
console.log(prefix)
interface IFile{
  name?: string
}
interface IState {
  file: IFile
}
class UploadImg extends React.Component {
  public state:IState = {
    file: {}
  };
  private cos:any = new COS({ // tslint:disable-line
    getAuthorization
  })
  // public componentWillMount() {}

  // 对更多字符串编码 url encode格式
  public camSafeUrlEncode = (str: string) => {
    return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
  }
  public handleFileChange = (e: any) => {
    console.log('handle file:', e.target.files)
    const file = e.target.files[0];
    if (!file) {return};
    this.setState({
      file
    })
  }
  // 上传文件
  public handleUpload = () => {
    const { file } = this.state
    // 分片上传文件
    this.cos.sliceUploadFile({
      Bucket,
      Region,
      Key: file.name,
      Body: file,
    }, (err:any, data:any) => {
      console.log(err, data);
    });
  }
  public render () {
    return (
      <div className="upload-img-wrap">
        <input id="file-selector" type="file" onChange={this.handleFileChange} />
        <button onClick={this.handleUpload}>upload</button>
      </div>
    )
  }
}

export default UploadImg
