import React from 'react';
import  './Avatar.css';
import Avatarlist from './Avatarlist'


const Avatar = (props)=>{

    const avatarlistarray = [
        {
            id:1,
            name : "Anshuman",
            nameL : "Mohanty"
        },
        {
            id:2,
            name : "Durga",
            nameL : "Prasad"

        },
        {
            id:3,
            name : "Sibananda",
            nameL : "Achari"

        },
        {
            id:4,
            name : "Chandi",
            nameL : "Mishra"

        }
    ]

    const avatarcard =  avatarlistarray.map((avatarcardlist, i)=>{
        return <Avatarlist id = {avatarlistarray[i].id}
                           name = {avatarlistarray[i].name}
                           nameL = {avatarlistarray[i].nameL}/>
    })
    return (
        <div>
            <h1>Welcome to Lecturenotes</h1>
             {avatarcard}
        <   button>Let's code!</button>
        </div>
    )
       
}

export default Avatar;