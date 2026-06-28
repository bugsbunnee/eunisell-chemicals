import React from 'react';
import SliderLib, { type Settings } from 'react-slick';

export const Slider = ((SliderLib as unknown as { default: React.ComponentType<Settings & { ref?: React.Ref<unknown> }> }).default ?? SliderLib) as React.ComponentType<
  Settings & { ref?: React.Ref<unknown> }
>;
