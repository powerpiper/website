import Box from 'grommet/components/Box'
import Label from 'grommet/components/Label'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Section from 'grommet/components/Section'

import Page from '../../../components/Page'
import Layout from '../../../layout'

export default class extends Page {
  render() {
    const title = 'Unable to Sign In'

    return (
      <Layout session={this.props.session} title={title}>
        <Section full={true} pad='none' align='center' justify='center'>
          <Box>
            <Heading>Unable to sign in</Heading>
            <Label>If you have signed up using a different service, use that method to sign in, or sign in with email.</Label>
            <Label><a href="/auth/signin" className="grommetux-anchor">Try signing in with your email address or using another service.</a></Label>
          </Box>
          <Heading>Why am I seeing this?</Heading>
          <Paragraph>
            An account associated with your email address may already exist. To verify your identity - and prevent someone from
            trying to hijack your account by signing up to another service with your email address - you need to sign in to this site
            using your email address. Once you are signed in you link accounts so you can use any method to sign in.
          </Paragraph>
        </Section>
      </Layout>
    )
  }
}
