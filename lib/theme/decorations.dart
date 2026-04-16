import 'package:crypto/theme/color_resources.dart';
import 'package:flutter/material.dart';

class AppContainerDecorationStyles {
  static BoxDecoration ContainerDecorationBanner(Color color) {
    return BoxDecoration(
      color: color,
      borderRadius: BorderRadius.circular(50.0),
    );
  }

  static BoxDecoration ContainerDecorationButton(Color color, Color border) {
    return BoxDecoration(
      color: color,
      border: Border.all(color: border),
      borderRadius: BorderRadius.circular(50.0),
    );
  }
}
