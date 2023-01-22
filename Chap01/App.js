const heading = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello World from React"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Hello World from React2"
);

const container = React.createElement(
  "div",
  {
    id: "title3",
  },
  [heading, heading2]
);

console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element inside the root
root.render(container);
