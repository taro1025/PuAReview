import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { postRegistrations } from '../../apis/registrations';


const FormWrapper = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

const TextFieldWrapper = styled.div`
  margin-top: 15px;
`

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;
export default function Registration(
  props
) {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    postRegistrations({
      email: email,
      password: password
    }, props)

      event.preventDefault()
  }


    return (
        <div>
           <p>新規登録</p>
           <form>

           <FormWrapper>
           <TextFieldWrapper>
           <TextField
             id="standard-search"
             label="Email"
             name="email"
             value={email}
             onChange={event => setEmail(event.target.value)}
           />
           </TextFieldWrapper>
           <TextFieldWrapper>
           <TextField
             id="standard-password-input"
             label="Password"
             type="password"
             autoComplete="current-password"
             name="password"
             value={password}
             onChange={event => setPassword(event.target.value)}
           />
           </TextFieldWrapper>
           <ButtonWrapper>
             <Button variant="contained" color="primary" type="submit"
             onClick={handleSubmit}>
               registor
             </Button>

           </ButtonWrapper>
           </FormWrapper>

         </form>
        </div>
    )
}
