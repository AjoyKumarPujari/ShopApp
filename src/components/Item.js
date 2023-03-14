import "./Item.css";
function Item(props){

   const itemname = props.name;
    return(
        <div className="nirma">
             <p >{itemname}</p>
            {props.children}
        </div>
     
        
    );
}
export default Item;