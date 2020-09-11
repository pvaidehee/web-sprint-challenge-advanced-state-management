1. What problem does the context API help solve?

To solve the problem of prop drilling and managing state, especially in large scale applications.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the functions that perform specific processes that change state data in the store by way of the reducer which can dispatch actions. The store is the place where our state data lives.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state has one state for all of the data in an application, component state has state for each individual component. Component state would be better to use if the components would need to be reused in many different applications.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware that allows us to dispatch async actions. It's action-creators return a function instead of an object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. Because it is easy and once we get to the syntax done it's super easy and fun.
