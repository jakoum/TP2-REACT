import { useEffect, useState } from "react"

import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteItem } from "../actions/itemAction";
import axios from "axios";

function ShoppingList(){
    const [items, setItems] = useState([])
    
    axios.get('/api/items')
            .then(response => {
                
                setItems(response.data);
            });
   
   function deleteItem(id: any){
    axios.delete(`/api/items/${id}`).then(res=>{
        console.log("succes")
    })
   }
   function addItem(item: any){
    axios.post('/api/items',item).then(res=>{
        console.log("succes")
    })
   }
   

        return(
            <Container>
            <Button color="dark" style={{marginBottom:'2rm'}}
                        onClick={() => {
                            const name = prompt('Enter Item');
                            const newItem ={
                                name:name
                            }
                            if(name){
                                addItem(newItem)
                                
                            }
                        }}>
                    Add item
                </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map(({_id, name}:{_id:any, name:any})=>(
                        <CSSTransition key={_id} timeout={500} classNames="fade">
                            <ListGroupItem className='List'>
                                <Button className='remove-btn' color='danger'
                                    onClick={()=>{deleteItem(_id)}}
                                    >
                                    &times;
                                </Button>
                                {name}</ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>    

        </Container>
        )
    }
    
        
    
    export default ShoppingList