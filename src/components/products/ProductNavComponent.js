import React, { Fragment , useState } from "react";
import { connect } from 'react-redux'
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import {addProducts} from '../../actions/productAction'

function ProductNavComponent({addProduct}) {
    const [product, setProduct] = useState({name:'', price:'', quantity:0 , img:'', discription:''})

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitForm =(event)=>{
        event.preventDefault();
        addProduct(product);
        alert(`product added successfully`)
        setProduct({name:'' , price:0, quantity:0, img:'' , discription:''})
    }

    const modalBody = (
        <div style={{backgroundColor:"white" , width: 500, height: 400, marginLeft: 200, marginTop: 100,
            color: "whitesmoke" , padding:50}}>
        <form autoComplete="off" onSubmit={(event)=>submitForm(event)} >
            <TextField id="outlined-number" label="Name" type="text" 
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
            color="secondary"
            autoFocus
            required
            style={{marginBottom:20 , marginRight:20}}
            onChange={e=>setProduct({...product , name:e.target.value})}
            />

            <TextField id="outlined-number" label="Price" type="number" 
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
            color="secondary"
            required
            style={{marginBottom:20 , marginRight:20}}
            onChange={e=>setProduct({...product , price:e.target.value})}
            />

            <TextField id="outlined-number" label="Quantity" type="number" 
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
            color="secondary"
            required
            style={{marginBottom:20 , marginRight:20}}
            onChange={e=>setProduct({...product , quantity:e.target.value})}
            />

            <TextField id="outlined-number" label="Img Url" type="text" 
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
            color="secondary"
            required
            style={{marginBottom:20 , marginRight:20}}            
            onChange={e=>setProduct({...product , img:e.target.value})}
            />

            <TextField id="outlined-number" label="Description" type="text" 
            InputLabelProps={{
            shrink: true,
            }}
            variant="outlined"
            color="secondary"
            required
            style={{marginBottom:20 , marginRight:20}}
            onChange={e=>setProduct({...product , discription:e.target.value})}
            />

            <br></br>

            <Button type="submit" variant="contained" color="secondary" style={{width:400}} >Sumbit</Button>
        </form>
        </div>
    );

    return (
        <Fragment>
            <Paper
                style={{
                    width: 600,
                    marginLeft: 350,
                    backgroundColor: "#009688",
                    marginBottom: 40,
                }}
            >
                <Button style={{ color: "white" }} onClick={handleOpen}>Add</Button>
                <Button style={{ color: "white" }}>Sort</Button>
                <Button style={{ color: "white" }}>Filter</Button>
                <Button style={{ color: "white" }}>Clear Filter</Button>
            </Paper>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"                
            >
                {modalBody}
            </Modal>
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch , product) =>{
    return{
        addProduct:(product)=> {dispatch(addProducts(product))}
    }
}

export default connect(null ,mapDispatchToProps )(ProductNavComponent);
