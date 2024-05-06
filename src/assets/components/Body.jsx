import "../../design/body.css"
import Button from "./Button"
import buttonSubmit from "./buttonSubmit"

const Body = () => {
    return (
     <main>
    <div className="container">
       <div className="info-container">
       <h1>How did we do?</h1>
       <p>Please let us know how we did with your support request. All feedback is 
         apreciated to help us improve our offering.</p>
        </div>
        <div className="buttons">
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
        <Button text="4" />
        <Button text="5" />
        </div>
        <div className="box-btn">
        <div className="btn-submit">
        <buttonSubmit text="CLAIM YOUR FREE TRIAL" />
            <p className="p-terms">
              SUBMIT{" "}
            </p>
        </div>
        </div>
    </div>

      </main>
      
    )
}

export default Body;