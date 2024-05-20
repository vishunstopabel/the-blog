import React, {useEffect, useState} from 'react'
import Profileform from "../components/profileform/profileform"
import appwriteService from '../appwrite/services/configuration';
import { useNavigate,  useParams } from 'react-router-dom';

function Editprofile() {
    const [user, setuser] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getuser(slug).then((user) => {
                if (user) {
                    
                    setuser(user)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return user ? (
    <div className='py-8'>
     
     <Profileform userdata={user}/>
    </div>
  ) : null
}

export default Editprofile