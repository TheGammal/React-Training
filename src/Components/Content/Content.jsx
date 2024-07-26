export function Content(props) {
    console.log(props);
    return (
    <>
        <div className="content">
            Welcom From Content Component
            <p>The User Name From Parent [App]: {props.userName}</p>
        </div>
    </>
    )
}