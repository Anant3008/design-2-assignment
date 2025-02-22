// write the component code here
import Button from "./button"
function Productcard() {
  return (
    <div>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1661964088064-dd92eaaa7dcf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D" height="220px" width="220px"/>
      </div>

      <h1>Tree Decoration</h1>
      <h3>₹699</h3>
      <Button/>
    </div>
  );
}

export default Productcard