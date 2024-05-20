import React, {useEffect, useState} from 'react'
import Postform from '../components/post-form/postForm';
import appwriteService from '../appwrite/services/configuration';
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
console.log(post)
    useEffect(() => {
        if (slug) {
            appwriteService.getpost(slug).then((post) => {
                if (post) {
                    console.log(post)
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
     
     <Postform post={post}/>
    </div>
  ) : null
}

export default EditPost