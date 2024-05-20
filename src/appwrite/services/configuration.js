
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from '../../../conf/config';
const {endpoint,projectid,databaseid,collectionid,collectionid2,bucketid}=conf
export class Service{
    client = new Client()
    Databases;
    storage;
    constructor(){
       this.client
       .setEndpoint(endpoint)
       .setProject(projectid)
      this.Databases=new Databases(this.client)
      this.storage=new Storage(this.client)
    }
   async creatpost({title,slug,content,featuredimage,userId,status=true,name}){
    try {
        return await this.Databases.createDocument(
           databaseid,collectionid,slug,{
                title,
                content,
                featuredimage,
                status,
                userId,
                name
            }
        )

    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            });
    }

   }
   async updatepost(slug,{title,content,feauthuredimage,userid}){
    try {
        return await this.Databases.updateDocument(
          databaseid,collectionid,slug,{
                title,
                content,
                feauthuredimage,
                userid
                
            }
        )
        
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
    }
   }
   async delectpost(slug){
    try {
        await this.Databases.deleteDocument(
           databaseid,
            collectionid,
            slug)
            return true
        
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
    }

   }
   async getpost(slug){
    try {
      return  await this.Databases.getDocument(
         databaseid,
           collectionid,
            slug)
            
        
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
        return false
    }

   }
   async getPosts(Query){
    try {
        return await this.Databases.listDocuments(
           databaseid,
           collectionid,
           Query
          
          
           

        )
        
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
      
    }
   }
   async uploadfile(file){
    try {
        return await this.storage.createFile(bucketid
        ,ID.unique()
        ,file
            )
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
    }
   }
   async delectfile(fileid){
    try {
        return await this.storage.deleteFile(bucketid,fileid)
    } catch (error) {
        toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          
            })
    }
   }
   previewfile(fileid){
    return this.storage.getFilePreview(bucketid,
        fileid)
    
   }
   addprofile({slug,name,imageId,bio,status,userId}){
        try {
           return this.Databases.createDocument(
            databaseid,collectionid2,slug,{
                name,imageId,userId,
                bio,status
            }
           ) 
        } catch (error) {
            console.log(error)
        }
   }
   updateprofile(slug,{name,imageId,userId,bio,status}){
   try {
    return this.Databases.updateDocument(
        databaseid,collectionid2,slug,{
            name,imageId,userId,
            bio,status
        }
    )
   } catch (error) {
    console.log(error)
   }
   }
   async getuser(slug){
    try {
      return await  this.Databases.getDocument(databaseid,
            collectionid2,slug )
        
           
        
        
    } catch (error) {
        console.log(error)
    }
   }
 async  updatelike(slug,likes){
    try {
     return await this.Databases.updateDocument(
         databaseid,collectionid,slug,{
         likes
         }
     )
    } catch (error) {
     console.log(error)
    }
    }
  async updatecomment(slug,comment){
    try {
     return await this.Databases.updateDocument(
         databaseid,collectionid,slug,{
            comment
         }
     )
    } catch (error) {
     console.log(error)
    }
    }
 async   updateliked(slug,liked){
        try {
            return await this.Databases.updateDocument(
                databaseid,collectionid2,slug,{
                    liked
                }
            )
           } catch (error) {
            console.log(error)
           }
    }
   async updatesaved(slug,saved){
        try {
            return  await this.Databases.updateDocument(
                databaseid,collectionid2,slug,{
                    saved
                }
            )
           } catch (error) {
            console.log(error)
           }
    }
    async  updatefollowers(slug,follower){
        try {
            return await this.Databases.updateDocument(
                databaseid,collectionid2,slug,{
                    follower
                }
            )
           } catch (error) {
            console.log(error)
           }
    }
async   updatefolloing(slug,following){
        try {
            return await this.Databases.updateDocument(
                databaseid,collectionid2,slug,{
                    following
                }
            )
           } catch (error) {
            console.log(error)
           }
    }
  async  getallusers(Query){
        try {
            return await this.Databases.listDocuments(
                databaseid,
                collectionid2,
                Query
               
               
                
     
             )
        } catch (error) {
            console.log(error)
        }
    }
}
const appwriteService=new Service
export default appwriteService