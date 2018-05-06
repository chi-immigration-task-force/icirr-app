/*
 * Wraps a given onClick callback to run only if the attached element is not disabled
 */
export function ifClickable(onClick) {
  if (!onClick) {
    return null;
  }

  return function(event) {
    const currentTarget = event.currentTarget;

    if (currentTarget) {
      const isDisabled = currentTarget.disabled ||
        currentTarget.hasAttribute('disabled');

      if (isDisabled) {
        event.preventDefault();
        return;
      }
    }
    onClick(event);
  };
}
