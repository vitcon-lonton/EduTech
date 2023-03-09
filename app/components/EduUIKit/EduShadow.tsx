import React from "react"
import DropShadow from "react-native-drop-shadow";
import { StyleProp, ViewProps, ViewStyle } from "react-native";

type Presets = keyof typeof $presets

export interface EduShadowProps extends ViewProps {
  /**
   * One of the different types of text presets.
   */
  preset?: Presets
}

export function EduShadow(props: EduShadowProps) {
  const { style: $styleOverride, ...rest } = props
  const preset: Presets = $presets[props.preset] ? props.preset : "card_1"
  const $styles = [$presets[preset], $styleOverride]
  return <DropShadow {...rest} style={$styles} />
}

const $baseStyle: StyleProp<ViewStyle> = [
  {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 60,
  }
]

const $presets = {
  card_1: [$baseStyle, {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 60,
  }] as StyleProp<ViewStyle>,

  card_2: [$baseStyle, {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 60,
  }] as StyleProp<ViewStyle>,

  card_3: [$baseStyle, {
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.08,
    shadowRadius: 100,
  }] as StyleProp<ViewStyle>,
}
