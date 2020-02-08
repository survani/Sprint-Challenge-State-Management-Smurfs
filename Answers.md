1. What problem does the context API help solve?

It helps prevent prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions – This is where the store gets its data information from. They only describe what will happen. It doesn’t let the store know what changes were made to the store. 

Reducers – reducers are responsible to updating the state according to the actions it is presented.

Store – The store is the major key to putting everything together. It responsible to handle everything in connection with state.

The store is known as the single source of truth because it is what represent the state of an application. The state will now be only in one place instead. 


1. What is the difference between Application state and Component state? 
When would be a good time to use one over the other?

Difference is where the state is located. Application State is stored globally, and Component State is stored locally in its component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-Thunk lets us perform Asynchronous Redux Actions. Without using redux-thunk the actions in redux are always performed synchronously. This will make it hard to call an external API. That is the way it changes action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I enjoyed using Context API a lot. It was semi-hard to learn, but I was able to learn it faster than Redux. I would say that Redux will be great for bigger applications. I know the moment that I can say ah I know how to use Redux it will be worth it. I feel like I enjoyed Context API more because Redux has a lot of setting up to do. I know that with a larger application it will be needed. 