import { Button as BlueprintButton } from '@blueprintjs/core';

export const Button = ({
  intent = 'success',
  text = 'button text',
  onClick = () => console.log('clicked!'),
}) => {
  return <BlueprintButton intent={intent} text={text} onClick={onClick} />;
};
