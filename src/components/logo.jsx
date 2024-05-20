import img from "../../src/assets/logo.png"
function Logo({width="230px"}){
    return(
        <>
        <img src={img} alt="logo" width={width} />
        </>
    )
}
export default Logo