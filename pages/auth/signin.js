import Router from 'next/router'
import cookie from 'react-cookies'
import { Component } from 'react'

import Section from 'grommet/components/Section'
import Box from 'grommet/components/Box'

import Layout from '../../layout'
import Session from '../../components/Session'
import Signin from '../../components/Signin'

class SignIn extends Component {
  static async getInitialProps({ req, res, query }) {
    const session = await Session.getSession({ force: true, req: req })
    if (session.user && req) {
      res.redirect('/auth/callback')
    } else {
      Router.push('/auth/callback')
    }

    if (query.redirect && res) {
      res.cookie('redirect_url', query.redirect)
    } else {
      cookie.save('redirect_url', query.redirect, { path: '/' })
    }

    return {
      session: session
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      session: this.props.session
    }
  }

  async componentDidMount() {
    this.setState({
      session: await Session.getSession({ force: true })
    })
  }

  render() {
    return (
      <Layout session={this.state.session} title={this.props.title} description={this.props.description} image={this.props.image}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Box>
            <Signin session={this.state.session} />
          </Box>
        </Section>
      </Layout>
    )
  }
}

SignIn.defaultProps = {
  title: 'Sign In',
  description: '',
  image: '',
  menu: false
}

export default SignIn
