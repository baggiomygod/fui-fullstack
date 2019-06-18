import * as React from 'react'

import './index.styl'
/**
 * @constructor <Header />
 * @description Header
 */
interface IconProps {
  src?: string
  size?: 'large' | 'small' | 'default' | number
  shape?: 'circle' | 'square'
  iconText?: string
}
interface IconState {
  scale: number;
  isImgExist: boolean;
}
/*
 * public private protected static 区别？
 */
class ImgIcon extends React.Component<IconProps> {
  // public defaultProps = {
  //   shape: 'circle' as IconProps['shape'],
  //   size: 'default' as IconProps['size'],
  // };
  public state = {
    scale: 1,
    isImgExist: true,
  };
  private iconChildren: any

  constructor(props: IconProps) {
    super(props)
  }
  public componentDidMount () {
    // console.log('defaultProps:', this.defaultProps)
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
  public renderImg = () => {
    const {src, size, shape, iconText} = this.props
    let textStyle: React.CSSProperties = {}
    switch (size) {
      case 'default': textStyle = {fontSize: 24}
      break
      case 'small': textStyle = {fontSize: 18}
      break
      case 'large': textStyle = {fontSize: 32}
      break
      default:
      break
    }
    if (typeof size === 'number') {
      textStyle = {fontSize: size / 2}
    }
    const shapeStyle =
          shape === 'circle'
            ? {borderRadius: '100%'}
            : {borderRadius: '5%'}

    if (src) {
      return (<img className="icon-img"style={{...shapeStyle}} src={src} alt=""/>)
    } else {
      return (
        <span className="default-icon-text"
              style={{...textStyle, ...shapeStyle}}>{iconText || 'F'}</span>
      )
    }
  }
  public render() {
    const {size} = this.props
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
        {this.renderImg()}
      </span>
    )
  }
}

export default ImgIcon
