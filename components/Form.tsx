"use client";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  const [note, setNote] = useState("");

  useEffect(()=>{
    if(task.length === 0)setNote('')
  },[task])
  return (
    <div className="md:block hidden">
      <form action="" className="px-6  text-[#8D9CB8]">
        <div className="flex gap-x-5 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13.0001 8.59277V17.3844"
              stroke={`${task.length ? "#007FFF" : "#C6CFDC"}`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.3999 12.9886H8.59985"
              stroke={`${task.length ? "#007FFF" : "#C6CFDC"}`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.6229 1H7.37714C3.45714 1 1 3.7745 1 7.70219V18.2978C1 22.2255 3.44571 25 7.37714 25H18.6229C22.5543 25 25 22.2255 25 18.2978V7.70219C25 3.7745 22.5543 1 18.6229 1Z"
              stroke={`${task.length ? "#007FFF" : "#C6CFDC"}`}
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            className="outline-none"
            onChange={(e) => setTask(e.target.value)}
            placeholder="Tap “Enter” to create task"
          />
        </div>
        {task.length ? (
          <div className="flex gap-x-5">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Plus">
                <path
                  id="Path"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.6229 1H7.37714C3.45714 1 1 3.7745 1 7.70219V18.2978C1 22.2255 3.44571 25 7.37714 25H18.6229C22.5543 25 25 22.2255 25 18.2978V7.70219C25 3.7745 22.5543 1 18.6229 1Z"
                  stroke={`${note.length ? "#007FFF" : "#C6CFDC"}`}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M7 16.6403V18.6667C7 18.8534 7.14665 19 7.33329 19H9.35967C9.44633 19 9.53298 18.9667 9.59297 18.9L16.872 11.6277L14.3723 9.12804L7.09999 16.4004C7.03333 16.467 7 16.547 7 16.6403ZM18.805 9.69463C19.065 9.43466 19.065 9.01472 18.805 8.75476L17.2452 7.19497C16.9853 6.93501 16.5653 6.93501 16.3054 7.19497L15.0855 8.4148L17.5852 10.9145L18.805 9.69463Z"
                  stroke={`${note.length ? "#007FFF" : "#C6CFDC"}`}
                />
              </g>
            </svg>
            <input
              type="text"
              className="outline-none"
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note..."
            />
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Form;
