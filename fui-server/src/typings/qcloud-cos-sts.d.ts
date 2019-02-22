import STS from 'qcloud-cos-sts'

declare namespace STS {
  export function getCredential(options:any, callback?: any): void
  export function getPolicy(scope: any)
}