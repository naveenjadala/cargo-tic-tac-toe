import React, {FC, ReactNode} from 'react';
import {render} from '@testing-library/react-native';

import SafeAreaViewWrapper from '../helper/SafeAreaViewWrapper';

interface AllTheProvidersProps {
  children: ReactNode;
}

/**
 * Renders all the providers.
 *
 * @param {ReactNode} children - The children components to be rendered.
 * @return {ReactElement} The rendered component.
 */
const AllTheProviders: FC<AllTheProvidersProps> = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <SafeAreaViewWrapper>{children}</SafeAreaViewWrapper>;
};

/**
 * Render the UI with custom options.
 *
 * @param {any} ui - The UI to render.
 * @param {object} options - Additional options for rendering.
 * @return {any} The result of rendering.
 */
const customRender = (ui: any, options?: object): any =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
