export default function CustomerDetails(props) {
    const customerdata = props.customer;
    return (
        <div className="container">
            <h3>CustomerDetails</h3>
            <hr />
            <p>ID:{customerdata.id}</p>
            <p>FirstName:{customerdata.firstName}</p>
            <p>LastName:{customerdata.lastName}</p>
            <p>Email:{customerdata.email}</p>
        </div>
    )
}