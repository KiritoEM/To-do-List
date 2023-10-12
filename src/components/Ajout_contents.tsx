import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClipboardList, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Firestore } from 'firebase/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { doc, setDoc } from "firebase/firestore"; 
import { Link } from 'react-router-dom';

const Ajout_contents = () => {
        const [task, setTask] = useState("");

        function HandleChange(e:any){
              setTask(e.target.value);
        }

      const handleSubmit = async (e:any) => {
        e.preventDefault();
        

        const docRef = await addDoc(collection(db, "task"), {
               name: task,
             });
      };

    return (
      <div className="contain">
        <div className="row" id="row1">
          <div className="col-12">
            <div className="title">
              <h1> + Add Task</h1>
            </div>
          </div>
        </div>

        <div className="row" id="row2">
          <div className="col-12">
            <div className="content">
              <div className="row">
                <div className="col-12">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Task Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Name of Task"
                        onChange={HandleChange}
                        maxLength={23} 
                      />
                    </div>

                    <button className="btn mt-4" type="submit">Add Task</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row3">
          <div className="button d-flex justify-content-end">
            <Link to="/"><button className="btn">Task List   <FontAwesomeIcon icon={faClipboardList} /> </button></Link>
          </div>
        </div>
      </div>
    );
};

export default Ajout_contents;