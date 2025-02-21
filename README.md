[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/baDnjus9)
# useState

## Learning Goals

- [ ] **Use React to control the state of the application**
- [ ] **Implement a controlled form**
- [ ] **Hold data in state with useState**
- [ ] **Update State with useState**
- [ ] **Use events to update application state**



## useState Hook

[Use State](https://react.dev/reference/react/useState)

```
import {data} from "./data/data.js"
import {useState} from "react";

//App is the root of our application and where we load in our components.
function App() {
  const [restaurantState, setRestaurants] = useState([...data])

  return (
    <div className="App">
      <RestaurantsContainer  restaurants={restaurantState}/>
    </div>
  );
}

export default App;

```

## Lab Deliverables
0. Pre-configuration: Open your terminal, navigate to the root of the project directory, and type `npm i`. This will install and configure all the necessary packages.

1. Add State to App

- Import useState from React.
- Add this line to the top of App `const [restaurantState, setRestaurants] = useState()`.Did you know you can extract multiple variables from arrays and objects using a feature called destructuring?. `useState` returns an array with two elements: the first is the current state, and the second is the function used to update that state. In this example, we're using destructuring to assign those elements to two variables: restaurantState, which holds the current state, and setRestaurants, which is the function to update the state.
- Pass useState([...data]). We’re using the spread operator (...) here, which takes the contents of the data array and puts them into a new array.
- Pass the RestaurantsContainer state 
- Run the application with `npm run start`
<details>
  <summary>Click Here to view solution</summary>

```

function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
    </div>
  );
}

export default RestaurantsContainer;



import RestaurantsContainer from "./components/RestaurantsContainer";
import "./App.css";

//App is the root of our application and where we load in our components.
function App() {
  return (
    <div className="App">
      <RestaurantsContainer/>
    </div>
  );
}

export default App;


```

</details>

2. Add state to the AddRestaurant component 

- Navigate to AddRestaurant
- Import useState and create state with the variables formData and setFormData
- Pass the useState variable an object with the keys name, address, phone, cuisine and rating
 

<details>
  <summary>Click Here to view solution</summary>

```
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    cuisine: "",
    rating: ""
  });


```

</details>

3. update state

- Add the following code listed in the solution.  

<details>
  <summary>Click Here to view solution</summary>

```
// This function will handle the change event for our form.

//React takes care of events, so we just need to create a callback function to pass to React's onChange handler (which we'll do in the next step).

//The handleChange function will accept the event as a parameter. We'll extract the name and value from the event's target, allowing us to capture both the input field's name and its current value.



 const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // Here we are copying in the current form data with the spread operator
    // We are then adding the new key value pair with [name]:value
    setFormData({ ...formData, [name]: value });
  };


```

</details>

4. Update forms onchange event 
- Update the form by adding an onChange attribute to each input, assigning it the handleChange function like this: onChange={handleChange}.
- Test your code by adding this console.log statement: console.log(formData). Then, check the developer console to confirm that the state is updating correctly.


<details>
  <summary>Click Here to view solution</summary>

```
<form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          name="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>

```

</details>

5. Update the applications state.

- In App, create a function called updateRestaurants that takes a restaurant as a parameter and calls setRestaurants. 
- Use the spread operator to pass setRestaurants the current list of restaurants and the new restaurant like this: setRestaurants([...restaurants, restaurant]).
- Pass the updateRestaurants function as a prop to the AddRestaurant component.

<details>
  <summary>Click Here to view solution</summary>

```
 const updateRestaurants = (restaurant) => {
    console.log(restaurant)
    setRestaurants([...restaurantState,restaurant])
  }

  return (
    <div className="App">
      <AddRestaurant updateRestaurants={updateRestaurants}/>
      <RestaurantsContainer  restaurants={restaurantState}/>
    </div>
  );


```

</details>


5. Passing Data up to App

- In AddRestaurant, create a function called handleSubmit that takes the event as a parameter.

- At the top of the function, add event.preventDefault() to prevent the default form submission behavior.
- Call the updateRestaurants function from props, passing it the formData. 
- Test your code by submitting a new restaurant to ensure everything is working correctly.

<details>
  <summary>Click Here to view solution</summary>

```
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    updateRestaurants(formData)
  };



```

</details>

## Submission Instructions

1. Push your code to GitHub.
2. Submit the link to your GitHub repository URL.
