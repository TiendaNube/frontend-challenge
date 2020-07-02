## Best Practices

· Is recommended to combine Prettier with ESlint and use Airbnb Style Guide at least, custom rulers are also recommended
· Is recommended to use hooks, like memo for components, useCallBack for functions or useMemo for data in order to avoid uncessary re renders
· Is recommended to use .tsx instead .js in order to make the code easier to read, avoid bugs, also because is like javascript but with additional features
· Is recommended to delete unnecessary imports like 'ContentState' from "draft-js" in Editor.js, or 'classname' from "classname" 'InputBlock' from "./InputBlock" in
InputCurrency.js
. Is recommended to delete unnecessary files like 'modules/app/components/Login.js'
. Is recommended to delete unnecessary props like 'persist' in "provider.js"
· Is recommended to check performance in DevTools > Performance or Lighthouse we could find some useful data in order to improve performance
. Is recommended to use shouldComponentUpdate or React.PureComponent in order to avoid unnecessary renders
. Is recommended to refactor components in order to make them Stateless, this could reduce code and improve performance (better than use PureComponent)
. Is recommended to use 'react-i18next' library to handle texts, and make the app useful to more than one language