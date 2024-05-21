import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import conf from '../../../conf/config';
import { Client, Account, ID } from "appwrite";
import { removeloader } from "../../store/loaderdata"
import { useDispatch } from "react-redux"
const {endpoint,projectid}=conf
const dispatch=useDispatch()
export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(endpoint)
            .setProject(projectid);
        this.account = new Account(this.client);
            
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password,name )
            ;if(userAccount){
               return this.login({email,password})
           
            }
            return userAccount
        } catch (error) {
            toast.warn(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                
                });
                dispatch(removeloader())
        }
    }

    async login({email, password}) {
        try {
            return await  this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            toast.warn(error.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
               
                });
                dispatch(removeloader())
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
    async adddetails(userid){
            try {
               await this.account.updatePrefs({userid})
            } catch (error) {
                
            }
    }
    async updatename(username){
        try {
            await this.account.updateName(username)
        } catch (error) {
            console.log("error")
        }
    }
}

const authService = new AuthService();

export default authService