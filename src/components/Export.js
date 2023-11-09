

export default function Get_Array_LS()
{
  // const[tasks, setTasks] = useState([]);
  var a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem('tasks'));
  // alert(a)
  
  return a;
}
