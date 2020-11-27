declare module 'react-calculator'

declare const $: (selector: string) => any

// 重载
declare function jQuery(sel: string): any
declare function jQuery(domReadyCallback: () => any): any


declare class Animal{
  name: string
  constructor(name: string)
  eat(): string
}


declare enum Directions{
  up,
  down,
  left,
  right,
}

declare namespace jQueryN {
  function ajax(url: string): void
}

declare class Orienter{
  
}