import { Component, Fragment } from 'react'
import Router from 'next/router'

import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import SocialFacebook from 'grommet/components/icons/base/SocialFacebook'
import SocialTwitter from 'grommet/components/icons/base/SocialTwitter'
import SocialGooglePlus from 'grommet/components/icons/base/SocialGooglePlus'
import SocialLinkedIn from 'grommet/components/icons/base/SocialLinkedin'

import Session from '../Session'

export default class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      session: this.props.session
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value.trim(),
      session: this.state.session
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    Session.signin(this.state.email)
      .then(() => {
        Router.push('/auth/check-email')
      })
      .catch(err => {
        // @FIXME Handle error
        console.log(err)
      })
  }

  render() {
    if (this.props.session.user) {
      return <div />
    } else {
      return (
        <Fragment>
          <Label>If you don't have an account yet, one will be created when you sign in.</Label>
          <Columns responsive={true} maxCount={2}>
            <Box>
              <p><a href="/auth/oauth/facebook"><SocialFacebook a11yTitle='Sign In with Facebook' /></a></p>
              <p><a href="/auth/oauth/google"><SocialGooglePlus a11yTitle='Sign In with Google' /></a></p>
              <p><a href="/auth/oauth/twitter"><SocialTwitter a11yTitle='Sign In with Twitter' /></a></p>
              <p><a href="/auth/oauth/linkedin"><SocialLinkedIn a11yTitle='Sign In with LinkedIn' /></a></p>
            </Box>
            <Box>
              <form id="signin" method="post" action="/auth/email/signin" onSubmit={this.handleSubmit}>
                <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
                <Paragraph>
                  <Label htmlFor="email">Email address</Label><br/>
                  <Input name="email" type="text" placeholder="j.smith@example.com" id="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}/>
                </Paragraph>
                <Button id="submitButton" outline color="dark" type="submit">Sign in with email</Button>
              </form>
            </Box>
          </Columns>
        </Fragment>
      )
    }
  }
}