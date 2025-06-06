# SKIP HIRE PROJECT

> A complete redesign of the “Choose Your Skip Size” page from the Garden Waste booking flow (found at https://wewantwaste.co.uk), built with React and Tailwind CSS for a clean, modern, and responsive experience.



## Built With

- React
- JavaScript
- Tailwind CSS
- Vite

## Approaches & Design

### Clean, Reusable Components**:
I broke down the UI into purposeful, reusable React components (`SkipCard`, `SkipList`) improved maintainability and readability.

- `SkipCard` for display logic and styling  
- `SkipList` to map through provided data

### **Responsive Design**:  
I Leveraged Tailwind’s utility classes for quick iteration and responsive styling. Custom theme options kept the design consistent.

### **Data Handling & API Integration**
I Abstracted API calls into `redux store`, separating concerns and centralizing fetch logic. Skip data is dynamically fetched and handled with `useEffect` and `useState`.

- Used Tailwind CSS to ensure fluid layouts across mobile/tablet/desktop breakpoints  
- Card grid adjusts columns and spacing responsively

- **Improved UI/UX**:  
- Modern card design with shadows, rounded corners, and clear CTA  
- Price and size details emphasized  
- Interactive hover/focus states boost accessibility



## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites
```
  node js
  npm

```
### Setup
Clone the repository and change the directory to garden-waste

``` 
  $ git clone git@github.com:Felix45/garden-waste.git

  $ cd garden-waste

```

### Install
Install all project dependencies by running the command below
 
``` 
  $ npm install
```
### Usage
Start the pplication server
``` 
  $ npm run dev
```

### Deployment
- [Visit Application Homepage](http://localhost:5173)



### Authors

| 👤 Name | Github | Twitter | LinkedIn |
|:------|:--------|:---------|:----------|
|Felix Ouma|[@Felix45](https://github.com/Felix45)|[@Felix_Atonoh](https://twitter.com/Felix_Atonoh)|[LinkedIn](https://www.linkedin.com/in/felix-ouma/)|



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Felix45/garden-waste/issues).

## Show your support

Give a ⭐️ if you like this project!
