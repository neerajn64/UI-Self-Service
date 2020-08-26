import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { red } from '@material-ui/core/colors';

import './card.css'
import Input from '@material-ui/core/Input'; 
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import loginImage from '../../utilities/images/login.jpg'
import TextField from '@material-ui/core/TextField';
import MenuAppBar from '../Header/header'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles()

  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')

  const [create,setCreate] = useState(false)
  const [newemail,setNewemail] = useState('')
  const [newpassword,setNewpassword] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [phone,SetPhone] = useState('')


 function setEmail (e) {
   setUser(e.target.value)
 }

 function setPw (e) {
   setPassword(e.target.value)
 }

 const createUser = () => {
   setCreate(true)

 }

 const setNewEmail = (e) =>{
   setNewemail(e.target.value)
 }

 const setNewPw = (e) => {
   setNewpassword(e.target.value)
 }

 const setFname = (e) => {
   setFirstName(e.target.value)
 }

 const setLname = (e) => {
   setLastName(e.target.value)
 }

 const setNumber = (e) => {
   SetPhone(e.target.value)
 }

 const goBack = () => {
  setCreate(false)
 }

  return (
    <div>
      <MenuAppBar/>
      <div>
      <img src={loginImage} alt="Girl in a jacket" style={{width:'1686px',height: '832px'}}></img>
      </div>

    {create === false ? 
    <div>
    <Card className={classes.root} style={{height:'440px',marginTop:'-644px',marginLeft:'672px',position:'absolute'}}>

      <div style={{marginTop:'12px',marginBottom:'20px'}}>
        <text style={{fontFamily: 'sans-serif',fontSize:'40px'}}>Login</text>
      </div>
      <CardHeader/>
      <div style={{marginTop:'-20px'}}>
        <Input 
          type='email'
          name='email'
          placeholder='Email' 
          onChange={e => setEmail(e)} 
        />
        <Input 
          type='password'
          name='password'
          placeholder='Password' 
          style={{marginTop:'20px'}}
          onChange={e => setPw(e)} 
        />
      </div>
      <div style={{marginTop:'30px'}}>
        <Button variant="contained" color="primary">
            Sign In
        </Button>
      </div>
      <div style={{marginTop:'10px',marginLeft:'100px'}}>
        <Link>Forgot password?</Link>

      </div>
      <div style={{marginTop:'50px'}}>
        <text style={{textDecoration:'none' }}>New User? Create an Account.</text>
      </div>
      <div style={{marginTop:'10px',marginBottom:'10px'}}>
        <Button variant="contained" style={{backgroundColor:'#ff8800'}} onClick={createUser}>
            Sign Up
        </Button>
      </div>
      <Link to="/home">Demo Login</Link>

      </Card>
      </div>
      :
      <div>
         <Card className={classes.root} style={{height:'600px',width:'345px',marginTop:'-644px',marginLeft:'672px',position:'absolute'}}>

        <div style={{marginTop:'35px',marginBottom:'20px'}}>
          <text style={{fontFamily: 'sans-serif',fontSize:'30px'}}>Create User</text>
        </div>
        <CardHeader/>
        <div style={{marginTop:'10px'}}>
        <TextField type='First Name' id="outlined-basic" label="First Name" variant="outlined" onChange={e => setFname(e)} />
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField type='Last Name' id="outlined-basic" label="Last Name" variant="outlined" onChange={e => setLname(e)} />
      </div>
      <div style={{marginTop:'10px'}}>
        <TextField type='Phone Number' id="outlined-basic" label="Phone Number" variant="outlined" onChange={e => setNumber(e)} />
      </div>
        <div style={{marginTop:'20px'}}>
           <TextField type='email' id="outlined-basic" label="Email" variant="outlined"  onChange={e => setNewEmail(e)}  />
        </div>
        <div style={{marginTop:'10px'}}>
        <TextField type='password' id="outlined-basic" label="Password" variant="outlined" onChange={e => setNewPw(e)} />
      </div>
     
      <div style={{marginTop:'30px'}}>
        <Button variant="contained" color="primary">
            Create
        </Button>
      </div>
     <div style={{marginTop:'10px'}}>
      <Link onClick={goBack}>Back</Link>
     </div>

      </Card>
      </div>
        
    }
    
      </div>
  );
}
