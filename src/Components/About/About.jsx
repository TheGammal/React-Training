function About(props) {
    console.log(props);
    let [arr1, arr2, arr3] = props.products
    
    console.log(arr2);
    return (
    <>
        <div className="about">
            Welcom From About Component !
            <h2>Data From Parent ..</h2>
            <p>Id: {arr1.id}</p>
            <p>Price: {arr1.price}</p>
            <p>Name: {arr1.name}</p>
            <hr />
            Welcom From AboutA Component !
            <h2>Data From Parent .. Using map ..</h2>
        </div>
    </>
    )
}

export default About

export function AboutA(props) {

    return (
    <>
        <div className="about p-3">
            <p>Id: {props.products.id}</p>
            <p>Price: {props.products.price}</p>
            <p>Name: {props.products.name}</p>
            <button onClick={() => props.Delete(props.products.id)}>Delete</button>
            <button onClick={() => props.Update(props.index)}>Update</button>
        </div>
    </>
    )
}