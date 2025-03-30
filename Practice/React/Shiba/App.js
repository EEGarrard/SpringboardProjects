const App = () => (
    <div>
        <Person name="Erin" age={34} />
        <Alert message='BAD FIRE!'/>
        <ToDoList todos= {['walk chicken    s', 'feed chickens', 'eat chickens']} />
        <RandomChoice choices = {['red', 'green', 'yellow']} />
        <Bouncer age={11}/>
        <Bouncer age={19}/>
        <Bouncer age={34}/>
        <Animal name="Leo" species="dog" emoji=":)" isCute/>
        <Animal name="Cleo" species="cat" emoji=">:3"/>
        <RandomNum/>
        <h2>Dogs!</h2>
        <Shiba />
        <Sharpei/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root') )