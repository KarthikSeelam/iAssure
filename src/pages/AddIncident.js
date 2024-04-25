import React from 'react'
import Form from 'react-bootstrap/Form';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import TableCell from '@mui/material/TableCell';



const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



const AddIncident = () => {

    return (
        <div>
            <div className='right-cont'>
                <div className='card'>

                    <div className='m-4'>
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                        <label for="floatingTextarea">Enter your prompt</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>GO</Button>
                                </div>
                            </div>
                        </div>
                        {/* Case details */}
                        <div className='mt-4'>
                            {/* <strong>Case summary</strong> */}
                            <h5 className='sub_head'>Case Details</h5>
                            <div className='mt-4'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Source <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Source</option>
                                                <option value="1">Phone call</option>
                                                <option value="2">Mail</option>
                                                <option value="3">Production line</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Product name <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Product</option>
                                                <option value="1">Product 1</option>
                                                <option value="2">Product 2</option>
                                                <option value="3">Product 3</option>
                                                <option value="4">Product 4</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Issue type <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Issue</option>
                                                <option value="issue">Audit</option>
                                                <option value="issue" >Qulaity</option>
                                                <option value="issue" >Security</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>


                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Issue Area <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Issue Area</option>
                                                <option value="1">Footwear</option>
                                                <option value="2">Apparel</option>
                                                <option value="3">Leather Boots</option>
                                                <option value="4">Production Components and Materials</option>
                                                <option value="5">Work Inprogress</option>
                                                <option value="6">Finished Product waiting for distribution</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    {/* <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Product Code</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Product Code " />
                                        </Form.Group>
                                    </div> */}
                                     <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Risk type <span className='star'>*</span></Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Risk type</option>
                                                <option value="1">Risk type 1</option>
                                                <option value="2">Risk type 2</option>
                                                <option value="3">Risk type 3</option>
                                                <option value="4">Risk type 4</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Supplier Name</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select the Supplier</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>


                                </div>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Severity</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Severity</option>
                                                <option value="1">Critical</option>
                                                <option value="2">High</option>
                                                <option value="3">Moderate</option>
                                                <option value="4">Low</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                   
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Product Code</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Product Code " />
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Due date</Form.Label>
                                            <TextField className='input_border date-bg' type="date" variant="outlined" style={{ border: '1px solid #ddd', borderRadius: '4px', padding: '0px 12px', background: '#fff', width: '100%' }} />
                                        </Form.Group>
                                    </div>

                                </div>

                                <div className='row'>

                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>Assigned To/Person</Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select Person</option>
                                                <option value="1">Person 1</option>
                                                <option value="2">Person 2</option>
                                                <option value="3">Person 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color'>CC </Form.Label>
                                            <Form.Select className='input_border' aria-label="Default select example">
                                                <option>Please select CC</option>
                                                <option value="1">CC 1</option>
                                                <option value="2">CC 2</option>
                                                <option value="3">CC 3</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-4'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='text_color '>Batch number</Form.Label>
                                            <Form.Control className='input_border' type="text" placeholder="Enter Batch number " />
                                        </Form.Group>
                                    </div>



                                </div>
                                <div className='row'>
                                <div className='col-md-6'>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='text_color'>Case Description</Form.Label>
                                            <Form.Control className='input_border' as="textarea" rows={3} placeholder='Write the description' />
                                        </Form.Group>
                                    </div>

                                    <div className='col-md-12'>
                                        <label className='text_color'>Upload Attachment</label>
                                        <Button
                                            fullWidth
                                            component="label"
                                            role={undefined}
                                            variant="secondary"
                                            tabIndex={-1}
                                            style={{ backgroundColor: "rgb(241,240,239)", padding: "15px", textTransform: "capitalize", marginTop: "10px" }}
                                        // startIcon={<CloudUploadIcon />}
                                        >
                                            Drag and drop your files or  <span style={{ textDecoration: "underline", marginLeft: "5px" }}>Browse</span>
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className='m-3 '>
                        <Button variant="contained" style={{ backgroundColor: "#7b39f1" }}>Create Incident/Case</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddIncident