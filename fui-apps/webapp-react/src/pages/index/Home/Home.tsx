import * as React from 'react'
import Header from './Header/Header'
import Category from './Category/Category'
import List from './List/List'
/**
 * @constructor <Home />
 * @description 首页
 */
interface IProps {
  test?: string
}
// interface IGenericIdentityFn1 {
//   <T>(arg: T): T
// }
// interface IGenericIdentityFn2<T> {
//   (arg: T): T
// }
class Home extends React.Component<IProps> {
    constructor (props: any) {
        super(props)
        this.loggingIdentity = this.loggingIdentity.bind(this)
        this.identity = this.identity.bind(this)
        this.mulIdentity = this.mulIdentity.bind(this)
    }
    public componentWillMount () {
      const result1 = this.loggingIdentity<string>(['sss', 'q'])
      const result2 = this.loggingIdentity<any>(['sss', 1])
      console.log(result1)
      console.log(result2)

      // const myIdentity1: <T>(arg: T[]) => T[] = this.loggingIdentity
      // const myIdentity2: <U>(arg: U) => U = this.identity

      // const mures1 = myIdentity1<number>([123, 2])
      // const mures2 = myIdentity2<string>('oiu')

      // 带有调用签名的对象字面量定义泛型函数
      // error Type literal has only a call signature — use `<T>(arg: T) => T` instead.
      // const myIdentityFn: IGenericIdentityFn1 = this.identity;
      // const mures = myIdentityFn<number>(999)
      // console.log(mures)

      // const myIdentityFn2: {<T, U>(a: T, b: U): object} = this.mulIdentity;
      // const m2 = myIdentityFn2<number, string>(1, 's')
      // console.log('m2', m2)

      // const myIdentityFn1: IGenericIdentityFn1 = this.identity;
      // const myIdentityFn2: IGenericIdentityFn2<number> = this.identity;
      // const mures3 = myIdentityFn1<number>(999)
      // const mures4 = myIdentityFn2(999)
      // console.log(mures3, mures4)
    }
    public mulIdentity<T, U>(a: T, b: U): object {
      return {a, b}
    }
    // 测试泛型
    public loggingIdentity<T>(arg: T[]): T[] {
      console.log(arg.length);  // Array has a .length, so no more error
      return arg;
    }
    public identity<T>(arg: T): T {
      return arg;
    }


    public render () {
        return (
            <div className="home-wrap">
                <Header />
                <Category />
                <List />
            </div>
        )
    }
}

export default Home
