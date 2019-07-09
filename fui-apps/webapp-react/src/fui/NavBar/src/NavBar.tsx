import classnames from 'classnames'
import * as React from 'react'
import { INavBarProps } from './PropsType'
import { withRouter } from 'react-router-dom';
import './NavBar.styl'

class NavBar extends React.Component<INavBarProps, any> {
  // defaultProps可以为Class组件添加默认props.一般用于props未赋值，但又不能为null的情况
  // public 公共的，private 私有的，protected 受保护的，static 不会被实例化的属性

  public static defaultProps: INavBarProps = {
    prefixCls: 'fui-navbar',
    mode: 'light',
    // tslint:disable-next-line: no-empty
    onLeftClick: () => {}
  }
  public render () {
    const {
      prefixCls,
      className,
      children,
      mode,
      icon,
      onLeftClick,
      leftContent,
      rightContent,
      staticContext,
      ...restProps
    } = this.props
    return (
      <div
        {...restProps}
        className={classnames(className, prefixCls, `${prefixCls}-${mode}`)}
        >
        <div className={`${prefixCls}-left`} role="button" onClick={onLeftClick}>
          {
            icon ? (
              <span className={`${prefixCls}-left-icon`} aria-hidden="true">{icon}</span>
            )
            : null
          }
          {leftContent}
        </div>
        <div className={`${prefixCls}-title`}>{children}</div>
        <div className={`${prefixCls}-right`}>{rightContent}</div>
      </div>
    )
  }
}

export default withRouter<any, any>(NavBar)
