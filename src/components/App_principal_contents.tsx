import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Firestore } from 'firebase/firestore';
import { doc,addDoc,collection,getDocs ,deleteDoc} from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link } from 'react-router-dom';

type Task = {
  id: string; 
   name: string;
};

type TaskList= Task[];

const App_principal_contents =   () => {

  const [tasks, setTasks] = useState<TaskList>([]);

useEffect(() => {

    const fetchTasks = async () => {
      try {
        const taskCollection = collection(db, 'task'); // Remplacez 'tasks' par le nom de votre collection Firestore
        const querySnapshot = await getDocs(taskCollection);

        const taskList: Task[] = [];

        querySnapshot.forEach((doc) => {
          taskList.push({
            id: doc.id,
            name: doc.data().name, // Assurez-vous que le champ correct est utilisé
          });
        });

        setTasks(taskList);
        console.log(taskList)
        // alert(tal)
      } catch (error) {
        console.error('Erreur lors de la récupération des tâches :', error);
      }
    };

    fetchTasks();
  }, []);

  const deleletTask= async  (taskId: string) => {
    try {
      const taskDocRef = doc(db, 'task', taskId);
      await deleteDoc(taskDocRef);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error('Erreur lors de la suppression de la tâche :', error);
    }
  }


  return (
    <div className="contain">
      <div className="row" id="row1">
        <div className="col-12">
          <div className="title">
            <h1>
              {" "}
              <FontAwesomeIcon icon={faClipboardList} /> Task List
            </h1>
          </div>
        </div>
      </div>

      <div className="row" id="row2">
        <div className="col-12">
          <div className="content">
            <div className="row">
              {tasks.map((task) => (
                <div key={task.id} className="col-12">
                  <div className="content_list d-flex">
                    <div className="part1 d-flex justify-content-start w-100">
                      <div className="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                      </div>

                      <div className="title">
                        <h1>{task.name}</h1>
                      </div>
                    </div>

                    <div className="gadget d-flex">
                      <button className="btn"  onClick={() => deleletTask(task.id)}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </button>
                      <button className="btn" onClick={() => deleletTask(task.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>

                  <div className="lig"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="row3">
        <div className="button d-flex justify-content-end">
          <Link to="/ajout"><button className="btn">Add Task+</button></Link>
        </div>
      </div>
    </div>
  );
};

export default App_principal_contents;