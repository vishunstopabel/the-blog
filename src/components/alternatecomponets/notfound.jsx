import img from "../../assets/notfound.svg"
function Noiteams({width="w-full" , hight="h-full" }){
    return<> 
        <div className= "flex justify-center items-center flex-wrap ">
    <img src={img} width={width} height={hight} alt="" />
    <p className="text-gray-700 text-5xl ">No posts found</p>
    </div>
   
    </>
}
export default Noiteams