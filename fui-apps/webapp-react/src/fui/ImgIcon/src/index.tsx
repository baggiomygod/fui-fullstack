import * as React from 'react'

import './index.styl'
/**
 * @constructor <Header />
 * @description Header
 */
interface IconProps {
  src: string
  size?: 'large' | 'small' | 'default' | number
  shape?: 'circle' | 'square';
}
interface IconState {
  scale: number;
  isImgExist: boolean;
}
/*
 * public private protected static 区别？
 */
class ImgIcon extends React.Component<IconProps> {
  public defaultProps = {
    shape: 'circle' as IconProps['shape'],
    size: 'default' as IconProps['size'],
  };
  public state = {
    scale: 1,
    isImgExist: true,
  };
  private iconChildren: any

  constructor(props: IconProps) {
    super(props)
  }
  public componentDidMount () {
    console.log(this.props)
    console.log(this.state)
    console.log(this.defaultProps)
    this.setScale()
  }
  public componentDidUpdate (prevProps: IconProps, prevState: IconState) {
    // ...
  }
  public setScale = () => {
    const childrenNode = this.iconChildren
    if (childrenNode) {
      // ...
    }
  }

  public render() {
    const {size, src} = this.props
    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: size / 2
        }
        : {}
      let sizeClass:string = 'fui-icon icon-default'
      if (typeof size === 'string') {
        sizeClass = `fui-icon icon-${size}`
      }
    return (
      <span className={sizeClass} style={{...sizeStyle}}>
          <img className="icon-img" src={src} alt=""/>
        </span>
    )
  }
}

export default ImgIcon
