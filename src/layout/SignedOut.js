import React from 'react'
import { Button } from 'semantic-ui-react'

function SignedOut({signIn}) {
    return (
        <div>
            <Button onClick={signIn}  inverted color='orange'>
             Sign In
            </Button>
            <Button inverted color='orange' style={{marginLeft:"0.2em",marginTop:"0.15em"}}>
             Sign Up
            </Button>
        </div>
    )
}

export default SignedOut