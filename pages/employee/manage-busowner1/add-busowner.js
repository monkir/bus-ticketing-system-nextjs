import MyLayout from "../../component/layout"
import Header from "../../component/header"
import Link from "next/link"

export default function mngCustomers({data}) {
  return (
    <>
    
    <MyLayout title="Manage busowner"/>
    <div>
      <Link href={"#"}>Index</Link>
      <form>
        <label for="id">Name: </label><input type="text" id="id"/><br/>
        <label for="id">Email: </label><input type="text" id="id"/><br/>
        <label for="id">Phone: </label><input type="text" id="id"/><br/>
        <label for="id">Address: </label><input type="text" id="id"/><br/>
        <label for="id">Title: </label><input type="text" id="id"/><br/>
        <label htmlFor="image">Upload Image</label><input type="file" name="image" id="" />
        <input type="submit"/><br/>
        <input type="reset"/><br/>
      </form>
    </div>
    </>
  )
}

