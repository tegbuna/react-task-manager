// import Header from "./Components/Header";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div className="container">

//     <h1>Personal Task Manager</h1>
//     <p>For all the things...</p>
//       <br />
//       <Header className='header' />
//       <br />       
//       <Footer />
//     </div>
//   );
// }


// Tutorial code

import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import {useState} from 'react';


const App = () => {
    const [tasks, setTasks] = useState([
        {
            id:1,
            text: 'Dr. Appt',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        
        {
            id:2,
            text: 'Mtg. at School',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        
        {
            id:3,
            text: 'Grocery Shopping',
            day:'Feb 9th at 6:30pm',
            reminder:false,
        },
      ])

       // Add, Delete Tasks:
       const deleteTask = (id) => {
         setTasks(tasks.filter((task) => task.id !== id))

       }
     


  return (
    <div className='container'>
      <Header/>
      {tasks.length > 0 ?(<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks Available.')}

      <Footer/>
    </div>
  )
};

export default App;




// export default App;
