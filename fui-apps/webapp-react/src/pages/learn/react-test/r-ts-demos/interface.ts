
/* tslint:disable */
// 允许添加任意属性
interface IPerson {
  readonly id: number
  name: string
  age?: number // 如果存在任意属性，可选属性必须是任意属性的子集
  [key: string]: any
}

const jack: IPerson = {
  id: 1, // Property 'id' is missing in type '{ name: string; address: string; like: string; age: number; }' but required in type 'IPerson'.ts(2741
  name: 'jack',
  address: '123',
  like: '456',
  age: 12
}

// jack.id = 2 // Cannot assign to 'id' because it is a read-only property.ts(2540)


let sArr: string[] = ['1', '2']
// let nArr: number[] = [1, null]
let anyArr: any[] = [1, null, 's']

// let gArr: Array<number> = [1, null, 2]


function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length
  } else {
    return something.toString().length;
  }
}
