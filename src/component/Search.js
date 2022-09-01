import React from 'react'
import {Input,InputGroupText,InputGroup,Form} from 'reactstrap'
import '../styles/style.css'
function Search({searchInput,handleSubmit,changeHandler}) {
  return (
    <Form onSubmit={handleSubmit}>
          <InputGroup>
    <Input 
    value={searchInput}
    onChange={changeHandler}
    bsSize="lg"
    placeholder="search your favourite items..." 
    className='shadowInput'/>
    <InputGroupText className="primary" color="primary">
    <i class="fa-solid fa-magnifying-glass"></i>
    </InputGroupText>
  </InputGroup>
    </Form>
  )
}

export default Search