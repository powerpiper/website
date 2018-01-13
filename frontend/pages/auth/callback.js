import { Fragment } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import cookie from 'react-cookies'

import Spinning from 'grommet/components/icons/Spinning'

import Page from '../../components/Page'
import Session from '../../components/Session'

export default class CallBack extends Page {
  static async getInitialProps({ req }) {
    const session = await Session.getSession({ force: true, req: req })
    let redirectTo = '/dashboard/'
    if (session.user) {
      if (req) {
        // Read cookie redirect path - if one is set
        if (req.cookies && req.cookies['redirect_url'] && typeof req.cookies['redirect_url'] !== 'undefined') {
          redirectTo = req.cookies['redirect_url']
        }
      } else {
        // Read cookie redirect path and remove cookie on client - if one is set
        redirectTo = cookie.load('redirect_url') || redirectTo
      }

      // Allow relative paths only - strip protocol/host/port if they exist
      redirectTo = redirectTo.replace(/^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, '')
    }

    return {
      session: session,
      redirectTo: redirectTo
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      session: this.props.session
    }
  }

  async componentDidMount() {
    const session = await Session.getSession({force: true})
    this.setState({
      session: session
    })

    if (session.user) {
      Router.push(this.props.redirectTo)
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta httpEquiv="refresh" content={'1; url='+this.props.redirectTo} />
        </Head>
        <Spinning size='large' />
      </Fragment>
    )
  }
}
