export default function Container(props){
    return(
        <>
        <div className="container flexcenter">
            {props.children}
        </div>
        </>
    );
}