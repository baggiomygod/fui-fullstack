import * as React from 'react'
function ChildrenDemo(props: any) {
  console.log(props.children)
  // [child1,child1,child1,child2,child2,child2]
  const resMap = React.Children.map(
    props.children,
    (c: any) => [c, [c, c]],
  )
  console.log(resMap)
  return props.children
}

export default () => (
  <ChildrenDemo>
    <span>1</span>
    <span>
      <a>2.1</a>
      <a>2.2</a>
    </span>
  </ChildrenDemo>
)
