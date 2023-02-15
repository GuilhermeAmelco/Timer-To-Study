import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import StopWatch from '../components/Stopwatch';
import { ITask } from '../types/task';
import style from './App.module.scss';

function App() {

  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) {

    setSelected(taskSelected);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })))
  }

  function finishItem() {

    if(selected) {
      setSelected(undefined)
      setTasks(previousTasks => previousTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form 
        setTasks={setTasks}
      />
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <StopWatch 
        selected={selected} 
        finishItem={finishItem}
      />
    </div>
  );
}

export default App;