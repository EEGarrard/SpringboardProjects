const Bouncer = (props) => {
    let reply;
    if(props.age < 18) {
        reply = "Sorry, kid, you can't come in."
    } else if (props.age<21) {
        reply = "You can come in, but no drinking."
    } else {
        reply = "Come in, you can drink."
    }
return (
    <div>
        <p>
            <b>Bouncer: </b>How old are you?
        </p>
        <p>
            <b>You: </b>I am {props.age} years old
        </p>
        <p>
            <b>Bouncer: </b>{reply}
        </p>
    </div>
)
}