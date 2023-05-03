import { Docs, DocsExample } from '@doc-utils';
import React from 'react';
import { Button, CircularProgress } from 'rmwc';

export const ButtonDoc = () => {
  return (
    <>
      <DocsExample label="Default">
        <Button label="Button" />
      </DocsExample>
      <DocsExample label="Icons">
        <>
          <Button label="Icon" icon="favorite" />
          <Button label="Trailing" trailingIcon="keyboard_arrow_right" />
          <Button label="Loading" icon={<CircularProgress />} />
        </>
      </DocsExample>
      <DocsExample label="Variants">
        <>
          <Button label="Raised" raised />
          <Button label="Unelevated" unelevated />
          <Button label="Outlined" outlined />
          <Button label="Dense" dense />
          <Button label="No Ripple" ripple={false} />
        </>
      </DocsExample>
      <DocsExample label="Danger">
        <>
          <Button label="Danger" danger raised />
          <Button label="Danger" danger outlined />
          <Button label="Danger" danger />
        </>
      </DocsExample>
      <DocsExample label="Theming">
        <>
          <Button
            label="With Theme"
            raised
            theme={['secondaryBg', 'onSecondary']}
          />
          {/**
            This example uses "accent" to control the color of the Ripple.
            See the documentation on Ripples.
          */}
          <Button label="With Theme" theme="secondary" />
        </>
      </DocsExample>
      <DocsExample>
        <Button>
          {/** Alternatively pass content as children */}
          As Children
        </Button>
      </DocsExample>
    </>
  );
};
