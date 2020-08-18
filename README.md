# React.js app

In this repository ill be exploring react.js framework with [Rocketseat]('http://app.rocketseat.com.br/) platform, and [React.js]('https://reactjs.org/') documentations.

## Discoveries

- I can use scoped styles with every component from react
- The ... javascript mapping function that can be used in diverse situations, like a function that can receive multiple amount of parameters.
- The use of react routes.
- We can use ```javascript { value } = object; ``` to extract separated values from the object.
- Found out that creating a folder with `index.js` inside it, when called the folder, the `index.js` files will be called automatically, making the code much more concise and readable, and making the organization of components much better.
- Learned about `axios` library, for http requests.
- I can't use class property inside ```javascript render(); ``` because that is a property used by javascript, make conflict between react render and javascript.
- React variables are crerate within state function inside Component, the state variable wotn change until setState function is called
- onclick event inside react is onClick


```javascript
    import { React, Component } from 'react';

    export default class Name extends Component {
        state = {
            variable: 1,
        }

        addNumber = () => {
            const { variable } = this.state;

            variable++;

            this.setState({ variable });
        }

        render() {
            const { variable } = this.state;
            return (
                <div>{variable}</div>
                <button onClick={addNumber}>+1</button>
            );
        }
    }
```

`Those are the most important discoveries i have found, i'll add more while i find more source of information`