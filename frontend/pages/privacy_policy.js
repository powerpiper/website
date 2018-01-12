import 'isomorphic-unfetch'

import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Animate from 'grommet/components/Animate'

import Layout from '../layout'
import Page from '../components/Page'

export default class PrivacyPolicy extends Page {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch(process.env.API_URL + '/api/v1.0/flatpage/Privacy Policy/')
    const json = await res.json()
    return { post: json }
  }

  render () {
    return (
      <Layout {...this.props}>
        <Section full={false} pad='medium' align='center' justify='center'>
          <Animate enter={{ animation: 'slide-up', duration: 1000, delay: 0 }} keep={true} visible={this.visibility}>
            <Heading align='center'>
              {this.props.post.Title} 
            </Heading>
            <Paragraph align='start' size='large'>
              <div dangerouslySetInnerHTML={{ __html: this.props.post.Content }} />
            </Paragraph>
          </Animate>
        </Section>
      </Layout>
    )
  }
}

PrivacyPolicy.defaultProps = {
  title: this.props.post.Title,
  description: this.props.title,
  image: ''
}