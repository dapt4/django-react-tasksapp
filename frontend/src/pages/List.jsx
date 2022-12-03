import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const List = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("http://localhost:8000/");
    setData(await res.json());
  };
  const deleteTask = async (id) =>{
    const res = await fetch("http://localhost:8000/task/"+id,{
      method: "DELETE",
    });
    console.log(await res.json());
    setData([]);
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <>
      {data &&
        data.map((elm) => (
          <div className="card my-3 mx-3" style={{width: "18rem"}} key={elm.id}>
            <div className="card-body">
              <h5 className="card-title">{elm.title}</h5>
              <p className="card-text">
                {elm.description}
              </p>
              <Link to={`edit/${elm.id}`} className="card-link">
                edit
              </Link>
              <Link onClick={()=>deleteTask(elm.id)} className="card-link">
                delete
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default List;
