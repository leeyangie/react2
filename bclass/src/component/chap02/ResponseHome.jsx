import { useNavigate} from "react-router-dom";




const ResponseHome = props => {
    console.log(props);
    const home=props.home;
    return (
        <div className="home">
            <img src={home.src}/>
            <h4>{home.title}</h4>
            <p>{home.rate}</p>
        </div>

    )

};




export default ResponseHome;