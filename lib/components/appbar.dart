import 'package:crypto/theme/color_resources.dart';
import 'package:crypto/theme/images.dart';
import 'package:crypto/theme/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class AppbarWidget extends StatelessWidget {
  final GlobalKey<ScaffoldState> scaffoldKey;
  const AppbarWidget({super.key, required this.scaffoldKey});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: (BoxDecoration(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(6.0),
          bottomRight: Radius.circular(6.0),
        ),
        color: ColorResources.colorPrimary,
      )),
      width: MediaQuery.of(context).size.width,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 15, bottom: 5),
            child: Row(
              children: [
                InkWell(
                  onTap: () {
                    scaffoldKey.currentState?.openDrawer();
                  },
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Icon(Icons.menu, color: ColorResources.colorWhite),
                  ),
                ),
                Image.asset(ImagesResources.logo, height: 20),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              children: [
                Image.asset(ImagesResources.refer, height: 30, width: 50),
                SizedBox(width: 15),
                Row(
                  children: [
                    Icon(Icons.language, color: ColorResources.colorWhite),
                    Text(
                      "En",

                      style: AppTextStyles.ralewayTextStylew700(
                        AppTextStyles.size11,
                        ColorResources.colorWhite,
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
