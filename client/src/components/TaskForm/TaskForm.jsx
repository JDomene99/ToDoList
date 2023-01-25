import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { createTask, getTask, editTask } from "../../api/taskFecth";
import { useNavigate } from "react-router-dom";
import Switch from '@mui/material/Switch';

function TaskForm() {
  const navigate = useNavigate();

  //parametros de la url
  const params = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  
  useEffect(() => {
    if (params.id) {
      const fetchData = async () => {
        const response = await getTask(params.id);
        console.log(response);
        setTask({
          title: response.title,
          description: response.description,
          done: response.done
        });
      };
      fetchData();
    }
  }, []);

  return (
    <>
      <h1>{params.id ? "Edit Task" : "New Task"}</h1>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          try {
            let response;
            if (params.id) {
              response = await editTask(params.id, values);
            } else {
              response = await createTask(values);
            }

            console.log(response);
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={values.title}
            />

            <label>description</label>
            <textarea
              rows="3"
              name="description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            
               <Switch name="done" checked={values.done ? true : false} inputProps={{ 'aria-label': 'Switch demo'}} onChange={handleChange}/> 

            <button type="submit">{params.id ? "Edit" : "New"} </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TaskForm;
