import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='About this blog' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
      This blog is about the research I'm doing to build in the Philippines. I'm a software engineer, but if I want to build in the Philippines, I need to learn a lot of stuff.
      </Text>
    </Card>
  </Section>
)

export default Commitment
