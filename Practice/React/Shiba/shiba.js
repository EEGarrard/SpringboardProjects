const Shiba = () => {
    return <img src="https://t4.ftcdn.net/jpg/03/12/93/33/240_F_312933371_vMqXBtR0s84b7WHGbUWpgIzVmhrgp8za.jpg" alt="Shiba Inu" />;
}

const Sharpei = () => {
    return <img src='https://www.ukpets.com/oc-content/uploads/breeds/0/7654.png'/>
}

const App = () =>{
    return (
        <div>
            <Shiba/>
            <Shiba/>
            <Shiba/>
            <Shiba/>
            <Sharpei/>
            <Sharpei/>
            
        </div>
    )
}
// Create a root and render the Shiba component
const root = ReactDOM.render(<App/>, document.getElementById('root'));