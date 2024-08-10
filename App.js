
const parent = React.createElement("div",{id: "parent"},
 
               React.createElement("div",{id: "child"}, 
            [React.createElement("h1",{id: "head1"},"This is h1"), React.createElement("h2",{id: "head2"}, "This is h2")]));

const heading = React.createElement("h1",{id: "heading"},"Hello World From React!");

const div = React.createElement("div",{id: "top"},[parent,heading]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const head1 = React.createElement("h1",{id: "head1"},"This is h1");
const head2 = React.createElement("h2",{id: "head2"},"This is h2");
const child1 = React.createElement("div",{id: "child1"},[head1,head2]);
const child2 = React.createElement("div",{id: "child2"},[head1,head2]);
const parent1 = React.createElement("div",{id: "parent1"}, [child1,child2]);

root.render(parent1);