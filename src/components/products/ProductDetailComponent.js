import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function ProductDetailComponent({ productState, match, srState }) {
    let products = []
    if (match.path === "/products/:id") {
        products = productState.products
    }
    else {
        products = srState.sr
    }
    const id = match.params.id
    let dispalyProduct = products[id - 1]
    //  console.log(dispalyProduct.items)

    return (
        (match.path === "/products/:id") ?
            <div style={{ marginTop: 50 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3} >
                        <div style={{ padding: 30 }}>
                            <span style={{ marginBottom: 50 }}>
                                <Typography variant="h5" align="left"> Product Name</Typography>
                                <Typography variant="h6" align="left">  {dispalyProduct.name}</Typography>
                                <br />
                            </span>
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Product Price</Typography>
                                <Typography variant="h6" align="left"> Rs.{dispalyProduct.price}</Typography>
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <img
                            src={dispalyProduct.img}
                            alt="Product"
                            style={{ width: 500, height: 500 }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div style={{ padding: 30 }}>
                            <span style={{ marginBottom: 50 }}>
                                <Typography variant="h5" align="left"> Product Status</Typography>
                                {(dispalyProduct.quantity >= 0) ? <Typography variant="h6" align="left">Available</Typography> :
                                    <Typography variant="h6" align="left">Unavailable </Typography>}
                            </span>
                            <br />
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Product Quantity</Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.quantity}</Typography>
                            </span>

                        </div>
                    </Grid>

                    <Paper style={{ marginLeft: 60, marginTop: 40, padding: 10, marginRight: 80 }}>
                        <Typography variant="h5" >Details</Typography>

                        <p style={{ textAlign: "justify" }} >{dispalyProduct.discription}</p>
                    </Paper>

                </Grid>


            </div>
            :
            // ................SR..................
            <div style={{ marginTop: 50 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3} >
                        <div style={{ padding: 30 }}>
                            <span style={{ marginBottom: 50 }}>
                                <Typography variant="h5" align="left"> Name</Typography>
                                <Typography variant="h6" align="left">  {dispalyProduct.name}</Typography>
                                <br />
                            </span>
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Designation</Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.designation}</Typography>
                            </span>
                            <br />
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Rating</Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.rating}</Typography>
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <img
                            src={dispalyProduct.img}
                            alt="Product"
                            style={{ width: 500, height: 500 }}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div style={{ padding: 30 }}>
                            <span style={{ marginBottom: 50 }}>
                                <Typography variant="h5" align="left"> Division </Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.division}</Typography>
                            </span>
                            <br />
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Manager</Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.manager}</Typography>
                            </span>
                            <br />
                            <hr />
                            <br />
                            <span>
                                <Typography variant="h5" align="left"> Total Sale</Typography>
                                <Typography variant="h6" align="left"> {dispalyProduct.total_sale}</Typography>
                            </span>

                        </div>
                    </Grid>

                    <Paper style={{ marginLeft: 60, marginTop: 40, padding: 10, marginRight: 80 }}>
                        <Typography variant="h5" >Sale Details</Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Item</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Quantity</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {dispalyProduct.items.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                {item.product}
                                            </TableCell>
                                            <TableCell align="right">{item.date}</TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>

                </Grid>


            </div>

    )
}

const mapStateToProps = state => {
    return {
        productState: state.productReducer,
        srState: state.srReducer

    }
}

export default connect(mapStateToProps)(ProductDetailComponent)
