1. What is the difference between Component and PureComponent? give an example where it might break my app.

A pure component return always the same result for the given parameters, and a React Component have the chance to change by states or props. If a React Component is inside a React Pure Component it won't be re rendered and will break the app flow. 


2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

Because ShouldComponentUpdate return a false statement and when some state in the context have change it will not be updated.

3. Describe 3 ways to pass information from a component to its PARENT.

- Handle a state in the parent and pass by props the set function to the child, in order to update the state in the child and have that value in the parent.
- Handle data by reference, as well as the state handler, we can pass a reference by props to the child from the parent, handle in the child and receive the data in the parent.
- Use context to have global state handlers that can be read in parent and set in the child.

4. Give 2 ways to prevent components from re-rendering.

- (Memoization) Use useCallback hook to avoid re render by memoizing a function, so each time the function is called, it will not re render the component unless 
- (Memoization) Use useMemo hook to avoid re render by memoizing the result of a  function, so each time the function is called and giving the same result because of the same inputs, it will not re render the component.
- React.Memo, it will allow a component to avoid re render unless the props of the component have change.

5. What is a fragment and why do we need it? Give an example where it might
break my app.

A fragment is a react component that can be expressed like this <Fragment /> or just simplified with <></>, that allow us to wrap a component to many purposes and not render any html element visible in the DOM. A fragment might be a problem at the time we need to style elements because react fragment does not add a DOM node so we are not be able to style it.

6. Give 3 examples of the HOC pattern.

A HOC modifify or include a data in a component that is wrapped with it so we can use this same code to include this three examples.
- Include specific behaviour like add a loader before any fetch.
- Modify the styles of a component that is wrapped with the HOC.
- Include data fetched on the HOC to the wrapped component.
```js
function withAnyHOC(Component) {
  return props => {
    const [data, setData] = useState(null);
    const style = { padding: '10px', margin: '5px' }

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }
    return <Component style={style} {...props} data={data}/>
  }
}

const Component = ({data}) = <div>{data}</div>

const ComponentWithHOC = withAnyHOC(Component)
```

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

The sintax is the main difference, with callbacks we need to throw an exception in the  callback function, with promises we have a way to do that in the parameter of the Promise which is called "reject". Finally with async and await, we can use a "try catch" to get the exception in the parameter of the "catch".

Examples:
```js
function callbackFunction(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected."));
      return;
  }
  callback(null, number);
  }, 1000);
}

const promiseFunction = function(number){
  return new Promise((resolve, reject) => {
  if (typeof number !== "number") {
    reject(new Error("Argument of type number is expected."))
  }
  resolve(number)
})
}

const asyncAwaitFunction = async (number) => {
  try {
    promiseFunction(number)
  } catch (error){
    throw new Error(error)
  }
} 

```

8. How many arguments does setState take and why is it async.

It takes 3 arguments, the state, the props and a callback. The reason why it is async is because of the React Life cycle, each time the function to set state is executed the state update will not be visible until the component is re rendered.

9. List the steps needed to migrate a Class to Function Component.

- Map the props
- Map the state
- Map the life cycle methods
- Map the render method
- Write the base code for a functional component
- Copy the jsx elements that was in the render method to return it in the functional component
- Replace the life cycle methods with proper hooks like useEffect to handle request for example
- Use the hook useState in each state that we map in the class component
- Implement set state methods where necessary.

10. List a few ways styles can be used with components.

- Simple styling with css
- Use pre processors like SASS or Less
- Use pre processors as modules
- Use style components to write styles in JS
- Use native JSX styles writing the styles in each jsx element as an object


11. How to render an HTML string coming from the server.

We can do it by using de atribute dangerouslySetInnerHTML like this

```html
<div dangerouslySetInnerHTML={{__html: 'html string'}}></div>
```
