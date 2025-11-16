
import React, { useCallback, useEffect, useState } from "react";

const Cds = () => {
  // 1. -----------------------------------------> fetch and filter the tasks you want to show 
  const[toshow, settoshow] = useState([]);

  // without useCallback ****
  // At every re-render a NEW function is generated,
  // but the setInterval keeps using the OLD un-updated copy.

  // with useCallback ****
  // React does NOT generate a new function every render.
  // It reuses the SAME function unless one of its dependencies changes. 

  const loadexp = useCallback(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const now = new Date();

    // const finalll = [];
    // tasks.forEach(ele => {
    //   if(new Date(ele.deadline) <= now){
    //     finalll.push(ele);
    //   }
    // });

    // a better way to do what you did above is 
    const finalll = tasks.filter(ele => new Date(ele.deadline) <= now);

    // *** Important -> this line is triggering the Re-rendering 
    settoshow(finalll);

    // Now "toshow", stores what we need to inject
  }, []);

  // 2. -----------------------------------------> Remove task when Done clicked
  const handleRemove = (indtorem) => {
    // get the original 
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // get the task from the already expired ones 
    const now = new Date();
    const expexp = tasks.filter(e => new Date(e.deadline) <= now);

    // iterate it and remove the one you wanted 
    const updated = [];
    tasks.forEach(ele => {
      if(!(ele.title === expexp[indtorem].title && ele.deadline === expexp[indtorem].deadline)){
        updated.push(ele);
      }
    })

    // updated now contain all the task (expired + non-expired)
    // but does not contain the one you want to remove 
    // save the local storage 
    localStorage.setItem('tasks', JSON.stringify(updated));

    // rerender the updated one 
    loadexp();
  };

  // Load tasks initially + every 10 seconds
  // this is polling 
  // when you check something after a specific time interval

  // React runs the effect after painting the UI
  useEffect(() => {
    loadexp();
    // the timer runs asynchronously on the browser event loop; 
    // each tick calls loadexp independently of React render cycles.
    const interval = setInterval(loadexp, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {toshow.length === 0 && (
        // if you want to render multiple comps then wrap it into react fragment <> ... </>
        <>
          <img src="src/assets/empty-box.png" style={{
            padding: "3vw",
            marginTop: "3vw",
            opacity: "0.75"
          }}></img>

          <p style={{
            textAlign: "center",
            marginTop: "-2vw",
            color: "#7289a9"
          }}> Nothing to address</p>
        </>
      )}

      {toshow.map((task, index) => (
        <div key={index} className="task-card">

          <div className="task-card-header">
            <h4>{task.title}</h4>
            <small>{new Date(task.deadline).toLocaleString()}</small>
          </div>

          <p className="task-note">
            {task.notes || "No additional notes."}
          </p>

          <button
            className="remove-task-btn"
            onClick={() => handleRemove(index)}
          >
            Done
          </button>

        </div>
      ))}
    </>
  );
};

export default Cds;
