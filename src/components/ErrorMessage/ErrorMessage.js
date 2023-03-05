import img from './error.gif';

const ErrorMessage = () => {
    return (
        <>
            <img style={{ display: 'block', width: "250px", height: "250px", objectFit: 'contain', margin: "40px auto 0" }} src={img} alt="Error" />
            <h1 style={{ margin: '10px 830px', }}>Oops, something went wrong</h1>
        </>
    )
}

export default ErrorMessage;