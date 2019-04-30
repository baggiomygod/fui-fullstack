// 自定义.d.ts
///<reference path='../typings/qcloud-cos-sts.d.ts' />

import { Injectable } from '@nestjs/common'
import * as crypto from 'crypto-js'
const STS = require('qcloud-cos-sts')
// console.log('node:', global.)
@Injectable()
export class CosStsService {
    async root(): Promise<any> {
        const config = {
            secretId: 'AKIDZt353oDTM1RcYFj0B8pHTRCm7l9IrrHS',
            secretKey: '70kEUVHqBKEyWptiJerphKitqY0LRN4Z',
            proxy: '',
            durationSeconds: 1800,
            bucket: 'test-1258297209',
            region: 'ap-guangzhou',
            allowPrefix: 'upload_file/*',
            // 密钥的权限列表
            allowActions: [
                // 所有 action 请看文档 https://cloud.tencent.com/document/product/436/31923
                // 简单上传
                'name/cos:PutObject',
                // 分片上传
                'name/cos:InitiateMultipartUpload',
                'name/cos:ListMultipartUploads',
                'name/cos:ListParts',
                'name/cos:UploadPart',
                'name/cos:CompleteMultipartUpload'
            ],
        }
        // 获取临时密钥
        const LongBucketName = config.bucket;
        const ShortBucketName = LongBucketName.substr(0, LongBucketName.indexOf('-'));
        const AppId = LongBucketName.substr(LongBucketName.indexOf('-') + 1);
        const policy = {
            'version': '2.0',
            'statement': [{
                'action': config.allowActions,
                'effect': 'allow',
                'principal': {'qcs': ['*']},
                'resource': [
                    'qcs::cos:ap-guangzhou:uid/' + AppId + ':prefix//' + AppId + '/' + ShortBucketName + '/' + config.allowPrefix,
                ],
            }],
        };
        const startTime = Math.round(Date.now() / 1000);
        let response
        return new Promise((resolve, reject) => {
            console.log('id:', config.secretId)
            STS.getCredential({
                secretId: config.secretId,
                secretKey: config.secretKey,
                proxy: config.proxy,
                durationSeconds: config.durationSeconds,
                policy,
            }, (err, tempKeys) => {
                response = (err || tempKeys) || '';
                resolve(response)
            });
        }) 
    }
}