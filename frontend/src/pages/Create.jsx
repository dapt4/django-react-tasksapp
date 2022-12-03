import { useNavigate } from "react-router-dom";

function Create(){
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const message = {
      title: e.target.title.value,
      description: e.target.description.value
    };
    try{
    const res = await fetch('http://localhost:8000', {
      method: 'POST',
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
  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" id="description"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Create;
