import * as React from "react";
import { Dimension } from "../dependencies/LayoutProvider";
import { StyleProp, ViewStyle } from "react-native";
export interface ScrollViewDefaultProps {
  onScroll: (event: ScrollEvent) => void;
  onSizeChanged: (dimensions: Dimension) => void;
  horizontal: boolean;
  canChangeSize: boolean;
  style?: StyleProp<ViewStyle> | null;
  useWindowScroll: boolean;
}
export interface ScrollEvent {
  nativeEvent: {
    contentOffset: {
      x: number;
      y: number;
    };
    layoutMeasurement?: Dimension;
    contentSize?: Dimension;
  };
}
export default abstract class BaseScrollView<
  P extends ScrollViewDefaultProps = any
> extends React.Component<P, {}> {
  constructor(props: P) {
    super(props);
  }
  public abstract scrollTo(scrollInput: {
    x: number;
    y: number;
    animated: boolean;
  }): void;
}
