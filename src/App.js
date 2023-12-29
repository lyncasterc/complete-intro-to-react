const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    'div', // type of element
    {}, // attributes (id, class, etc.)/props
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanese' }),
      React.createElement(Pet, { name: 'Pepper', animal: 'Bird', breed: 'Cockatiel' }),
      React.createElement(Pet, { name: 'Doink', animal: 'Cat', breed: 'Mixed' }),
    ], // children
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));