import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

function Edit(){
  const navigate = useNavigate();
  const { id } = useParams();
  const initialState = {title: '', description: ''};
  const [ data, setData] = useState(initialState);
  const submitHandler = async (e) => {
    e.preventDefault();
    const message = {
      title: e.target.title.value,
      description: e.target.description.value
    };
    try{
    const res = await fetch('http://localhost:8000/task/' + id, {
      method: 'PUT',
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(await res.json());
    navigate("/");
    } catch(e){
      console.log(e)
      alert("something went wrong");
    }
  };
  const changeHandler = (e) => {
    setData(old => ({...old, [e.target.id]: e.target.value}))
  }
  const getData = async (id) => {
    const res = await fetch("http://localhost:8000/task/" + id)
    setData(await res.json());
  };
  useEffect(()=> { getData(id) }, [])
  useEffect(()=> console.log(data), [data])
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" onChange={changeHandler} className="form-control" id="title" value={data.title}/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" onChange={changeHandler} className="form-control" id="description" value={data.description}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Edit;
