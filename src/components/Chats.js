import React, { useEffect, useState, useContext } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine'
import axios from 'axios';

// Components
import Navbar from './Navbar';

// Context
import { AuthContext } from '../context/AuthContextProvider';

// Styles
import styles from './Chats.module.css';

const Chats = () => {

    const [loading, setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if(!user){
            history.push('/');
            return;
        }

        axios.get("https://api.chatengine.io/users/me", {
            headers : {
                "project-id" : "b8cc27f2-721f-4f8f-b2b0-29a6c4ecae58",
                "user-name" : user.email,
                "user-secret" : user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name);
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers : {
                            "private-key" : "37315c11-ef8d-484a-a772-a0768a5a5f35"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(err => console.log("The Error is:", err))
                })
        })

    },[user, history])

    const getFile = async (url) => {
        const response = await fetch(url);
        // await console.log(response)
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        history.push('/');
    }

    return (
        <div >
            <Navbar logoutHandler={logoutHandler} />
            {
                !user || loading ? 
                <p className={styles.unload}>Loading...</p>
                :
                <ChatEngine
                    height="calc(100vh - 60px)"
                    projectID="b8cc27f2-721f-4f8f-b2b0-29a6c4ecae58"
                    userName={user.email}
                    userSecret={user.uid}
                   
                />
            }
            
        </div>
    );
};

export default Chats;