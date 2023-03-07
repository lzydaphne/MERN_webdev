import React from 'react';
import ReactDOM from 'react-dom';
//React 当中的元素事实上是普通的对象，
//React DOM 可以确保 浏览器 DOM 的数据内容与 React 元素保持一致。
import { Provider } from 'react-redux';
/*
Provider component is used to provide access to the Redux store to all the components in the application. The Provider component is typically placed at the top level of the component tree, wrapping all the other components that need access to the store.

By wrapping the application with the Provider component, any components within the application can access the store through the connect function, which connects a component to the Redux store and provides it with the necessary state and dispatch props.
*/

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
/*The "createStore" function takes three arguments:

reducers - A reducer function or an object whose values are reducer functions. These reducer functions define how the state of your application should change in response to actions.

initialState - The initial state of your application. This is an optional argument and can be set to an empty object {} if no initial state is needed.

enhancer - An optional function that enhances the store with additional functionality. In this case, the applyMiddleware function from the redux library is used to add middleware to the store. Middleware allows you to extend the behavior of Redux by intercepting actions before they reach the reducers. The thunk middleware is passed as an argument to applyMiddleware to handle asynchronous actions.

The compose function from the redux library is also used to combine multiple store enhancers into a single function.
*/

/*passing in the "store" as a prop. This makes the store available to all the components in the App component tree, allowing them to connect to the store and access its state and dispatch methods. */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
/*
props (short for "properties") is a mechanism for passing data from a parent component to a child component.
Props are "read-only" in React, which means that a child component cannot modify its own props. 
If a child component needs to modify its behavior based on props, it can use the useEffect hook or other techniques to re-render itself with different props.
*/
/*
在此 div 中的所有內容都將由 React DOM 來管理，
所以我們將其稱為 "根" DOM 節點。

我們用 React 開發應用時一般只會定義一個根節點。
但如果你是在一個已有的項目當中引入 React 的話，
你可能會需要在不同的部分單獨定義 React 根節點。

要將React元素渲染到根DOM節點中，
我們通過把它們都傳遞給 ReactDOM.render() 的方法來將其渲染到頁面上：
*/