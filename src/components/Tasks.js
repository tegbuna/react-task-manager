// // create a list using an array map
// const tasks = [
// {
//     id:1,
//     text: 'Dr. Appt',
//     day:'Feb 5th at 2:30pm',
//     reminder:true,
// },

// {
//     id:2,
//     text: 'Mtg. at School',
//     day:'Feb 6th at 1:30pm',
//     reminder:true,
// },

// {
//     id:3,
//     text: 'Grocery Shopping',
//     day:'Feb 9th at 6:30pm',
//     reminder:false,
// },
// ]

// const Tasks = () => {
//   return <>
//   {tasks.map((task) => (
//   <h3 key={task.id}>{task.text}</h3>
//   ))}
//   </>;
// };

// export default Tasks;


// ------------------------------------

// Tasks function using state by importing useState hook
   
import Task from "./Task";

const Tasks = ({tasks, onDelete}) => {
      return (
      <>
      {tasks.map((task) => (
      <Task key={task.id}task={task} onDelete={onDelete}/>
      ))}
      </>
      )
    }

export default Tasks;
