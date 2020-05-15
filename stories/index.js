import React from 'react';
import {storiesOf} from '@storybook/react';
import Button from '@sgabskit/button';
import '@sgabskit/theme';

storiesOf('Button', module)
  .add('Default', () => (
    <>
      <div style={{padding: '10px 30px'}}>
        <h3>Button styles</h3>
        <Button primary>Primary</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button>Regular</Button>
      </div>
      <div style={{padding: '10px 30px'}}>
        <h3>Button sizes</h3>
        <Button primary compact>Primary</Button>
        <Button secondary compact>Secondary</Button>
        <Button compact>Regular</Button>

        <p>&nbsp;</p>

        <Button className="large" primary compact>Primary</Button>
        <Button className="large" secondary compact>Secondary</Button>
        <Button className="large" compact>Regular</Button>
      </div>
      <div style={{padding: '10px 30px'}}>
        <h3>Loading</h3>
        <Button primary loading>Primary</Button>
        <Button secondary loading>Secondary</Button>
        <Button loading>Regular</Button>
      </div>
      <div style={{padding: '10px 30px'}}>
        <h3>Disabled</h3>
        <Button primary disabled>Primary</Button>
        <Button secondary disabled>Secondary</Button>
        <Button disabled>Regular</Button>
      </div>
    </>
  ))
;
