# my-memo
A Memo (To-Do List) webapp, created using React library.

Visit here:- https://rmopl.csb.app/

(The website is not currently live and is locally hosted on Code Sandbox.)

_(Approx. 5 hrs. solo project)_


## Explanation

The way this Todo List app works is pretty simple. Type in a task or note with a title into the input field and press "+". Once you've submitted your note, you will see it appear as an entry. You can keep adding item to add additional entries in card format and have them all show up. Since there is a reusable card component we can create as many notes in one go.
Apart from entry addition, their is also a deletion icon in the note which removes the specific task and lists rest of the tasks accordingly.

We start by Creating a new _Create React App_ and applying the initial UI.
The parent component is `App`, which stores the notes array in its own state, managed using the `useState()` Hook. Inside App component, We create a list of those components, which will be passed by `Note` component from the notes prop using `createArea` component, which iterates on it using `map()` function and outputs a list of notes.
The _createArea_ component contains _handleChange_ function which tracks the data from the user end and passes it to App.

When the note is submitted we call the _submitNote_ event, and then we submit the data from the user to the parent(App). 

The same App component apart from _addNote_ function, contains _deleteNote_ and it removes the selected data from the note array.

Finally, we render our App component data to the main javascript file.
